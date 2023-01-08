import { NextPage, GetStaticProps } from 'next';
import Head from 'next/head';
import React from 'react';
import { withLayout } from '~/layouts/Layout';

export const Blog: NextPage = () => {
  return (
    <>
      <Head>
        <title>Portfolio - Blog</title>
      </Head>
    </>
  );
};
export const getStaticProps: GetStaticProps = () => {
  return {
    notFound: true,
  };
};
export default withLayout(Blog);
