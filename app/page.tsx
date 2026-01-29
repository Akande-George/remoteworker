import Events from "@/components/Home/Events";
import JobsMatched from "@/components/Home/JobsMatched";
import Perks from "@/components/Home/Perks";
import Tasks from "@/components/Home/Tasks";
import BecomeATalent from "@/components/reusables/BecomeATalent";
import Welcome from "@/components/reusables/Welcome";
import type { Metadata } from "next";
import Image from "next/image";
export const metadata: Metadata = {
  title: "Remote WorkerHer",
  description: "Dashbboard",
};
export default function Home() {
  return (
    <section className="space-y-5 pt-4">
      <BecomeATalent />
      <Welcome />
      <Tasks />
      <div className="grid grid-cols-1 md:grid-cols-2">
        <JobsMatched />
        <Events />
        <Perks />
      </div>
    </section>
  );
}
