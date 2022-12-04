import { Button } from 'antd';
import React from 'react';

import { Layout } from '../components/Layout/Layout';
import { NextPageWithLayout } from './_app';

const Index: NextPageWithLayout = () => {
  return (
    <section>
      <h1>Home page</h1>
      <Button>Button</Button>
    </section>
  );
};

Index.getLayout = function getLayout(page: React.ReactElement) {
  return <Layout>{page}</Layout>;
};

export default Index;
