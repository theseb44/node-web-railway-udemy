const express = require('express')
var hbs = require('hbs');
require('dotenv').config()

const app = express()
const port = process.env.PORT;




//handlebars
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials');

//servir contenido estatico
app.use(express.static('public'))

app.get('/',  (req, res)=> {
  res.render('home', {
    nombre: 'Fernando Herrera',
    titulo: 'curso de nodejs'
  })
})



app.get('/generic',  (req, res)=> {
  res.render('generic', {
    nombre: 'Fernando Herrera',
    titulo: 'curso de nodejs'
  })
})

app.get('/elements',  (req, res)=> {
  res.render('elements', {
    nombre: 'Fernando Herrera',
    titulo: 'curso de nodejs'
  })
})


app.get('*', (req, res) => {
    res.send('404 - page not found')
})

app.listen(port , ()=>{

    console.log(`app listening at http://localhost:${port}`)
})