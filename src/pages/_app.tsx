import React from 'react'
import { AppProps } from 'next/app'
import Head from 'next/head'

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta property="og:title" content="Sign In" key="title" />

        <title>Sign In</title>
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
