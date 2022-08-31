const bodyParser = require('body-parser')


const person = require('./person-route.js')
const purchase = require('./purchase-route.js')

module.exports = app => {
 app.use(
   bodyParser.json(),
   bodyParser.urlencoded({ extended: false }),
   person,
   purchase
   )
 }


