import { NextPage, GetStaticProps } from "next";
import { getPostDatas } from "../../../utils/posts";
import Layout from '../../../components/layout';
import { mdArticleType, ArticleList } from "../../../components/md/article";
import { sortByTitle } from "../../../utils/sort";
import { OverTheFenceProps } from "../../../components/common/card";

export const webpage:OverTheFenceProps = {
    title: "ウェブサイトの作成",
    description: "情報を世界中に発信するとき、ウェブサイトはとても良い選択肢だ。現在では、情報の発信に留まらず、色々なことをウェブサイト上で行うことができる。この連載では、ウェブサイトの基本であるHTMLとCSSについて学んでいく。",
    image: { src:`${ process.env.NEXT_PUBLIC_BASE_PATH }/img/crunchtime/01.png`, alt: "扉絵"},
    href:`/over-the-fence/webpage`,
    contents: [
        "ウェブサイトの仕組み",
        "HTMLとは",
        "HTMLをかいてみよう",
        "CSSとは",
        "CSSを書いてみよう"
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
            pageTitle={ webpage.title }
        >
            <div
            className='max-w-screen-xl h-full m-auto py-4'
            >
                <div className='md:col-span-2 xl:col-span-3 bg-white rounded p-1 md:p-4 xl:px-8 mb-24'>
                    <h2 className="text-4xl font-bold mb-2">{ webpage.title }</h2>
                    <div className="flex items-center">
                        <div className="h-2 w-32 bg-gradient-to-r from-green-400 to-sky-400"></div>
                        <div className="h-2 w-full bg-slate-100"></div>
                    </div>
                    <img src={ webpage.image.src} alt={ webpage.image.alt } className="m-auto w-1/2"/>
                    <div className="flex items-center">
                        <div className="w-1/4 h-[1px] bg-gray-400"></div>
                        <p className="w-1/2 m-8 my-24">{ webpage.description }</p>
                        <div className="w-1/4 h-[1px] bg-gray-400"></div>
                    </div>
                    <ArticleList 
                        articles={ articles }
                        dir="over-the-fence/webpage"
                    />
                </div>
            </div>
        </Layout>
    )
}

export const getStaticProps:GetStaticProps = async() => {
    const postDatas = getPostDatas(["posts", "over-the-fence", "webpage"]);
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