'use strict';

var Boom = require('boom');

module.exports={
    login: function(request, h){
        const obj = {
            student:
                {
                    string: 'this is obj',
                    work: 'job'
                }
        };
        return obj
       // return {student :{ name: 'this is obj', work: 'job'} }
    }

};