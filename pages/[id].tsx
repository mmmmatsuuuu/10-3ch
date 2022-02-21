import { useEffect } from 'react';
import type { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import tocbot from 'tocbot';
import Layout from '../components/layout';
import { getPostIds, getPostData } from '../utils/posts';
import { ArticleComponent } from '../components/md/article';
import { TableOfContents } from '../components/sidebar/tableOfContents';

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

    useEffect(() => {
        tocbot.init({
            tocSelector: '.toc',
            contentSelector: '.article-body',
            headingSelector: 'h3',
        })
    
        return () => tocbot.destroy()
    }, []);

    return (
        <Layout
            pageTitle={ postData.title || "記事" }
        >
            <div
            className='max-w-screen-xl h-full m-auto grid grid-cols-1 md:grid-cols-3 xl:grid-cols-4 gap-4 py-4'
            >
                <div className='md:col-span-2 xl:col-span-3 bg-white rounded p-1 md:p-4 xl:px-8 article-body'>
                    <ArticleComponent
                        articleData={ postData }
                    />
                </div>
                <div className='hidden md:block h-full md:col-span-1'>
                    <div className='sticky top-4'>
                        <div className="bg-white rounded p-2">
                            <p className="font-bold p-2 border-b-2 border-sky-400">目次</p>
                            <TableOfContents
                                clsName='toc'
                            />
                        </div>
                    </div>
                </div>
            </div>
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