import React, { useEffect, useState } from 'react';
import PostsCard from '../Components/PostsCard';

const Posts = () => {

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/posts")
            .then(res => res.json())
            .then((data) => {
                setPosts(data);
            });
    },
        []);



    return (
        <div className="px-10 mb-5">
            <p className="text-3xl font-bold">All the posts are here</p>
            <div className="grid grid-cols-3 gap-5 mt-5">
                {
                    posts?.map((post) => (<PostsCard key={post.id} post={post}></PostsCard>
                    ))}
            </div>
        </div>
    );
};

export default Posts;