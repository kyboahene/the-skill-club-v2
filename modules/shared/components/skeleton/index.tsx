import { cn } from "../../../../lib/utils";

function Skeleton({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn("animate-pulse rounded-md bg-[#f0f0f0]", className)}
      {...props}
    />
  );
}

export { Skeleton };
