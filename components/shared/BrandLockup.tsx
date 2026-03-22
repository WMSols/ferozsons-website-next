import { cn } from "@/lib/utils";

interface BrandLockupProps {
  variant?: "light" | "dark";
  size?: "sm" | "lg";
  className?: string;
}

export default function BrandLockup({
  variant = "light",
  size = "sm",
  className,
}: BrandLockupProps) {
  const textColor = variant === "light" ? "text-white" : "text-foreground";
  const borderColor =
    variant === "light" ? "border-white" : "border-foreground";

  return (
    <div className={cn("flex items-center gap-3", className)}>
      <div
        className={cn(
          "flex shrink-0 items-center justify-center rounded-full border-2 font-serif italic",
          borderColor,
          textColor,
          size === "lg" ? "h-16 w-16 text-3xl" : "h-12 w-12 text-xl",
        )}
      >
        f
      </div>
      <div
        className={cn(
          "flex flex-col font-sans font-bold uppercase leading-tight tracking-wider",
          textColor,
          size === "lg" ? "text-xs" : "text-[10px]",
        )}
      >
        <span>People</span>
        <span>Trust</span>
        <span>Us</span>
      </div>
    </div>
  );
}
