const express = require('express')
const authRoutes = require('./routes/authRoutes')
const app = express()
const PORT = process.env.PORT || 3000
const cors = require('cors')

app.use(cors({
    origin: 'http://127.0.0.1:5500',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization', 'x-access-token']
}));

app.use(express.json())

app.use('/auth', authRoutes)

app.listen(PORT, () => {
    console.log(`app corriendo en ${PORT}`)
})