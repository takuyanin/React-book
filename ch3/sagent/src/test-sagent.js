const request = require('superagent')

const URL = 'http://localhost:8080/fruits.json'
request.get(URL)
       .end(callbackGet)

function callbackGet (err, res) {
  if (err) {
    // console.log(err)
    return
  }
  console.log(res.body)
}