import React from "react";
import { UserAppBar, Userdrawer, AccountSecurity, Footer } from "ui";
import { IoMdMenu, IoMdClose } from "react-icons/io";

export default function Accountsecrity() {
  const [isMobile, setIsMobile] = React.useState(false);
  return (
    <div>
      <div>
        <UserAppBar />
      </div>
      <div className="mb-[120px] flex">
        <div className="sm:hidden md:hidden lg:flex">
          <Userdrawer
            profile="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
            name="Mrr: Vann"
            altprofile="Profile"
            email="vann@gmail.com"
            hrefasecurity="./accountSecurity"
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
                className={`${isMobile ? "min-h-[600px]" : "min-h-0"
                  } absolute left-0 right-0 ml-[5px] mt-[5px] flex h-0 w-[460px] flex-col items-center justify-center gap-4 overflow-hidden rounded-lg bg-white shadow-lg transition-all lg:hidden`}
              >
                <div>
                  <Userdrawer
                    profile="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
                    name="Mrr: Vann"
                    altprofile="image Profile"
                    email="vann@gmail.com"
                    hrefasecurity="./accountSecurity"
                  />
                </div>
              </div>
            ) : (
              <div></div>
            )}
          </div>
        </div>
        <div className="ml-[40px] mt-[70px] h-full w-[60%] sm:mx-auto sm:flex md:mx-auto md:flex">
          <AccountSecurity
            title="Account Security"
            desc="Edit your account settings and change your password here."
            email="Email"
            old_password="Old Password"
            new_password="New Password"
            confirm_password="Confirm Password"
            button="Change"
          />
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}
