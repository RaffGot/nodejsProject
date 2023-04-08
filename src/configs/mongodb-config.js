

const mongodbConfig = {
    url: process.env.MONGODB_URI,
    databaseName: process.env.MONGODB_DB,
}

module.exports = mongodbConfig;
