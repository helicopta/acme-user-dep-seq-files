const express = require('express');
const app = express();
const db = require('./db');
const swig = require('swig');
const bodyParser = require('body-parser');

swig.setDefaults({ cache: false });
app.set('view engine', 'html');
app.engine('html', swig.renderFile);

app.use(bodyParser.urlencoded({ entended: false }));

db.seed().then(console.log('haha'));

app.get('/',(req,res)=>{
	res.render('index');
});


const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`listening on port ${port}`));
