import Head from 'next/head'
import ArticleList from '@/components/ArticleList';

export default function Home({ articles }) {
  return (
    <div>
      <Head>
        <title>Watchman</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ArticleList articles={articles} />
    </div>
  )
}

export const getStaticProps = async () => {
  const res = await fetch(
    process.env.API_END_POINT
  );
  const articles = await res.json();
  return {
    props: {
      articles
    },
  };
}

