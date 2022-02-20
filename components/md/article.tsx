import React from "react";
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
        <div>
            <MarkdownArticleTitle>
                { articleData.title }
            </MarkdownArticleTitle>
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
                { articleData.article ? articleData.article : "" }
            </ReactMarkdown>
        </div>
    )
}