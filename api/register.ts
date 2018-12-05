'use strict';

const Joi = require('joi');
const ctrl = require('./controllers/register.ts');

const register =[
    {
        method: 'GET',
        path: '/register',
        handler: ctrl.register,
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

module.exports = register;