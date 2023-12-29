import React from "react";
import { UserAppBar, Resume, Footer, Userdrawer } from "ui";
import { IoMdMenu, IoMdClose } from "react-icons/io";

export default function Resum() {
  const [isMobile, setIsMobile] = React.useState(false);
  return (
    <div>
      <div>
        <UserAppBar />
      </div>
      <div className="mb-[140px] flex">
        <div className="sm:hidden md:hidden lg:flex">
          <Userdrawer
            profile="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
            name="Mrr: Vann"
            altprofile="Profile"
            email="vann@gmail.com"
            hrefcv="./resume"
          />
        </div>
        <div>
          <div
            onClick={() => setIsMobile(!isMobile)}
            className="absolute top-[12%] z-20 sm:flex md:flex lg:hidden"
          >
            {isMobile ? (
              <IoMdClose size={45} className="ml-[10px] mr-0 cursor-pointer" />
            ) : (
              <IoMdMenu size={45} className="ml-[10px] mr-0 cursor-pointer" />
            )}
          </div>
          <div>
            {isMobile ? (
              <div
                className={`${
                  isMobile ? "min-h-[600px]" : "min-h-0"
                } absolute left-0 right-0 z-10 ml-[5px] mt-[5px] flex h-0 w-[460px] flex-col items-center justify-center gap-4 overflow-hidden rounded-lg bg-white shadow-lg transition-all lg:hidden`}
              >
                <div>
                  <Userdrawer
                    profile="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
                    name="Mrr: Vann"
                    altprofile="Profile"
                    email="vann@gmail.com"
                    hrefcv="./resume"
                  />
                </div>
              </div>
            ) : (
              <div></div>
            )}
          </div>
        </div>
        <div className="mt-[30px] h-[100%] w-[70%] sm:mx-auto md:mx-auto lg:ml-[5px]">
          <Resume
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUp7JTYB2Pk20BDxVsmHlGsLYmqrcF9QYtmjiBsU9i5xiYomSlrDeCYUT1R3bPwitC7wE&usqp=CAU"
            alt="profile"
          />
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}
