"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();

  const navItems = [
    { name: "홈", href: "/" },
    { name: "학교생활", href: "/school-life" },
    { name: "방명록", href: "/guestbook" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-[#fbf9f4]/95 backdrop-blur-md border-b border-[#e8e3d5] shadow-xs">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 h-18 flex items-center justify-between">
        {/* Logo and School Name */}
        <Link
          href="/"
          className="flex items-center gap-3 group transition-transform active:scale-95"
        >
          <div className="relative w-10 h-10 sm:w-11 sm:h-11 rounded-full overflow-hidden border-2 border-[#1b4332]/30 shadow-xs group-hover:border-[#1b4332] transition-colors">
            <Image
              src="/logo.jpg"
              alt="샬롬자유학교 로고"
              fill
              sizes="44px"
              className="object-cover"
              priority
            />
          </div>
          <div className="flex flex-col">
            <span className="text-base sm:text-lg font-bold text-[#1b4332] tracking-tight group-hover:text-[#2d6a4f] transition-colors">
              샬롬자유학교
            </span>
            <span className="text-[11px] text-[#526156] font-medium hidden sm:inline">
              이왕이면 샬자~ 🌱
            </span>
          </div>
        </Link>

        {/* Navigation Menu */}
        <nav className="flex items-center gap-1 sm:gap-2">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`px-3 sm:px-4 py-2 rounded-full text-sm font-semibold transition-all duration-150 ${
                  isActive
                    ? "bg-[#1b4332] text-white shadow-xs"
                    : "text-[#2d4a3b] hover:bg-[#e8e3d5]/60 hover:text-[#1b4332]"
                }`}
              >
                {item.name}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
