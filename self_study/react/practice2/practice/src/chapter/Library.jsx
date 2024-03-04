import React from "react";
import Book from './Book'

function Library(props) {
    return(
        <div>
            <Book name="python" price={300} />
            <Book name="AWS" price={200} />
            <Book name="REACT" price={100} />
        </div>
    )
}

export default Library