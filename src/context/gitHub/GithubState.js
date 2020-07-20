//---------------PACKAGES
import React, {useReducer} from 'react';
import axios from 'axios';
//---------------Files
import GithubContext from './githubContext';
import GithubReducer from './githubReducer';


//-------environment variables

let githubClientId;
let githubClientSecret;

if(process.env.NODE_ENV !== 'production'){
    githubClientId = process.env.REACT_APP_CLIENT_ID;
    githubClientSecret = process.env.REACT_APP_CLIENT_SECRET;
}
else{
    githubClientId = process.env.CLIENT_ID;
    githubClientSecret = process.env.CLIENT_SECRET;
}
const GithubState = (props) =>{
    const initialState = {
        loading: false,
        users:[],
        userInfo: {},
        totalCount: [null, 'Welcome To GitHub Finder'],
        alert: null
    }

    const [state, dispatch] = useReducer(GithubReducer, initialState);
    
    //-------------Multi-Search Function---------------------------------------------------------------------------------

    const gitSearchFoo = (theText)=>{
        dispatch({type: 'SET_LOADING'})
        axios.get(`https://api.github.com/search/users?q=${theText}
        &client_id=${githubClientId}
        &client_secret=${githubClientSecret}`)
        .then(res =>{
          dispatch({type: 'SET_USERS', payload: [res.data.items, [res.data.total_count, 'Result Found']]})
        } )
      }

    //-----------Singel Search Function (page Search)-----------------------------------------------------------------------------------------


    const getUserPageFoo = (username) =>{
    dispatch({type: 'SET_LOADING'})
    axios.get(`https://api.github.com/users/${username}?
    client_id=${githubClientId}
    &client_secret=${githubClientSecret}`)
    .then(res =>{
        dispatch({type: 'SET_USER_INFO', payload: res.data})
    } )
    }

    //------------------Clear Button Function----------------------------------------------------------------------------------


    const clearFoo = () =>{
    dispatch({type: 'CLEAR_USERS', payload: []})
    }
    
 //----------------------JSX------------------------------------------------------------------------------
    return(
        <GithubContext.Provider value={{
            loading: state.loading,
            users: state.users,
            userInfo: state.userInfo,
            totalCount: state.totalCount,
            alert: state.alert,
            gitSearchFoo,
            getUserPageFoo,
            clearFoo
        }} >
            {props.children}
        </GithubContext.Provider>
    )
}

export default GithubState
