import React from 'react';
import { GuestAppBar } from './../../../packages/ui/components/templates/layout/appBar/GuestAppBar';
import { HeaderTitle } from './../../../packages/ui/components/molecules/header/HeaderTitle';
import { Divider } from "./../../../packages/ui/components/atoms/Divider";
import { Footer } from './../../../packages/ui/components/templates/layout/Footer';
import { Treemenu } from './../../../packages/ui/components/molecules/menu/TreeMenu';

export default function About() {
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
            {/* component import from Treemenu */}
            <div>
                <Treemenu />
            </div>
            {/* component import from Footer */}
            <Footer />
        </div>
    );
};
