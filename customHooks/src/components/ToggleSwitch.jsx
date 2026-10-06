import { useToggle } from "../Hooks/useToggle"


const ToggleSwitch =() =>{

    const {value, toggle} = useToggle(false)
    return (
    <div>
      <h1>Current State: {value ? "True" : "False"}</h1>
      <button onClick={toggle}>Toggle</button>
    </div>
  );

}

export default ToggleSwitch