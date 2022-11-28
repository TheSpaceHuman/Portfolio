import React from 'react';
import Head from 'next/head';
import { Header } from '../Header/Header';
import { Footer } from '../Footer/Footer';

type LayoutProps = {
    children: React.ReactNode,
    title?: string,
}

export const Layout: React.FunctionComponent<LayoutProps> = ({ children, title = 'Portfolio' }) => {
    return (
        <>
            <Head>
                <title>{title}</title>
            </Head>
            <Header/>
            <main>{children}</main>
            <Footer/>
        </>
    )
}
