import React from "react";
import ReactMarkdown from "react-markdown";
import "github-markdown-css";
import remarkGfm from "remark-gfm";
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import { MarkdownHeader1, MarkdownHeader2, MarkdownHeader3, MarkdownHeader4, MarkdownText } from "./tags";
import { CodeBlock } from "./codeBlock";
import { MarkdownLink } from "./linkCard";

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

type ArticleType = {
    articleData: mdArticleType;
    className?:string;
}

/**
 * 記事要素
 * @returns React.FC
 */
export const ArticleComponent: React.FC<ArticleType> = ({
    articleData,
    className
}) => {
    return (
        <div className={`
        bg-white p-4 px-2 pb-8
        md:pt-8 md:px-12 md:pb-20 md:rounded-xl
        lg:px-24
        `}>
            <ArticleTitle>
                { articleData.title }
            </ArticleTitle>
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
                    code: CodeBlock,
                }}
            >
                { articleData.article ? articleData.article : "" }
            </ReactMarkdown>
        </div>
    )
}

const ArticleTitle:React.FC = ({
    children,
}) => {
    return (
        <h2 className={`
        text-3xl font-semibold mt-4
        md:text-4xl md:font-extrabold
        xl:text-4xl
        `}>{ children }</h2>
    )
}