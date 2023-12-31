const express = require('express')
const path = require('path')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'views/helloworld.html'))
})

app.listen(port, () => {
  console.log(`Your app is live at ${port}`)
})