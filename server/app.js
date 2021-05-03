const express = require('express')
const app = express()
const port = 3000
const cors = require('cors')
const router = require('./routes')
const errorHandling = require('./middlewares/errorHandling')

app.use(cors())
app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use(router)
app.use(errorHandling)

app.listen(port, () => {
  console.log(`App listen on port ${port}`);
})