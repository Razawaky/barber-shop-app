import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Add = () => {
    const [reserva, setReserva] = useState({
        ID_USER:"",
        ID_CABELEIRO:"",
        DATA:"",
        HORA:""
    })

    const navigate = useNavigate()

    const handleChange = (e) =>{
        setReserva((prev)=>({...prev, [e.target.name] : e.target.value}))
    }
    const handleClick = async e =>{
        e.preventDefault()
        try{
            await axios.post("http://localhost:3306/reserva", reserva)
            navigate("/")
        }catch(err){
            console.log(err)
        }
    }

    return (
        <div className="form">
            <h1>Fazer Reserva</h1>
            <input type="number" placeholder="Seu Id" onChange={handleChange} name='ID_USER'/>
            <input type="number" placeholder="Id do Cabeleireiro" onChange={handleChange} name='ID_CABELEIRO'/>
            <input type="date" placeholder="Dia" onChange={handleChange} name='DATA'/>
            <input type="time" placeholder="Horário" onChange={handleChange} name='HORA'/>

            <button className="formButton" onClick={handleClick}>Reservar</button>
        </div>
    )
}

export default Add