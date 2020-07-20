import React, { Fragment, useEffect, useContext } from 'react';
import Spinner from '../layouts/spinner/spinner';
import {Link} from 'react-router-dom';
import GithubContext from '../../context/gitHub/githubContext'

const UserPage = ({match}) => {
    // -------------init Context
    const contextValue = useContext(GithubContext)    
    //---------------DeStructuring
        const {userInfo, getUserPageFoo, loading} = contextValue
         const {
                login,
                avatar_url,
                blog,
                name,
                company,
                html_url,
                bio,
                followers,
                following,
                hireable,
                location,
                public_repos,
                public_gists
            } = userInfo

    //--------------Use Effect
    useEffect(()=>{
        getUserPageFoo(match.params.username)
                //eslint-disable-next-line
    }, [])

        //---------------Output JSX
        if (loading) {
           return <Spinner />
        }
        else {
            return(
                <Fragment>
                    <Link to='/' className='btn btn-light' ><i className="fas fa-long-arrow-alt-left"></i>Back To Search</Link>

                    Hireable: {' '}
                    {hireable ? <i className='fas fa-check text-success' /> : 
                    <i className='fas fa-times-circle text-danger' />}

                    <div className='card grid-2'>
                        <div className='all-center'>
                            <img src={avatar_url} alt="" className="round-img" style={{width:'150px'}} />
                            <h1>{name}</h1>
                            {{location} && <p>Location: {location}</p>}
                        </div>
                        <div>
                            {bio && 
                            <Fragment>
                                <h3>Bio</h3>
                                <p>{bio}</p>
                            </Fragment>
                            }
                            <a href={html_url} className='btn btn-dark my-1'>visit Github Profile</a>
                            
                            <ul>
                                <li>
                                    {login && 
                                    <Fragment>
                                        <small>UserName: </small> {login}
                                    </Fragment>
                                    }
                                </li>

                                <li>
                                    {company && 
                                    <Fragment>
                                        <small>company: </small> {login}
                                    </Fragment>
                                    }
                                </li>

                                <li>
                                    {blog && 
                                    <Fragment>
                                        <small>Website: </small><small><a href={blog} style={{display: 'inlineBlock'}}> {blog}</a></small>
                                    </Fragment>
                                    }
                                </li> 
                            </ul>
                        </div>
                    </div>
                    <div className='card text-center'>
                         <div className='badge badge-primary'>Followers: {followers}</div>
                         <div className='badge badge-success'>Following: {following}</div>
                         <div className='badge badge-danger'>Public Repos: {public_repos}</div>
                         <div className='badge badge-dark'>Public Gists: {public_gists}</div>
                    </div>
                </Fragment>
            )
            
        }
}

export default UserPage
