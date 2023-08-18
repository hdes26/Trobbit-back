import * as Joi from 'joi';

export const validationSchema = Joi.object({
  HTTP_SERVER_PORT: Joi.string().required(),
  SWAGGER_USER: Joi.string().required(),
  SWAGGER_PASS: Joi.string().required(),
  MGHOST: Joi.string().required(),
  MGPORT: Joi.string().required(),
  MGUSER: Joi.string().required(),
  MGPASSWORD: Joi.string().required(),
  MGDATABASE: Joi.string().required(),
  MG_URI: Joi.string().required(),
  CAT_API_HOST: Joi.string().required(),
  CAT_API_KEY: Joi.string().required(),
});
