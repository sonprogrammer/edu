import React,{useEffect, useState} from "react";

function Counters(props) {
    const [count, setCount] = useState(0)

    useEffect(() =>{
        document.title = `you clicked ${count} times`;
    })
}
