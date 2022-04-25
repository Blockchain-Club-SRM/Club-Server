const Joi = require('joi');
const { password, objectId } = require('./custom.validation');

exports.createUser = {
  body: Joi.object().keys({
    email: Joi.string().required().email(),
    password: Joi.string().required().custom(password),
    name: Joi.string().required(),
    role: Joi.string().required().valid('user', 'admin'),
  }),
};

exports.getUsers = {
  query: Joi.object().keys({
    name: Joi.string(),
    role: Joi.string(),
    sortBy: Joi.string(),
    limit: Joi.number().integer(),
    page: Joi.number().integer(),
  }),
};

exports.getUser = {
  params: Joi.object().keys({
    userId: Joi.string().custom(objectId),
  }),
};

exports.updateUser = {
  params: Joi.object().keys({
    userId: Joi.required().custom(objectId),
  }),
  body: Joi.object()
    .keys({
      email: Joi.string().email(),
      password: Joi.string().custom(password),
      name: Joi.string(),
    })
    .min(1),
};

exports.deleteUser = {
  params: Joi.object().keys({
    userId: Joi.string().custom(objectId),
  }),
};
