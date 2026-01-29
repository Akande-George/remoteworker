import React from "react";

interface HeaderSubProps {
  title?: string;
  subtitle?: string;
}

const HeaderSub: React.FC<HeaderSubProps> = ({
  title = "Events",
  subtitle = "Discover networking events, workshops, and wellness activities",
}) => {
  return (
    <div>
      <div className="sora-semibold text-[#161A21] text-[24px]">{title}</div>
      <div className="text-[16px] text-[#6A6D71]">{subtitle}</div>
    </div>
  );
};

export default HeaderSub;
