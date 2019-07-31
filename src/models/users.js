import Sequelize from 'sequelize';
import { sequelize } from '../database/database'


const User =  sequelize.define('users', {
    id:{
        type:Sequelize.INTEGER,
        primaryKey:true
    },
    name:{
        type: Sequelize.STRING
    },
    email:{
        type: Sequelize.STRING,
        unique: true
    },
    password:{
        type: Sequelize.STRING
    },
    phone:{
        type: Sequelize.STRING,
        unique: true
    },
    profile_pic:{
        type: Sequelize.STRING
    }
},{
    timestamps:false
});
 

export default User;