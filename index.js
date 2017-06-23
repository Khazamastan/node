var cool = require('cool-ascii-faces');
const path = require('path')  
const express = require('express')  
const exphbs = require('express-handlebars')
const app = express()
const port = 5000;
app.get('/', (request, response) => {  
  response.render('home', {
    name: 'John'
  })
})

app.set('port', (process.env.PORT || 5000));

app.engine('.hbs', exphbs({  
  defaultLayout: 'main',
  extname: '.hbs',
  layoutsDir: path.join(__dirname, 'views/layouts')
}))
app.set('view engine', '.hbs')  
app.set('views', path.join(__dirname, 'views'))  

app.get('/', function(request, response) {
  response.send(cool());
});


app.listen(port, (err) =>{
  if(err){
    return console.log('something bad happend',err)
  }
  console.log(`server is listening on ${port}`);
});




// index.js



