import React, { Fragment } from 'react';
import {Link} from 'react-router-dom'

const UserItem = ({user: {login, avatar_url, html_url}}) => {
        return (
            <Fragment>
                <div className="card text-center">
                    < img 
                        src= {avatar_url}
                        className = "round-img"
                        alt="the user profile"
                        style={{width: '60px'}}
                    />
                     <h3>{login}</h3>
                    <Link to={`/users/${login}`} className='btn btn-dark btn-sm my-1'>More</Link>
                </div>
            </Fragment >
        )
}

export default UserItem
