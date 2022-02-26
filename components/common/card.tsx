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
    const [show, setShow] = useState("hidden");

    return (
        <Link
            href={ href }
        >
            <a 
                className="block border border-sky-400 rounded-lg m-1 overflow-hidden hover:shadow-md"
                onMouseOver={() => setShow("block")}
                onMouseLeave={() => setShow("hidden")}
            >
                <img src={ image.src } alt={ image.alt } className="m-auto" />
                <div className="p-2">
                    <h3 className="text-xl font-bold border-b border-sky-200">{ title }</h3>
                    <p className="py-2 text-gray-600">{ description }</p>
                    <div className={ `flex flex-col items-center ${show}` }>
                        <p className="font-bold text-gray-600">--- コンテンツ ---</p>
                        <ul className="list-disc list-inside text-gray-600 m-0">
                            { contents.map(c => {
                                return (
                                    <li>{ c }</li>
                                )
                            })}
                        </ul>
                    </div>
                </div>
            </a>
        </Link>
    )
}