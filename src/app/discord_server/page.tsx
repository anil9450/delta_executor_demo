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
          Do you want to join the official Delta Executor’s Discord server? If
          your answer is YES then you have come to the right place.
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
      </div>
    </div>
  );
}
