module.exports = {
    development: {
        port: process.env.PORT || 3000,
        databaseUrl: `mongodb+srv://dbUser:1.dbPass@cluster1.3efvc.mongodb.net/cubesDb?retryWrites=true&w=majority`
    },
    production: {}
};