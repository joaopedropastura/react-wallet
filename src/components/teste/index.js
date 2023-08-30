import { useContext } from "react"
import { CounterContext } from "../../context/counter"


export default function Test() {

    const {maisumacoisa} = useContext(CounterContext)


    
    return (
        <>
            {maisumacoisa}
        </>
    )
}