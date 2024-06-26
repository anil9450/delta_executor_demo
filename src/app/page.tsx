import Image from "next/image";
import Link from "next/link";
import Button from "./components/button";
import Button2 from "./components/button2";
import Popup from "./components/popup";

export default function Home() {
  return (
    <>
      <main className="">
        <div className="max-w-screen-lg mx-auto">
          <div className="middle-part bg-black text-white mb-2 p-8">
            <div>
              <Popup />
            </div>
            <span className="font-bold text-4xl flex items-center justify-center mt-8">
              Delta Executor
            </span>
            <div className="mt-6 flex items-center justify-center">
              <Link
                href="android"
                className="bg-[#0054ae] p-3 rounded-lg w-full max-w-52 mx-3 hover:bg-sky-300 hover:text-black"
              >
                <span className="flex space-x-4 items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="1em"
                    viewBox="0 0 576 512"
                    className="mt-1 fill-current hover:fill-current hover:text-black"
                  >
                    <path d="M420.55,301.93a24,24,0,1,1,24-24,24,24,0,0,1-24,24m-265.1,0a24,24,0,1,1,24-24,24,24,0,0,1-24,24m273.7-144.48,47.94-83a10,10,0,1,0-17.27-10h0l-48.54,84.07a301.25,301.25,0,0,0-246.56,0L116.18,64.45a10,10,0,1,0-17.27,10h0l47.94,83C64.53,202.22,8.24,285.55,0,384H576c-8.24-98.45-64.54-181.78-146.85-226.55"></path>
                  </svg>
                  <span className="font-bold text-xl">Android</span>
                </span>
              </Link>

              <Link
                className="bg-[#0054ae] p-3 rounded-lg w-full max-w-52 mx-3 hover:bg-sky-300 hover:text-black"
                href="windows"
              >
                <span className="flex space-x-4 items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="1em"
                    viewBox="0 0 448 512"
                    className="mt-1 fill-current hover:fill-current hover:text-black"
                  >
                    <path d="M0 93.7l183.6-25.3v177.4H0V93.7zm0 324.6l183.6 25.3V268.4H0v149.9zm203.8 28L448 480V268.4H203.8v177.9zm0-380.6v180.1H448V32L203.8 65.7z"></path>
                  </svg>
                  <span className="font-bold text-xl">Windows</span>
                </span>
              </Link>
            </div>

            <div className="mt-8">
              <Popup />
            </div>

            <div className="flex items-center justify-center mt-8">
              <Link
                className="font-bold text-xl flex items-center justify-center space-x-4 bg-[#0054ae] p-3 rounded-lg w-full max-w-72 hover:bg-sky-300 hover:text-black"
                href="key"
              >
                <svg
                  viewBox="0 0 512 512"
                  width="16"
                  height="16"
                  xmlns="http://www.w3.org/2000/svg"
                  className="mt-1 fill-current hover:fill-current hover:text-black"
                >
                  <path d="M336 352c97.2 0 176-78.8 176-176S433.2 0 336 0S160 78.8 160 176c0 18.7 2.9 36.8 8.3 53.7L7 391c-4.5 4.5-7 10.6-7 17v80c0 13.3 10.7 24 24 24h80c13.3 0 24-10.7 24-24V448h40c13.3 0 24-10.7 24-24V384h40c6.4 0 12.5-2.5 17-7l33.3-33.3c16.9 5.4 35 8.3 53.7 8.3zM376 96a40 40 0 1 1 0 80 40 40 0 1 1 0-80z"></path>
                </svg>
                <span className="font-bold text-xl">Delta Key</span>
              </Link>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
