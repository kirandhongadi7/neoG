import { useLogger } from "../Hooks/useLogger"

const LoggerComponent = () =>{
    const {value,setValue} = useLogger('')
    return(
        <div>
          <input type="text" 
          value={value}
          onChange={(e) => setValue((e.target.value))}
          placeholder="Type something..."
          />
          <p>Current Value: {value}</p>
        </div>
    )
}
export default LoggerComponent