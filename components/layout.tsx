import type { NextPage } from 'next';
import Head from "next/head";
import { Header } from "./header/header";

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
            <div className='relative w-screen h-screen'>
                <header className='fixed top-0 w-screen h-16 border-b z-50'>
                    <Header />
                </header>
                <div className='fixed top-16 w-screen h-[calc(100vh-3rem)] overflow-x-hidden'>
                    <main>
                        { children }
                    </main>
                    <footer className=''>
                        <div className='border-t h-12 max-w-screen-xl m-auto'>
                            footer
                        </div>
                    </footer>
                </div>
            </div>
        </>
    )
}

export default Layout;