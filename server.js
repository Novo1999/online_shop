const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const fs = require('fs')

const app = express()
const port = 3000

app.use(bodyParser.json())
app.use(cors())

const getProducts = () => {
  const data = fs.readFileSync('db.json')
  return JSON.parse(data)
}

app.get('/products', (req, res) => {
  const data = getProducts()

  return res.json(data.products)
})

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`)
})
