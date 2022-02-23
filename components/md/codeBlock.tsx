import React, { useEffect } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { darcula } from "react-syntax-highlighter/dist/cjs/styles/prism";
import { CodeComponent, ReactMarkdownNames } from "react-markdown/lib/ast-to-react";
// @ts-ignore
import mermaid from 'mermaid';

const CodeBlock: CodeComponent | ReactMarkdownNames = ({ 
    inline,
    className,
    children,
    ...props
}) => {
    useEffect(() => {
        mermaid.init('.mermaid');
    }, [props]);

    const match = /language-(\w+)/.exec(className || '');
    const language = match ? match["input"] : "";
    
    let lang = match ? match[1] : "";
    let name = "";
    if (language) {
        if (language.match(":")) {
        name = language.split(':')[1];
        }
    }

    if (inline ) {
        return (
            <div className="inline bg-gray-200 p-1 px-2 rounded">
                { children }
            </div>
        )
    }

    // コードがmermaid記述のグラフの場合
    if (lang === "mermaid") {
        return (
            <div className="relative">
                <div className="mermaid">
                    { children }
                </div>
            </div>
        )
    }

    return (
        <div 
            className="relative code"
        >
            <div className="absolute top-0 right-0 bg-amber-300 px-3 rounded">
                { name }
            </div>
            <SyntaxHighlighter language={ lang } style={darcula} >
                {String(children).replace(/\n$/, '')}
            </SyntaxHighlighter>
        </div>
    )
}

export { CodeBlock }