"use client";
import HeaderSub from "@/components/reusables/HeaderSub";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import React from "react";
import { useEvent } from "@/hooks/useEvents";
import { useParams } from "next/navigation";

const Page = () => {
  const params = useParams();
  const id = params?.id as string;
  const { data, isLoading, isError } = useEvent(id);

  if (isLoading) return <div>Loading event...</div>;
  if (isError || !data?.event) return <div>Event not found.</div>;

  const event = data.event;

  return (
    <div>
      <HeaderSub title={event.title} subtitle={event.description} />
      <section className="grid grid-cols-1 lg:grid-cols-3 gap-3">
        <div className="lg:col-span-2 space-y-4 pt-3">
          <Image
            src={event.image || `/nullEvent.png`}
            width={755.67}
            height={200}
            alt="event image"
            className="object-cover w-full rounded-[8px] h-[200px]"
          />
          <div>
            <div className="border border-[#E8E8E8] p-4 rounded-[16px]">
              <div className="text-[#161A21] text-[16px] mori-semibold border-b border-[#E8E8E8] pb-4">
                What to Expect
              </div>
              <div className="py-2 space-y-3">
                {event.what_to_expect?.length ? (
                  event.what_to_expect.map((item, idx) => (
                    <div
                      key={idx}
                      className="flex justify-start items-center gap-3"
                    >
                      <Image
                        src={`/mark.svg`}
                        width={24}
                        height={24}
                        alt="mark"
                      />
                      <div className="text-[#161A21] text-[16px]">{item}</div>
                    </div>
                  ))
                ) : (
                  <div className="text-[#6A6D71]">No details provided.</div>
                )}
              </div>
            </div>
          </div>
          <div>
            <div className="border border-[#E8E8E8] p-4 rounded-[16px]">
              <div className="text-[#161A21] text-[16px] mori-semibold border-b border-[#E8E8E8] pb-4">
                Agenda
              </div>
              <div className="py-2 space-y-3">
                {event.agenda?.length ? (
                  event.agenda.map((item, idx) => (
                    <div
                      key={idx}
                      className="flex justify-start items-center gap-3"
                    >
                      <Image
                        src={`/mark.svg`}
                        width={24}
                        height={24}
                        alt="mark"
                      />
                      <div className="text-[#161A21] text-[16px]">
                        {item.time} - {item.title}
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="text-[#6A6D71]">No agenda provided.</div>
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="lg:col-span-1">
          <div>
            <section className="border border-[#E8E8E8] p-4 rounded-[16px] space-y-3 flex flex-col h-full">
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
                  <Image
                    src={`/check-line.svg`}
                    width={18}
                    height={18}
                    alt="icon"
                  />
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
                  <Image
                    src={`/map-pin.svg`}
                    width={18}
                    height={18}
                    alt="icon"
                  />
                  <div className="flex justify-start items-center gap-2">
                    <div className="text-[#6A6D71] text-[14px]">
                      {event.location || event.city}
                    </div>
                  </div>
                </div>
                <div className="flex justify-start items-center gap-2">
                  <Image
                    src={`/spot-icon.svg`}
                    width={18}
                    height={18}
                    alt="icon"
                  />
                  <div className="flex justify-start items-center gap-2">
                    <div className="text-[#6A6D71] text-[14px]">
                      {event.spots_remaining} Spots Left
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div className="flex justify-between items-center">
                  <div className="text-[#161A21] text-[14px]">
                    Regular Price
                  </div>
                  <div className="mori-semibold text-[#161A21] text-[16px]">
                    ₦{event.regular_price.toLocaleString()}
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <div className="text-[#161A21] text-[14px]">Member Price</div>
                  <div className="mori-semibold text-[#E9358F] text-[18px]">
                    ₦{event.member_price.toLocaleString()}
                  </div>
                </div>
              </div>
              <div className="mt-auto">
                <Button className="w-full">Get tickets</Button>
              </div>
            </section>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Page;
