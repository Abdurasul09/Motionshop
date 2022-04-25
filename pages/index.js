import Layout from "../src/components/Layout";
import Categories from "../src/components/Categories/Categories";
import New from "../src/components/New/New";
import Population from "../src/components/Population/Population";
import Bestseller from "../src/components/Bestseller/Bestseller";
import Slider from "../src/components/Carusel";
export default function Home() {
    return (
        <Layout>
            {/*<Slider/>*/}
            <Categories/>
            <Bestseller/>
            <New/>
            <Population/>
        </Layout>
    )
}
