type PlaceholderProps = {
  label?: string;
  className?: string;
  rounded?: string;
};

/**
 * Blank image slot. Swap for a real <Image /> when assets are available.
 */
export default function Placeholder({
  label = "image",
  className = "",
  rounded = "rounded-xl",
}: PlaceholderProps) {
  return (
    <div
      className={`flex items-center justify-center border border-dashed border-slate-300 bg-slate-100 text-xs font-medium uppercase tracking-wide text-slate-400 ${rounded} ${className}`}
      role="img"
      aria-label={`${label} placeholder`}
    >
      {label}
    </div>
  );
}
