import React, { useEffect, useState } from 'react';
import UsersCard from '../Components/UsersCard';

const Users = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then((res) =>
                res.json()
            )
            .then((data) => {

                setUsers(data);
            });
    }, []);



    return (
        <div className="px-10 mb-5">
            <p className="text-3xl font-bold ">All the users are here</p>
            <div className="grid grid-cols-3 gap-5 mt-5">
                {
                    users?.map(user => (<UsersCard key={user.id} user={user}></UsersCard>))
                }
            </div>
        </div>
    );
};

export default Users;