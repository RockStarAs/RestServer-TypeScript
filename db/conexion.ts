import {Sequelize} from 'sequelize';

const db = new Sequelize('bd_node','root','',{
    host : '127.0.0.1',
    port: 3306,
    dialect: 'mysql',
    // logging : false,
});

export default db;