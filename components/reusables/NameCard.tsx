import Image from "next/image";
import React from "react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import SubMenu from "./SubMenu";
import { useAuthContext } from "@/context/AuthContext";
import { useUserData } from "@/hooks/userData"; // <-- import the hook

const NameCard = ({ isCollapsed = false }: { isCollapsed?: boolean }) => {
  const { logout } = useAuthContext();
  const { data: user, isLoading } = useUserData(); // <-- fetch user data

  return (
    <div
      className={`flex ${isCollapsed ? "justify-center" : "justify-between"} items-center gap-3 border-b border-[#E8E8E8] pt-3 pb-5 transition-all duration-300`}
    >
      <Image src={`/apex.svg`} width={40} height={40} alt="apex" />
      {!isCollapsed && (
        <>
          <div className="flex-1 flex-shrink max-w-[136px]">
            <div className="text-[#161A21] text-[14px] truncate">
              {isLoading
                ? "Loading..."
                : user?.first_name + " " + user?.last_name}
            </div>
            <div className="text-[#6A6D71] text-[12px] truncate">
              {isLoading ? "" : user?.email || ""}
            </div>
          </div>
          <div>
            <DropdownMenu>
              <DropdownMenuTrigger>
                <div className="p-2 border border-[#E8E8E8] rounded-[6px]">
                  <Image
                    src={`/arrow-down.svg`}
                    width={9.55}
                    height={5.83}
                    alt="arrow down"
                  />
                </div>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-[275px]" align="start">
                <DropdownMenuGroup>
                  <DropdownMenuLabel>
                    <div className="text-[#95969A] text-[12px] uppercase">
                      menu
                    </div>
                  </DropdownMenuLabel>
                  <DropdownMenuItem>
                    <SubMenu
                      logout=""
                      href="/"
                      icon="account-icon.svg"
                      label="Account"
                    />
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <SubMenu
                      logout=""
                      href="/"
                      icon="ambassador-icon.svg"
                      label="Ambassador Program"
                    />
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <SubMenu
                      logout=""
                      href="/"
                      icon="subscription-icon.svg"
                      label="Plans & Subscriptions"
                    />
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <SubMenu
                      logout=""
                      href="/"
                      icon="biling-icon.svg"
                      label="Billings"
                    />
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <SubMenu
                      logout=""
                      href="/"
                      icon="settings-icon.svg"
                      label="Settings"
                    />
                  </DropdownMenuItem>
                </DropdownMenuGroup>
                <DropdownMenuSeparator />
                <DropdownMenuGroup>
                  <DropdownMenuItem>
                    <SubMenu
                      logout=""
                      href="/"
                      icon="community-icon.svg"
                      label="Join Community"
                    />
                    <DropdownMenuShortcut>
                      <Image
                        src="/external-link.svg"
                        width={20}
                        height={20}
                        alt="external link"
                      />
                    </DropdownMenuShortcut>
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={logout}>
                    <SubMenu
                      logout="text-[#FB3748]"
                      href="#"
                      icon="logout-icon.svg"
                      label="Logout"
                    />
                  </DropdownMenuItem>
                </DropdownMenuGroup>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </>
      )}
    </div>
  );
};

export default NameCard;
