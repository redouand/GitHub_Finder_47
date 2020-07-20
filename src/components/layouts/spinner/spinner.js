import React, {Fragment} from 'react';
import spinner from './spinner.gif'

const Spinner = () => {
    return (
        <Fragment>
            <img style={spinnerStyled} src={spinner} alt='loading...'/>
        </Fragment>
    )
}
const spinnerStyled = {
    width: '400px',
    marginLeft: '28.5vw'
}
export default Spinner
