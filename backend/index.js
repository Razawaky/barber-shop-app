const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require('cors');

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    date: "banco",
});

app.use(express.json());
app.use(cors());

app.post("/register", (req, res) => {
    const email = req.body.email;
    const password = req.body.password;

    db.query("SELECT * FROM users WHERE email = ?", [email], 
    (err, result) => {
        if(err) {
            res.send(err)
        }
        res.send(result);
    })
})

// app.get("/", (req, res) => {
//     db.query("INSERT INTO users (email, password) VALUES ('santana@bol', '878') ", (err, result) => {
//         if(err) {
//             console.log(err);
//         }
//     }
//     );
// });

app.listen(3001, () => {
    console.log("Server is running on port 3001");
} )