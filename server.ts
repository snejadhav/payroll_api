'use strict';

const Hapi = require('hapi');
const Inert = require('inert');
const HapiSwagger = require('hapi-swagger');
const Vision = require('vision');

const server = Hapi.Server({
    port: 3000,
    host: 'localhost'
});

// @ts-ignore
const init = async () => {
    await server.register([
        Inert,
        Vision,
        HapiSwagger
    ]);
    server.route(require('./api/dashboard.ts'));
    server.route(require('./api/login.ts'));
    server.route(require('./api/register.ts'));

    await server.start();
    console.log(`Server running at: ${server.info.uri}`);
};

process.on('unhandledRejection', (err) => {

    console.log(err);
    process.exit(1);
});

// @ts-ignore
 init();

