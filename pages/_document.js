import React from 'react'
import Document, { Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document<PComponent, SComponent> {
  static async getInitialProps(ctx: object): object {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <html lang="en" id="app">
        <Head>
          <style>{'body { margin: 0 } /* custom! */'}</style>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}
