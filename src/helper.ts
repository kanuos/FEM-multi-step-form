import Joi from "joi";

export const UserValidator = Joi.object({
    name: Joi.string().required().trim().pattern(/^[a-z ]+$/i).min(2).max(20).messages({
        "string.empty": "Name is required",
        "string.min": "Minimum of 2 letters required",
        "string.max": "Maximum of 20 letters required",
        "string.pattern.base": "Only English letters allowed"
    }),
    email: Joi.string().required().trim().email({ tlds: { allow: false } }).messages({
        "string.empty": "Email is required",
        "string.email": "Invalid email"
    }),
    phone: Joi.string().required().trim().pattern(/^\+?[1-9][0-9]{7,14}$/).messages({
        "string.empty": "This field is required",
        "string.pattern.base": "Invalid phone number"
    })
})


