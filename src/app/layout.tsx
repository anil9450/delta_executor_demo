import Link from "next/link";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Image from "next/image";
import Script from "next/script";

import { NagivationBar } from "@/app/components/navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Script
        src="https://cse.google.com/cse.js?cx=57aeca2db92a64f5c"
        async
        // strategy="lazyOnload"
        // onLoad={() =>
        //   console.log(`script loaded correctly, window.FB has been populated`)
        // }
      />
      <body className="{inter.className}">
        <div className="max-w-screen-lg mx-auto">
          {/*   <header>
            <nav>
              <div className="">
                <ul className="flex items-center justify-center p-4 bg-black text-white space-x-16 font-bold mb-2">
                  <li className="font-bold text-3xl">
                    <a href="#">Delta Executor</a>
                  </li>
                  <li className="mt-2">
                    <a href="#">Delta Executor Key</a>
                  </li>
                  <li className="mt-2">
                    <a href="#">Delta Executor PC</a>
                  </li>
                  <li className="mt-2">
                    <a href="#">Discord Server</a>
                  </li>
                  <li className="mt-2">
                    <a href="#">Server Status</a>
                  </li>
                </ul>
              </div>
            </nav>
          </header> */}

          <NagivationBar />

          {/* <header className="mb-2">
            <nav className="bg-white border-gray-200 px-4 lg:px-6 lg:py-2.5 md:py-0">
              <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
                <Link href="/" className="flex items-center">
                  <Image
                    height={45}
                    width={45}
                    src="/Image/Delta-Executor-official-logo.webp"
                    className="mr-3 h-6 sm:h-9"
                    alt="Flowbite Logo"
                  />
                  <span
                    className="self-center text-xl font-semibold whitespace-nowrap
                   dark:text-white"
                  >
                    Delta Executor
                  </span>
                </Link>

                <div className="">
                  <button
                    data-collapse-toggle="#mobile-menu-2"
                    type="button"
                    className="inline-flex items-center p-2 ml-1 text-sm 
                    rounded-lg lg:hidden md:hidden focus:outline-none focus:ring-2
                     focus:ring-gray-200"
                    aria-controls="mobile-menu-2"
                    aria-expanded="false"
                  >
                    <span className="sr-only">Open main menu</span>
                    <svg
                      className="w-6 h-6"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                    <svg
                      className="hidden w-6 h-6"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                  </button>
                </div>

                <div
                  className="hidden justify-between items-center w-full lg:flex md:flex md:w-auto lg:w-auto lg:order-1 md:order-1"
                  id="mobile-menu-2"
                >
                  <ul className="flex flex-col mt-4 font-medium lg:flex-row md:flex-row md:mt-1 lg:space-x-8 lg:mt-0">
                    <li>
                      <Link
                        href="key"
                        className="block py-2 pr-4 pl-3 border-b
                         border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent 
                         lg:border-0 lg:hover:text-primary-700 lg:p-0 
                          lg:dark:hover:text-white lg:dark:hover:bg-transparent active:text-blue-500"
                      >
                        Delta Executor Key
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="windows"
                        className="block py-2 pr-4 pl-3 border-b
                         border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent 
                         lg:border-0 lg:hover:text-primary-700 lg:p-0 
                          lg:dark:hover:text-white 
                            lg:dark:hover:bg-transparent active:text-blue-500"
                      >
                        Delta Executor PC
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="discord_server"
                        className="block py-2 pr-4 pl-3 border-b
                         border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent 
                         lg:border-0 lg:hover:text-primary-700 lg:p-0 
                          lg:dark:hover:text-white lg:dark:hover:bg-transparent active:text-blue-500"
                      >
                        Discord Server
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="server_status"
                        className="block py-2 pr-4 pl-3 border-b
                         border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent
                          lg:border-0 lg:hover:text-primary-700 lg:p-0
                           lg:dark:hover:text-white lg:dark:hover:bg-transparent active:text-blue-500"
                      >
                        Server Status
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
          </header> */}

          {children}

          <footer className="bg-white shadow m-0">
            <div
              className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center 
              md:justify-between"
            >
              <span className="text-sm sm:text-center">
                Copyright © 2023 -{" "}
                <Link
                  href="/"
                  className="hover:no-underline hover:text-blue-500 active:text-blue-500 font-bold"
                >
                  Delta Executor
                </Link>{" "}
                All Rights Reserved.
                <Link href="https://www.dmca.com/Protection/Status.aspx?ID=ca0ed467-dc53-4fb2-bbea-caf54c58a9b4&cdnrdr=1&refurl=https://delta-executor.com/">
                  <Image
                    height={50}
                    width={100}
                    src="https://images.dmca.com/Badges/dmca_protected_sml_120n.png?ID=ca0ed467-dc53-4fb2-bbea-caf54c58a9b4"
                    alt="DMCA.com Protection Status"
                    className="mx-auto"
                  />
                </Link>
              </span>

              <ul className="flex flex-wrap items-center mt-3 text-sm font-medium sm:mt-0">
                <li>
                  <Link
                    href="/privacy-policy/"
                    className="hover:no-underline me-4 md:me-6 hover:text-blue-500 active:text-blue-500"
                  >
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact-us/"
                    className="hover:no-underline hover:text-blue-500 active:text-blue-500"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </footer>
        </div>

        <div className="fixed bottom-6 right-6">
          <Link
            href="https://www.buymeacoffee.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-500 text-white font-medium rounded-md px-4 py-2 flex items-center 
            justify-center hover:bg-blue-600 transition duration-300 ease-in-out shadow-lg"
          >
            <span className="text-lg mr-2">☕</span>
            Add a text & Link
          </Link>
          /<div className="gcse-search"></div>
        </div>
      </body>
    </html>
  );
}
