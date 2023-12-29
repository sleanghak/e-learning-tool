interface Props {
    title: string,
    desc: string,
}
export function InviteCard({ title, desc }: Props) {
    return (
        <div className="flex justify-center">
            <div className="rounded-lg shadow-lg bg-white max-w-sm">
                <div className="flex justify-start p-5">
                    <div>
                        <p className="text-black-900 text-sm font-sans mb-2 capitalize">
                            {title}
                        </p>
                        <h5 className="text-gray-600 text-xs font-sans mb-2">
                            {desc}
                        </h5>
                    </div>
                    <div className="inline-block align-text-top">
                        <svg className="h-20 w-20 text-green-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" >
                            <polyline points="20 12 20 22 4 22 4 12" />  <rect x="2" y="7" width="20" height="5" />  <line x1="12" y1="22" x2="12" y2="7" />
                            <path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z" />
                            <path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z" />
                        </svg>
                    </div>
                </div>
                <div className="flex justify-start p-5">
                    <p className="text-blue-900">INVITE NOW</p>
                    <div className="inline-block align-text-top">
                        <svg className="h-6 w-6 text-blue-900" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" />
                            <line x1="5" y1="12" x2="19" y2="12" />
                            <line x1="15" y1="16" x2="19" y2="12" />
                            <line x1="15" y1="8" x2="19" y2="12" />
                        </svg>
                    </div>
                </div>
            </div>
        </div>
    );
}