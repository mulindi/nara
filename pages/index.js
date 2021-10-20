import Head from 'next/head'
import Hero from '@/components/Hero'

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Head>
        <title>Nara</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex text-8xl font-bold flex-col items-center justify-center w-full flex-1 px-20 text-center">
        <h1>Welcome to</h1><Hero />
      </main>

      <footer className="flex items-center justify-center w-full h-10 border-t">
        <a
          className="flex items-center justify-center"
          href="https://github.com/mmatongo/nara"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by Nara{' '}
          <img src="/favicon.ico" alt="Nara Logo" className="h-6 ml-2" />
        </a>
      </footer>
    </div>
  )
}
