import {useEffect, useState} from 'react';
import {useRouter} from 'next/router';
import {Head} from 'next/document';
import Layout from '../components/Layout';
import classes from './Posts.module.scss';

const fetchPosts = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    return await response.json();
};

// const Posts = () => {
const Posts = ({ posts }) => {
    // const [posts, setPosts] = useState([]);
    const router = useRouter();

    // useEffect(() => {
    //     fetchPosts().then(posts => {
    //         setPosts(posts);
    //     });
    // }, []);

    const openPost = id => {
        router.push('posts/' + id);
    };

    return (
        <Layout>
            {/*<Head>*/}
            {/*    <title>Posts</title>*/}
            {/*</Head>*/}

            <h1>Posts</h1>

            <div>{posts.map(({id, title}) =>
                <div className={classes.post} key={id} onClick={() => openPost(id)}>
                    {title}
                </div>
            )}</div>
        </Layout>
    );
};

export async function getServerSideProps(context) {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const posts = await response.json();

    return {
        props: {
            posts,
        },
    };
}

export default Posts;
