import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import { getSortedPostsData } from "../lib/posts";
import Link from "next/link";
import Date from "../components/date";

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Hello, I’m Nawfel hamdi. I’m a software engineer</p>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            // <li className={utilStyles.listItem} key={id}>
            //   <Link href={`/posts/${id}`}>
            //     <a>{title}</a>
            //   </Link>
            //   <br />
            //   <small className={utilStyles.lightText}>
            //     <Date dateString={date} />
            //   </small>
            // </li>
            <div className='max-w-md mx-auto my-10 bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl'>
              <div className='md:flex'>
                <div className='md:shrink-0'>
                  <img
                    className='h-48 w-full object-cover md:h-full md:w-48'
                    src='https://images.unsplash.com/photo-1607799279861-4dd421887fb3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjl8fHNvZnR3YXJlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60'
                    alt='Man looking at item at a store'
                  />
                </div>
                <div className='p-8'>
                  <div className='uppercase tracking-wide text-sm text-indigo-500 font-semibold'>
                    Case study
                  </div>
                  <Link href={`/posts/${id}`}>
                    <a className='block mt-1 text-lg leading-tight font-medium text-black hover:underline'>
                      {title}
                    </a>
                  </Link>
                  <small className={utilStyles.lightText}>
                    <Date dateString={date} />
                  </small>
                  <p className='mt-2 text-slate-500'>
                    Getting a new business off the ground is a lot of hard work.
                    Here are five ideas you can use to find your first
                    customers.
                  </p>
                </div>
              </div>
            </div>
          ))}
        </ul>
      </section>
    </Layout>
  );
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}
