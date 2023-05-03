import React from 'react';

const UsersCard = ({ user }) => {



    const { name, email, phone } = user;
    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl border-2 border-solid border-gray-500">
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p>{email}</p>
                    <p>{phone}</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Show posts</button>
                        <button className="btn">Show details</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UsersCard;