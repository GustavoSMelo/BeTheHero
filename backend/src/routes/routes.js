const express = require('express');
const Routes = express.Router();
const ONGController = require('../app/controllers/OngsController');
const incidentsController = require('../app/controllers/IncidentController');
const sessionController = require('../app/controllers/SessionController');

//ongs
Routes.post('/ongs', ONGController.store);
Routes.get('/ongs', ONGController.index);
Routes.get('/ong/show', ONGController.show);

//incidents
Routes.get('/incidents', incidentsController.index);
Routes.post('/incidents', incidentsController.store);
Routes.delete('/incidents', incidentsController.destroy);
Routes.get('/incidents/show', incidentsController.show);

//session
Routes.post('/login', sessionController.store);

module.exports = Routes;
