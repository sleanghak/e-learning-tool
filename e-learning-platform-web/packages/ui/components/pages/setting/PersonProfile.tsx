interface Props {
  title: string;
  desc: string;
  src: string;
  alt?: string;
  name: string;
  email: string;
  tel: string;
  bio: string;
  button: string;
}

export default function PersonProfile({
  title,
  desc,
  src,
  alt,
  name,
  email,
  tel,
  bio,
  button,
}: Props) {
  return (
    <div className="flex justify-center">
      <div className="p-2 text-center">
        <p className="text-black-900 mb-2 font-sans text-xl capitalize">
          {title}
        </p>
        <h5 className="mb-2 font-sans text-sm text-gray-900">{desc}</h5>
        <img src={src} className=" mx-auto mb-4 w-32 rounded-full" alt={alt} />
        <form className="... w-[600px] p-2">
          <div className="flex items-center border-b border-teal-500 py-2">
            <div>
              <svg
                className="h-5 w-5 text-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                />
              </svg>
            </div>
            <input
              className="mr-3 w-full appearance-none border-none bg-transparent py-1 px-6 leading-tight text-gray-700 focus:outline-none"
              type="text"
              placeholder={name}
              aria-label="Full name"
            ></input>
            <div>
              <svg
                className="h-5 w-5 text-gray-400"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                stroke-width="2"
                stroke="currentColor"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" />
                <path d="M4 20h4l10.5 -10.5a1.5 1.5 0 0 0 -4 -4l-10.5 10.5v4" />
                <line x1="13.5" y1="6.5" x2="17.5" y2="10.5" />
              </svg>
            </div>
          </div>
          <br></br>
          <div className="flex items-center border-b border-teal-500 py-2">
            <div>
              <svg
                className="h-5 w-5 text-gray-400"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                stroke-width="2"
                stroke="currentColor"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" />{" "}
                <rect x="3" y="5" width="18" height="14" rx="2" />{" "}
                <polyline points="3 7 12 13 21 7" />
              </svg>
            </div>
            <input
              className="mr-3 w-full appearance-none border-none bg-transparent py-1 px-6 leading-tight text-gray-700 focus:outline-none"
              type="email"
              placeholder={email}
            ></input>
            <div>
              <svg
                className="h-5 w-5 text-gray-400"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                stroke-width="2"
                stroke="currentColor"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" />
                <path d="M4 20h4l10.5 -10.5a1.5 1.5 0 0 0 -4 -4l-10.5 10.5v4" />
                <line x1="13.5" y1="6.5" x2="17.5" y2="10.5" />
              </svg>
            </div>
          </div>
          <br></br>
          <div className="flex items-center border-b border-teal-500 py-2">
            <div>
              <svg
                className="h-5 w-5 text-gray-400"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
            </div>
            <input
              className="mr-3 w-full appearance-none border-none bg-transparent py-1 px-6 leading-tight text-gray-700 focus:outline-none"
              type="tel"
              placeholder={tel}
            ></input>
            <div>
              <svg
                className="h-5 w-5 text-gray-400"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                stroke-width="2"
                stroke="currentColor"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" />
                <path d="M4 20h4l10.5 -10.5a1.5 1.5 0 0 0 -4 -4l-10.5 10.5v4" />
                <line x1="13.5" y1="6.5" x2="17.5" y2="10.5" />
              </svg>
            </div>
          </div>
          <br></br>
          <div className="flex justify-start">
            <p className="text-black-900 mb-2 font-sans text-sm ">Bio</p>
          </div>
          <div className="flex items-center border-b border-teal-500 py-2">
            <input
              className="mr-3 w-full appearance-none border-none bg-transparent py-1 px-6 leading-tight text-gray-700 focus:outline-none"
              type="text"
              placeholder={bio}
            ></input>
          </div>
          <br></br>
          <div className="flex justify-center space-x-2">
            <button
              type="button"
              data-mdb-ripple="true"
              data-mdb-ripple-color="light"
              className="inline-block rounded-full bg-blue-700 px-6 py-2.5 text-xs font-medium uppercase leading-tight text-white shadow-md transition duration-150 ease-in-out hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg"
            >
              {button}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
