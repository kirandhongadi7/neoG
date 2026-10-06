import { useState } from "react"


export const useCounter =(init) => {
const [counter,setCounter] = useState(init)

function increment(){
    setCounter((counter) => counter + 1)
}
function decrement(){
    setCounter((counter) => counter-1)
}
function reset(){
    setCounter(init)
}
return {counter,increment,decrement,reset}

}

