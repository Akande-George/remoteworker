import Image from "next/image";
import Link from "next/link";
import React from "react";
type SubMenuItem = {
  href: string;
  icon: string;
  label: string;
  logout: string;
};
const SubMenu: React.FC<SubMenuItem> = ({ icon, label, href, logout }) => {
  return (
    <Link href={`${href}`} className={`flex justify-center items-center gap-3`}>
      <Image src={`/${icon}`} width={20} height={20} alt="sub menu" />
      <div className={`text-[#161A21] text-[14px] ${logout}`}>{label}</div>
    </Link>
  );
};

export default SubMenu;
