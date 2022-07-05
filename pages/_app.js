import Layout from "../components/Layout";
import Head from "next/head";
import 'modern-normalize/modern-normalize.css';
import '../styles/global/globalStyle.scss';



function App({Component, pageProps}) {

    return (
        <div className="wrapper">
            <Layout>
                <Head>
                    <link rel="preconnect" href="https://fonts.googleapis.com"/>
                    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
                    <link href="https://fonts.googleapis.com/css2?family=Barlow:wght@300;400;700&family=Playfair+Display:wght@300;400;700&display=swap" rel="stylesheet"/>
                </Head>
            <main>
            <Component {...pageProps}/>
            </main>
            </Layout>
        </div>
    )
}
export default App;