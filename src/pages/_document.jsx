import NextDocument, { Html, Head, Main, NextScript } from "next/document"

class Document extends NextDocument {
  render() {
    return (
      <Html>
        <Head />
        <body className="bg-gray-800">
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default Document
