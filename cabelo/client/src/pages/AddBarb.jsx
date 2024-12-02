import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const AddBarb = () => {
    const [reserva, setReserva] = useState({
        ID: "",
        NOME: "",
    })
    
    const navigate = useNavigate()

    const handleChange = (e) => {
        setReserva(prev => ({ ...prev, [e.target.name]: e.target.value }))
    }
    const handleClick = async e =>{
        e.preventDefault()
        try{
            await axios.post("http://localhost:3004/cabelo", reserva)
            navigate("/barbeiro")
        }catch(err){
            console.log(err)
        }
    }

    return (
        <div className="form border border-neutral-500 rounded-md p-6">
            <h1 className='text-white'>Adicionar novo Barbeiro</h1>
            <input type="text" placeholder="Nome" onChange={handleChange} name='NOME'/>
            
            <button className="formButton" onClick={handleClick}>Adicionar</button>
        </div>

    )
}

export default AddBarb