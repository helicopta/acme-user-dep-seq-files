const Sequelize = require('sequelize');
//const db = new Sequelize(process.env.DATABASE_URL);

const db = require('./db');
const User = require('./User');
const Department = require('./Department');


Department.belongsTo(User);
User.hasMany(Department);


//deletes tables and ensure tables = models we have set up
const sync = () => {
	return db.sync({ force: true })
};

const seed = () => {
	return sync()
    .then(() => User.create({name:'B'}))
    .then(() => Department.create({name:'IT'}))
};



module.exports = { db, seed, sync, User, Department };

