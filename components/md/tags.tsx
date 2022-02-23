import React from "react";
import { HeadingProps, ReactMarkdownProps } from "react-markdown/lib/ast-to-react";

/**
 * 見出し１  
 * サイトのタイトルに使用する
 * @params children: React.ReactNode , textColorClass: tailwindClass
 * @returns atom: React.FC
 */
export const MarkdownSiteTitle:React.FC<HeadingProps> = ({
    children,
}) => {
    return (
        <h1 className={`
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
export const MarkdownArticleTitle:React.FC = ({
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
/**
 * 見出し３  
 * 記事のトップレベル見出しに使う。
 * @params children: React.ReactNode , textColorClass: tailwindClass, borderColorClass: tailwindClass
 * @return atom: React.FC
 */
export const MarkdownHeader1:React.FC<HeadingProps> = ({
    children,
}) => {
    return (
        <h3 
        id={ children.toString() }
        className={`
         bg-sky-50 border-l-8 border-b-4 border-sky-400
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
export const MarkdownHeader2:React.FC<HeadingProps> = ({
    children,
}) => {
    return (
        <h4 
        id={ children.toString() }
        className={`
        border-l-4 border-b-2 border-sky-400 pl-1
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
export const MarkdownHeader3:React.FC<HeadingProps> = ({
    children,
}) => {
    return (
        <h5 
        id={ children.toString() }
        className={`
        border-l-4 border-sky-400
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
export const MarkdownHeader4:React.FC<HeadingProps> = ({
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
 * @params 
 * @returns React.FC
 */
 export const MarkdownOli:React.FC<ReactMarkdownProps> = ({
    children,
}) => {
    return (
        <ol
            className="list-decimal list-inside"
        >
            { children }
        </ol>
    )
}

/**
 * アンオーダードリスト
 * パラグラフタグ
 * @params 
 * @returns React.FC
 */
 export const MarkdownUli:React.FC<ReactMarkdownProps> = ({
    children,
}) => {
    return (
        <ul
            className="list-disc list-inside"
        >
            { children }
        </ul>
    )
}

/**
 * テーブル
 * パラグラフタグ
 * @params 
 * @returns React.FC
 */
 export const MarkdownTh:React.FC<ReactMarkdownProps> = ({
    children,
}) => {
    return (
        <th
            className="border border-gray-400 bg-gray-100 px-4 py-1"
        >
            { children }
        </th>
    )
}

type tdProps = {
    style: (React.CSSProperties & Record<string, unknown>) | undefined;
    children: React.ReactNode;
}
/**
 * テーブル
 * パラグラフタグ
 * @params 
 * @returns React.FC
 */
 export const MarkdownTd:React.FC<tdProps> = ({
    children,
    style
}) => {
    let pos:string = "text-left";
    if (style) {
        if (style.textAlign == "center") {
            pos = "text-center";
        } else if (style.textAlign == "right") {
            pos = "text-right"
        }
    }

    return (
        <td
            className={`border border-gray-400 bg-white ${ pos } p-1`}
        >
            { children }
        </td>
    )
}

/**
 * ブロッククオート
 * パラグラフタグ
 * @params 
 * @returns React.FC
 */
 export const MarkdownBlockQuort:React.FC<ReactMarkdownProps> = ({
    children,
}) => {
    return (
        <div className={`
        border-l-4 border-gray-200 ml-4 text-gray-400
        my-4
        md:text-lg md:my-6
        `}>
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
    if (typeof(children) != "string") {
        return (
            <div className={`
            my-4
            md:text-lg md:my-6
            `}>{ children }</div>
        )
    }
    return (
        <p className={`
        my-4
        md:text-lg md:my-6
        `}>{ children }</p>
    )
}

/**
 * 画像
 * パラグラフタグ
 * @params 
 * @returns React.FC
 */
type MarkdownImgProps = {
    src: string,
    alt: string,
}
export const MarkdownImg:React.FC<MarkdownImgProps> = ({
    src,
    alt,
}) => {
    if (src[0] == "/") {
        return (
            <img src={`${ process.env.NEXT_PUBLIC_BASE_PATH }${ src }`} alt={ alt } className="m-auto rounded"/>
        );
    }
    return (
        <img src={ src } alt={ alt } className="m-auto rounded"/>
    );
}