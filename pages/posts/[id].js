import {useRouter} from 'next/router';
import Layout from '../../components/Layout';

export default ({ post }) => {
    return (
        <Layout>
            <h1>{post.title}</h1>
            <div>{post.body}</div>
        </Layout>
    );
};

// export const getStaticPaths = async () => {
//     const paths = [
//         { params: { id: '1' } },
//         { params: { id: '2' } },
//         { params: { id: '3' } },
//     ];
//
//     return {
//         paths,
//         fallback: false,
//     };
// };

// export const getStaticProps = async ({ params }) => {
export const getServerSideProps = async ({ params }) => {
    const { id } = params;

    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
    const post = await response.json();

    return {
        props: {
            post,
        },
    };
}
