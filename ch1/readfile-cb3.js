const fs = require('fs')
const sleep = require('sleep')

fs.readFile('a.txt', 'utf-8', function (err, data) {
  console.log('a.txtを読みました', data)
  sleep.sleep(1)
  fs.readFile('b.txt', 'utf-8', function (err, data) {
    sleep.sleep(1)
    console.log('b.txtを読みました', data)
    fs.readFile('c.txt', 'utf-8', function (err, data) {
      sleep.sleep(1)
      console.log('c.txtを読みました', data)
    })
  })
})
