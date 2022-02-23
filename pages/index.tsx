import type { NextPage } from 'next';
import Layout from '../components/layout';


const Home: NextPage = () => {
  return (
    <Layout
      pageTitle='top'
    >
      <main className='h-screen flex flex-col justify-center items-center bg-gradient-to-r from-green-400 to-sky-400'>
        <img src={ `${ process.env.NEXT_PUBLIC_BASE_PATH }/logo.svg`} className='h-1/2' />
        <h1 className='font-black text-3xl'>Coming Soon...</h1>
      </main>
    </Layout>
  )
}

export default Home
