import React, { Fragment, useState, useContext } from 'react';
import GithubContext from '../../context/gitHub/githubContext';
import Alert from '../layouts/Alert'

const Search = ({alertFoo}) =>{
    
    //----------init context
    const contextValue = useContext(GithubContext);
    //-----------Use State
    const [text, setText] = useState('');
    const [emptyInput, setEmptyInput] = useState(false);

    //-----------Functions
    const onSubmitFoo = (e)=>{
        e.preventDefault()
        if (text === '') {
            setEmptyInput(true)
            setTimeout(() => {
                setEmptyInput(false)
            }, 5000);
            // alertFoo('You Have To Enter Something..', 'light')
        } else {
            contextValue.gitSearchFoo(text)
            setText('')         
        }

    }
    const saveValue = (e)=>{
        setText(e.target.value)
    }


    //-----------The JSX
        return (
            <Fragment>
                {
                   emptyInput &&
                    <Alert />  
                }
                {
                    contextValue.users.length > 0 ? 
                    <h2>{contextValue.totalCount[0]}{contextValue.totalCount[1]}</h2> :
                    <h2>Welcome to GitHub Finder</h2>
                }
               
                <form className='form' onSubmit={onSubmitFoo}>
                    <input type='text'
                    value={text}
                    onChange={saveValue}
                    placeholder='Search For Users....'
                    />
                    <input type='submit' className='btn btn-dark btn-block'/>
                </form>
                
                {
                    contextValue.users.length > 0 && 
                    <button className='btn btn-success btn-block'
                     onClick={contextValue.clearFoo}>Clear</button>
                }
            </Fragment>
        )
}

export default Search
