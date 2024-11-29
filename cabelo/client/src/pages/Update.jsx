import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

const Update = () => {
    const [reserva, setReserva] = useState({
        ID_CABELEIRO:"",
        DATA:"",
        HORA:"",
        USERNAME: ""
    })

    const navigate = useNavigate()
    const location = useLocation()
    const reservaId = location.pathname.split("/")[2]

    const handleChange = (e) =>{
        setReserva((prev)=>({...prev, [e.target.name] : e.target.value}))
    }
    const handleClick = async e =>{
        e.preventDefault()
        try{
            await axios.put("http://localhost:3004/reserva/"+ reservaId, reserva)
            navigate("/")
        }catch(err){
            console.log(err)
        }
    }

    return (
        <div className="form">
            <h1>Atualizar Reserva</h1>
            <p><strong>{reserva.USERNAME}</strong></p>
            
            <input type="number" placeholder="Id do Cabeleireiro" onChange={handleChange} name='ID_CABELEIRO'/>
            <input type="date" placeholder="Dia" onChange={handleChange} name='DATA'/>
            <input type="time" placeholder="Horário" onChange={handleChange} name='HORA'/>

            <button className="formButton" onClick={handleClick}>Atualizar</button>
        </div>
    )
}

export default Update