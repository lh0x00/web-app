import React from 'react'
import Document, { Head, Main, NextScript } from 'next/document'
import getLocaleFromHeader from 'lib/utils/getLocaleFromHeader'
import getLangaugeCodeFromLocale from 'lib/utils/getLangaugeCodeFromLocale'

class MyDocument extends Document<PropsComponent, StateComponent> {
  static async getInitialProps(ctx: object): object {
    const { session, headers } = ctx.req || {}

    const locale = getLocaleFromHeader(headers)
    const lang = getLangaugeCodeFromLocale(locale)

    const initialProps = await Document.getInitialProps(ctx)

    return {
      ...initialProps,
      locale,
      lang,
      session,
    }
  }

  render() {
    const { lang, locale } = this.props
    return (
      <html lang={lang} locale={locale} id="app">
        <Head>
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
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

export default MyDocument
