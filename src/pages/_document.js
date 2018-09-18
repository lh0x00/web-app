import React from 'react'
import Document, { Head, Main, NextScript } from 'next/document'

class MyDocument extends Document<PropsComponent, StateComponent> {
  static async getInitialProps(ctx: object): object {
    const { session } = ctx.req || {}
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps, session }
  }

  render() {
    return (
      <html lang="en" id="app">
        <Head>
          <style>{'body { margin: 0 } /* custom! */'}</style>
        </Head>
        <body>
          <Main s="asdasds" />
          <NextScript />
        </body>
      </html>
    )
  }
}

export default MyDocument
