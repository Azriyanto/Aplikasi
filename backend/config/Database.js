import { Sequelize } from "sequelize";

const db = new Sequelize('Explorer_db','root','',{
    host: 'localhost',
    dialect: 'mysql'
});

export default db;