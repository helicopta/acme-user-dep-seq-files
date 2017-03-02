const Sequelize = require('sequelize');
const db = require('./db');

const Department = db.define('department',{
	name: Sequelize.STRING
},{
	classMethods:{
		createDepartment:(departmentName)=>{
			Department.create({name:departmentName})
		},
		deleteDepartment:(departmentName)=>{
			return Department.destroy({where:{name:departmentName}})
		}
	}
});

module.exports=Department;