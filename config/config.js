module.exports = {
    development: {
        port: process.env.PORT || 3000,
        databaseUrl: `mongodb+srv://dbUser:${process.env.DB_PASSWORD}@cluster1.3efvc.mongodb.net/cubesDb?retryWrites=true&w=majority`
    },
    production: {}
};