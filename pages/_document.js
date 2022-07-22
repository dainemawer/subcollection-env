import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
    return (
        <Html>
            <Head>
                <meta name="google-site-verification" content="tnIVeeV3aqBwVttZrYQn8iqI8tvBjEtKvSYje9TXQwk" />
            </Head>
            <body>
                <Main />
                <NextScript />
                <noscript
                    dangerouslySetInnerHTML={{
                        __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=${process.env.NEXT_PUBLIC_GTM}" height="0" width="0" style="display: none; visibility: hidden;" />`,
                    }}
                />
            </body>
        </Html>
    )
}