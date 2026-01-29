import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";
import { Event } from "@/hooks/useEvents";
import { useRouter } from "next/navigation";

interface EventCardProps {
  event: Event;
}

const EventCard: React.FC<EventCardProps> = ({ event }) => {
  const router = useRouter();

  const handleCardClick = () => {
    router.push(`/events/${event.uid}`);
  };

  return (
    <div
      className="p-2 border border-[#E8E8E8] rounded-[16px] space-y-3 flex flex-col h-full cursor-pointer hover:shadow-md transition"
      onClick={handleCardClick}
      tabIndex={0}
      role="button"
      onKeyPress={(e) => {
        if (e.key === "Enter" || e.key === " ") handleCardClick();
      }}
    >
      <Image
        src={event.image || "/nullEvent.png"}
        width={340.67}
        height={200}
        alt="event image"
        className="rounded-[8px]"
      />
      <div className="flex justify-between items-center">
        <div className="uppercase text-[#2597D0] text-[12px] mori-semibold bg-[#EBF8FF] px-2 py-1 rounded-full">
          {event.event_types?.[0]?.name || "EVENT"}
        </div>
        {event.is_registered && (
          <div className="text-[#178C4E] text-[12px] bg-[#E0FAEC] px-2 py-1 rounded-full">
            Registered
          </div>
        )}
      </div>
      <div className="text-[#161A21] mori-semibold text-[16px]">
        {event.title}
      </div>
      <div className="flex justify-start items-center gap-2">
        <div className="mori-semibold text-[#E9358F] text-[16px]">
          ₦{event.member_price.toLocaleString()}
        </div>
        <div className="text-[#161A21] text-[14px] line-through">
          ₦{event.regular_price.toLocaleString()}
        </div>
      </div>
      <div>
        <div className="flex justify-start items-center gap-2">
          <Image src={`/check-line.svg`} width={18} height={18} alt="icon" />
          <div className="flex justify-start items-center gap-2">
            <div className="text-[#6A6D71] text-[14px]">
              {new Date(event.starts_at).toLocaleDateString("en-NG", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </div>
            <div className="bg-[#AAABAE] rounded-full w-[4px] h-[4px]"></div>
            <div className="text-[#6A6D71] text-[14px]">
              {new Date(event.starts_at).toLocaleTimeString("en-NG", {
                hour: "2-digit",
                minute: "2-digit",
              })}{" "}
              ({event.timezone})
            </div>
          </div>
        </div>
        <div className="flex justify-start items-center gap-2">
          <Image src={`/map-pin.svg`} width={18} height={18} alt="icon" />
          <div className="flex justify-start items-center gap-2">
            <div className="text-[#6A6D71] text-[14px]">
              {event.location || event.city}
            </div>
          </div>
        </div>
        <div className="flex justify-start items-center gap-2">
          <Image src={`/spot-icon.svg`} width={18} height={18} alt="icon" />
          <div className="flex justify-start items-center gap-2">
            <div className="text-[#6A6D71] text-[14px]">
              {event.spots_remaining} Spots Left
            </div>
          </div>
        </div>
      </div>
      <div className="mt-auto">
        <Button
          className="w-full"
          onClick={(e) => {
            e.stopPropagation();
            router.push(`/events/${event.uid}`);
          }}
        >
          Get tickets
        </Button>
      </div>
    </div>
  );
};

export default EventCard;
