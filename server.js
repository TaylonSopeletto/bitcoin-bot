const express = require('express')
const server = express()

const port = process.env.PORT || 3000

server.all('/', (req, res) => {
    res.send('RUNNING')
})

function running() {
    server.listen(port, () => {console.log('Server is up on port ' + port)
  })
}
  
  module.exports = running