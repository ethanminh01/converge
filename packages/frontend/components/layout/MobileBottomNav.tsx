"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const tabs = [
  { href: "/", icon: "account_balance", label: "Home" },
  { href: "/swap", icon: "swap_vert", label: "Swap" },
  { href: "/dashboard", icon: "grid_view", label: "Dashboard" },
  { href: "/settlement", icon: "verified_user", label: "Settlement" },
];

export function MobileBottomNav() {
  const pathname = usePathname();

  return (
    <nav className="md:hidden fixed bottom-0 left-0 right-0 z-[60] bg-white border-t border-outline-variant/20 shadow-[0_-4px_20px_rgba(25,28,29,0.08)] safe-area-bottom">
      <div className="flex items-center justify-around h-16">
        {tabs.map((tab) => {
          const isActive =
            tab.href === "/" ? pathname === "/" : pathname.startsWith(tab.href);
          return (
            <Link
              key={tab.label}
              href={tab.href}
              className={`relative flex flex-col items-center justify-center gap-0.5 flex-1 h-full transition-colors ${
                isActive
                  ? "text-secondary"
                  : "text-on-surface-variant/60 active:text-on-surface"
              }`}
            >
              {/* Active indicator bar */}
              <span
                className={`absolute top-0 left-1/4 right-1/4 h-0.5 rounded-full transition-all duration-200 ${
                  isActive
                    ? "bg-secondary opacity-100"
                    : "opacity-0"
                }`}
              />

              <span
                className="material-symbols-outlined text-[22px]"
                style={
                  isActive
                    ? { fontVariationSettings: "'FILL' 1" }
                    : undefined
                }
              >
                {tab.icon}
              </span>

              <span
                className={`text-[10px] tracking-wide leading-none ${
                  isActive ? "font-bold" : "font-medium"
                }`}
              >
                {tab.label}
              </span>
            </Link>
          );
        })}
      </div>
      {/* Safe area spacer for notched phones */}
      <div className="h-[env(safe-area-inset-bottom,0px)] bg-white" />
    </nav>
  );
}
