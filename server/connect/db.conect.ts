import {Dialect, Sequelize} from "sequelize";

const dbName = process.env.DB_NAME
const dbUser = process.env.DB_USER
const dbPassword = process.env.DB_PASSWORD

const dbDialect = process.env.DB_DIALECT as Dialect
const dbHost = process.env.DB_HOST
const dbPort = parseInt(process.env.DB_PORT)

export const sequelize = new Sequelize(dbName, dbUser, dbPassword, {
    dialect: dbDialect,
    host: dbHost,
    port: dbPort,
    logging: false,
});