import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import CardProps from '../components/CardProps'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Head>
      <title>Travel Journal</title>
        <meta name="description" content="Travel Journal" />
        <meta itemprop="name" content="Journal" />
        <meta itemprop="description" content="Travel Journal created with Next JS and Tailwind CSS" />
        <meta itemprop="image" content="Travel Props" />
        <link rel="icon" href="/favicon.ico" />     
      </Head>

      <nav>
        <Navbar />
      </nav>

      <main>
        <Hero />
        <CardProps />
      </main>

      <footer>
        
  
      </footer>
    </div>
  )
}
