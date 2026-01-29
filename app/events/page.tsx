import EventList from "@/components/Events/EventList";
import SearchEvents from "@/components/Events/SearchEvents";
import HeaderSub from "@/components/reusables/HeaderSub";
import React from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

const Page = () => {
  return (
    <div className="space-y-4">
      <HeaderSub
        title="Events"
        subtitle="Discover networking events, workshops, and wellness activities"
      />
      <SearchEvents />
      <div>
        <Tabs defaultValue="all" className="w-full">
          <TabsList className="justify-start rounded-none border-b bg-transparent p-0">
            <TabsTrigger
              value="all"
              className="relative rounded-none border-b-2 border-b-transparent bg-transparent px-4 pb-3 pt-2 font-semibold text-muted-foreground shadow-none transition-none data-[state=active]:border-b-pink-500 data-[state=active]:text-pink-500 data-[state=active]:shadow-none"
            >
              Upcoming
            </TabsTrigger>
            <TabsTrigger
              value="my-events"
              className="relative rounded-none border-b-2 border-b-transparent bg-transparent px-4 pb-3 pt-2 font-semibold text-muted-foreground shadow-none transition-none data-[state=active]:border-b-pink-500 data-[state=active]:text-pink-500 data-[state=active]:shadow-none"
            >
              Past
            </TabsTrigger>
            <TabsTrigger
              value="past"
              className="relative rounded-none border-b-2 border-b-transparent bg-transparent px-4 pb-3 pt-2 font-semibold text-muted-foreground shadow-none transition-none data-[state=active]:border-b-pink-500 data-[state=active]:text-pink-500 data-[state=active]:shadow-none"
            >
              My Events
            </TabsTrigger>
          </TabsList>
          <TabsContent value="all">
            <EventList />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Page;
