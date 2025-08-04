
import React, {useEffect, useState} from 'react';
import UserComponent from "../userComponent/UserComponent.tsx";
import {IUser} from "../../models/IUser.ts";
import {getUser} from "../../servise/api.servise.ts";
import {useSearchParams} from "react-router";

console.log(-2)
export const UsersComponent = () => {
    const [searchParams]=useSearchParams({page:'1'});
console.log(1)
    const [users,setUsers] =useState<IUser[]>([]);
    useEffect(() => {
        console.log(2)

        const cpage =searchParams.get('page') || '1';

        getUser(cpage).then(({users})=>{
                setUsers(users);
            });

    },[searchParams]);


    return (
        <div>
            {
               users.map(user => <UserComponent key={user.id} item={user}/>)
            }
        </div>
    );
};

export default UsersComponent;

