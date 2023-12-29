import React from 'react';

interface Props {
  src: string;
  title: string;
  desc: string;
}

export function ForgotPassword({ src, title, desc }: Props) {
  return (
    <div className="flex justify-center p-4">
      <div className=" mb-12 md:mb-0 md:w-8/12 lg:w-5/12 xl:ml-20 xl:w-5/12">
        {/* introduction about website */}
        <div className="">
          <div className="... mb-2 flex justify-center">
            <img
              className="... h-20 rounded sm:h-20 "
              src={src}
              alt="imgLogo"
            />
          </div>
          <h5 className="mb-2 text-center text-xl font-medium uppercase leading-tight  text-gray-900">
            {title}
          </h5>
          <p className=" mb-4 text-base text-gray-700">{desc}</p>
        </div>

        {/* form  Forgot your password */}
        <form>
          {/* <!-- Email input --> */}
          <div className="mb-6">
            <div
              style={{ borderBottom: " 1px solid #0D99FF" }}
              className="flex items-center py-2"
            >
              <input
                required
                type="email"
                className="mr-3 w-full appearance-none border-none bg-transparent py-1 px-2 leading-tight text-gray-700 focus:outline-none"
                placeholder="Email address"
              />
            </div>
          </div>

          <div className="text-center lg:text-left">
            <button
              style={{ border: "2px solid #0D99FF" }}
              type="submit"
              className="inline-block w-full rounded-full px-7 py-3 text-sm leading-snug shadow-md hover:shadow-lg"
            >
              Send Recovery Email
            </button>
          </div>
        </form>

        <div>
          <p className="mt-2 mb-0 pt-1 text-sm">
            Just remember? Return to
            <a href="#!" className="ml-1 transition duration-200 ease-in-out">
              Sign in
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
