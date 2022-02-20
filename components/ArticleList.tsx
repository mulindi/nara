import Link from 'next/link';

interface Article {
  id: number
  title: string
  link: string
  source: string
}

const ArticleList = ({ articles }) => {
  return (
    <div className="flex flex-col justify-center px-8 text-white bg-black">
      <div className="grid grid-flow-row grid-cols-4 auto-cols-max gap-4 p-5">
          {articles.map((article: Article) => (
            <div key={article.id} className="w-full flex h-60 flex-col justify-between row-span-1 p-4 border-2 border-solid rounded-lg border-gray-200 dark:border-gray-800 transform hover:border-primary-600 dark:hover:border-primary-400">
              <p className="text-xl font-bold">
                {article.source}
              </p>
              <h2 className="w-ful text-slate-300 max-w-none">
                {article.title}
              </h2>
              <p>
                <Link href={article.link}>
                  <a className="text-primary-600 hover:text-primary-400">
                    Read more
                  </a>
                </Link>
              </p>
            </div>
          ))}
       </div>
    </div>
  );
};

export default ArticleList;
