import { useState } from "react";
import Link from "next/link";

export type OverTheFenceProps = {
    title      : string;
    description: string;
    image      : {
        src: string;
        alt: string;
    };
    href       : string;
    contents   : string[];
}

export const OverTheFenceCard:React.FC<OverTheFenceProps> = ({
    title, description, image, href, contents
}) => {
    const [show, setShow] = useState("hidden w-0");

    return (
        <Link
            href={ href }
        >
            <a 
                className="grid grid-cols-1 hover:grid-cols-2 border border-sky-400 rounded-lg m-1 overflow-hidden hover:shadow-md"
                onMouseOver={() => setShow("block w-full")}
                onMouseLeave={() => setShow("hidden w-0")}
            >
                <div className="p-2">
                    <h3 className="text-xl font-bold border-b border-sky-200">{ title }</h3>
                    <img src={ image.src } alt={ image.alt } className="m-auto w-80" />
                </div>
                <div className={ `flex flex-col items-center ${show}` }>
                    <div className="p-2">
                        <p className="py-2 text-gray-600">{ description }</p>
                    </div>
                    <p className="font-bold text-gray-600">--- コンテンツ ---</p>
                    <ul className="list-disc list-inside text-gray-600 m-0 h-32 overflow-y-auto">
                        { contents.map(c => {
                            return (
                                <li key={ c }>{ c }</li>
                            )
                        })}
                    </ul>
                </div>
            </a>
        </Link>
    )
}