"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const Navlink = ({ children, href, className, onClick }) => {
  const pathName = usePathname();
  const active = href === pathName;

  return (
    <Link
      href={href}
      onClick={onClick}
      className={`font-medium ${className} ${
        active ? "text-[#15A1BF] border-b-2 border-[#15A1BF]" : "text-[#0C0B0B]"
      }`}
    >
      {children}
    </Link>
  );
};

export default Navlink;
