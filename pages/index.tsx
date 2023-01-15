import { NextPage } from 'next';
import Head from 'next/head';
import React, { useContext } from 'react';
import { AppContext } from '~/contexts/app.context';
import { withLayout } from '~/layouts/Layout';

const Index: NextPage = () => {
  const { setLoading } = useContext(AppContext);
  const handler: () => void = () => {
    if (setLoading) {
      setLoading(true);
      setTimeout(() => setLoading(false), 5000);
    }
  };
  return (
    <>
      <Head>
        <title>Portfolio - Home</title>
      </Head>
      <section>
        <h1>Home</h1>
        <button onClick={handler}>Click</button>
      </section>
    </>
  );
};

export default withLayout(Index);
