"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Search, ChevronDown } from "lucide-react";
import { mainNavItems, secondaryNavItems } from "@/data/navigation";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileDropdown, setMobileDropdown] = useState<string | null>(null);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 px-4 pt-4 lg:px-6 lg:pt-6">
      {/* Single white rounded bar - desktop */}
      <div className="hidden lg:block rounded-[20px] bg-[#FFFFFF] shadow-[0_2px_12px_rgba(0,0,0,0.08)]">
        <div className="flex items-center justify-between gap-8 px-8 py-4">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 shrink-0">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#1F6EC9] text-white font-bold text-lg">
              F
            </div>
            <div className="flex flex-col leading-tight">
              <span className="text-xl font-bold font-serif text-[#333333] tracking-tight">FEROZSONS</span>
              <span className="text-xs font-medium text-[#666666] tracking-[0.2em] uppercase">Laboratories Limited</span>
            </div>
          </Link>

          {/* Primary nav - center-left with 32px gap */}
          <nav className="flex items-center gap-8 flex-1 justify-start pl-8">
            {mainNavItems.map((item) => (
              <div
                key={item.href}
                className="relative"
                onMouseEnter={() => item.children && setActiveDropdown(item.label)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link
                  href={item.href}
                  className={cn(
                    "flex items-center gap-1 text-base font-medium text-[#5C85A6] transition-colors hover:opacity-80",
                    pathname === item.href && "opacity-100"
                  )}
                >
                  {item.label}
                  {item.children && <ChevronDown className="h-3 w-3" />}
                </Link>

                {/* Dropdown */}
                {item.children && activeDropdown === item.label && (
                  <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2">
                    <div className="bg-[#FFFFFF] border border-[#CCCCCC] rounded-lg shadow-lg p-6 min-w-[280px]">
                      <p className="text-xs font-semibold text-[#666666] uppercase tracking-wider mb-3">
                        Categories
                      </p>
                      <div className="grid gap-1">
                        {item.children.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            className={cn(
                              "block px-3 py-2 text-sm rounded-md transition-colors hover:bg-gray-100",
                              child.label === "View All Products" && "font-semibold text-[#5C85A6] mt-2 border-t border-[#CCCCCC] pt-3"
                            )}
                            onClick={() => setActiveDropdown(null)}
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Secondary nav + separator + search - right */}
          <div className="flex items-center gap-8 shrink-0">
            {secondaryNavItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-base font-medium text-[#5C85A6] transition-colors hover:opacity-80"
              >
                {item.label}
              </Link>
            ))}
            <div className="h-5 w-px bg-[#CCCCCC]" aria-hidden />
            <button className="p-1.5 rounded-full transition-colors hover:opacity-80 text-[#5C85A6]" aria-label="Search">
              <Search className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile: compact bar with hamburger */}
      <div className="flex lg:hidden items-center justify-between rounded-[20px] bg-[#FFFFFF] shadow-[0_2px_12px_rgba(0,0,0,0.08)] px-4 py-3">
        <Link href="/" className="flex items-center gap-2">
          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#1F6EC9] text-white font-bold text-base">
            F
          </div>
          <div className="flex flex-col leading-tight">
            <span className="text-base font-bold font-serif text-[#333333]">FEROZSONS</span>
            <span className="text-[10px] font-medium text-[#666666] tracking-widest uppercase">Laboratories Limited</span>
          </div>
        </Link>
        <button
          className="p-2 text-[#5C85A6]"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden mt-2 rounded-[20px] bg-[#FFFFFF] shadow-[0_2px_12px_rgba(0,0,0,0.08)] border border-[#CCCCCC]/30 overflow-hidden">
          <div className="px-4 py-4 space-y-1">
            {mainNavItems.map((item) => (
              <div key={item.href}>
                {item.children ? (
                  <>
                    <button
                      className="flex items-center justify-between w-full py-3 text-base font-medium text-[#5C85A6]"
                      onClick={() => setMobileDropdown(mobileDropdown === item.label ? null : item.label)}
                    >
                      {item.label}
                      <ChevronDown
                        className={cn(
                          "h-4 w-4 transition-transform",
                          mobileDropdown === item.label && "rotate-180"
                        )}
                      />
                    </button>
                    {mobileDropdown === item.label && (
                      <div className="pl-4 pb-2 space-y-1">
                        {item.children.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            className="block py-2 text-sm text-[#5C85A6] hover:opacity-80"
                            onClick={() => { setMobileOpen(false); setMobileDropdown(null); }}
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <Link
                    href={item.href}
                    className="block py-3 text-base font-medium text-[#5C85A6] hover:opacity-80"
                    onClick={() => setMobileOpen(false)}
                  >
                    {item.label}
                  </Link>
                )}
              </div>
            ))}
            <div className="border-t border-[#CCCCCC]/50 pt-3 mt-3 space-y-1">
              {secondaryNavItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="block py-2 text-sm text-[#5C85A6] hover:opacity-80"
                  onClick={() => setMobileOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
