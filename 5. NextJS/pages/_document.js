import Document, { Head, Main, NextScript } from 'next/document'
import flush from 'styled-jsx/server'

export default class MyDocument extends Document {
  static getInitialProps ({ renderPage }) {
    const {html, head, errorHtml, chunks} = renderPage()
    const styles = flush()
    return { html, head, errorHtml, chunks, styles }
  }

  render () {
    return (
     <html>
       <Head>
         <meta name="robots" content="noindex, nofollow" />
         <meta name="robots" content="noindex" />
         <title>Simple search clippings aplication</title>

         <meta charset="utf-8"/>
         <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1"/>
         <meta name="viewport" content="width=device-width, initial-scale=1" />
         <meta name="description" content="New york Times History"/>
         <link rel='stylesheet' href="../static/css/main.css"/>
         <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Open+Sans:800,800i%7CRaleway:700%7CSource+Sans+Pro:300,400,700" media="all" />
       </Head>
       <body>
         {this.props.customValue}
         <Main />
         <NextScript />
       </body>
     </html>
    )
  }
}
