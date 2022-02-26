import { NextPage, GetStaticProps } from "next";
import { getPostDatas } from "../../utils/posts";
import Layout from '../../components/layout';
import { CrunchTimeNav } from "../../components/sidebar/sideMenu";
import { mdArticleType, ArticleList } from "../../components/md/article";
import { sortByDate } from "../../utils/sort";

type articleProps = {
    articles: mdArticleType[];
}
const CrunchTime:NextPage<articleProps> = ({
    articles
}) => {
    return (
        <Layout
            pageTitle="Crunch Time"
        >
            <div
            className='max-w-screen-xl h-full m-auto grid grid-cols-1 md:grid-cols-3 xl:grid-cols-4 gap-4 py-4'
            >
                <div className='md:col-span-2 xl:col-span-3 bg-white rounded p-1 md:p-4 xl:px-8 mb-24'>
                    <h2 className="text-3xl font-bold mb-4 border-b border-sky-400">Crunch Time</h2>
                    <p className="mb-24">
                    試練(試験問題や入試問題)の解説をまとめたページ。または、解説を見て知識・思考を深めるモグモグタイム。
                    </p>
                    <ArticleList 
                        articles={ articles }
                        dir="crunch-time"
                    />
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

export const getStaticProps:GetStaticProps = async() => {
    const postDatas = getPostDatas(["posts", "crunch-time"]);
    const articles:mdArticleType[] = [];

    for (let i = 0; i < postDatas.length; i++) {
        const a = postDatas[i];
        const date:number = parseInt(a.date.split("/")[0])* 10000 
                            + parseInt(a.date.split("/")[1]) * 100
                            + parseInt(a.date.split("/")[2].slice(0, 2));

        if (a.published && a.category == "crunch-time" && date >= parseInt(process.env.NEXT_PUBLIC_THIS_YEAR || "0")) {
            articles.push(a);
        }
    }

    const sortedArticles = sortByDate(articles);

    return {
        props: {
            articles: sortedArticles,
        }
    }
}

export default CrunchTime;