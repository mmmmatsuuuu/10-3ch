import { NextPage } from "next";
import Layout from '../../components/layout';
import { OverTheFenceCard } from "../../components/common/card";
import { cryptography } from "./cryptography/index";
import { webpage } from "./webpage";

const OverTheFence:NextPage = () => {
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
                    <div className="">
                        <div className="w-full md:w-2/3 hover:w-full transition-all duration-500">
                            <OverTheFenceCard
                                title={ cryptography.title }
                                description={ cryptography.description }
                                image={ cryptography.image }
                                href={ cryptography.href }
                                contents={ cryptography.contents }
                            />
                        </div>
                        <div className="w-full md:w-2/3 hover:w-full transition-all duration-500">
                            <OverTheFenceCard
                                title={ webpage.title }
                                description={ webpage.description }
                                image={ webpage.image }
                                href={ webpage.href }
                                contents={ webpage.contents }
                            />
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default OverTheFence;