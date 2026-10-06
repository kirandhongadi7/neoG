import { useCounter } from "../Hooks/useCounter"
const Counter = () =>{
  const {counter,increment,decrement,reset} = useCounter(0)
    return (
        <div>
            <h1>{counter}</h1>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
            <button onClick={reset}>Reset</button>
        </div>
    )
}

export default Counter