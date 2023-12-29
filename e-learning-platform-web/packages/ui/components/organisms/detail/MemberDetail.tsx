interface Props {
    src: string,
    alt?: string,
    title: string,
    name: string,
    desc: string,
}
export function MemberDetail({ src, alt, title, desc, name }: Props) {
    return (
        <div>
            <div className="flex justify-center ">
                <div className="flex justify-start ... ">
                    <div className=" p-5 ">
                        <img
                            style={{ height: '70vh' }}
                            className="w-full rounded-sm "
                            src={src}
                            alt={alt}
                        />
                        <div className="p-2 text-center">
                            <p className="text-gray-900 font-bold text-xl">
                                {name}
                            </p>
                            <h5 className="text-yellow-500 text-base font-medium mb-2">
                                {title}
                            </h5>
                        </div>
                        <div className="flex justify-center ...">
                            <div>
                                <svg className="w-5 h-5 text-gray-500 inline-block ml-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />  <rect x="2" y="9" width="4" height="12" />  <circle cx="4" cy="4" r="2" /></svg>
                            </div>
                            <div>
                                <svg className="w-5 h-5 text-gray-500 inline-block ml-2" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z" />  <path d="M7 10v4h3v7h4v-7h3l1 -4h-4v-2a1 1 0 0 1 1 -1h3v-4h-3a5 5 0 0 0 -5 5v2h-3" /></svg>
                            </div>
                            <div>
                                <svg className="w-5 h-5 text-gray-500 inline-block ml-2" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z" />  <path d="M15 10l-4 4l6 6l4 -16l-18 7l4 2l2 6l3 -4" /></svg>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <div className="inline">
                    <p className="text-gray-700 text-base p-4">
                        {desc}
                    </p>
                </div>
            </div>
        </div>
    );
};