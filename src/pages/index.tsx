import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import ChatGPTView from '@components/chatgpt-view'
import styles from '@/styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>AnswerBot ChatGPT</title>
        <meta name="description" content="a chatbot powered by ChatGPT" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <ChatGPTView />
      </main>
    </>
  )
}
