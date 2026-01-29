import React from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import Image from "next/image";

const SearchEvents = () => {
  return (
    <div className="flex justify-center items-center gap-4">
      <div className="flex-1">
        <div className="relative">
          <Input type="text" placeholder="Search events..." className="pl-10" />
          <span className="absolute left-3 top-1/2 -translate-y-1/2">
            <Image src="/search-icon.svg" width={18} height={18} alt="search" />
          </span>
        </div>
      </div>
      <div>
        <Button variant="outline">City</Button>
      </div>
      <div>
        <Button variant="outline">Event type</Button>
      </div>
    </div>
  );
};

export default SearchEvents;
