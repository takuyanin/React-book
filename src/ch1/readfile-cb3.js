const fs = require('fs')

fs.readFile('a.txt', 'utf-8', function (err, data) {
  console.log('a.txtを読みました', data)
  fs.readFile('b.txt', 'utf-8', function (err, data) {
    console.log('b.txtを読みました', data)
    fs.readFile('c.txt', 'utf-8', function (err, data) {
      console.log('c.txtを読みました', data)
    })
  })
})

