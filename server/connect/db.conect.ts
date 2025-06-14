// @ts-ignore
import {Sequelize} from "sequelize";

const baseName = process.env.DATABASE
const userName = process.env.USERNAME
const password = process.env.PASSWORD

const dialect = process.env.DIALECT
const host = process.env.HOST
const port = process.env.PORT

export const sequelize = new Sequelize(baseName, userName, password, {
    dialect: dialect,
    host: host,
    port: port,
    logging: false,
});