import { NextPage } from "next";
import Layout from '../../components/layout';
import { OverTheFenceCard, OverTheFenceProps } from "../../components/common/card";
import { cryptography } from "./cryptography/index";

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
                    <div className="flex flex-wrap">
                        <div className="basis-full md:basis-1/2 xl:basis-1/3">
                            <OverTheFenceCard
                                title={ cryptography.title }
                                description={ cryptography.description }
                                image={ cryptography.image }
                                href={ cryptography.href }
                                contents={ cryptography.contents }
                            />
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default OverTheFence;