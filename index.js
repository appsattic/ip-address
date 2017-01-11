// --------------------------------------------------------------------------------------------------------------------

// core
const http = require('http')

// --------------------------------------------------------------------------------------------------------------------
// application

function app(req, res) {
  // figure out the IP Address
  const ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;

  // output
  res.writeHead(200, {'Content-type': 'text/plain'})
  res.end(ip + "\n")
}

// --------------------------------------------------------------------------------------------------------------------
// server

const server = http.createServer()
server.on('request', app)

server.listen(3000, () => {
  console.log('Listening on port 3000')
})

// --------------------------------------------------------------------------------------------------------------------
