import React from "react";
import { Player } from "video-react";
interface Props {
    imagePoster: string,
    URL: string,
    title: string,
    date: string,
    desc: string,
}

export function PlayVideoCard({ title, desc, URL, date, imagePoster }: Props) {
    return (
        <div>
            <div className="p-4 rounded ... border border-slate-300 hover:border-slate-400 ...">
                <div>
                    <Player
                        playInline
                        poster={imagePoster}
                        autoPlay={false}
                        src={URL}
                    />
                </div><br />
                <div >
                    <div className="flex justify-between ...">
                        <h5 className="font-sans text-xl text-gray-700 mb-4">
                            {title}
                        </h5>
                        <h5 className="text-gray-700 text-xs font-sans mb-2">
                            {date}
                        </h5>
                    </div>
                    <p className="text-md text-gray-700 mb-2">
                        {desc}
                    </p>
                </div>
            </div>
        </div >
    );
};