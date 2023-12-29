interface Props {
  src: string;
  title: string;
  desc: string;
}

export function SignUp({ src, title, desc }: Props) {
  return (
    <div className="flex justify-center p-4">
      <div className=" mb-12 md:mb-0 md:w-8/12 lg:w-5/12 xl:ml-20 xl:w-5/12">
        {/* introduction about website */}
        <div className="">
          <div className="... mb-2 flex justify-center">
            <img className="h-20 rounded sm:h-20 " src={src} alt="imgLogo" />
          </div>
          <h5 className="mb-2 text-center text-xl font-medium uppercase leading-tight  text-gray-900">
            {title}
          </h5>
          <p className=" mb-2 text-base text-gray-700">{desc}</p>
        </div>

        {/* form signup */}
        <form>
          <div className="flex flex-row items-center justify-center lg:justify-start">
            <a
              style={{ border: "2px solid #0D99FF" }}
              className="flex w-full items-center justify-center rounded-full px-7  py-3 text-sm shadow-md hover:shadow-lg"
              href="#!"
              role="button"
              data-mdb-ripple="true"
              data-mdb-ripple-color="light"
            >
              {/* <!-- Google --> */}
              <img
                className="mr-2 h-5 w-5"
                src="https://cdn-icons-png.flaticon.com/512/2504/2504739.png"
                alt="img"
              />
              <span>Continue With Google</span>
            </a>
          </div>
          {/* Or */}
          <div className="my-4 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-gray-300 after:mt-0.5 after:flex-1 after:border-t after:border-gray-300">
            <p className="mx-4  mb-0 text-center font-semibold text-gray-500">
              Or
            </p>
          </div>

          {/* <!-- Full Name input --> */}
          <div className="mb-4">
            <div
              style={{ borderBottom: " 1px solid #0D99FF" }}
              className="flex items-center py-2"
            >
              <input
                required
                type="text"
                className="mr-3 w-full appearance-none border-none bg-transparent py-1 px-2 leading-tight text-gray-700 focus:outline-none"
                placeholder="Full Name"
              />
            </div>
          </div>

          {/* <!-- Email input --> */}
          <div className="mb-4">
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

          {/* <!-- Password input --> */}
          <div className="mb-4">
            <div
              style={{ borderBottom: " 1px solid #0D99FF" }}
              className="flex items-center py-2"
            >
              <input
                required
                type="password"
                className="mr-3 w-full appearance-none border-none bg-transparent py-1 px-2 leading-tight text-gray-700 focus:outline-none"
                placeholder="Password"
              />
            </div>
          </div>

          <div className="text-center lg:text-left">
            <button
              style={{ border: "2px solid #0D99FF" }}
              type="submit"
              className="inline-block w-full rounded-full px-7 py-3 text-sm leading-snug shadow-md hover:shadow-lg"
            >
              Sign up
            </button>
          </div>
        </form>

        <p className="mt-2 mb-0 pt-1 text-sm">
          You already have account?
          <a href="#!" className="ml-1 transition duration-200 ease-in-out">
            Sign in
          </a>
        </p>
      </div>
    </div>
  );
}
