import {sequelize} from "../connect/db.conect";

export default (async () => {
    try {
        await sequelize.authenticate();
        await sequelize.sync({alter:true, logging: false});
        console.log('База запущена')
    } catch (e) {
        throw Error(e)
    }
})