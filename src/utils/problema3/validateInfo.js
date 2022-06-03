export default function validateInfo(values) {
    let errors = {}

    let regExp = values.match(/(.)\1/)

    console.log(regExp)

    if(!values) {
        errors.password = 'Password is required'

    } else if(values.length < 5) {
        errors.password = 'Password needs to be 16 characters or more'
    } else if(!regExp) {
        errors.password = 'no puede tener caracteres repetidos'
    }

    return errors
}