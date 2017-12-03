const express = require('express')
const path = require('path')
const app = express()  // returns a request handler function

app.set('view engine', 'ejs')
app.set('views', path.resolve(__dirname, 'views'))

const tony = { 
	name: "Tony Hawk", 
	birthyear: 1968, 
	career: "skateboarding", 
	bio: "<b>Tony</b> is cool." 
} 

app.get('/', (req, res) => {
    res.render('user', tony)
})

app.listen(8088)
console.log('app is starting...')
