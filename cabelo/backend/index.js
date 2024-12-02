import express from "express"
import mysql from "mysql"
import cors from "cors"

const app = express()

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "cabelo"
})

app.use(express.json())
app.use(cors({
    origin: '*', // Permite qualquer origem. Troque por um domínio específico, se necessário.
    methods: ['GET', 'POST', 'PUT', 'DELETE'], // Métodos permitidos
    allowedHeaders: ['Content-Type', 'Authorization'], // Cabeçalhos permitidos
    credentials: true // Permite envio de cookies/autenticação, se necessário
}))

app.get("/", (req, res)=>{
    res.json("hello, aq é o back")
})

//CREATE
app.post("/reserva", (req,res)=>{
    const q = "INSERT INTO RESERVA (`ID_USER`, `ID_CABELEIRO`, `DATA`, `HORA`) VALUES (?)"
    const values = [
        req.body.ID_USER,
        req.body.ID_CABELEIRO,
        req.body.DATA,
        req.body.HORA
    ]

    db.query(q, [values], (err,data)=>{
        if(err) return res.json(err)
        return res.json("Reserva marcada!")
    })
})

//READ
app.get("/reserva", (req,res)=>{
    const q = "SELECT RESERVA.*, USER.NOME AS USERNAME, CABELEIRO.NOME AS CABENAME FROM RESERVA JOIN USER ON RESERVA.ID_USER = USER.ID JOIN CABELEIRO ON RESERVA.ID_CABELEIRO = CABELEIRO.ID"
    db.query(q,(err,data)=>{
        if(err) return res.json(err)
        return res.json(data)
    })
})

//UPDATE
app.put("/reserva/:id", (req, res)=>{
    const reservaId = req.params.id
    const q = "UPDATE RESERVA SET `ID_CABELEIRO` = ?, `DATA` = ?, `HORA` = ? WHERE ID = ?"
    const values = [
        req.body.ID_CABELEIRO,
        req.body.DATA,
        req.body.HORA,
    ]

    db.query(q, [...values,reservaId], (err,data)=>{
        if(err) return res.json(err)
        return res.json("Reserva atualizada!")
    })
})

//DELETE
app.delete("/reserva/:id", (req, res)=>{
    const reservaId = req.params.id
    const q = "DELETE FROM RESERVA WHERE ID = ?"

    db.query(q, [reservaId], (err,data)=>{
        if(err) return res.json(err)
        return res.json("Reserva deletada!")
    })
})

app.listen(3004, ()=>{
    console.log("conectadors")
})