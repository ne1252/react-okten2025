import React, {FC} from 'react';
import {IUser} from "../../models/IUser.ts";
type UserPropType = {
    item: IUser
}


    const UserComponent:FC<UserPropType> = ({item}) => {
    return (
        <div>{item.firstName + item.lastName}</div>
    );
};

export default UserComponent;