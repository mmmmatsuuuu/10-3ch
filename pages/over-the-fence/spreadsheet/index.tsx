import { NextPage, GetStaticProps } from "next";
import { getPostDatas } from "../../../utils/posts";
import Layout from '../../../components/layout';
import { mdArticleType, ArticleList } from "../../../components/md/article";
import { sortByTitle } from "../../../utils/sort";
import { OverTheFenceProps } from "../../../components/common/card";

export const spreadsheet:OverTheFenceProps = {
    title: "表計算ソフト",
    description: "表計算ソフトは、とても便利であり、いろいろな業界で使用されている。表計算ソフトの使い方を学ぶことで、できることは、大幅に広がる。この連載では、表計算ソフトの使い方について学んでいく。",
    image: { src:`${ process.env.NEXT_PUBLIC_BASE_PATH }/img/crunchtime/02.png`, alt: "扉絵"},
    href:`/over-the-fence/spreadsheet`,
    contents: [
        "表計算ソフトとは",
        "表を作ってみよう",
        "関数で計算をさせてみよう",
        "グラフを作ってみよう"
    ]
}

type articleProps = {
    articles: mdArticleType[];
}
const Page:NextPage<articleProps> = ({
    articles
}) => {
    return (
        <Layout
            pageTitle={ spreadsheet.title }
        >
            <div
            className='max-w-screen-xl h-full m-auto py-4'
            >
                <div className='md:col-span-2 xl:col-span-3 bg-white rounded p-1 md:p-4 xl:px-8 mb-24'>
                    <h2 className="text-4xl font-bold mb-2">{ spreadsheet.title }</h2>
                    <div className="flex items-center">
                        <div className="h-2 w-32 bg-gradient-to-r from-green-400 to-sky-400"></div>
                        <div className="h-2 w-full bg-slate-100"></div>
                    </div>
                    <img src={ spreadsheet.image.src} alt={ spreadsheet.image.alt } className="m-auto w-1/2"/>
                    <div className="flex items-center">
                        <div className="w-1/4 h-[1px] bg-gray-400"></div>
                        <p className="w-1/2 m-8 my-24">{ spreadsheet.description }</p>
                        <div className="w-1/4 h-[1px] bg-gray-400"></div>
                    </div>
                    <ArticleList 
                        articles={ articles }
                        dir="over-the-fence/spreadsheet"
                    />
                </div>
            </div>
        </Layout>
    )
}

export const getStaticProps:GetStaticProps = async() => {
    const postDatas = getPostDatas(["posts", "over-the-fence", "spreadsheet"]);
    const articles:mdArticleType[] = [];

    for (let i = 0; i < postDatas.length; i++) {
        const a = postDatas[i];

        if (a.published && a.category == "over-the-fence") {
            articles.push(a);
        }
    }

    const sortedArticles = sortByTitle(articles);

    return {
        props: {
            articles: sortedArticles,
        }
    }
}

export default Page;