import { GetStaticProps } from 'next';
import Head from 'next/head';
import React, { FunctionComponent } from 'react';
import { withLayout } from '~/layouts/Layout';

const PetProjects: FunctionComponent = () => {
  return (
    <>
      <Head>
        <title>Portfolio - Pet Projects</title>
      </Head>
    </>
  );
};
export const getStaticProps: GetStaticProps = () => {
  return {
    notFound: true,
  };
};
export default withLayout(PetProjects);
