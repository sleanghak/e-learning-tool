import { ReanCode101Logo } from "./../../../atoms/ReanCode101Logo";
import { AccountMenu } from "./../../../molecules/menu/AccountMenu";
import { logo } from "./../../../../utils/constant/logo";
export interface Props {}
export const QuizAppBar = ({}: Props) => {
  return (
    <nav
      style={{ borderTop: "5px solid #118AEF" }}
      className="bg-white p-2 shadow-md"
    >
      <div className="container mx-auto flex flex-wrap items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-3 text-gray-900 ">
          <a href="/home">
            {logo.map((item, index) => {
              return (
                <ReanCode101Logo key={index} src={item.src} alt={item.alt} />
              );
            })}
          </a>
          <div className="hidden max-sm:block sm:block">
            <h5 className="font-sans text-xl">ReanCode101</h5>
            <p className="text-sm">Beginners for the Youngsters</p>
          </div>
        </div>
        {/* AccountMenu */}
        <AccountMenu
          src="https://images.unsplash.com/photo-1544502062-f82887f03d1c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fA%3D%3D&w=1000&q=80"
          alt="avatar"
        />
      </div>
    </nav>
  );
};
