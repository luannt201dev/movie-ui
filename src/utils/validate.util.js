/* eslint-disable import/no-anonymous-default-export */

const ValidateNormalLetter = (input) => {
    input = input ? input : ''
    let regex = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/
    return !regex.test(input.trim())
}

const ValidateEmail = (input) => {
    input = input ? input : ''
    let regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    return regex.test(input.trim())
}

const ValidateMustNotEmpty = (input) => {
    input = input ? input : ''
    console.log('value: ', input)
    if (input.trim() !== '') {
        return true
    }
    return false
}

const ValidateOnlyNumbers = (input) => {
    let regex = /^[0-9]*$/
    return regex.test(input)
}

export default {
    ValidateNormalLetter: ValidateNormalLetter,
    ValidateEmail: ValidateEmail,
    ValidateMustNotEmpty: ValidateMustNotEmpty,
    ValidateOnlyNumbers: ValidateOnlyNumbers,
}