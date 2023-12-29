
interface Props {
    href: string,
    src: string,
    alt?: string,
    title: string,
    level: string,
    start: string,
    hour: number,
}
export function UpcomingCourseCard({ href, src, alt, title, level, start, hour }: Props) {
    return (
        <div className="flex justify-center">
            <a href={href} >
                <div className="rounded-lg shadow-md bg-white">
                    <img
                        className="rounded-lg"
                        src={src}
                        alt={alt}
                    />

                    <div className="p-5">
                        <p className="text-gray-500">
                            {level}
                        </p>
                        <h5 className="text-gray-900 text-xl font-sans mb-2">
                            {title}
                        </h5>
                        <div className="flex justify-between ...">
                            <div className="flex justify-start ...">
                                <div>
                                    <svg className="w-5 h-5  text-gray-500 inline-block align-sub" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" />
                                        <circle cx="12" cy="13" r="7" />
                                        <polyline points="12 10 12 13 14 13" />
                                        <line x1="7" y1="4" x2="4.25" y2="6" />
                                        <line x1="17" y1="4" x2="19.75" y2="6" />
                                    </svg>
                                </div>
                                <div >
                                    <p className="text-xs text-gray-500 ml-2 inline-block align-text-top">
                                        Start:{start}
                                    </p>
                                </div>
                            </div>

                            <div className="flex justify-start ... ">
                                <div>

                                    <svg className="w-5 h-5  text-gray-500 inline-block align-sub" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" />
                                        <polyline points="12 8 12 12 14 14" />
                                        <path d="M3.05 11a9 9 0 1 1 .5 4m-.5 5v-5h5" />
                                    </svg>


                                </div>
                                <div >
                                    <p className="text-xs text-gray-500 ml-2 inline-block align-text-top">
                                        {hour} hour/week
                                    </p>
                                </div>
                            </div>

                            <div>

                                <svg className="w-5 h-5  text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
                                </svg>

                            </div>
                        </div>
                        <div className="flex justify-between ... py-2">
                            <p className="uppercase text-green-500">
                                new
                            </p>
                            <p className="uppercase text-green-500">
                                register
                            </p>

                        </div>
                   
                    </div>
                </div>
            </a>
        </div>
    );
};