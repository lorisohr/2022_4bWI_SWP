import { useEffect, useState } from "react";

export default function CounterFunc() {
    const [count, setCount] = useState(0);

    let increase = () => {
        setCount(count + 1);
    }

    useEffect(()=>{
        console.log("stated func");
    },[count]);

    return ( 
    <div>
        <h1>Funcional Counter</h1>
        <h2>{count}</h2>
        <button onClick={increase}>inc</button>
    </div> 
    );
}
