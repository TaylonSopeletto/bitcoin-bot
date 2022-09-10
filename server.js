const express = require('express')
const server = express()


server.all('/', (req, res) => {
    res.send('RUNNING')
})

function running() {
    server.listen(3000, () => {console.log('Server is up on port ' + 3000)
  })
  }
  
  module.exports = running