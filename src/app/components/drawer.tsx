"use client";
import Image from "next/image";

import { Button, Drawer } from "flowbite-react";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

export function GoogleSearchDrawer() {
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const handleClose = () => setIsOpen(false);
  const pathName = usePathname();

  useEffect(() => {
    if (pathName === "") {
      setSearchQuery("Delta Executor");
    } else {
      setSearchQuery("Delta Executor");
    }
  }, [pathName]);

  if (pathName === "Delta Executor") {
  }

  const querySearch = "Delta Executor";

  //   console.log(window.gsc);

  const prepopulateSearchQuery = () => {
    if ((window as any).__gcse || ((window as any).__gcse = {})) {
      (window as any).__gcse = {
        initializationCallback: function () {
          const searchElement = (
            window as any
          ).google.search.cse.element.getElement("Delta Executor");
          searchElement.execute("Delta Executor");
        },
      };
    }
  };

  const unmountSearchQuery = () => {
    if ((window as any).__gcse || ((window as any).__gcse = {})) {
      (window as any).__gcse = {
        initializationCallback: function () {
          const searchElement = (
            window as any
          ).google.search.cse.element.getElement("deltasearch");
          searchElement.execute("Delta Executor");
        },
      };
    }
  };

  useEffect(() => {
    if (isOpen && searchQuery) {
      console.log("isOpen", isOpen, searchQuery, "searchQuery");
      prepopulateSearchQuery();
    } else {
    }
  }, [isOpen, searchQuery]);

  return (
    <>
      {/* <div className="flex min-h-[50vh] items-center justify-center"> */}
      {/*  <Button onClick={() => setIsOpen(true)}>Show right drawer</Button> */}
      <button
        className="bg-blue-500 text-white font-medium rounded-md px-4 py-2 flex items-center 
            justify-center hover:bg-blue-600 transition duration-300 ease-in-out shadow-lg"
        onClick={() => setIsOpen(true)}
      >
        <span className="text-lg mr-2">
          <Image
            height={25}
            width={45}
            src="/Image/Delta-Executor-official-logo.webp"
            className="mr-0 h-0 sm:h-9"
            alt="Delta_Executor Logo"
          />
        </span>
        <span className="text-xl">Delta Executor</span>
      </button>
      {/*  </div> */}
      <Drawer open={isOpen} onClose={handleClose} position="right">
        <Drawer.Header title="" />
        <Drawer.Items>
          <div className="gcse-search" data-gname="Delta Executor"></div>
        </Drawer.Items>
      </Drawer>
    </>
  );
}
