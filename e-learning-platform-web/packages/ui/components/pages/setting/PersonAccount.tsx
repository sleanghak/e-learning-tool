interface Props {}

export default function PersonAccount({}: Props) {
  return (
    <div className="p-4">
      <div className="mb-4 text-center">
        <h5 className="text-xl font-medium text-gray-500">Personal Account</h5>
        <p className="mb-4 text-base font-normal text-gray-500">
          Add information about yourself
        </p>
      </div>
      <form>
        {/* input Full Name */}
        <div className="relative mb-4">
          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
            <svg
              className="h-5 w-5 text-gray-500 "
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
          <div
            style={{ borderBottom: " 1px solid #0D99FF" }}
            className="flex items-center py-2"
          >
            <input
              required
              type="text"
              className=" mr-3 w-full appearance-none border-none bg-transparent p-2.5 py-1 px-2 pl-10 leading-tight text-gray-700 focus:outline-none"
              placeholder="Full name"
            />
          </div>
        </div>
        {/* input Email */}
        <div className="relative mb-4">
          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
            <svg
              className="h-5 w-5 text-gray-500 dark:text-gray-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
          </div>
          <div
            style={{ borderBottom: " 1px solid #0D99FF" }}
            className="flex items-center py-2"
          >
            <input
              required
              type="email"
              className=" mr-3 w-full appearance-none border-none bg-transparent p-2.5 py-1 px-2 pl-10 leading-tight text-gray-700 focus:outline-none"
              placeholder="Email"
            />
          </div>
        </div>
        {/* input Student ID */}
        <div className="relative mb-4">
          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
            <svg
              className="h-5 w-5 text-gray-500 dark:text-gray-400"
              viewBox="0 0 24 24"
              stroke-width="2"
              stroke="currentColor"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              {" "}
              <path stroke="none" d="M0 0h24v24H0z" />{" "}
              <rect x="3" y="4" width="18" height="16" rx="3" />{" "}
              <circle cx="9" cy="10" r="2" />{" "}
              <line x1="15" y1="8" x2="17" y2="8" />{" "}
              <line x1="15" y1="12" x2="17" y2="12" />{" "}
              <line x1="7" y1="16" x2="17" y2="16" />
            </svg>
          </div>
          <div
            style={{ borderBottom: " 1px solid #0D99FF" }}
            className="flex items-center py-2"
          >
            <input
              required
              type="number"
              className=" mr-3 w-full appearance-none border-none bg-transparent p-2.5 py-1 px-2 pl-10 leading-tight text-gray-700 focus:outline-none"
              placeholder="Student ID"
            />
          </div>
        </div>
        {/* input Date of birth */}
        <div className="relative mb-4">
          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
            <svg
              className="h-5 w-5 text-gray-500 dark:text-gray-400"
              viewBox="0 0 24 24"
              stroke-width="2"
              stroke="currentColor"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              {" "}
              <path stroke="none" d="M0 0h24v24H0z" />{" "}
              <rect x="4" y="5" width="16" height="16" rx="2" />{" "}
              <line x1="16" y1="3" x2="16" y2="7" />{" "}
              <line x1="8" y1="3" x2="8" y2="7" />{" "}
              <line x1="4" y1="11" x2="20" y2="11" />{" "}
              <rect x="8" y="15" width="2" height="2" />
            </svg>
          </div>
          <div
            style={{ borderBottom: " 1px solid #0D99FF" }}
            className="flex items-center py-2"
          >
            <input
              required
              type="text"
              className=" mr-3 w-full appearance-none border-none bg-transparent p-2.5 py-1 px-2 pl-10 leading-tight text-gray-700 focus:outline-none"
              placeholder="Date of birth"
            />
          </div>
        </div>
        {/* selected Gender */}
        <div className="relative mb-4">
          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
            <svg
              className="h-5 w-5 text-gray-500 dark:text-gray-400"
              viewBox="0 0 24 24"
              stroke-width="2"
              stroke="currentColor"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              {" "}
              <path stroke="none" d="M0 0h24v24H0z" />{" "}
              <circle cx="7" cy="18" r="2" /> <circle cx="7" cy="6" r="2" />{" "}
              <circle cx="17" cy="12" r="2" />{" "}
              <line x1="7" y1="8" x2="7" y2="16" />{" "}
              <path d="M7 8a4 4 0 0 0 4 4h4" />
            </svg>
          </div>
          <div
            style={{ borderBottom: " 1px solid #0D99FF" }}
            className="flex items-center py-2"
          >
            <select className="mr-3 w-full appearance-none border-none bg-transparent p-2.5 py-1 px-2 pl-10 leading-tight text-gray-700 focus:outline-none">
              <option selected>Choose a gender</option>
              <option value="M">Male</option>
              <option value="F">Female</option>
              <option value="O">Other</option>
            </select>
          </div>
        </div>
        {/* input Job/Career*/}
        <div className="relative mb-4">
          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
            <svg
              className="h-5 w-5 text-gray-500 dark:text-gray-400"
              viewBox="0 0 24 24"
              stroke-width="2"
              stroke="currentColor"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              {" "}
              <path stroke="none" d="M0 0h24v24H0z" />{" "}
              <rect x="3" y="7" width="18" height="13" rx="2" />{" "}
              <path d="M8 7v-2a2 2 0 0 1 2 -2h4a2 2 0 0 1 2 2v2" />{" "}
              <line x1="12" y1="12" x2="12" y2="12.01" />{" "}
              <path d="M3 13a20 20 0 0 0 18 0" />
            </svg>
          </div>
          <div
            style={{ borderBottom: " 1px solid #0D99FF" }}
            className="flex items-center py-2"
          >
            <input
              required
              type="text"
              className=" mr-3 w-full appearance-none border-none bg-transparent p-2.5 py-1 px-2 pl-10 leading-tight text-gray-700 focus:outline-none"
              placeholder="Job/Career"
            />
          </div>
        </div>
        {/* input YouTube*/}
        <div className="relative mb-4">
          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
            <svg
              className="h-5 w-5 text-gray-500 dark:text-gray-400"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              {" "}
              <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z" />{" "}
              <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" />
            </svg>
          </div>
          <div
            style={{ borderBottom: " 1px solid #0D99FF" }}
            className="flex items-center py-2"
          >
            <input
              required
              type="text"
              className=" mr-3 w-full appearance-none border-none bg-transparent p-2.5 py-1 px-2 pl-10 leading-tight text-gray-700 focus:outline-none"
              placeholder="YouTube"
            />
          </div>
        </div>
        {/* input Linkedin*/}
        <div className="relative mb-4">
          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
            <svg
              className="h-5 w-5 text-gray-500 dark:text-gray-400"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              {" "}
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />{" "}
              <rect x="2" y="9" width="4" height="12" />{" "}
              <circle cx="4" cy="4" r="2" />
            </svg>
          </div>
          <div
            style={{ borderBottom: " 1px solid #0D99FF" }}
            className="flex items-center py-2"
          >
            <input
              required
              type="text"
              className=" mr-3 w-full appearance-none border-none bg-transparent p-2.5 py-1 px-2 pl-10 leading-tight text-gray-700 focus:outline-none"
              placeholder="Linked In"
            />
          </div>
        </div>
        {/* input Facebook*/}
        <div className="relative mb-4">
          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
            <svg
              className="h-5 w-5 text-gray-500 dark:text-gray-400"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              {" "}
              <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
            </svg>
          </div>
          <div
            style={{ borderBottom: " 1px solid #0D99FF" }}
            className="flex items-center py-2"
          >
            <input
              required
              type="text"
              className=" mr-3 w-full appearance-none border-none bg-transparent p-2.5 py-1 px-2 pl-10 leading-tight text-gray-700 focus:outline-none"
              placeholder="Facebook"
            />
          </div>
        </div>
        {/* input Telegram*/}
        <div className="relative mb-4">
          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
            <svg
              className="h-5 w-5 text-gray-500 dark:text-gray-400"
              viewBox="0 0 24 24"
              stroke-width="2"
              stroke="currentColor"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              {" "}
              <path stroke="none" d="M0 0h24v24H0z" />{" "}
              <path d="M15 10l-4 4l6 6l4 -16l-18 7l4 2l2 6l3 -4" />
            </svg>
          </div>
          <div
            style={{ borderBottom: " 1px solid #0D99FF" }}
            className="flex items-center py-2"
          >
            <input
              required
              type="text"
              className=" mr-3 w-full appearance-none border-none bg-transparent p-2.5 py-1 px-2 pl-10 leading-tight text-gray-700 focus:outline-none"
              placeholder="Telegram"
            />
          </div>
        </div>
        {/* button save*/}
        <div className="... flex justify-center">
          <button
            style={{ backgroundColor: "#0D99FF" }}
            type="submit"
            className="inline-block rounded-full px-7 py-3 text-sm leading-snug text-white shadow-md hover:shadow-lg"
          >
            Save
          </button>
        </div>
      </form>
    </div>
  );
}
