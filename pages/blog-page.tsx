import Layout from "../components/Layout.";
import {getAllPropsData} from "../lib/posts";
import Post from "../components/Post";

export default function Blog({ posts }: any) {
    return (
        <Layout title={Blog}>
            <ul className="m-10">
                {posts && posts.map((post: any) => <Post key={post.id} post={post} />)}
            </ul>
        </Layout>
    );
}

export async function getStaticProps() {
    const posts = await getAllPropsData()
    return {
        props: {posts}
    }
}
