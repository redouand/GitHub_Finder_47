import React, { useContext } from 'react';
import UserItem from './UserItem';
import Spinner from '../layouts/spinner/spinner';
import GithubContext from '../../context/gitHub/githubContext';

const Users = () =>{
    const contextValue = useContext(GithubContext)
    if (contextValue.loading) {
        return <Spinner />
    }
     else {
        return (
            <div style={userStyle}>
                {contextValue.users.map(user => (
                    <UserItem key={user.id} user={user} />
                ))}
            </div>
        )
    }
}

const userStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)', 
    gridGap: '1rem'
}

export default Users
  