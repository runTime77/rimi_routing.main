import React from 'react';

const PostsCard = ({ post }) => {
    console.log(post);

    const { title, id, body } = post;
    return (
        <div>
            <div className="card w-96 bg-primary text-primary-content">
                <div className="card-body">
                    <p>{id}</p>
                    <h2 className="card-title">{title}</h2>
                    <p className="w-[80%]">{body}</p>
                    <div className="card-actions justify-end">
                        <button className="btn">Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PostsCard;