import React from "react";
import { HeadingProps, ReactMarkdownProps } from "react-markdown/lib/ast-to-react";
type HeaderProps = {
    textColorClass?:string;
    bgColorClass?: string;
    borderColorClass?:string;
} & HeadingProps;

/**
 * 見出し１  
 * サイトのタイトルに使用する
 * @params children: React.ReactNode , textColorClass: tailwindClass
 * @returns atom: React.FC
 */
export const MarkdownSiteTitle:React.FC<HeaderProps> = ({
    children,
    textColorClass = "",
}) => {
    return (
        <h1 className={`
        ${ textColorClass}
        text-4xl font-semibold mt-6
        md:text-5xl md:font-extrabold
        xl:text-6xl
        `}>{ children }</h1>
    )
}
/**
 * 見出し２  
 * 記事のタイトルに使う
 * @params children: React.ReactNode , textColorClass: tailwindClass
 * @return atom: React.FC
 */
export const MarkdownArticleTitle:React.FC<HeaderProps> = ({
    children,
    textColorClass = "text-black",
}) => {
    return (
        <h2 className={`
        ${ textColorClass}
        text-3xl font-semibold mt-4
        md:text-4xl md:font-extrabold
        xl:text-4xl
        `}>{ children }</h2>
    )
}
/**
 * 見出し３  
 * 記事のトップレベル見出しに使う。
 * @params children: React.ReactNode , textColorClass: tailwindClass, borderColorClass: tailwindClass
 * @return atom: React.FC
 */
export const MarkdownHeader1:React.FC<HeaderProps> = ({
    children,
    textColorClass = "text-black",
    borderColorClass = "border-teal-400",
}) => {
    return (
        <h3 
        id={ children.toString() }
        className={`
        ${ textColorClass } bg-gray-100 border-l-8 ${ borderColorClass }
        text-2xl font-semibold mt-6 p-2
        md:text-3xl md:font-extrabold md:p-3
        xl:text-3xl
        `}>{ children }</h3>
    )
}
/**
 * 見出し４  
 * 記事のセカンドレベル見出しに使う。
 * @params children: React.ReactNode , borderColorClass: tailwindClass
 * @return atom: React.FC
 */
export const MarkdownHeader2:React.FC<HeaderProps> = ({
    children,
    borderColorClass = "border-teal-400",
}) => {
    return (
        <h4 
        id={ children.toString() }
        className={`
        border-l-4 ${ borderColorClass } pl-1
        text-xl font-semibold mt-4
        md:text-2xl md:font-extrabold
        xl:text-2xl
        `}>{ children }</h4>
    )
}
/**
 * 見出し５  
 * 記事のサードレベル見出しに使う。
 * @params children: React.ReactNode, borderColorClass: tailwindClass
 * @return atom: React.FC
 */
export const MarkdownHeader3:React.FC<HeaderProps> = ({
    children,
    borderColorClass = "border-teal-400",
}) => {
    return (
        <h5 
        id={ children.toString() }
        className={`
        border-b-2 ${ borderColorClass }
        text-lg font-semibold mt-2
        md:text-xl md:font-extrabold
        xl:text-xl
        `}>{ children }</h5>
    )
}
/**
 * 見出し６  
 * 記事のフォースレベル見出しに使う。
 * @params children: React.ReactNode
 * @return atom: React.FC
 */
export const MarkdownHeader4:React.FC<HeaderProps> = ({
    children
}) => {
    return (
        <h6 
        id={ children.toString() }
        className={`
        text-lg font-medium mt-1
        md:text-xl md:font-extrabold
        xl:text-xl
        `}>{ children }</h6>
    )
}

/**
 * オーダードリスト
 * パラグラフタグ
 * @params text: string, textColorClass: tailwindClass 
 * @returns React.FC
 */
 export const MarkdownOli:React.FC<ReactMarkdownProps> = ({
    children,
}) => {
    return (
        <div
        
        >
            { children }
        </div>
    )
}

type TextProps = {
    children: React.ReactNode;
} & ReactMarkdownProps;

/**
 * 文章
 * パラグラフタグ
 * @params text: string, textColorClass: tailwindClass 
 * @returns React.FC
 */
export const MarkdownText:React.FC<TextProps> = ({
    children,
}) => {
    return (
        <p className={`
        my-4
        md:text-lg md:my-6
        `}>{ children }</p>
    )
}