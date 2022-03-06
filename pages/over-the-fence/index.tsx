import { useState } from "react";
import { NextPage } from "next";
import Layout from '../../components/layout';
import { OverTheFenceCard } from "../../components/common/card";
import { cryptography } from "./cryptography/index";
import { webpage } from "./webpage";
import { spreadsheet } from "./spreadsheet";
import { OverTheFenceProps } from "../../components/common/card";

const OverTheFence:NextPage = () => {
    const blank:OverTheFenceProps = {
        title: "no data",
        description: "no data",
        image: { src:`${ process.env.NEXT_PUBLIC_BASE_PATH }/img/crunchtime/no_image.png`, alt: "no data"},
        href:``,
        contents: []
    }
    const [show, setShow] = useState<OverTheFenceProps>(blank);
    return (
        <Layout
            pageTitle="Over The Fence"
        >
            <div
            className='max-w-screen-xl h-full m-auto gap-4 py-4'
            >
                <div className='bg-white rounded p-1 md:p-4 xl:px-8'>
                    <h2 className="text-3xl font-bold mb-4 border-b border-sky-400">Over The Fence</h2>
                    <p className="mb-24">
                    フェンスを飛び越えて授業では扱えなかったちょっと高度な内容にアクセスしてみよう。
                    </p>
                    <div className="flex flex-col md:flex-row-reverse">
                        <div className="hidden md:block md:basis-1/3 p-1">
                            <div className="sticky top-4">
                                <div className="p-2 flex flex-col justify-center items-center">
                                    <p className="w-full text-xl font-bold border-b-2 border-sky-400">{ show.title }</p>
                                    <img src={ show.image.src } alt={ show.image.alt } className="h-48"/>
                                    <p>{ show.description }</p>
                                    <p className="mt-2">-- コンテンツ --</p>
                                    <ul className="m-0">
                                    { show.contents.map(c => {
                                        return (
                                            <li>{ c }</li>
                                        );
                                    })}
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="md:basis-2/3 grid grid-cols-1 xl:grid-cols-2 h-full overflow-y-auto">
                            <div 
                                className="w-full transition-all duration-500"
                                onMouseOver={ () => setShow(cryptography) }
                                onMouseLeave={() => setShow(blank) }
                            >
                                <OverTheFenceCard
                                    title={ cryptography.title }
                                    description={ cryptography.description }
                                    image={ cryptography.image }
                                    href={ cryptography.href }
                                    contents={ cryptography.contents }
                                />
                            </div>
                            <div 
                                className="w-full transition-all duration-500"
                                onMouseOver={ () => setShow(webpage) }
                                onMouseLeave={() => setShow(blank) }
                            >
                                <OverTheFenceCard
                                    title={ webpage.title }
                                    description={ webpage.description }
                                    image={ webpage.image }
                                    href={ webpage.href }
                                    contents={ webpage.contents }
                                />
                            </div>
                            <div 
                                className="w-full transition-all duration-500"
                                onMouseOver={ () => setShow(spreadsheet) }
                                onMouseLeave={() => setShow(blank) }
                            >
                                <OverTheFenceCard
                                    title={ spreadsheet.title }
                                    description={ spreadsheet.description }
                                    image={ spreadsheet.image }
                                    href={ spreadsheet.href }
                                    contents={ spreadsheet.contents }
                                />
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default OverTheFence;