import fetch from 'node-fetch'

const apiUrl = "https://jsonplaceholder.typicode.com/posts";

//一覧
export async function getAllPropsData() {
    const res = await fetch(new URL(apiUrl))
    const posts = await res.json()
    return posts
}

//IDの一覧
//getStaticPathsの場合はparamsを指定
export async function getAllPostIds() {
    const res = await fetch(new URL(apiUrl));
    const posts = await res.json();

    return posts.map((post: any) => {
        return {
            params: {
                id: String(post.id),
            },
        };
    });
}

// show
export async function getPostData(id: number) {
    const res = await fetch(new URL(`${apiUrl}/${id}`))
    const post = await res.json()

    return {
        post
    }
}
