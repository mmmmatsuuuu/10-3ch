import type { NextPage } from 'next'
import Head from 'next/head'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/10-3ch/favicon.ico" />
      </Head>
      <main className='w-screen h-screen bg-gradient-to-t from-sky-400 to-emerald-400 flex flex-col justify-center items-center'>
        <img src='/10-3ch/logo.svg' className='h-1/2' />
        <h1 className='font-black text-3xl'>Coming Soon...</h1>
        <a href="/sample">sample</a>
      </main>
    </div>
  )
}

export default Home