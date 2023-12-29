import React from 'react';


export function InputMessage() {
    return (
        <><br /><br />
            <div className="flex items-center">
                <img
                    src="https://yt3.ggpht.com/S5uh6c6JeVl3FeDhETNo70bbW71Z7JHN--m6Ge_RysuU_2lAMXHc48S-eIE3Jt01WfcFYEbbDU_t=s640-c-fcrop64=1,00001e99ffffe166-nd-v1"
                    className=" mr-6 h-10 rounded-full "
                    alt="profile"
                />
                <div className="relative w-full">
                    <input type="text"
                        className=" bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-full  block w-full pl-10 p-2.5  "
                        placeholder="Write a comment..."
                        required
                    />
                    <button type="button" className="absolute inset-y-0 right-0 flex items-center pr-3">
                        <img className="w-5 h-5" src="https://cdn-icons-png.flaticon.com/512/4024/4024582.png" alt="icon" />
                    </button>
                </div>
            </div>
        </>
    );
};