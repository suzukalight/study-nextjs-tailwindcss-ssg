import React, { FC } from "react";
import { GetStaticProps, GetStaticPaths } from "next";
import Head from "next/head";

import Layout from "../../components/layout";
import Date from "../../components/date";

import { getAllPostIds, getPostData } from "../../lib/posts";

export const getStaticPaths: GetStaticPaths = async () => ({
  paths: getAllPostIds(),
  fallback: false,
});

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const postData = await getPostData(params.id as string);
  return {
    props: {
      postData,
    },
  };
};

type PostProps = {
  postData: MatterData;
};

const Post: FC<PostProps> = ({ postData }) => (
  <Layout>
    <Head>
      <title>{postData.title}</title>
    </Head>

    <article>
      <h1 className="text-3xl leading-tight font-extrabold my-4">{postData.title}</h1>
      <div className="text-gray-600">
        <Date dateString={postData.date} />
      </div>
      <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
    </article>
  </Layout>
);

export default Post;
