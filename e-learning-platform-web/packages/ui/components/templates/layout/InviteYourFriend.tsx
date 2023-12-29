
export interface Props {
    href: string,
    src: string,
    alt: string,
    title: string,
    desc: string,

};
export const InviteYourFriend = ({ href, src, alt, title, desc }: Props) => {
    return (
        <div
            style={{ backgroundColor: ' rgba(7, 138, 239, 0.03)', paddingLeft: 40, paddingRight: 40 }}
            className="flex justify-between ... items-center p-5"
        >
            <div className="flex items-center">
                <img style={{ width: 80, height: 80 }} src={src} alt={alt} />
                {/* src: "./../images/gift-box.png", */}
                <div style={{ marginLeft: 40, }}>
                    <h5 className="text-gray-900 text-xl font-sans uppercase m">
                        {title}
                    </h5><br />
                    <p className="text-gray-500 ">
                        {desc}
                    </p>
                </div>
            </div>
            <div>
                <a href={href} className="inline-flex items-center px-3 py-2 font-medium text-center text-blue-600" >
                    Invite Now
                    <svg aria-hidden="true" className="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                </a>
            </div>
        </div>
    );
};