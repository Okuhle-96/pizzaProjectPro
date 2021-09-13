const express = require('express');
const exphbs  = require('express-handlebars');

const app = express();
const PORT =  process.env.PORT || 3017;

// enable the req.body object - to allow us to use HTML forms
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// enable the static folder...
app.use(express.static('public'));

// add more middleware to allow for templating support

app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

let counter = 0;
let smallTotal;
let mediumTotal;
let largeTotal;
let grandTotal;

app.get('/', function(req, res) {
	res.render('index', {
		counter
	});
});



app.get('/grandTotal', (req, res) => {

    res.render('main', {
        smallTotal: smallTotal,
        mediumTotal: mediumTotal,
		largeTotal: largeTotal,
		grandTotal: grandTotal
    })

})

app.post('/count', function(req, res) {

	
  counter++;
	
	res.redirect('/')
});

app.post('/small', function(req, res){
 
	if (req.body.name === "small") {
      smallTotal += 31.99;
	  grandTotal += 31.99;
	//   counter++;
    }

	res.redirect('/')
})

app.post('/medium', function(req, res){
	if (req.body.name === "medium") {
		mediumTotal += 51.99;
		grandTotal += 51.99;
	  }
	res.redirect('/')
})

app.post('/large', function(req, res){

	if (req.body.name === "large") {
		largeTotal += 81.99;
		grandTotal += 81.99;
	  }
	
	res.redirect('/')
})


// start  the server and start listening for HTTP request on the PORT number specified...
app.listen(PORT, function() {
	console.log(`App started on port ${PORT}`)
});