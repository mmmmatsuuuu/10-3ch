import type { NextPage } from 'next';
import Layout from '../components/layout';


const Home: NextPage = () => {
  return (
    <Layout
      pageTitle='top'
    >
      <main className='h-screen flex flex-col justify-center items-center bg-gradient-to-r from-green-400 to-sky-400'>
        <img src={ `${ process.env.NEXT_PUBLIC_BASE_PATH }/logo.svg`} className='h-1/2' />
      </main>
    </Layout>
  )
}

export default Home
