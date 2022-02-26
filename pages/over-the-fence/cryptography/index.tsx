import { NextPage, GetStaticProps } from "next";
import { getPostDatas } from "../../../utils/posts";
import Layout from '../../../components/layout';
import { mdArticleType, ArticleList } from "../../../components/md/article";
import { sortByDate } from "../../../utils/sort";
import { OverTheFenceProps } from "../../../components/common/card";

export const cryptography:OverTheFenceProps = {
    title: "暗号技術",
    description: "暗号技術についてもっと深く学んでみよう",
    image: { src:`${ process.env.NEXT_PUBLIC_BASE_PATH }/img/cryptography/00.jpeg`, alt: "扉絵"},
    href:`${ process.env.NEXT_PUBLIC_BASE_PATH }/over-the-fence/cryptography`,
    contents: ["暗号の歴史", "暗号とは(復習)"]
}

type articleProps = {
    articles: mdArticleType[];
}
const  CryptographyPage:NextPage<articleProps> = ({
    articles
}) => {
    return (
        <Layout
            pageTitle={ cryptography.title }
        >
            <div
            className='max-w-screen-xl h-full m-auto py-4'
            >
                <div className='md:col-span-2 xl:col-span-3 bg-white rounded p-1 md:p-4 xl:px-8 mb-24'>
                    <h2 className="text-3xl font-bold mb-4 border-b border-sky-400">{ cryptography.title }</h2>
                    <img src={ cryptography.image.src} alt={ cryptography.image.alt } className="m-auto"/>
                    <p>{ cryptography.description }</p>
                    <ul className="list-disc list-inside text-gray-600">
                        { cryptography.contents.map(c => {
                            return (
                                <li key={ c }>{ c }</li>
                            );
                        })}
                    </ul>
                    <ArticleList articles={ articles } />
                </div>
            </div>
        </Layout>
    )
}

export const getStaticProps:GetStaticProps = async() => {
    const postDatas = getPostDatas(["posts", "over-the-fence", "cryptography"]);
    const articles:mdArticleType[] = [];

    for (let i = 0; i < postDatas.length; i++) {
        const a = postDatas[i];

        if (a.published && a.category == "over-the-fence") {
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

export default CryptographyPage;