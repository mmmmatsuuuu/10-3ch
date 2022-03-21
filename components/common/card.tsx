import Link from "next/link";
import { PostType } from "../../pages/my-recommend";

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
    title, image, href
}) => {

    return (
            <div 
                className="block border border-sky-400 rounded-lg m-1 p-2 overflow-hidden"
            >
                <div className="p-2">
                    <h3 className="text-xl font-bold border-b border-sky-200">{ title }</h3>
                    <img src={ image.src } alt={ image.alt } className="m-auto h-64" />
                </div>
                <div className="p-4 w-full">
                    <Link href={ href }>
                        <a className="block w-full border border-sky-400 text-black hover:bg-gradient-to-r hover:from-green-400 hover:to-sky-400 shadow-md hover:text-white text-center p-4 px-8 rounded-md">
                            開く
                        </a>
                    </Link>
                </div>
            </div>
    )
}

export const MyRecommendCard:React.FC<PostType> = ({
    no, time, article, links
}) => {

    return (
            <div className="grid grid-cols-6 p-4">
                <div className="col-span-1 flex justify-center items-start">
                    <img src={`${process.env.NEXT_PUBLIC_BASE_PATH }/logo.svg`} alt="icon" className="rounded-full w-24 h-24" />
                </div>
                <div className="col-span-5">
                    <p className="text-gray-500 mb-2">time: { time }</p>
                    <p >{ article }</p>
                    <ul>
                        { links.map(li => {
                            if (li) {
                                return (
                                    <li
                                    key={ li }
                                    ><a 
                                        href={ li }
                                        className="grad-hover"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                    　　　　Link　　　　
                                    </a></li>
                                );
                            }
                        })}
                    </ul>
                </div>
            </div>
    )
}