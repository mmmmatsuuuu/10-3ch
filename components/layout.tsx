import type { NextPage } from 'next';
import Head from "next/head";

type headProps = {
    children: React.ReactNode;
    pageTitle?: string;
}

const Layout:NextPage<headProps> = ({ children, pageTitle }) => {
    return (
        <>
            <Head>
                <title>{ process.env.NEXT_PUBLIC_SITE_NAME } | { pageTitle }</title>
                <meta name="description" content={ process.env.NEXT_PUBLIC_DESCRIPTION} />
                <link rel="icon" href={ `${ process.env.NEXT_PUBLIC_PATH }/favicon.ico`} />
            </Head>
            <>
                { children }
            </>
        </>
    )
}

export default Layout;