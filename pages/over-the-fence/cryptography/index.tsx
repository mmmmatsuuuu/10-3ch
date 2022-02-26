import { NextPage, GetStaticProps } from "next";
import { getPostDatas } from "../../../utils/posts";
import Layout from '../../../components/layout';
import { mdArticleType, ArticleList } from "../../../components/md/article";
import { sortByDate } from "../../../utils/sort";
import { OverTheFenceProps } from "../../../components/common/card";

export const cryptography:OverTheFenceProps = {
    title: "暗号技術",
    description: "暗号は、ネットワーク通信の発達した現在では、とても重要な技術の一つである。この連載では、暗号技術の歴史から、使われている暗号技術の実装まで、解説したいと思う。",
    image: { src:`${ process.env.NEXT_PUBLIC_BASE_PATH }/img/cryptography/00.png`, alt: "扉絵"},
    href:`/over-the-fence/cryptography`,
    contents: [
        "暗号の歴史",
        "暗号とは(復習)",
        "共通鍵暗号方式",
        "公開鍵暗号方式",
        "その他の暗号技術",
        "PKI(公開鍵基盤)",
        "暗号の強度と安全性",
        "実装してみよう(RSA暗号)",
        "実装してみよう(DH鍵共有)",
        "実装してみよう(AES)",
        "実装してみよう(楕円曲線暗号)"
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
            pageTitle={ cryptography.title }
        >
            <div
            className='max-w-screen-xl h-full m-auto py-4'
            >
                <div className='md:col-span-2 xl:col-span-3 bg-white rounded p-1 md:p-4 xl:px-8 mb-24'>
                    <h2 className="text-3xl font-bold mb-4 border-b border-sky-400">{ cryptography.title }</h2>
                    <img src={ cryptography.image.src} alt={ cryptography.image.alt } className="m-auto w-1/2"/>
                    <p>{ cryptography.description }</p>
                    <ul className="list-disc list-inside text-gray-600">
                        { cryptography.contents.map(c => {
                            return (
                                <li key={ c }>{ c }</li>
                            );
                        })}
                    </ul>
                    <ArticleList 
                        articles={ articles }
                        dir="over-the-fence/cryptography"
                    />
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

export default Page;