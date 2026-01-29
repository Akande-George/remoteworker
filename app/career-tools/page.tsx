import HeaderSub from "@/components/reusables/HeaderSub";
import SubHeader from "@/components/reusables/SubHeader";
import TokensCard from "@/components/reusables/TokensCard";
import ToolCard from "@/components/reusables/ToolCard";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import React from "react";
const tools = [
  {
    name: "Explore Careers",
    description: "Discover careers and check your fit.",
    icon: "/explore-careers.svg",
    bgColor: "#F7F0FC",
    url: "#",
  },
  {
    name: "Career Roadmap",
    description: "Get a personalized career roadmap",
    icon: "/career-roadmap.svg",
    bgColor: "#EBF1FF",
    url: "#",
  },
  {
    name: "Interview Prep",
    description: "Practice with AI generated mock interviews.",
    icon: "/interview-prep.svg",
    bgColor: "#E4FBF8",
    url: "#",
  },
  {
    name: "Salary Analyzer",
    description: "Get salary insights for your current or targeted role.",
    icon: "/salary-analyzer.svg",
    bgColor: "#FFF3EB",
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
        <Tabs defaultValue="overview" className="w-full">
          <TabsList className="bg-transparent flex gap-2">
            <TabsTrigger
              value="overview"
              className="data-[state=active]:bg-[#F963AB] data-[state=active]:text-white px-4 py-4 border border-[#E8E8E8] rounded-md transition"
            >
              Overview
            </TabsTrigger>
            <TabsTrigger
              value="resume"
              className="data-[state=active]:bg-[#F963AB] data-[state=active]:text-white px-4 py-4 border border-[#E8E8E8] rounded-md transition"
            >
              Resume
            </TabsTrigger>
          </TabsList>
          <TabsContent value="overview">
            <section className="pt-4 space-y-4">
              <SubHeader
                title="Career Development"
                subtitle="Plan and advance your career"
              />
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {tools.map((tool) => (
                  <ToolCard key={tool.name} {...tool} />
                ))}
              </div>
            </section>
          </TabsContent>
          <TabsContent value="resume"></TabsContent>
        </Tabs>
      </section>
    </div>
  );
};

export default page;
