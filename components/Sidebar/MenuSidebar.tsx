import React from "react";
import NameCard from "../reusables/NameCard";
import MenuItem from "../reusables/MenuItem";

type MenuItemType = {
  label: string;
  icon: string;
  href: string;
  soon?: boolean;
};

const mainMenu: MenuItemType[] = [
  {
    label: "Home",
    icon: "/home-icon.svg",
    href: "/",
  },
];
const career: MenuItemType[] = [
  {
    label: "Career Tools",
    icon: "/career-tools-icon.svg",
    href: "/career",
  },
  {
    label: "Job Board",
    icon: "/job-icon.svg",
    href: "/jobs",
    soon: true, // Set soon to true
  },
  {
    label: "Applications",
    icon: "/application-icon.svg",
    href: "/applications",
    soon: true, // Set soon to true
  },
  {
    label: "Courses",
    icon: "/courses-icon.svg",
    href: "/courses",
  },
];
const community: MenuItemType[] = [
  {
    label: "Events",
    icon: "/events-icon.svg",
    href: "/events",
  },
  {
    label: "Community",
    icon: "/community-icon.svg",
    href: "/community",
  },
  {
    label: "Find a Mentor",
    icon: "/mentor-icon.svg",
    href: "/find-a-mentor",
    soon: true,
  },
];
const resources: MenuItemType[] = [
  {
    label: "Perks",
    icon: "/perks-icon.svg",
    href: "/perks",
  },
  {
    label: "Resources",
    icon: "/resources-icon.svg",
    href: "/resources",
  },
  {
    label: "Challenges",
    icon: "/challenges-icon.svg",
    href: "/challenges",
    soon: true,
  },
];
const others: MenuItemType[] = [
  {
    label: "Settings",
    icon: "/settings-icon.svg",
    href: "/settings",
  },
  {
    label: "Support",
    icon: "/support-icon.svg",
    href: "/support",
  },
];

const MenuSidebar = () => {
  return (
    <div className="w-[272px] p-4 border-r border-[#E8E8E8] h-screen">
      <div>
        <NameCard />
      </div>
      <div className="py-4 h-[calc(100vh-112px)] overflow-y-auto">
        <div className="flex justify-center items-center pb-3">
          <div className="text-[#95969A] text-[12px]">MAIN</div>
          <div className="w-[232px] h-[1px] bg-[#E8E8E8] my-3"></div>
        </div>
        {mainMenu.map((item) => (
          <MenuItem
            key={item.label}
            label={item.label}
            icon={item.icon}
            href={item.href}
          />
        ))}
        <div className="flex justify-center items-center py-3">
          <div className="text-[#95969A] text-[12px]">CAREER</div>
          <div className="w-[232px] h-[1px] bg-[#E8E8E8] my-3"></div>
        </div>
        {career.map((item) => (
          <MenuItem
            key={item.label}
            label={item.label}
            icon={item.icon}
            href={item.href}
            soon={item.soon}
          />
        ))}
        <div className="flex justify-center items-center py-3">
          <div className="text-[#95969A] text-[12px]">COMMUNITY</div>
          <div className="w-[232px] h-[1px] bg-[#E8E8E8] my-3"></div>
        </div>
        {community.map((item) => (
          <MenuItem
            key={item.label}
            label={item.label}
            icon={item.icon}
            href={item.href}
            soon={item.soon}
          />
        ))}
        <div className="flex justify-center items-center py-3">
          <div className="text-[#95969A] text-[12px]">RESOURCES</div>
          <div className="w-[232px] h-[1px] bg-[#E8E8E8] my-3"></div>
        </div>
        {resources.map((item) => (
          <MenuItem
            key={item.label}
            label={item.label}
            icon={item.icon}
            href={item.href}
            soon={item.soon}
          />
        ))}
        <div className="flex justify-center items-center py-3">
          <div className="text-[#95969A] text-[12px]">OTHERS</div>
          <div className="w-[232px] h-[1px] bg-[#E8E8E8] my-3"></div>
        </div>
        {others.map((item) => (
          <MenuItem
            key={item.label}
            label={item.label}
            icon={item.icon}
            href={item.href}
            soon={item.soon}
          />
        ))}
      </div>
    </div>
  );
};

export default MenuSidebar;
