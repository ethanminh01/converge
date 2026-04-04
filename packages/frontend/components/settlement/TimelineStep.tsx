interface TimelineStepProps {
  icon?: string;
  title: string;
  subtitle?: string;
  status: "complete" | "active" | "pending";
  badge?: string;
}

export function TimelineStep({
  icon,
  title,
  subtitle,
  status,
  badge,
}: TimelineStepProps) {
  return (
    <div
      className={`flex gap-8 relative ${
        status === "pending" ? "opacity-30" : ""
      }`}
    >
      {/* Step dot */}
      <div
        className={`w-7 h-7 flex items-center justify-center z-10 flex-shrink-0 rounded-lg ${
          status === "complete"
            ? "bg-secondary"
            : status === "active"
              ? "border border-secondary bg-surface-container-lowest"
              : "border border-outline-variant/30 bg-surface-container-low"
        }`}
      >
        {status === "complete" && (
          <span
            className="material-symbols-outlined text-white text-[14px]"
            style={{ fontVariationSettings: "'FILL' 1" }}
          >
            {icon ?? "check"}
          </span>
        )}
        {status === "active" && (
          <div className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
        )}
      </div>

      {/* Content */}
      <div className="flex flex-col pb-1">
        <div className="flex items-center gap-3 flex-wrap">
          <span
            className={`text-[12px] font-bold uppercase tracking-wider ${
              status === "active" ? "text-secondary" : "text-primary"
            }`}
          >
            {title}
          </span>
          {badge && (
            <span className="bg-sky rounded px-2 py-0.5 text-[11px] text-secondary font-medium">
              {badge}
            </span>
          )}
        </div>
        {subtitle && (
          <span className="text-[11px] text-on-surface-variant mt-1 leading-relaxed">
            {subtitle}
          </span>
        )}
      </div>
    </div>
  );
}
