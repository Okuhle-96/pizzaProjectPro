const express = require('express');
const exphbs  = require('express-handlebars');
const pizzaPerfect = require('./factoryFunction');
const pizzaPerfectFactory = pizzaPerfect();

// const pizzaPerfect = pizzaFactory();

const app = express();


// enable the req.body object - to allow us to use HTML forms
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// enable the static folder...
app.use(express.static('public'));


// add more middleware to allow for templating support

app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');


app.get('/', function(req, res) {



	res.render('index', {
		small: pizzaPerfectFactory.getSmall(),
		medium: pizzaPerfectFactory.getMedium(),
		large: pizzaPerfectFactory.getLarge(),
		total: pizzaPerfectFactory.grandTotal(),

		smallQty : pizzaPerfectFactory.getSmallQty(),
		mediumQty : pizzaPerfectFactory.getMediumQty(),
		largeQty : pizzaPerfectFactory.getLargeQty()
	}); 
});

app.get('/smallPizza', function(req, res){
 
	var small = pizzaPerfectFactory.getSmall()

	res.render('index', {
		small
	});
})

app.get('/mediumPizza', function(req, res){
	 
	var medium = pizzaPerfectFactory.getMedium()

	res.render('index', {
		medium
	});

})

app.get('/largePizza', function(req, res){

	var large = pizzaPerfectFactory.getLarge()

	res.render('index', {
		large
	});

})


app.post('/small', function(req, res) {
	
	var size = req.body.small

	pizzaPerfectFactory.addSmall(size)

    res.redirect('/')
});

app.post('/medium', function(req, res) {

	var size = req.body.medium

	pizzaPerfectFactory.addMedium(size)

	res.redirect('/')
	
});
	

app.post('/large', function(req, res) {

	var size = req.body.large

	console.log(req.body.large)

	pizzaPerfectFactory.addLarge(size)

	res.redirect('/')
})

app.post('/postOrder', function(req, res) {


	res.redirect('/')
})


// start  the server and start listening for HTTP request on the PORT number specified.

const PORT =  process.env.PORT || 3017;

app.listen(PORT, function() {
	console.log(`App started on port ${PORT}`)
});