/* @flow */

import React from 'react'
import Document, { Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  static getInitialProps({ renderPage }: TMyDocument) {
    const {
      html, head, errorHtml, chunks,
    } = renderPage()
    return {
      html,
      head,
      errorHtml,
      chunks,
    }
  }

  render() {
    return (
      <html>
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}

export default MyDocument
