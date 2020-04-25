import React, { FC } from "react";
import Head from "next/head";
import Link from "next/link";
import { GetStaticProps } from "next";

import Layout, { siteTitle } from "../components/layout";
import Date from "../components/date";
import utilStyles from "../styles/utils.module.css";

import { getSortedPostsData } from "../lib/posts";

export const getStaticProps: GetStaticProps = async () => ({
  props: {
    allPostsData: getSortedPostsData(),
  },
});

type HomeProps = {
  allPostsData: {
    date: string;
    title: string;
    id: string;
  }[];
};

const Home: FC<HomeProps> = ({ allPostsData }) => (
  <Layout home>
    <Head>
      <title>{siteTitle}</title>
    </Head>

    <section className={utilStyles.headingMd}>…</section>
    <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
      <h2 className={utilStyles.headingLg}>Blog</h2>
      <ul className={utilStyles.list}>
        {allPostsData.map(({ id, date, title }) => (
          <li className={utilStyles.listItem} key={id}>
            <Link href="/posts/[id]" as={`/posts/${id}`}>
              <a>{title}</a>
            </Link>
            <br />
            <small className={utilStyles.lightText}>
              <Date dateString={date} />
            </small>
          </li>
        ))}
      </ul>
    </section>
  </Layout>
);

export default Home;