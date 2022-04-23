import useInput from "../hooks/useInput";
import {useEffect} from "react";

const isValidInput = (val) => val.trim().length !== 0
const isEmail = (val) => val.trim().includes('@')
const BasicForm = () => {
    const {
        value: enteredFirstName,
        isValid: firstNameIsValid,
        hasError: errorFirstName,
        reset: resetFirstName,
        handleChange: changeFirstName,
        handleBlur: blurFirstName
    } = useInput(isValidInput)
    const {
        value: enteredLastName,
        isValid: lastNameIsValid,
        hasError: errorLastName,
        reset: resetLastName,
        handleChange: changeLastName,
        handleBlur: blurLastName
    } = useInput(isValidInput)
    const {
        value: enteredEmail,
        isValid: emailIsValid,
        hasError: errorEmail,
        reset: resetEmail,
        handleChange: changeEmail,
        handleBlur: blurEmail
    } = useInput(isEmail)

    let formIsValid = false
    if (firstNameIsValid && lastNameIsValid && emailIsValid) {
        formIsValid = true
    }

    const handleSubmission = (e) => {
        e.preventDefault()
        if (!formIsValid) {
            return;
        }
        resetFirstName()
        resetLastName()
        resetEmail()
    }
    useEffect(() => {
        document.title = 'validity'
    })
    const firstNameStyle = errorFirstName ? 'form-control invalid' : 'form-control'
    const lastNameStyle = errorLastName ? 'form-control invalid' : 'form-control'
    const emailStyle = errorEmail ? 'form-control invalid' : 'form-control'
    return (
        <form onSubmit={handleSubmission}>
            <div className='control-group'>
                <div className={firstNameStyle}>
                    <label htmlFor='name'>First Name</label>
                    <input onBlur={blurFirstName} value={enteredFirstName} onChange={changeFirstName}
                           type='text' name={'firstName'}/>
                    {errorFirstName && <p className={'error-text'}> * enter a valid firstName</p>}
                </div>
                <div className={lastNameStyle}>
                    <label htmlFor='name'>Last Name</label>
                    <input onBlur={blurLastName} value={enteredLastName} onChange={changeLastName}
                           type='text' name={'lastName'}/>
                    {errorLastName && <p className={'error-text'}> * enter a valid lastName</p>}
                </div>
            </div>
            <div className={emailStyle}>
                <label htmlFor='name'>E-Mail Address</label>
                <input onBlur={blurEmail} value={enteredEmail} onChange={changeEmail} type='text'
                       name={'email'}/>
                {errorEmail && <p className={'error-text'}> * enter a valid email address</p>}
            </div>
            <div className='form-actions'>
                <button disabled={!formIsValid}>Submit</button>
            </div>
        </form>
    );
};

export default BasicForm;
