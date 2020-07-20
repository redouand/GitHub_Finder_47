const GithubReducer = (state, action) => {
    if(action.type === 'SET_LOADING'){
        return {...state, loading: true}
    }
    if(action.type === 'SET_USERS'){
        return {...state, users: action.payload[0], loading: false, totalCount: action.payload[1]}
    }
    if(action.type === 'SET_USER_INFO'){
        return {...state, userInfo: action.payload, loading: false}
    }
    if (action.type === 'CLEAR_USERS') {
        return {...state, users: action.payload}
    }
}

export default GithubReducer