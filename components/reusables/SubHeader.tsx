import React from "react";

interface HeaderSubProps {
  title?: string;
  subtitle?: string;
}

const SubHeader: React.FC<HeaderSubProps> = ({
  title = "Events",
  subtitle = "Discover networking events, workshops, and wellness activities",
}) => {
  return (
    <div>
      <div className="mori-semibold text-[#161A21] text-[16px]">{title}</div>
      <div className="text-[14px] text-[#6A6D71]">{subtitle}</div>
    </div>
  );
};

export default SubHeader;
