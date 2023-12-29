import React from 'react';
import { GuestAppBar } from 'ui/components/templates/layout/appBar/GuestAppBar';
import { HeaderTitle } from 'ui/components/molecules/header/HeaderTitle';
import { Divider } from "ui/components/atoms/Divider";
import { StudentDetail } from 'ui/components/organisms/detail/StudentDetail';
import { infor } from 'ui/utils/constant/student';
import { Footer } from 'ui/components/templates/layout/Footer';

export default function Student() {
   
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
            {/* component import from StudentDetail */}
            <div>
                {infor.map((item, index) => {
                    return (
                        <StudentDetail
                            key={index}
                            src={item.src}
                            alt={item.alt}
                            dob={item.dob}
                            name={item.name}
                            job={item.job}
                            course={item.course}
                            tech={item.tech}
                            twr={item.twr}
                            ms={item.ms}
                            href={item.href}
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
