import React from 'react';
import { GuestAppBar } from 'ui/components/templates/layout/appBar/GuestAppBar';
import { HeaderTitle } from 'ui/components/molecules/header/HeaderTitle';
import { Divider } from "ui/components/atoms/Divider";
import { MemberDetail } from 'ui/components/organisms/detail/MemberDetail';
import { Footer } from 'ui/components/templates/layout/Footer';
import { infor } from 'ui/utils/constant/menber';

export default function Member() {
  return (
    <div>
      {/* component import from GuestAppBar */}
      <GuestAppBar />
      {/* component import from HeaderTitle */}
      <HeaderTitle
        title="Learn Today’s Most in-Demand Skills With our Online Courses"
      />
      {/* component import from Divider */}
      <div style={{ paddingLeft: '20%', paddingRight: '20%' }}>
        <Divider />
      </div>
      {/* component import from MemberDetail */}
      <div>
        {infor.map((item, index) => {
          return (
            <MemberDetail
              key={index}
              src={item.src}
              alt={item.alt}
              name={item.name}
              title={item.title}
              desc={item.desc}
            />
          );
        })}
      </div>

      {/* component import from Footer */}
      <Footer />
    </div>
  );
};
