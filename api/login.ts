'use strict';

const Joi = require('joi');
const ctrl = require('./controllers/login.ts');

const login =[
    {
        method: 'GET',
        path: '/login',
        handler: ctrl.login,
        options: {
            tags: ['api'],
            description: 'Get All User data',
            notes: 'Get All User data',
            plugins: {
                'hapi-swagger': {
                    responseMessages: [
                        {code: 200, message: 'OK'},
                        {code: 400, message: 'Bad Request'},
                        {code: 404, message: 'Employee Not Found'},
                        {code: 500, message: 'Internal Server Error'}
                    ]
                }
            }
        }
    }

];

module.exports = login;