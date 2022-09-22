import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Card from '../components/Card'

export default function Home() {
  return (
    <div className={styles.container}>

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
        <Card />
      </main>

      <footer>
        
  
      </footer>
    </div>
  )
}
