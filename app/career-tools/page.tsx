"use client";
import HeaderSub from "@/components/reusables/HeaderSub";
import SubHeader from "@/components/reusables/SubHeader";
import TokensCard from "@/components/reusables/TokensCard";
import ToolCard from "@/components/reusables/ToolCard";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import React, { useState } from "react";
const resumes = [
  {
    name: "Resume Builder",
    description: "Build a professional resume with AI-powered content.",
    icon: "/text-line.svg",
    bgColor: "#E4FBF8",
    url: "#",
  },
  {
    name: "Resume Optimizer",
    description: "Upload your resume and get AI suggestions",
    icon: "/resume-optimizer.svg",
    bgColor: "#FFF3EB",
    url: "#",
  },
  {
    name: "Cover Letter Builder",
    description: "Generate personalized cover letters.",
    icon: "/cover-letter-builder.svg",
    bgColor: "#F6F3FF",
    url: "#",
  },
  {
    name: "Email Writer",
    description: "Write professional job-related emails.",
    icon: "/email-writer.svg",
    bgColor: "#F7F0FC",
    url: "#",
  },
];
const brand = [
  {
    name: "Profile Optimizer",
    description: "Upload your profile PDF for a full review",
    icon: "/profile-optimizer.svg",
    bgColor: "#EBF1FF",
    url: "#",
  },
  {
    name: "Headline Generator",
    description: "Generate attention-grabbing headlines",
    icon: "/headline-generator.svg",
    bgColor: "#EBF1FF",
    url: "#",
  },
  {
    name: "Summary Generator",
    description: "Create a compelling about section on your profile",
    icon: "/summary-generator.svg",
    bgColor: "#EBF1FF",
    url: "#",
  },
  {
    name: "Post Writer",
    description: "Write engaging posts to build your network",
    icon: "/post-writer.svg",
    bgColor: "#EBF1FF",
    url: "#",
  },
];
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
  {
    name: "Tax Calculator",
    description:
      "Calculate your Nigeria income tax and know how much you earn.",
    icon: "/tax-calculator.svg",
    bgColor: "#E0FAEC",
    url: "#",
  },
  {
    name: "Elevator Pitch",
    description: "Create a memorable and straight forward 30-sec pitch.",
    icon: "/elevator-pitch.svg",
    bgColor: "#FFFAEB",
    url: "#",
  },
  {
    name: "Personal Brand Audit",
    description: "Analyze, review and optimize your online presence.",
    icon: "/personal-brand-audit.svg",
    bgColor: "#E4FBF8",
    url: "#",
  },
];
const Page = () => {
  const [activeTab, setActiveTab] = useState("overview");

  return (
    <div className="space-y-3">
      <HeaderSub
        title="Career Tools"
        subtitle="AI-powered tools to help you advance your career"
      />
      <TokensCard />
      <section className="space-y-3 pt-4">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="bg-transparent flex gap-2">
            <TabsTrigger
              value="overview"
              className="data-[state=active]:bg-[#322FEB] data-[state=active]:text-white px-4 py-5 border border-[#E8E8E8] rounded-md transition"
            >
              Overview
            </TabsTrigger>
            <TabsTrigger
              value="resume"
              className="data-[state=active]:bg-[#322FEB] data-[state=active]:text-white px-4 py-5 border border-[#E8E8E8] rounded-md transition"
            >
              Resume
            </TabsTrigger>
            <TabsTrigger
              value="linkedin"
              className="data-[state=active]:bg-[#322FEB] data-[state=active]:text-white px-4 py-5 border border-[#E8E8E8] rounded-md transition"
            >
              Linkedin
            </TabsTrigger>
            <TabsTrigger
              value="career"
              className="data-[state=active]:bg-[#322FEB] data-[state=active]:text-white px-4 py-5 border border-[#E8E8E8] rounded-md transition"
            >
              Career
            </TabsTrigger>
          </TabsList>
          <TabsContent value="overview" className="space-y-4">
            <section className="pt-4 space-y-4">
              <SubHeader
                title="Resumes and Applications"
                subtitle="Tools to build and optimize your job applications"
              />
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {resumes.map((resume) => (
                  <ToolCard key={resume.name} {...resume} />
                ))}
              </div>
            </section>
            <section className="pt-4 space-y-4">
              <SubHeader
                title="LinkedIn and Personal Brand"
                subtitle="Build your brand and grow your presence"
              />
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {brand.map((item) => (
                  <ToolCard key={item.name} {...item} />
                ))}
              </div>
            </section>
            <section className="pt-4 space-y-4">
              <div className="flex justify-between items-center">
                <SubHeader
                  title="Career Development"
                  subtitle="Plan and advance your career"
                />
                <div>
                  <Button
                    variant={`ghost`}
                    className="text-[#5335E9]"
                    onClick={() => setActiveTab("career")}
                  >
                    View all
                  </Button>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {tools.slice(0, 4).map((tool) => (
                  <ToolCard key={tool.name} {...tool} />
                ))}
              </div>
            </section>
          </TabsContent>
          <TabsContent value="resume" className="space-y-4">
            <section className="pt-4 space-y-4">
              <SubHeader
                title="Resumes and Applications"
                subtitle="Tools to build and optimize your job applications"
              />
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {resumes.map((resume) => (
                  <ToolCard key={resume.name} {...resume} />
                ))}
              </div>
            </section>
          </TabsContent>
          <TabsContent value="linkedin" className="space-y-4">
            <section className="pt-4 space-y-4">
              <SubHeader
                title="LinkedIn and Personal Brand"
                subtitle="Build your brand and grow your presence"
              />
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {brand.map((item) => (
                  <ToolCard key={item.name} {...item} />
                ))}
              </div>
            </section>
          </TabsContent>
          <TabsContent value="career" className="space-y-4">
            <section className="pt-4 space-y-4">
              <div className="flex justify-between items-center">
                <SubHeader
                  title="Career Development"
                  subtitle="Plan and advance your career"
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {tools.map((tool) => (
                  <ToolCard key={tool.name} {...tool} />
                ))}
              </div>
            </section>
          </TabsContent>
        </Tabs>
      </section>
    </div>
  );
};

export default Page;
