import { NextPageWithLayout } from './_app';
import React from 'react';
import { Layout } from '../components/Layout/Layout';
import { Button } from 'antd';


const Index: NextPageWithLayout  = () => {
  return (
      <section>
        <h1>Home page</h1>
        <Button>Button</Button>
      </section>
  )
}

Index.getLayout = function getLayout(page: React.ReactElement) {
    return (
        <Layout>{page}</Layout>
    )
}

export default Index
