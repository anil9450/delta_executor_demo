import Link from "next/link";
import Image from "next/image";
import Popup from "../components/popup";

export default function Discord_Server() {
  return (
    <div className="bg-black mb-2">
      <div className="ml-8 mr-8">
        <h1 className="text-blue-600 font-bold text-center text-4xl">
          Delta Executor Discord Server Link (June 2024)
        </h1>

        <p className="mt-4">
          <Popup />
        </p>

        <p className="text-white mt-4">
          Do you want to join the official Delta Executor’s{" "}
          <Link className="text-blue-600 " href="#">
            Discord
          </Link>{" "}
          server ? If your answer is YES then you have come to the right place.
        </p>
        <p className="text-white mt-4">
          There are tons of users who use{" "}
          <Link className="text-blue-600 font-bold" href="#">
            Delta exploit to run Blox Fruits scripts
          </Link>{" "}
          or other scripts are currently searching for its Discord server
          because the executor is currently not working properly.
        </p>

        <p className="text-white mt-4">
          Notably, the devs of Delta Executor often take its server down to roll
          out new update. Whenever they put its server on maintenance, players
          get an error that says
          <Link className="text-blue-600 font-bold ml-1" href="#">
            ‘Roblox Upgrade’ whenever they launch Delta Executor on a Mobile
            device.
          </Link>
        </p>

        <p className="text-white mt-4">
          Irrespective of what problem you are facing while downloading,
          installing or using{" "}
          <Link className="text-blue-600 font-bold ml-1" href="#">
            Delta Exploit on a Mobile
          </Link>{" "}
          or PC, you could find its answer on its official Discord server.
        </p>

        <p className="text-white mt-4">
          Since our website is dedicated to Delta Executor, we try our best to
          help users as better as possible.
        </p>

        <p className="text-white mt-4">
          If you want to stay updated about the development of Delta Executor,
          click on the following link and join its Discord server.
        </p>

        <p className="text-white mt-4">
          I hope, this post helped you find the correct Discord server of Delta
          Exploit.
        </p>

        <Link
          className="bg-blue-600 p-1 font-bold text-white flex rounded mb-2 mt-4"
          href="/blog"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width="25"
            height="25"
            viewBox="0 0 50 50"
          >
            <path d="M 5 4 C 3.346 4 2 5.346 2 7 L 2 13 L 3 13 L 47 13 L 48 13 L 48 11 C 48 9.346 46.654 8 45 8 L 18.044922 8.0058594 C 17.765922 7.9048594 17.188906 6.9861875 16.878906 6.4921875 C 16.111906 5.2681875 15.317 4 14 4 L 5 4 z M 3 15 C 2.448 15 2 15.448 2 16 L 2 43 C 2 44.657 3.343 46 5 46 L 45 46 C 46.657 46 48 44.657 48 43 L 48 16 C 48 15.448 47.552 15 47 15 L 3 15 z"></path>
          </svg>
          <span className="pl-2">Blog / Home</span>
        </Link>
      </div>
    </div>
  );
}
