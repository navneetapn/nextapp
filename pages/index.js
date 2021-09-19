import Head from 'next/head'
import Header from './header'
import Footer from './footer'
import { Hero } from './components/Hero'
import About from './components/About'
import Team from './components/Team'

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Hero/>
      <About/>
      <Team/>

      <Footer />
    </div>
  )
}
