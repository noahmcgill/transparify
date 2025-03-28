import { type SingleDataPointConfig } from "@/store/types";
import { BlockContainer } from "./block-container";

interface SingleDataPointBlockProps {
  pageId: string;
  blockKey: string;
  config: SingleDataPointConfig;
}

export const SingleDataPointBlock: React.FC<SingleDataPointBlockProps> = ({
  blockKey,
  config,
}) => {
  return (
    <BlockContainer blockKey={blockKey}>
      <div className="text-sm font-medium text-zinc-700">{config.title}</div>
      <div className="w-full">
        <div className="whitespace-nowrap text-4xl font-bold">
          {config.data}
        </div>
      </div>
      {config.description && (
        <div className="text-xs font-normal text-zinc-600">
          {config.description}
        </div>
      )}
    </BlockContainer>
  );
};
