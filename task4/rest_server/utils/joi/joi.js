const Joi = require('joi')


const schema = Joi.object({
    firstName: Joi.string().min(2).required(),
    lastName: Joi.string().min(2).required(),
    age: Joi.number().integer().min(0).max(150).required(),
    city: Joi.string().min(2),
})

const userValidate = (user) => schema.validate(user)


module.exports = { userValidate }