import React from 'react';
import { useRouter } from 'next/router';
interface Props {
    src: string;
    title: string;
    desc: string;
};

export default function Register({ src, title, desc }: Props) {
    const router = useRouter();
    return (
        <div className="flex justify-center p-4">
            <div className=" xl:ml-20 xl:w-5/12 lg:w-5/12 md:w-8/12 mb-12 md:mb-0">

                {/* introduction about website */}
                <div className="">
                    <div className="flex justify-center ... mb-2">
                        <img className="h-20 sm:h-20 rounded ... "
                            src='https://yt3.ggpht.com/T3aH4jLpXB1cRIlbxuecFD2j0coaLpQ_E_u7aAF4296B0O0uam5mKUC3WAxXn3In55lN9hcvJDMhSg=s500-c-fcrop64=1,00000000ffffffff-nd-v1'
                            alt="imgLogo" />
                    </div>
                    <h5 className="text-center text-gray-900 text-xl leading-tight font-medium uppercase  mb-2">
                        Sign up for ReanCode101
                    </h5>
                    <p className=" text-gray-700 text-base mb-2">
                        Sign up for an account to track your progress or your child’s progress or manage your classroom.Your password must be at least 6 characterslong, containing at least one letter and one number.
                    </p>
                </div>

                {/* form signup */}
                <form>
                    <div className="flex flex-row items-center justify-center lg:justify-start">
                        <a
                            style={{ border: '2px solid #0D99FF' }}
                            className="px-7 py-3 rounded-full ... text-sm shadow-md hover:shadow-lg  w-full flex justify-center items-center"
                            href="#!"
                            role="button"
                            data-mdb-ripple="true"
                            data-mdb-ripple-color="light"
                        >
                            {/* <!-- Google --> */}
                            <img className="w-5 h-5 mr-2" src="https://cdn-icons-png.flaticon.com/512/2504/2504739.png" alt="img" />
                            <span>
                                Continue With Google
                            </span>
                        </a>


                    </div>
                    {/* Or */}
                    <div
                        className="flex items-center my-4 before:flex-1 before:border-t before:border-gray-300 before:mt-0.5 after:flex-1 after:border-t after:border-gray-300 after:mt-0.5"
                    >
                        <p className="text-center  text-gray-500 font-semibold mx-4 mb-0">Or</p>
                    </div>

                    {/* <!-- Full Name input --> */}
                    <div className="mb-4">
                        <div style={{ borderBottom: ' 1px solid #0D99FF' }} className="flex items-center py-2">
                            <input
                                required
                                type="text"
                                className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
                                placeholder="Full Name"
                            />
                        </div>
                    </div>

                    {/* <!-- Email input --> */}
                    <div className="mb-4">
                        <div style={{ borderBottom: ' 1px solid #0D99FF' }} className="flex items-center py-2">
                            <input
                                required
                                type="email"
                                className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
                                placeholder="Email address"
                            />
                        </div>
                    </div>

                    {/* <!-- Password input --> */}
                    <div className="mb-4">
                        <div style={{ borderBottom: ' 1px solid #0D99FF' }} className="flex items-center py-2">
                            <input
                                required
                                type="password"
                                className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
                                placeholder="Password"
                            />
                        </div>
                    </div>

                    <div className="text-center lg:text-left">
                        <button
                            style={{ border: '2px solid #0D99FF' }}
                            type="submit"
                            className="inline-block w-full px-7 py-3 text-sm leading-snug rounded-full shadow-md hover:shadow-lg"
                        >
                            Sign up
                        </button>
                    </div>
                </form>

                <p className="text-sm mt-2 pt-1 mb-0">
                    You already have account?
                    <button
                        onClick={() => router.push("/auth/login")}
                        className="text-[#118AEF] ml-1 transition duration-200 ease-in-out"
                        type='button'
                    >
                        Sign in
                    </button>
                </p>
            </div>
        </div>
    );
};
