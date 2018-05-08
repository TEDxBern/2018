import Document, {Head, Main, NextScript} from "next/document"
import {ServerStyleSheet} from "styled-components"

export default class SiteDocument extends Document {
  render() {
    const sheet = new ServerStyleSheet()
    const main = sheet.collectStyles(<Main />)
    const styleElement = sheet.getStyleElement()
    return (
      <html>
        <Head>
          <meta charSet="utf-8" />
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
          />
          <script
            type="text/javascript"
            src="https://cdnjs.cloudflare.com/ajax/libs/babel-polyfill/6.20.0/polyfill.min.js"
          />
          <link
            href="https://fonts.googleapis.com/css?family=Roboto:400,700"
            rel="stylesheet"
          />
          <style
            dangerouslySetInnerHTML={{
              __html: `
            body {
              font-family: "Roboto", "Helvetica", sans-serif;
            }
            * {
              margin: 0;
              padding: 0;
            }

            a, a:visited {
              text-decoration: none;
              color: inherit;
            }
          `
            }}
          />
          {styleElement}
        </Head>

        <body>
          {main}
          <NextScript />
        </body>
      </html>
    )
  }
}
