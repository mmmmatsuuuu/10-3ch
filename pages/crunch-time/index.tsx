import { NextPage } from "next";
import Link from "next/link";
import Layout from '../../components/layout';
import { CrunchTimeNav } from "../../components/sidebar/sideMenu";

const CrunchTime:NextPage = () => {
    return (
        <Layout
            pageTitle="Crunch Time"
        >
            <div
            className='max-w-screen-xl h-full m-auto grid grid-cols-1 md:grid-cols-3 xl:grid-cols-4 gap-4 py-4'
            >
                <div className='md:col-span-2 xl:col-span-3 bg-white rounded p-1 md:p-4 xl:px-8 h-screen'>
                    <h2 className="text-3xl font-bold mb-4 border-b border-sky-400">Crunch Time</h2>
                    <p className="mb-24">
                    試練(試験問題や入試問題)の解説をまとめたページ。または、解説を見て知識・思考を深めるモグモグタイム。
                    </p>
                    <Link
                        href={`${process.env.NEXT_PUBLIC_BASE_PATH }/crunch-time/sample`}
                    >
                    <a className="block text-center text-white bg-sky-400 px-16 py-4 rounded-md hover:bg-sky-300">sample</a>
                    </Link>
                </div>
                <div className='hidden md:block h-full md:col-span-1'>
                    <div className='sticky top-4'>
                        <p className="font-bold p-2 mb-2 border-b-2 border-sky-400">コンテンツ</p>
                        <CrunchTimeNav />
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default CrunchTime;