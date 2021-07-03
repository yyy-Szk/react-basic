import React from 'react'

const Basic1 = (props) => {
   const clickHandler = () => {
        console.log('click');
    }

    return (
        <>
            <button onClick={clickHandler}>check!</button>
            <h1>Hello React1</h1>
            <p>{props.test}</p>
        </>
    )
}

export default Basic1
