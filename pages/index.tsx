import type { NextPage } from 'next';
import Layout from '../components/layout';


const Home: NextPage = () => {
  console.log(process.env.NEXT_PUBLIC_PATH);
  return (
    <Layout
    pageTitle='top'
    >
      <main className='w-screen h-screen bg-gradient-to-t from-sky-400 to-emerald-400 flex flex-col justify-center items-center'>
        <img src={ `${ process.env.NEXT_PUBLIC_PATH }/logo.svg`} className='h-1/2' />
        <h1 className='font-black text-3xl'>Coming Soon...</h1>
        <a href={ `${ process.env.NEXT_PUBLIC_PATH }/sample`}>sample</a>
      </main>
    </Layout>
  )
}

export default Home
