import React from 'react';

export function PeopleTable() {
    return (
        <>
            {/* list information for teacher */}
            <div className="relative overflow-x-auto">
                <div className='p-5 font-bold ...'>Teacher</div>

                <table className="w-full text-sm text-left text-gray-500 ">
                    {/* header title for teacher*/}
                    <thead className="text-xs text-gray-700 bg-gray-50 ">
                        <tr>
                            <th scope="col" className="px-6 py-3">
                                Name
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Gender
                            </th>
                            <th scope="col" className="px-6 py-3">
                                {/* Age */}
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Email
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Phone Number
                            </th>
                        </tr>
                    </thead>
                    {/* list information for teacher*/}
                    <tbody>
                        <tr className="bg-white border-b hover:bg-gray-50 ">
                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                                <div className="flex items-center">
                                    <img src="https://yt3.ggpht.com/S5uh6c6JeVl3FeDhETNo70bbW71Z7JHN--m6Ge_RysuU_2lAMXHc48S-eIE3Jt01WfcFYEbbDU_t=s640-c-fcrop64=1,00001e99ffffe166-nd-v1" className="h-6 mr-6 sm:h-9 rounded-full " alt="profile" />
                                    <span>Mrr. Nak</span>
                                </div>
                            </th>
                            <td className="px-6 py-4">
                                M
                            </td>
                            <td className="px-6 py-4">
                                {/* 19 */}
                            </td>
                            <td className="px-6 py-4">
                                nak.edu@gmail.com
                            </td>
                            <td className="px-6 py-4">
                                012345678
                            </td>
                        </tr>

                    </tbody>
                </table>
            </div>

            {/* list information for students */}

            <div className="relative overflow-x-auto">

                <div className="flex justify-between ... p-5">
                    <div className='font-bold ...'>Classmates</div>
                    <div className='sm:ml-0 md:mr-0 lg:mr-[170px]'>{"3 Students"}</div>
                </div>

                <table className="w-full text-sm text-left text-gray-500 ">
                    {/* header title for students*/}
                    <thead className="text-xs text-gray-700 bg-gray-50 ">
                        <tr>
                            <th scope="col" className="px-6 py-3">
                                Name
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Gender
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Age
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Email
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Phone Number
                            </th>
                        </tr>
                    </thead>
                    {/* list information for students*/}
                    <tbody>
                        <tr className="bg-white border-b  hover:bg-gray-50 ">
                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                                <div className="flex items-center">
                                    <img src="https://yt3.ggpht.com/S5uh6c6JeVl3FeDhETNo70bbW71Z7JHN--m6Ge_RysuU_2lAMXHc48S-eIE3Jt01WfcFYEbbDU_t=s640-c-fcrop64=1,00001e99ffffe166-nd-v1" className="h-6 mr-6 sm:h-9 rounded-full " alt="profile" />
                                    <span>Mrr. Nak</span>
                                </div>
                            </th>
                            <td className="px-6 py-4">
                                M
                            </td>
                            <td className="px-6 py-4">
                                19
                            </td>
                            <td className="px-6 py-4">
                                nak.edu@gmail.com
                            </td>
                            <td className="px-6 py-4">
                                012345678
                            </td>
                        </tr>
                        <tr className="bg-white border-b  hover:bg-gray-50 ">
                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                                <div className="flex items-center">
                                    <img src="https://yt3.ggpht.com/S5uh6c6JeVl3FeDhETNo70bbW71Z7JHN--m6Ge_RysuU_2lAMXHc48S-eIE3Jt01WfcFYEbbDU_t=s640-c-fcrop64=1,00001e99ffffe166-nd-v1" className="h-6 mr-6 sm:h-9 rounded-full " alt="profile" />
                                    <span>Mrr. Nak</span>
                                </div>
                            </th>
                            <td className="px-6 py-4">
                                S
                            </td>
                            <td className="px-6 py-4">
                                19
                            </td>
                            <td className="px-6 py-4">
                                nak.edu@gmail.com
                            </td>
                            <td className="px-6 py-4">
                                012345678
                            </td>
                        </tr>
                        <tr className="bg-white  hover:bg-gray-50">
                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                <div className="flex items-center">
                                    <img src="https://yt3.ggpht.com/S5uh6c6JeVl3FeDhETNo70bbW71Z7JHN--m6Ge_RysuU_2lAMXHc48S-eIE3Jt01WfcFYEbbDU_t=s640-c-fcrop64=1,00001e99ffffe166-nd-v1" className="h-6 mr-6 sm:h-9 rounded-full " alt="profile" />
                                    <span>Mrr. Nak</span>
                                </div>
                            </th>
                            <td className="px-6 py-4">
                                M
                            </td>
                            <td className="px-6 py-4">
                                19
                            </td>
                            <td className="px-6 py-4">
                                nak.edu@gmail.com
                            </td>
                            <td className="px-6 py-4">
                                012345678
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    );
};