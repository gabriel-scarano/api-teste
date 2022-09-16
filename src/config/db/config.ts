import { Dialect, Sequelize } from 'sequelize';

const dbName = 'bertihoritfrut';
const dbUser = 'root';
const dbHost = 'localhost';
const dbDriver = 'mysql' as Dialect;
const dbPassword = '';

const sequelizeConnection = new Sequelize(dbName, dbUser, dbPassword, {
  host: dbHost,
  dialect: dbDriver,
});

export default sequelizeConnection;
