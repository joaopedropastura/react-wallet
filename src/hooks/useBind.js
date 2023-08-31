import { useState } from "react";

function useBind(defaultValue, placeholder) {
    const [value, setValue] = useState(defaultValue);

    const bind = {
        value,
        onChange: e => {
            setValue(e.target.value);
        },
        placeholder
    }

    const reset = () => setValue(defaultValue);
    
    return [value, bind, reset]
}

export default useBind;