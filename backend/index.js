const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require('cors');

app.use(express.json());
app.use(cors());

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'lol',
});

app.get('/', (req, res) => {
    db.query('SELECT * FROM lol.empresa', (result) => {
        res.send(result);
    })
})

// app.post("/register", (req, res) => {
//     const email = req.body.email;
//     const password = req.body.password;


//     db.query("SELECT * FROM users WHERE email = ?", [email], 
//     (err, result) => {
//         if(err) {
//             res.send(err)
//         }
//         res.send(result);
//     })
// })

app.listen(3001, () => {
    console.log("Server is running on port 3001");
} )