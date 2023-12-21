import React,{useState} from 'react';

function App(){
    const [count, setCount] = useState(0)

    const decreaseClick = () => {setCount(count -1 )}
    const increaseClick = () => {setCount(count +1 )}

    return(
        <div>
            <div>
                Count : {count}
            </div>

            <div>
                <button onClick={decreaseClick}>Decrease</button>
                <button onClick={increaseClick}>increase</button>
            </div>
        </div>
    )
}

export default App