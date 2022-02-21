import { NextPage } from "next";
import Layout from '../../components/layout';
import { OverTheFenceNav } from "../../components/sidebar/sideMenu";

const OverTheFence:NextPage = () => {
    return (
        <Layout
            pageTitle="Over The Fence"
        >
            <div
            className='max-w-screen-xl h-full m-auto grid grid-cols-1 md:grid-cols-3 xl:grid-cols-4 gap-4 py-4'
            >
                <div className='md:col-span-2 xl:col-span-3 bg-white rounded p-1 md:p-4 xl:px-8'>
                    <h2 className="text-3xl font-bold mb-4 border-b border-sky-400">Over The Fence</h2>
                    <p className="mb-24">
                    フェンスを飛び越えて授業では扱えなかったちょっと高度な内容にアクセスしてみよう。
                    </p>
                    <div className="h-screen flex justify-center items-center text-5xl font-black">
                        coming soon...
                    </div>
                </div>
                <div className='hidden md:block h-full md:col-span-1'>
                    <div className='sticky top-4'>
                        <p className="font-bold p-2 mb-2 border-b-2 border-sky-400">コンテンツ</p>
                        <OverTheFenceNav />
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default OverTheFence;