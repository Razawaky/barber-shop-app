import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios'
import { Link } from "react-router-dom"

const Reserva = () => {
    const [reservas, setReserva] = useState([])

    useEffect(() => {
        const fetchAllReserva = async ()=>{
            try{
                const res = await axios.get("http://localhost:3004/reserva")
                setReserva(res.data)
            }catch(err){
                console.log(err)
            }
        }
        fetchAllReserva()
    },[])

    const handleDelete = async (id)=>{
        try {
            await axios.delete("http://localhost:3004/reserva/"+id)
            window.location.reload()
        } catch (err) {
            console.log(err)
        }
    }

    return(
        <div>
            <h1>Cabeleireiro Dortas</h1>
            <div className="users">
                {reservas.map(reserva =>(
                    <div className="user" key={reserva.ID}>
                        <h2>Reserva de {reserva.USERNAME}</h2>
                        <h3>Com o/a profissional {reserva.CABENAME}</h3>
                        <h3>No dia {reserva.DATA}</h3>
                        <h3>Às {reserva.HORA}</h3>

                        <button className="delete" onClick={()=>handleDelete(reserva.ID)}>Deletar</button>
                        <button className="update"><Link to={`/update/${reserva.ID}`}>Atualizar</Link></button>
                    </div>
                ))}
            </div>
            <button><Link to="/add">Adicionar Reserva</Link></button>
        </div>
    )
}

export default Reserva