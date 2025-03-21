"use client";

import { gridStateAtom, layoutsAtom } from "@/store";
import { useAtom, useAtomValue } from "jotai";
import { type ComponentClass, useEffect, useMemo, useRef } from "react";
import {
  type Layout,
  type Layouts,
  Responsive,
  type ResponsiveProps,
  WidthProvider,
  type WidthProviderProps,
} from "react-grid-layout";
import { useHydrateAtoms } from "jotai/utils";
import { EditableSingleDataPointBlock } from "./blocks/editable/editable-single-data-point-block";
import { CheckConfig } from "@/lib/utils/store";
import { type JsonObject } from "@prisma/client/runtime/library";
import { type GridState } from "@/store/types";

type ResponsiveGridType = ComponentClass<
  ResponsiveProps & WidthProviderProps,
  unknown
>;

interface EditableGridStateProps {
  pageId: string;
  initialGridState: JsonObject;
}

export const EditableGrid: React.FC<EditableGridStateProps> = ({
  pageId,
  initialGridState,
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const initialGridStateCast = initialGridState as unknown as GridState;

  useHydrateAtoms([[gridStateAtom, initialGridStateCast]]);

  const gridState = useAtomValue(gridStateAtom);
  const [layouts, setLayouts] = useAtom(layoutsAtom);
  const ResponsiveReactGridLayout = useMemo<ResponsiveGridType>(
    () => WidthProvider(Responsive),
    [],
  );

  const onLayoutChange = (currentLayout: Layout[], allLayouts: Layouts) => {
    setLayouts(allLayouts);
  };

  useEffect(() => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  }, [layouts]);

  return (
    <div>
      <ResponsiveReactGridLayout
        className="m-[-40px] animate-fadeIn-1.5s"
        breakpoints={{ lg: 768, md: 0 }}
        cols={{ lg: 4, md: 1 }}
        rowHeight={175}
        layouts={layouts}
        margin={[40, 40]}
        onLayoutChange={onLayoutChange}
        draggableCancel=".no-drag"
      >
        {gridState.widgets.map((widget) => {
          if (CheckConfig.isSingleDataPointConfig(widget.config)) {
            return (
              <div key={widget.key}>
                <EditableSingleDataPointBlock
                  config={widget.config}
                  blockKey={widget.key}
                  pageId={pageId}
                />
              </div>
            );
          }

          return (
            <div
              key={widget.key}
              className="flex cursor-grab items-center justify-center rounded-3xl bg-white shadow-[0_2px_4px_rgba(0,0,0,.04)] active:cursor-grabbing"
            >
              {widget.key}
            </div>
          );
        })}
      </ResponsiveReactGridLayout>
      <div id="anchor" ref={ref}></div>
    </div>
  );
};

