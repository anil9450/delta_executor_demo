import Link from "next/link";
import Image from "next/image";
import Popup from "../components/popup";

export default function ContactUs() {
  return (
    <div className="bg-black">
      <h1 className="text-blue-600 text-4xl ml-8 font-bold">Contact Us</h1>

      <div className="mt-4">
        <Popup />
      </div>

      <div className="ml-8 mt-4">
        <p className="text-white mb-2">
          Thank you for visiting
          <Link href="/" className="text-blue-600 ml-1">
            our website.
          </Link>
          <span className="ml-1">
            if you want to contact us, please send email to
            <Link
              className="text-blue-600 ml-1"
              href="#"
              // href="https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox?compose=jrjtXGkPNNhLkdJhjtvpVnTbXMTMzHvWkVHBxmMlNFJzZFbSwqwLcqccrdJPNMLqMvzVRBrR"
            >
              contact.deltaexecutor@gmail.com.
            </Link>
          </span>
          We will reply to you within 24 to 48 hours. Keep visiting
          <Link className="font-bold ml-1" href="#">
            Delta-Executor.com
          </Link>
          .
        </p>
      </div>
    </div>
  );
}
