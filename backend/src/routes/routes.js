const express = require('express');
const Routes = express.Router();
const { celebrate, Joi, Segments } = require('celebrate');
const ONGController = require('../app/controllers/OngsController');
const incidentsController = require('../app/controllers/IncidentController');
const sessionController = require('../app/controllers/SessionController');

//ongs
Routes.post(
    '/ongs',
    celebrate({
        [Segments.BODY]: Joi.object().keys({
            name: Joi.string().required(),
            email: Joi.string()
                .required()
                .email(),
            whatsapp: Joi.string()
                .required()
                .min(10)
                .max(11),
            city: Joi.string().required(),
            uf: Joi.string()
                .required()
                .min(2)
                .max(2),
        }),
    }),
    ONGController.store
);
Routes.get('/ongs', ONGController.index);
Routes.get('/ong/show', ONGController.show);

//incidents
Routes.get(
    '/incidents',
    celebrate({
        [Segments.QUERY]: Joi.object().keys({
            page: Joi.number(),
        }),
    }),
    incidentsController.index
);
Routes.post('/incidents', incidentsController.store);
Routes.delete(
    '/incidents',
    celebrate({
        [Segments.HEADERS]: Joi.object({
            id: Joi.number().required(),
            authorization: Joi.string().required(),
        }).unknown(),
    }),
    incidentsController.destroy
);
Routes.get('/incidents/show', incidentsController.show);

//session
Routes.post(
    '/login',
    celebrate({
        [Segments.BODY]: Joi.object().keys({
            id: Joi.string().required(),
        }),
    }),
    sessionController.store
);

module.exports = Routes;
