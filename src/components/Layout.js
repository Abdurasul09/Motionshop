import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import Head from 'next/head'

const Layout = ({ children, title, description }) => {
    return (
        <div>
            <Head>
                <title>{title ? `${title} -Интернет магазин || Motion Shop` : "Интернет магазин || Motion shop"}</title>
                {description && <meta name="description" content={description}/>}
                {/*<link rel="icon" href="/images/logo.svg"/>*/}
            </Head>
            <Header/>
            <div className="container mx-auto">
                {children}
            </div>
            <Footer/>
        </div>
    );
};

export default Layout;