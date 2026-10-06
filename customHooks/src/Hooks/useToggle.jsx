import { useState } from "react"

export const useToggle = (bool) =>{

    const [value,setValue] = useState(bool)

    function toggle(){
        setValue(() => !value)
    }
    return {value,toggle}
}