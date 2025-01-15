import React, {useEffect, useState} from 'react';
import UserComponent from "../userComponent/UserComponent.tsx";
import {Itodo} from "../../models/IUser.ts";


const UsersComponent = () => {
    const [todos,setTodos] =useState<Itodo[]>([])
    useEffect(() => {
            fetch('https://dummyjson.com/todos')
            .then(value => value.json())
            .then(({todos}) => {
                setTodos(todos)
            })

    })


    return (
        <div>
            {
               todos.map(todo => <UserComponent key={todo.id} item={todo}/>)
            }
        </div>
    );
};

export default UsersComponent;

