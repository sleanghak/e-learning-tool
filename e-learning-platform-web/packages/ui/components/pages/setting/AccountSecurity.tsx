interface Props {
  title: string;
  desc: string;
  email: string;
  old_password: string;
  new_password: string;
  confirm_password: string;
  button: string;
}
export default function AccountSecurity({
  title,
  desc,
  email,
  old_password,
  new_password,
  confirm_password,
  button,
}: Props) {
  return (
    <div className="flex w-full justify-center">
      <div className="p-2 text-center">
        <p className="text-black-900 mb-2 font-sans text-xl capitalize">
          {title}
        </p>
        <h5 className="mb-2 font-sans text-sm text-gray-900">{desc}</h5>

        <form className="... w-[600px] p-2">
          <div className="flex items-center border-b border-teal-500 py-2">
            <input
              className="mr-3 w-full appearance-none border-none bg-transparent py-1 px-6 leading-tight text-gray-700 focus:outline-none"
              type="email"
              placeholder={email}
            ></input>
          </div>
          <br></br>
          <div className="flex items-center border-b border-teal-500 py-2">
            <input
              className="mr-3 w-full appearance-none border-none bg-transparent py-1 px-6 leading-tight text-gray-700 focus:outline-none"
              type="password"
              placeholder={old_password}
            ></input>
          </div>
          <br></br>
          <div className="flex items-center border-b border-teal-500 py-2">
            <input
              className="mr-3 w-full appearance-none border-none bg-transparent py-1 px-6 leading-tight text-gray-700 focus:outline-none"
              type="password"
              placeholder={new_password}
            ></input>
          </div>
          <br></br>
          <div className="flex items-center border-b border-teal-500 py-2">
            <input
              className="mr-3 w-full appearance-none border-none bg-transparent py-1 px-6 leading-tight text-gray-700 focus:outline-none"
              type="password"
              placeholder={confirm_password}
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
