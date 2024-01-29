import React from 'react'
import Button from 'react-bootstrap/Button';

const Buttons = ({ onClick, children }) => {



    return (
        <>

            <Button
                variant="warning"
                type="button"
                onClick={onClick}

            >
                
                {children}</Button>
        </>
    )
}

export default Buttons