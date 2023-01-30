export function validate(formValues) {
    let errors = {}
    let regExp = /^[a-zA-Z0-9 ]*$/

    if (!formValues.name) {
        errors.name = 'Name is required'
    } else if (!regExp.test(formValues.name)) {
        errors.name = 'Only words and numbers'
    } else if (!formValues.description) {
        errors.description = 'Description is required'
    } else if (!formValues.releaseDate) {
        errors.releaseDate = 'Release date is required'
    } else if (!formValues.image) {
        errors.image = 'Image url is required'
    }
    else if (!formValues.rating || formValues.rating < 0 || formValues.rating > 5) {
        errors.rating = 'Rating must be a number between 0-5'
    }
    return errors
}