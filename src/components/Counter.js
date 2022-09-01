import { useState } from "react"

const Counter = () => {
    // useStat gibt uns immer ein Array zurück, der erste Wert ist eine 
    // Variabel und der zweite Wert eine Funktion um den State zu verändern
    const [count, setCount] = useState(5)
    
    const add =() =>{
        setCount(count+1)
    }

    const sub =() =>{
        //count !== 0?setCount(count-1):setCount(0) // ternärer Operator kurzschreibweise

        // langschreibweise beide zeilen machen das gleich
        if(count !== 0){
            setCount(count -1)
        }else{
            setCount(0)
        }
    }

    const reset = () =>{
        setCount(5)
    }

    return( 
    <>
        <div>
            <p>{count}</p>
        </div>
        
        <div>
            <button onClick={add}>+</button>
            <button onClick={sub}>-</button>
        </div>

        <div>
            <button onClick={reset}>Reset</button>
        </div>
    </>)
}

export default Counter