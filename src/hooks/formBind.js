import { useState } from 'react'


function useFormTemplate( defaultValue, placeholder, label) {
    const [value, setValue] = useState(defaultValue)

    const bind = {
        value,
        onChange: e => {
            setValue(e.target.value)
        }
    }

    const reset = () => setValue(defaultValue)
    
}