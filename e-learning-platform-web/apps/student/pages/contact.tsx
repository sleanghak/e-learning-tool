import React from "react";
import { Footer } from './../../../packages/ui/components/templates/layout/Footer';
import { GuestAppBar } from "./../../../packages/ui/components/templates/layout/appBar/GuestAppBar";
import { HeaderTitle } from "./../../../packages/ui/components/molecules/header/HeaderTitle";
import { Divider } from "./../../../packages/ui/components/atoms/Divider";
import { IconTypography } from "./../../../packages/ui/components/molecules/typography/IconTypography";
import {
  contact,
  titleCon,
  typographyCon,
} from "./../../../packages/ui/utils/constant/contact";
import { Map } from "./../../../packages/ui/components/atoms/iframe/Map";
import { Title } from "./../../../packages/ui/components/atoms/typography/Title";
import { Typography } from "./../../../packages/ui/components/atoms/typography/Typography";

const Contact = () => {
  return (
    <div>
      {/* navbar */}
      <GuestAppBar />
      {/* header */}
      <HeaderTitle title="Learn Today’s Most in-Demand Skills With our Online Courses" />
      {/* divider */}
      <div style={{ paddingLeft: "20%", paddingRight: "20%" }}>
        <Divider />
      </div>
      {/* content */}

      <div className="mx-auto max-w-6xl px-5">
        <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
          {/* contact */}
          <div>
            <div>
              <p className="text-base font-medium uppercase text-gray-900">
                you can contact us by
              </p>
            </div>
            {contact.map((item, index) => {
              return (
                <IconTypography
                  key={index}
                  icon={item.icon}
                  alt={item.alt}
                  title={item.title}
                />
              );
            })}
          </div>
          {/* Map */}
          <div>
            <Map />
          </div>
        </div>
      </div>
      <br />

      {/* title */}
      <div className="p-2 text-center">
        <div>
          {titleCon.map((item, index) => {
            return <Title key={index} children={item.children} />;
          })}
        </div>
        <br />
        <div>
          {typographyCon.map((item, index) => {
            return <Typography key={index} children={item.children} />;
          })}
        </div>
      </div>
      <br />

      <div className="mx-auto max-w-6xl px-5">
        <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
          <div>
            <div
              style={{
                width: "60%",
                height: "100%",
                margin: "0 auto",
                backgroundImage: `url('https://yt3.ggpht.com/6SrsiXYIIoJ8-Mda4MKG-D_qpX6RdGdqB1hPKA3h0_7zF5N8skV6VORJYtCbVA337Anydh8wuRrM7Js=s640-c-fcrop64=1,007e0000ff81ffff-nd-v1')`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
              }}
            />
          </div>

          <div>
            <form>
              {/* <!-- Full Name input --> */}
              <div className="mb-4">
                <div
                  style={{ borderBottom: " 1px solid #118AEF" }}
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
                  style={{ borderBottom: " 1px solid #118AEF" }}
                  className="flex items-center py-2"
                >
                  <input
                    required
                    type="email"
                    className="mr-3 w-full appearance-none border-none bg-transparent py-1 px-2 leading-tight text-gray-700 focus:outline-none"
                    placeholder="Email"
                  />
                </div>
              </div>

              <div className=" mb-4">
                <div
                  style={{ borderBottom: " 1px solid #118AEF" }}
                  className="flex items-center py-2"
                >
                  <select className="mr-3 w-full appearance-none border-none bg-transparent py-1 px-2 leading-tight text-gray-700 focus:outline-none">
                    <option selected>Choose a subjects</option>
                    <option value="Web Development">Web Development</option>
                    <option value="Mobile Development">Mobile Development</option>
                  </select>
                </div>
              </div>

              {/* Message */}
              <div className="form-group mb-6">
                <textarea
                  className="
        m-0
        block
        w-full
        rounded
        border
        border-solid
        border-gray-300
        bg-white bg-clip-padding
        px-3 py-1.5 text-base
        font-normal
        text-gray-700
        transition
        ease-in-out
        focus:border-blue-600 focus:bg-white focus:text-gray-700 focus:outline-none
      "
                  required
                  rows="8"
                  placeholder="Message"
                ></textarea>
              </div>
              {/* button */}
              <button
                type="submit"
                className="bg-[#118AEF] mb-6 inline-block rounded-full px-7 py-3 text-sm leading-snug text-white shadow-md hover:shadow-lg"
              >
                Send Messenger
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* footer */}
      <Footer />
    </div>
  );
};

export default Contact;
