"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface MenuItemProps {
  label: string;
  icon: string;
  href: string;
  showArrow?: boolean;
  soon?: boolean;
}

const MenuItem: React.FC<MenuItemProps> = ({
  label,
  icon,
  href,
  showArrow = true,
  soon = false,
}) => {
  const [hovered, setHovered] = useState(false);
  const pathname = usePathname();

  // Active if current route matches href
  const isActive = pathname === href;
  // If soon is true, disable hover state
  const isHovered = soon ? false : hovered || isActive;

  return (
    <Link
      href={href}
      className={`flex justify-between items-center gap-3 py-3 px-5 cursor-pointer rounded-[8px] hover:bg-[#FFF3F9] ${
        soon ? "pointer-events-none" : ""
      }`}
      onMouseEnter={() => !soon && setHovered(true)}
      onMouseLeave={() => !soon && setHovered(false)}
      tabIndex={soon ? -1 : 0}
      aria-disabled={soon}
      style={{
        background: isActive ? "#FFF3F9" : undefined,
      }}
    >
      <div className="flex justify-start items-center gap-3">
        <Image
          src={icon}
          width={20}
          height={20}
          alt={label}
          style={{
            filter: isHovered
              ? "invert(41%) sepia(92%) saturate(7492%) hue-rotate(308deg) brightness(93%) contrast(101%)"
              : "none",
            transition: "filter 0.2s",
          }}
        />
        <div
          className="text-[14px] leading-[20px]"
          style={{
            color: soon ? "#AAABAE" : isHovered ? "#E9358F" : "#6A6D71",
            transition: "color 0.2s",
          }}
        >
          {label}
        </div>
      </div>
      {soon && (
        <div className="text-[#D0257A] bg-[#FFF3F9] rounded-full text-[11px] px-2">
          SOON
        </div>
      )}
      {isHovered && showArrow && !soon && (
        <Image
          src={`/arrow-right.svg`}
          width={5.83}
          height={9.55}
          alt="arrow"
          style={{
            filter:
              "invert(41%) sepia(92%) saturate(7492%) hue-rotate(308deg) brightness(93%) contrast(101%)",
            transition: "filter 0.2s",
          }}
        />
      )}
    </Link>
  );
};

export default MenuItem;
