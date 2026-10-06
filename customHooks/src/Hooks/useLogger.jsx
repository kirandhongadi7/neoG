import { useState } from "react"

export const useLogger = (val) =>{
    const [value,setValue] = useState(val)
    return {value, setValue}
}