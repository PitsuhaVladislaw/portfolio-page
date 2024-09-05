import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
    render() {
        return (
        <Html>
            <Head>
            <link rel="icon" href="./src/public/next.svg" type="image/x-icon" />
            </Head>
            <body>
            <Main />
            <NextScript />
            </body>
        </Html>
        );
    }
}

export default MyDocument;