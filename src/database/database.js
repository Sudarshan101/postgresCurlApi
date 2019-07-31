import Sequelize from 'sequelize';

export const sequelize =  new Sequelize(
    'postgres://postgres:8857@localhost:5432/postgres', {
        host:"localhost",
        dialect:'postgres',
        pool:{
            max:5,
            min:0,
            idle:10000
        },
        logging: false
    }
);

sequelize.authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
});

