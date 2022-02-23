import type { NextPage } from 'next';
import Head from "next/head";
import { Header } from "./header/header";
import { Footer } from "./footer/footer";

type headProps = {
    children: React.ReactNode;
    pageTitle?: string;
}

const Layout:NextPage<headProps> = ({ children, pageTitle }) => {
    return (
        <>
            <Head>
                <title>{ process.env.NEXT_PUBLIC_SITE_NAME } | { pageTitle }</title>
                <meta name="description" content={ process.env.NEXT_PUBLIC_DESCRIPTION } />
                <link rel="icon" href={ `${ process.env.NEXT_PUBLIC_BASE_PATH }/favicon.ico`} />
            </Head>
            <div className='relative w-screen h-screen'>
                <header className='fixed top-0 w-screen h-[64px] z-50 bg-gradient-to-r from-green-400 to-sky-400'>
                    <div className='bg-white h-[60px]'>
                        <Header />
                    </div>
                </header>
                <div className='fixed top-16 w-screen h-[calc(100vh-3rem)] overflow-x-hidden'>
                    <main>
                        { children }
                    </main>
                    <footer>
                        <Footer />
                    </footer>
                </div>
            </div>
        </>
    )
}

export default Layout;