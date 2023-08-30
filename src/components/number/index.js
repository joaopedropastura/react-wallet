import { useContext } from "react";
import { CounterContext } from "../../context/counter";

const Numbers = () => {

    const { num } = useContext(CounterContext)
    return (<> {num} </> )

}

export default Numbers