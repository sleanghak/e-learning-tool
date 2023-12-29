import { useState } from "react";
import { useRouter } from 'next/router';

interface Props {
  src: string;
  alt?: string;
  name?: string;
  email?: string;
}

export function AccountMenu({ src, alt, name, email }: Props) {
  const router = useRouter();
  const [isProfile, setIsProfile] = useState(false);
  return (
    <div>
      {/* Avatar Button Account*/}
      <button
        onClick={() => setIsProfile(!isProfile)}
        className="mx-3 flex rounded-full bg-gray-800 text-sm focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600 md:mr-0"
        type="button"
      >
        <img className="h-[40px] w-[40px] rounded-full" src={src} alt={alt} />
      </button>
      {isProfile ? (
        <div className="absolute top-[10vh] right-[2%] z-50 w-56 divide-y divide-gray-100 rounded bg-white shadow dark:divide-gray-600 dark:bg-gray-700">
          {/* Avatar Account */}
          <div className="flex items-center space-x-4 py-3 px-4 text-sm text-gray-900 dark:text-white">
            <img
              className="h-8 w-8 rounded-full"
              src="https://images.unsplash.com/photo-1511367461989-f85a21fda167?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmlsZXxlbnwwfHwwfHw%3D&w=1000&q=80"
              alt=""
            />
            <div>
              <h5 className="truncate font-medium">{name}</h5>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                {email}
              </p>
            </div>
          </div>
          {/* Account Menu */}
          <ul
            className="py-1 text-sm text-gray-700 dark:text-gray-200"
            aria-labelledby="dropdownUserAvatarButton"
          >
            <li>
              <div
                className="flex items-center py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
              >
                <img
                  className="mr-4 h-5 w-5"
                  src="https://cdn-icons-png.flaticon.com/512/833/833281.png"
                  alt="icon"
                />
                <button
                  className="truncate font-medium text-white"
                  type="button"
                  onClick={() => router.push("/post")}
                >
                  Post
                </button>

              </div>
            </li>
            <li>
              <div
                className="flex items-center py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
              >
                <img
                  className="mr-4 h-5 w-5"
                  src="https://cdn-icons-png.flaticon.com/512/6771/6771009.png"
                  alt="icon"
                />
                <span className="mr-12 truncate font-medium">Dark mode</span>
                <div>
                  <label className="relative inline-flex w-full cursor-pointer items-center">
                    <input type="checkbox" value="" className="peer sr-only" />
                    <div className="peer h-5 w-9 rounded-full bg-gray-200 after:absolute after:top-[2px] after:left-[2px] after:h-4 after:w-4 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:bg-blue-600 peer-checked:after:translate-x-full peer-checked:after:border-white peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:border-gray-500 dark:bg-gray-600 dark:peer-focus:ring-blue-800"></div>
                  </label>
                </div>
              </div>
            </li>
            <li>
              <div
                className="flex items-center py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
              >
                <img
                  className="mr-4 h-5 w-5"
                  src="https://cdn-icons-png.flaticon.com/512/9206/9206749.png"
                  alt="icon"
                />

                <button
                  className="truncate font-medium text-white"
                  type="button"
                  onClick={() => router.push("/setting/personAccount")}
                >
                  Settings
                </button>

              </div>
            </li>
          </ul>
          <div className="py-1">
            <div

              className="flex items-center py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
            >
              <img
                className="mr-4 h-5 w-5"
                src="https://cdn-icons-png.flaticon.com/512/9121/9121688.png"
                alt="icon"
              />
              <button
                className="truncate font-medium text-white"
                type="button"
                onClick={() => router.push("/auth/login")}
              >
                Logout
              </button>

            </div>
          </div>
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
}
