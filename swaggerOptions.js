
const options = {
    definition: {
        openapi: "3.0.3",
        info: {
            title: "VotaSmart Api",
            version: "1.0.0",
            description: "Sample Project for Node.js and React.js"
        },
        servers: [
            {
                url: "http://localhost:3003/api/"
            }
        ]
    },
    apis: ["./routes/*.js"] 
}

module.exports = options;