import React from 'react';
import { useRouter } from 'next/router';
import { NotFound } from './../../../packages/ui/components/pages/404';

export default function PageNotFoundError() {
    const router = useRouter();
    return (
        <>
            <NotFound />
            {/* <div className='flex justify-center ...'>
                <button
                    onClick={() => router.push("/home")}
                    type="button"
                    className="mb-2 px-6 py-2.5 bg-blue-400 text-white font-medium text-xs leading-tight rounded-full shadow-sm hover:bg-blue-500 hover:shadow-md active:bg-blue-600 active:shadow-md transition duration-150 ease-in-out">
                    Home
                </button>
            </div> */}
        </>
    );
};
