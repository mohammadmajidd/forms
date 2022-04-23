import useInput from "../hooks/useInput";

const SimpleInput = () => {
    const {
        value: enteredName,
        isValid:enteredNameIsValid,
        hasError: nameInputHasError,
        handleChangeValueInput: nameChangeHandler,
        handleChangeValueBlur: nameChangeBlur,
        resetFn:reset
    } = useInput(value=>value.trim().length!==0)

    let formIsValid = false
    if (enteredNameIsValid) {
        formIsValid = true}
    const handleSubmit = (e) => {
        e.preventDefault()
        if (!enteredNameIsValid) {
            return
        }
        reset()
    }

    const formStyle = nameInputHasError ? 'form-control invalid' : 'form-control'
    return (
        <form onSubmit={handleSubmit}>
            <div className={formStyle}>
                <label htmlFor='name'>Your Name</label>
                <input onBlur={nameChangeBlur} value={enteredName} onChange={nameChangeHandler} type='text'
                       id='name'/>
                {nameInputHasError && <p className={'error-text'}>*please enter a valid number</p>}
            </div>
            <div className="form-actions">
                <button disabled={!formIsValid}>Submit</button>
            </div>
        </form>
    );
};

export default SimpleInput;
