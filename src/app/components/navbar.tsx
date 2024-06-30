"use client";

import {
  Navbar,
  NavbarBrand,
  NavbarCollapse,
  NavbarLink,
  NavbarToggle,
} from "flowbite-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const NagivationBar = () => {
  const pathName = usePathname();
  return (
    <Navbar className="bg-white border-gray-200 px-4 lg:px-6 lg:py-2.5 md:py-0 mb-2">
      <NavbarBrand as={Link} href="/">
        <Image
          height={45}
          width={45}
          src="/Image/Delta-Executor-official-logo.webp"
          className="mr-3 h-6 sm:h-9"
          alt="Delta_Executor Logo"
        />
        <span
          className="self-center text-xl font-bold whitespace-nowrap
                   dark:text-white"
        >
          Delta Executor
        </span>
      </NavbarBrand>
      <NavbarToggle />
      <NavbarCollapse>
        <NavbarLink
          as={Link}
          href="/key"
          active={pathName === "/key"}
          className={`block py-2 pl-3 pr-4 text-gray-700 hover:bg-gray-50 md:border-0 
             md:hover:bg-transparent md:hover:text-blue-500 
            ${
              pathName === "/key"
                ? " bg-blue-500 text-white hover:text-gray-700 md:text-blue-500 md:bg-transparent"
                : ""
            }`}
        >
          Delta Executor Key
        </NavbarLink>
        <NavbarLink
          as={Link}
          href="/delta-executor-pc"
          active={pathName === "/windows"}
          className={`block py-2 pl-3 pr-4  text-gray-700 hover:bg-gray-50 md:border-0 
             md:hover:bg-transparent md:hover:text-blue-500 
          ${
            pathName === "/delta-executor-pc"
              ? " bg-blue-500 text-white hover:text-gray-700 md:text-blue-500 md:bg-transparent"
              : ""
          }`}
        >
          Delta Executor PC
        </NavbarLink>
        <NavbarLink
          href="/discord_server"
          as={Link}
          active={pathName === "/discord_server"}
          className={`block py-2 pl-3 pr-4  text-gray-700 hover:bg-gray-50 md:border-0 
             md:hover:bg-transparent md:hover:text-blue-500 
            ${
              pathName === "/discord_server"
                ? " bg-blue-500 text-white hover:text-gray-700 md:text-blue-500 md:bg-transparent"
                : ""
            }`}
        >
          Discord Server
        </NavbarLink>
        <NavbarLink
          href="/server_status"
          as={Link}
          active={pathName === "/server_status"}
          className={`block py-2 pl-3 pr-4  text-gray-700 hover:bg-gray-50 md:border-0 
             md:hover:bg-transparent md:hover:text-blue-500 
            ${
              pathName === "/server_status"
                ? " bg-blue-500 text-white hover:text-gray-700 md:text-blue-500 md:bg-transparent"
                : ""
            }`}
        >
          Server Status
        </NavbarLink>
      </NavbarCollapse>
    </Navbar>
  );
};
