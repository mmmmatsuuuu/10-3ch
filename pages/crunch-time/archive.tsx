import { NextPage } from "next";
import Layout from '../../components/layout';
import { CrunchTimeNav } from "../../components/sidebar/sideMenu";

const CrunchTimeArchive:NextPage = () => {
    return (
        <Layout
            pageTitle="Crunch Time"
        >
            <div
            className='max-w-screen-xl h-full m-auto grid grid-cols-1 md:grid-cols-3 xl:grid-cols-4 gap-4 py-4'
            >
                <div className='md:col-span-2 xl:col-span-3 bg-white rounded p-1 md:p-4 xl:px-8 article-body'>
                    archive
                    <div className="h-screen flex justify-center items-center text-5xl font-black">
                        coming soon...
                    </div>
                </div>
                <div className='hidden md:block h-full md:col-span-1'>
                    <div className='mb-12'>
                        <p className="font-bold p-2 mb-2 border-b-2 border-sky-400">コンテンツ</p>
                        <CrunchTimeNav />
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default CrunchTimeArchive;