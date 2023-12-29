import React from 'react';
import { useRouter } from 'next/router';
interface Props {
  src: string;
  title: string;
  desc: string;
}

export default function RecoveryPassword({ src, title, desc }: Props) {
  const router = useRouter();
  return (
    <div className="flex justify-center p-4">
      <div className=" mb-12 md:mb-0 md:w-8/12 lg:w-5/12 xl:ml-20 xl:w-5/12">
        {/* introduction about website */}
        <div className="">
          <div className="... mb-2 flex justify-center">
            <img
              className="... h-20 rounded sm:h-20 "
              src='https://yt3.ggpht.com/T3aH4jLpXB1cRIlbxuecFD2j0coaLpQ_E_u7aAF4296B0O0uam5mKUC3WAxXn3In55lN9hcvJDMhSg=s500-c-fcrop64=1,00000000ffffffff-nd-v1'
              alt="imgLogo"
            />
          </div>
          <h5 className="mb-2 text-center text-xl font-medium uppercase leading-tight  text-gray-900">
            Forgot your password?
          </h5>
          <p className=" mb-4 text-base text-gray-700">
            Enter your email address associated with your account below and we'll send you password reset instructions.
          </p>
        </div>

        {/* form  Forgot your password */}
        <form>
          {/* <!-- Email input --> */}
          <div className="mb-6">
            <div
              style={{ borderBottom: " 1px solid #118AEF" }}
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
            <button
              onClick={() => router.push("/auth/login")}
              className="text-[#118AEF] ml-1 transition duration-200 ease-in-out"
              type='button'
            >
              Sign in
            </button>
          </p>
        </div>
      </div>
    </div>
  );
}







