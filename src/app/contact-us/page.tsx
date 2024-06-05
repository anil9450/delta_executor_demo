export default function ContactUs() {
  return (
    <div className="bg-black">
      <h1 className="text-blue-600 text-4xl ml-8">Contact Us</h1>

      <div className="mt-2">
        <div className="p-24 max-w-4xl mx-auto bg-white rounded-xl shadow-lg flex items-center space-x-4">
          <div className="shrink-0">
            <img
              className="h-12 w-12"
              src="/img/logo.svg"
              alt="ChitChat Logo"
            />
          </div>
          <div>
            <div className="text-xl font-medium text-black">ChitChat</div>
            <p className="text-slate-500">You have a new message!</p>
          </div>
        </div>
      </div>

      <div className="ml-8">
        <p className="text-white mb-2">
          Thank you for visiting
          <a href="#" className="text-blue-600 ml-1">
            our website.
          </a>
          <span className="ml-1">
            if you want to contact us, please send a email to
            <a href="#" className="text-blue-600 ml-1">
              contact.deltaexecutor@gmail.com.
            </a>
          </span>
          We will reply to you within 24 to 48 hours. Keep visiting
          <a className="font-bold ml-1" href="#">
            Delta-Executor.com
          </a>
          .
        </p>
      </div>
    </div>
  );
}
