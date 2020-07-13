import React from 'react';

import onlineIcon from '../../icons/onlineIcon.png';

import './userContainer.css';

const UserContainer = ({users}) => {
    return (
        <div className="bg-light usersBox border-right border-secondary">
            <h5 className="bg-dark text-white text-center shadow-md">Users</h5>
            {users
                ? (
                    <div>
                    {users.map((user, i) => {
                        return (<div key={i}><h6 className="font-weight-bold text-dark text-capitalize text-left mx-2"><span><img src={onlineIcon} className="mr-2" alt="online"/></span>{user.name}</h6></div>)
                    })}
                    </div>
                )
                :null 
            }
        </div>
    )
}

export default UserContainer;
