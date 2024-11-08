"use client";

import { cn } from "@/lib/utils";
import { integralCF } from "@/styles/fonts";
import Link from "next/link";
import React from "react";
import { NavMenu } from "../navbar.types";
import { MenuList } from "./MenuList";
import {
  NavigationMenu,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { MenuItem } from "./MenuItem";
import Image from "next/image";
import InputGroup from "@/components/ui/input-group";
import ResTopNavbar from "./ResTopNavbar";
import CartBtn from "./CartBtn";
import { useAuth } from "@/context/AuthContext";

const data: NavMenu = [
  {
    id: 1,
    label: "Home",
    type: "MenuItem",
    url: "/",
    children: [],
  },
  {
    id: 2,
    type: "MenuItem",
    label: "About Us",
    url: "/shop#on-sale",
    children: [],
  },
  {
    id: 3,
    type: "MenuItem",
    label: "On Sale",
    url: "/shop#on-sale",
    children: [],
  },
  {
    id: 4,
    type: "MenuItem",
    label: "Contact Us",
    url: "/shop#new-arrivals",
    children: [],
  },
];

const TopNavbar = () => {
  const auth = useAuth();
  const { isLoggedIn, logout } = auth;
  const userEmail = typeof window !== 'undefined' ? localStorage.getItem("userEmail") : null;

  return (
    <nav className="sticky top-0 bg-white z-20">
      <div className="flex relative max-w-frame mx-auto items-center justify-between md:justify-start py-5 md:py-6 px-4 xl:px-0">
        <div className="flex items-center">
          <div className="block md:hidden mr-4">
            <ResTopNavbar data={data} />
          </div>
          <Link
            href="/"
            className={cn([
              integralCF.className,
              "text-2xl lg:text-[32px] mb-2 mr-3 lg:mr-10",
            ])}
          >
            TokooLo
          </Link>
        </div>
        <NavigationMenu className="hidden md:flex mr-2 lg:mr-7">
          <NavigationMenuList>
            {data.map((item) => (
              <React.Fragment key={item.id}>
                {item.type === "MenuItem" && (
                  <MenuItem label={item.label} url={item.url} />
                )}
                {item.type === "MenuList" && (
                  <MenuList data={item.children} label={item.label} />
                )}
              </React.Fragment>
            ))}
          </NavigationMenuList>
        </NavigationMenu>
        <InputGroup className="hidden md:flex bg-[#F0F0F0] mr-3 lg:mr-10">
          <InputGroup.Text>
            <Image
              priority
              src="/icons/search.svg"
              height={20}
              width={20}
              alt="search"
              className="min-w-5 min-h-5"
            />
          </InputGroup.Text>
          <InputGroup.Input
            type="search"
            name="search"
            placeholder="Search for products..."
            className="bg-transparent placeholder:text-black/40"
          />
        </InputGroup>
        <div className="flex items-center gap-3">
          <Link href="/search" className="block md:hidden mr-[14px] p-1">
            <Image
              priority
              src="/icons/search-black.svg"
              height={100}
              width={100}
              alt="search"
              className="max-w-[22px] max-h-[22px]"
            />
          </Link>
          <CartBtn />
          {isLoggedIn ? (
            <div className="flex items-center gap-3">
              <span className="text-sm hidden md:block">{userEmail}</span>
              <Link href="/profile" className="p-1">
                <Image
                  priority
                  src="/icons/user.svg"
                  height={100}
                  width={100}
                  alt="profile"
                  className="max-w-[22px] max-h-[22px]"
                />
              </Link>
              <button
                onClick={() => logout()}
                className="p-1 hover:text-orange-500 transition-colors"
              >
                <Image
                  priority
                  src="/icons/logout.svg"
                  height={100}
                  width={100}
                  alt="logout"
                  className="max-w-[22px] max-h-[22px]"
                />
              </button>
            </div>
          ) : (
            <Link href="/login" className="p-1">
              <Image
                priority
                src="/icons/user.svg"
                height={100}
                width={100}
                alt="user"
                className="max-w-[22px] max-h-[22px]"
              />
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
};

export default TopNavbar;
