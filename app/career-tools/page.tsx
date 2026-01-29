import HeaderSub from "@/components/reusables/HeaderSub";
import SubHeader from "@/components/reusables/SubHeader";
import TokensCard from "@/components/reusables/TokensCard";
import ToolCard from "@/components/reusables/ToolCard";
import React from "react";
const tools = [
  {
    name: "Explore Careers",
    description: "Discover careers and check your fit.",
    icon: "/explore-careers.svg",
    bgColor: "#F7F0FC",
    url: "#",
  },
];
const page = () => {
  return (
    <div className="space-y-3">
      <HeaderSub
        title="Career Tools"
        subtitle="AI-powered tools to help you advance your career"
      />
      <TokensCard />
      <section className="space-y-3 pt-4">
        <SubHeader
          title="Resumes and Applications"
          subtitle="Tools to build and optimize your job applications"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {tools.map((tool) => (
            <ToolCard key={tool.name} {...tool} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default page;
