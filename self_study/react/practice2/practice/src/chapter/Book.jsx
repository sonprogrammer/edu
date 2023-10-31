import React from 'react';

function Book(props) {
    return(
        <div>
            <h1>{`this book's name is ${props.name}`}</h1>
            <h1>{`this book's price is ${props.price}`}</h1>
        </div>
    )
}

export default Book;