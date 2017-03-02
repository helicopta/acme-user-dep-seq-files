const Sequelize = require('sequelize');
const db = require('./db');


const User = db.define('user',{
	name: Sequelize.STRING
},{
	classMethods:{
		createUser:(userName)=>{
			User.create({name:userName, userId:user.id})
		},
		deleteUser:(userName)=>{
			return User.destroy({where:{name:userName}})
		}
	}
});

module.exports=User;