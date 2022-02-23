import React from "react";
import useSWR from "swr";
import { hasProperty } from "../../utils/hasP";

type MetaData = {
    title: string;
    siteName: string;
    type?: string;
    image: string;
    url?: string;
    description?: string;
    favicon?: string;
}

export type dataApiRes = {
    metaData: MetaData;
}

type LinkProps = {
    children?: React.ReactNode,
    href: string,
}

type YoutubeProps = {
    videoId: string,
}

export const MarkdownLink: React.FC = ({
    children,
    ...props
}) => {
    let href:string = "/404";
    if (hasProperty(props, "href")) {
        href = props.href as string;
    }

    if (href.indexOf("https://www.youtube.com/") == 0) {
        // youtube link
        const videoId = href.split("?v=")[1];
        return <YoutubeLink videoId={ videoId } />

    } else if (href.indexOf("https://youtu.be/") == 0) {
        // youtube link
        const videoId = href.split("youtu.be/")[1];
        return <YoutubeLink videoId={ videoId } />

    } else if (href.indexOf("https://twitter.com/") == 0) {
        // twitter link
        return <CardLink href={ href } />

    } else if (href.indexOf("https://note.com/") == 0) {
        // note link
        return <NoteLink href={ href } />

    } else if (href.indexOf("/") == 0) {
        // その他 link
        return <InternalLink href={ href }>
            { children }
        </InternalLink>

    } else if (href == children as string) {
        // その他 link
        return <CardLink href={ href } />

    } else {
        return <BasicLink href={ href }>
            { children }
        </BasicLink>
    }
}

const YoutubeLink:React.FC<YoutubeProps> = ({
    videoId,
}) => {

    return (
        <div
        className="youtube"
        >
            <iframe width="560" height="315" src={`https://www.youtube.com/embed/${ videoId }`} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        </div>
    )
}

const TwitterLink:React.FC<LinkProps> = ({
    href,
}) => {
    return (
        <a href={ href }>
            twitter
        </a>
    )
}

const NoteLink:React.FC<LinkProps> = ({
    href,
}) => {
    const fetcher = (url: string) => fetch(url).then((r) => r.json());
    const { data, error } = useSWR<dataApiRes, Error>(`/api/get_meta/?url=${ href }`, fetcher);

    if (!error && data && data.metaData.title != "") {
        return (
            <a
            href={ href }
            target="_blank"
            rel="noopener noreferrer"
            >
                <LinkCard data={ data } />
            </a>
        )
    }

    return (
        <a
            href={ href }
            className="grad-hover"
            target="_blank"
            rel="noopener noreferrer"
        >
            { href }
        </a>
    )
}

const CardLink:React.FC<LinkProps> = ({
    children,
    href
}) => {
    const fetcher = (url: string) => fetch(url).then((r) => r.json());
    const { data, error } = useSWR<dataApiRes, Error>(`/api/get_meta/?url=${ href }`, fetcher);

    if (!error && data && data.metaData.title != "") {
        return (
            <a
            href={ href }
            target="_blank"
            rel="noopener noreferrer"
            >
                <LinkCard data={ data } />
            </a>
        )
    }

    return (
        <a
            href={ href }
            className="grad-hover"
            target="_blank"
            rel="noopener noreferrer"
        >
            { href }
        </a>
    )
}

const BasicLink:React.FC<LinkProps> = ({
    children,
    href,
}) => {
    return (
        <a
            href={ href }
            className="grad-hover"
        >
            { children }
        </a>
    )
}

const InternalLink:React.FC<LinkProps> = ({
    children,
    href,
}) => {
    return (
        <a
            href={`${ process.env.NEXT_PUBLIC_BASE_PATH }${ href }`}
            className="grad-hover"
        >
            { children }
        </a>
    )
}


type cardProps = {
    data: dataApiRes;
}

const LinkCard: React.FC<cardProps> = ({
    data,
}) => {
    return (
        <div
            className={`
            border border-gray-200 bg-white hover:bg-sky-50 rounded grid grid-cols-1 p-2
            md:grid-cols-5 md:p-4
            `}
        >
            <div className="md:col-span-4 flex flex-col justify-between">
                <p
                className={`
                font-bold mb-2 border-b border-sky-200
                `}
                >{ data.metaData.title }</p>
                <p
                className="text-gray-400 truncate h-full"
                >{ data.metaData.description || "" }</p>
                <div
                className="flex flex-row items-center"
                >
                    <div className="w-6">
                        <img src={ data.metaData.favicon } />
                    </div>
                    <div className="ml-4">{ data.metaData.siteName }</div>
                </div>
            </div>
            <div className="hidden md:col-span-1 md:flex justify-center items-center p-2">
                <img src={ data.metaData.image || "no-image.png" } />
            </div>
        </div>
    )
}