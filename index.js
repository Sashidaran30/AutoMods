import dotenv from 'dotenv';
dotenv.config();
import express from 'express'
const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/Instagram', (req, res) => {
    res.send('Yes_iam_sashi_30')
})

app.get('/Login', (req, res) =>{
    res.send('<h1>Login here</h1>')
})

app.get('/YouTube', (req, res) => {
    res.send('<h2>Mr.Beast</h2>')
})

app.listen(process.env.PORT, () => {
    console.log(`Example app listening on port ${port}`)
})