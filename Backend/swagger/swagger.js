const swaggerJsDoc = require("swagger-jsdoc");

const options = {
    definition : {
        openapi:"3.0.0",
        info:{
            title:"Consultez API",
            version:"1.0.0",
            description:"API Documentation for consultez Project"
        },

        servers:[
            {
                url:"http://localhost:5000",
            },
        ],

        components: {
            securitySchemes: {
                bearerAuth: {
                    type: "http",
                    scheme: "bearer",
                    bearerFormat: "JWT",
                },
            },
        },

        security:[
            {
                bearerAuth: [],
            },
        ],
    },
    apis:["./routes/*.js"],
}

const swaggerSpec = swaggerJsDoc(options);
module.exports  = swaggerSpec;