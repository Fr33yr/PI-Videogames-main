export function validate(formInput) {
    let errors = {}
    if (formInput.name.length === 0) {
        errors.name = 'Name is required'
    } else if (!formInput.description) {
        errors.description = 'Description required'
    } else if (!formInput.releaseDate) {
        errors.releaseDate = 'Date is required'
    } else if (!formInput.image) {
        errors.image = 'Image is required'
    } else if (!formInput.rating || formInput.rating < 0 || formInput.rating > 5) {
        errors.rating = 'Rating should be a number between 0-5'
    } else if (formInput.genres.length === 0) {
        errors.genres = 'Choose at least one genre option'
    } else if (formInput.platforms.length === 0) {
        errors.platforms = 'Choose at least one platform option'
    }

    return errors
}