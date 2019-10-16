module.exports = (req, res) => {
  const ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress
  res.writeHead(200, {'Content-type': 'text/plain'})
  res.send(ip + "\n")
  res.end()
}
