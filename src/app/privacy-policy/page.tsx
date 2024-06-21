export default function PrivacyPolicy() {
  return (
    <div className="bg-black mb-2">
      <div className="ml-8 mr-8 text-justify">
        <h1 className="text-blue-600 text-4xl ml-8">Privacy Policy</h1>

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
          <h1 className="text-blue-600 text-4xl font-bold">Who we are</h1>
          <p className="text-white">
            Our website address is :{" "}
            <a className="text-blue-600">https://delta-executor.com</a>
          </p>
        </div>

        <div className="ml-8">
          <h1 className="text-blue-600 text-4xl font-bold">Comments</h1>
          <p className="text-white">
            When visitors leave comments on the site we collect the data shown
            in the comments form, and also the visitor’s IP address and browser
            user agent string to help spam detection.
          </p>
          <p className="text-white mt-2">
            An anonymized string created from your email address (also called a
            hash) may be provided to the Gravatar service to see if you are
            using it. The Gravatar service privacy policy is available here:
            https://automattic.com/privacy/. After approval of your comment,
            your profile picture is visible to the public in the context of your
            comment.
          </p>
        </div>

        <div className="ml-8">
          <h1 className="text-blue-600 text-4xl font-bold">Media</h1>
          <p className="text-white">
            If you upload images to the website, you should avoid uploading
            images with embedded location data (EXIF GPS) included. Visitors to
            the website can download and extract any location data from images
            on the website.
          </p>
        </div>

        <div className="ml-8">
          <h1 className="text-blue-600 text-4xl font-bold">Cookies</h1>
          <p className="text-white">
            If you leave a comment on our site you may opt-in to saving your
            name, email address and website in cookies. These are for your
            convenience so that you do not have to fill in your details again
            when you leave another comment. These cookies will last for one
            year.
          </p>
          <p className="text-white mt-2">
            If you visit our login page, we will set a temporary cookie to
            determine if your browser accepts cookies. This cookie contains no
            personal data and is discarded when you close your browser.
          </p>
          <p className="text-white mt-2">
            When you log in, we will also set up several cookies to save your
            login information and your screen display choices. Login cookies
            last for two days, and screen options cookies last for a year. If
            you select “Remember Me”, your login will persist for two weeks. If
            you log out of your account, the login cookies will be removed.
          </p>

          <p className="text-white mt-2">
            If you edit or publish an article, an additional cookie will be
            saved in your browser. This cookie includes no personal data and
            simply indicates the post ID of the article you just edited. It
            expires after 1 day.
          </p>
        </div>

        <div className="ml-8">
          <h1 className="text-blue-600 text-4xl font-bold">
            Embedded content from other websites
          </h1>
          <p className="text-white">
            Articles on this site may include embedded content (e.g. videos,
            images, articles, etc.). Embedded content from other websites
            behaves in the exact same way as if the visitor has visited the
            other website.
          </p>
          <p className="text-white mt-2">
            These websites may collect data about you, use cookies, embed
            additional third-party tracking, and monitor your interaction with
            that embedded content, including tracking your interaction with the
            embedded content if you have an account and are logged in to that
            website.
          </p>
        </div>

        <div className="ml-8">
          <h1 className="text-blue-600 text-4xl font-bold">
            Who we share your data with
          </h1>
          <p className="text-white">
            If you request a password reset, your IP address will be included in
            the reset email.
          </p>
        </div>

        <div className="ml-8">
          <h1 className="text-blue-600 text-4xl font-bold">
            How long we retain your data
          </h1>
          <p className="text-white">
            If you leave a comment, the comment and its metadata are retained
            indefinitely. This is so we can recognize and approve any follow-up
            comments automatically instead of holding them in a moderation
            queue.
          </p>
          <p className="text-white mt-2">
            For users that register on our website (if any), we also store the
            personal information they provide in their user profile. All users
            can see, edit, or delete their personal information at any time
            (except they cannot change their username). Website administrators
            can also see and edit that information.
          </p>
        </div>

        <div className="ml-8">
          <h1 className="text-blue-600 text-4xl font-bold">
            What rights you have over your data
          </h1>
          <p className="text-white">
            If you have an account on this site, or have left comments, you can
            request to receive an exported file of the personal data we hold
            about you, including any data you have provided to us. You can also
            request that we erase any personal data we hold about you. This does
            not include any data we are obliged to keep for administrative,
            legal, or security purposes.
          </p>
        </div>

        <div className="mb-2 ml-8">
          <h1 className="text-blue-600 text-4xl font-bold">
            Where your data is sent
          </h1>
          <p className="text-white">
            Visitor comments may be checked through an automated spam detection
            service.
          </p>
        </div>
      </div>
    </div>
  );
}
