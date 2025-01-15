import React, {FC} from 'react';
import {Itodo} from "../../models/IUser.ts";
type UserPropType = {
    item: Itodo
}


    const UserComponent:FC<UserPropType> = ({item}) => {
    return (
        <div>{item.todo}</div>
    );
};

export default UserComponent;