import React from "react";
import Link from "next/link";
import ReactMarkdown from "react-markdown";
import "github-markdown-css";
import remarkGfm from "remark-gfm";
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import { 
    MarkdownArticleTitle, 
    MarkdownHeader1, 
    MarkdownHeader2, 
    MarkdownHeader3, 
    MarkdownHeader4, 
    MarkdownText, 
    MarkdownOli, 
    MarkdownUli,
    MarkdownTh,
    MarkdownTd,
    MarkdownImg,
    MarkdownBlockQuort,
} from "./tags";
import { CodeBlock } from "./codeBlock";
import { MarkdownLink } from "./linkCard";

export type mdArticleType = {
    filename: string,
    title: string,
    topics?: string[],
    date: string,
    category: string,
    published: boolean,
    image?: string,
    article: string,
}

type ArticleTypeProps = {
    articleData: mdArticleType;
    className?:string;
}

/**
 * 記事要素
 * @returns React.FC
 */
export const ArticleComponent: React.FC<ArticleTypeProps> = ({
    articleData,
    className
}) => {
    return (
        <div>
            <MarkdownArticleTitle>
                { articleData.title }
            </MarkdownArticleTitle>
            <DateComponent date={ articleData.date } />
            <ReactMarkdown
                className={ className }
                remarkPlugins={[remarkGfm, remarkMath]}
                rehypePlugins={[rehypeKatex]}

                components={{
                    h1: MarkdownHeader1,
                    h2: MarkdownHeader2,
                    h3: MarkdownHeader3,
                    h4: MarkdownHeader4,
                    p: MarkdownText,
                    a: MarkdownLink,
                    ol: MarkdownOli,
                    ul: MarkdownUli,
                    th: MarkdownTh,
                    td: ({ style, children }) => <MarkdownTd style={ style } children={ children }/>,
                    img: ({src, alt}) => <MarkdownImg src={ src ? src : "" } alt={ alt ? alt : "" } />,
                    blockquote: MarkdownBlockQuort,
                    code: CodeBlock,
                }}
            >
                { articleData.article }
            </ReactMarkdown>
        </div>
    )
}

const DateComponent:React.FC<{ date: string}> = ({ date }) => {
    return (
        <div className="flex justify-start items-center my-2">
            <div className="rounded-md bg-sky-400 text-white px-4 mr-4">更新日</div>
            <div>{ date }</div>
        </div>
    )
}

type ArticleListProps = {
    articles: mdArticleType[];
    dir     : string;
}

export const ArticleList: React.FC<ArticleListProps> = ({
    articles,
    dir,
}) => {
    if (articles.length > 0) {
        return (
            <div>
            { articles.map(a => {
                return (
                    <Link
                        href={`/${ dir }/${ a.filename }`}
                        key={ a.filename }
                    >
                    <a className="block bg-gray-300 hover:bg-gradient-to-r hover:from-green-400 hover:to-sky-400 rounded-xl my-2 p-1">
                        <div className="bg-white rounded-lg p-4">
                            <h3 className="text-lg font-extrabold border-b border-sky-400">{ a.title }</h3>
                            <DateComponent date={ a.date } />
                        </div>
                    </a>
                    </Link>
                )
            })}
            </div>
        )
    } else {
        return (
            <div className="text-2xl font-extrabold">
                まだ、記事がありません。
            </div>
        )
    }
}