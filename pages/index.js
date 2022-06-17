import Link from 'next/link';
import {Head} from 'next/document';
import Layout from '../components/Layout';

const Home = () => {
    return (
        <Layout>
            {/*<Head>*/}
            {/*    <title>Home</title>*/}
            {/*</Head>*/}

            <h1>App</h1>

            <style jsx>{`
              h1 {
                color: blueviolet;
              }
            `}</style>
        </Layout>
    );
};

export default Home;
