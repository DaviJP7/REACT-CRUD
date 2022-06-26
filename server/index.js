const express = require('express')
const app = express();
const PORT = 3001
const mysql = require('mysql')
const cors = require('cors')
const db = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "010200",
    database: "crud_react"
})

app.use(cors())
app.use(express.json())

app.post('/store', (req, res) => {
    const { name, cost, category } = req.body;

    let sql = "INSERT INTO games (name, cost, category) VALUES (?,?,?)";
    db.query(sql, [name, cost, category], (err, result) => {
        console.log(err)
    })
    return "Success✅";
})

app.get('/getGames', (req, res) => {
    let sql = "SELECT * FROM games";
    db.query(sql, (err, result) => {
        if (err) console.log(err);
        else res.send(result);
    })
})

app.put('/edit', (req, res) => {
    const { id, name, cost, category } = req.body

    let sql = "UPDATE games SET name = ?, cost = ?, category = ? WHERE id = ?";

    db.query(sql, [name, cost, category, id], (err, result) => {
        if (err) console.log(err);
        else res.send(result);
    })
})

app.delete('/delete/:id', (req, res) => {
    const { id } = req.params
    let sql = "DELETE FROM games WHERE id = ?";

    db.query(sql, [id], (err, result) => {
        if (err) console.log(err);
        else res.send(result);
    })
})

app.listen(PORT, () => {
    console.info(`Server is running on: http://127.0.0.1:${PORT}`)
})