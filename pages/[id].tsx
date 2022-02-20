import type { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import Head from 'next/head';
import Layout from '../components/layout';
import { getPostIds, getPostData } from '../utils/posts';
import { ArticleComponent } from '../components/md/article';

export type mdArticleType = {
    filename: string,
    title?: string,
    topics?: string[],
    date?: string,
    category?: string,
    published?: boolean,
    image?: string,
    article?: string,
}

type articleProps = {
    postData: mdArticleType;
}

const Post: NextPage<articleProps> = ({ postData }) => {
    return (
        <Layout
            pageTitle={ postData.title || "記事" }
        >

            <main className='w-screen bg-gradient-to-t from-sky-400 to-emerald-400'>
                <div className='max-w-screen-lg m-auto'>
                    <ArticleComponent
                        articleData={ postData }
                    />
                </div>
            </main>
        </Layout>
    )
}

export const getStaticPaths:GetStaticPaths = async() => {
    const paths = getPostIds();
    return {
        paths,
        fallback: false
    };
}

export const getStaticProps:GetStaticProps = async({ params }) => {
    const path: string = params ? params.id as string : "";

    const postData = getPostData(path);

    return {
        props: {
            postData: postData,
        }
    }
}

export default Post;