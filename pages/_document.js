import Document, {Head, Main, NextScript} from "next/document"
import {ServerStyleSheet} from "styled-components"
import {normal} from "../presentational/definitions"

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
              font-weight: ${normal};

              /* Permalink - use to edit and share this gradient: http://colorzilla.com/gradient-editor/#f9ec7a+0,a4eddc+40,b8fbec+60,c769e3+100 */
              background: rgb(249,236,122); /* Old browsers */
              background: -moz-linear-gradient(top, rgba(249,236,122,1) 0%, rgba(164,237,220,1) 40%, rgba(184,251,236,1) 60%, rgba(199,105,227,1) 100%); /* FF3.6-15 */
              background: -webkit-linear-gradient(top, rgba(249,236,122,1) 0%,rgba(164,237,220,1) 40%,rgba(184,251,236,1) 60%,rgba(199,105,227,1) 100%); /* Chrome10-25,Safari5.1-6 */
              background: linear-gradient(to bottom, rgba(249,236,122,1) 0%,rgba(164,237,220,1) 40%,rgba(184,251,236,1) 60%,rgba(199,105,227,1) 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
              filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#f9ec7a', endColorstr='#c769e3',GradientType=0 ); /* IE6-9 */
            }
            * {
              margin: 0;
              padding: 0;
              font-weight: inherit;
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
