const express = require('express')
const path = require('path')
const PORT = (process.env.PORT || 4001)
const app = express()

app.use(express.static(path.join(__dirname, 'public')))

app.use('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/index.html'))
})

// server object respresenting the server
const server = app.listen(PORT, () => console.log(`Listening to port ${PORT}`))
