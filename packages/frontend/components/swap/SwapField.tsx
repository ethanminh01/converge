"use client";

import Image from "next/image";

interface SwapFieldProps {
  label: string;
  balance: string;
  amount: string;
  usdValue?: string;
  tokenName: string;
  tokenIcon: string;
  badgeText?: string;
}

export function SwapField({
  label,
  balance,
  amount,
  usdValue,
  tokenName,
  tokenIcon,
  badgeText,
}: SwapFieldProps) {
  return (
    <div className="bg-surface-container-low rounded-lg p-4 focus-within:ring-1 focus-within:ring-secondary/30 transition-shadow">
      {/* Top row: label + balance */}
      <div className="flex justify-between items-center mb-3">
        <label className="text-[11px] font-medium uppercase tracking-wider text-on-surface-variant">
          {label}
        </label>
        <span className="text-[11px] text-on-surface-variant">
          {badgeText ? (
            <span className="text-secondary font-medium">{badgeText}</span>
          ) : (
            <>Balance: {balance}</>
          )}
        </span>
      </div>

      {/* Amount + token selector row */}
      <div className="flex items-center justify-between gap-4">
        {/* Amount input */}
        <div className="flex flex-col flex-1 min-w-0">
          <input
            type="text"
            defaultValue={amount}
            className="bg-transparent border-none p-0 text-3xl font-headline font-bold text-on-surface focus:ring-0 focus:outline-none placeholder-on-surface-variant/40 w-full leading-tight"
          />
          {usdValue && (
            <span className="text-[11px] text-on-surface-variant mt-1.5 truncate">
              {usdValue}
            </span>
          )}
        </div>

        {/* Token selector */}
        <div className="flex items-center gap-2 bg-surface-container-lowest rounded-lg px-3 py-1.5 border border-outline-variant/15 flex-shrink-0 cursor-pointer hover:border-outline-variant/30 transition-colors">
          <Image
            src={tokenIcon}
            alt={tokenName}
            width={24}
            height={24}
            className="rounded-full w-6 h-6"
          />
          <span className="font-headline font-bold text-sm text-on-surface tracking-tight">
            {tokenName}
          </span>
          <span className="material-symbols-outlined text-on-surface-variant text-[16px]">
            expand_more
          </span>
        </div>
      </div>
    </div>
  );
}
