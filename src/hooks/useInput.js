import {useState} from "react";

const useInput = (validateFn) => {
    const [enteredValue, setEnteredValue] = useState('')
    const [touchedValue, setTouchedValue] = useState(false)
    const validInput = validateFn(enteredValue)
    const hasError = !validInput && touchedValue
    const handleChange = (e) => {
        setEnteredValue(e.target.value)
    }
    const handleBlur = (e) => {
        setTouchedValue(true)
    }
    const reset = () => {
        setEnteredValue('')
        setTouchedValue(false)
    }
    return {value: enteredValue, isValid: validInput,hasError, handleBlur, handleChange, reset}
}
export default useInput