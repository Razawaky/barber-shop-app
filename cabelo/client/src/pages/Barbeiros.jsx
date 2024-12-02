import React, { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios'
import { Link } from "react-router-dom"
import "../../src/style.css"


const Barbeiro = () => {
    const [barbeiros, setBarbeiros] = useState([])

    const [busca, setBusca] = useState("")

    useEffect(() => {
        const fetchAllBarbeiros = async ()=>{
            try{
                const res = await axios.get("http://localhost:3004/cabelo")
                setBarbeiros(res.data)
            }catch(err){
                console.log(err)
            }
        }
        fetchAllBarbeiros()
    },[])

    const handleDelete = async (id)=>{
        try {
            await axios.delete("http://localhost:3004/cabelo/"+id)
            window.location.reload()
        } catch (err) {
            console.log(err)
        }
    }

    const barbeirosFiltradas = barbeiros.filter((barbeiro) => {
        const expressao = busca.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "")
        const conteudo = `${barbeiro.ID} ${barbeiro.NOME}`
          .toLowerCase()
          .normalize('NFD')
          .replace(/[\u0300-\u036f]/g, "")
            return conteudo.includes(expressao)
        })

    return(

        <>
        <div className="sm:rounded-lg h-screen ">

            <h1 className='text-white mt-4'>Lista de Barbeiros</h1>

            <div className="pb-4 mb-2 my-6 mx-1 focus-none">
                {/* <label for="table-search" class="sr-only">Search</label> */}

                <div className="relative mt-1">
                    <div className="absolute inset-y-0 rtl:inset-r-0 start-0 flex items-center ps-3 pointer-events-none">
                        <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                        </svg>
                    </div>

                    <input
                        type="text"
                        id="table-search"
                        value={busca}
                        onChange={(e) => setBusca(e.target.value)}
                        className="w-full block pt-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Pesquisar"
                    />
                </div>
            </div>

            <div className="overflow-y-scroll w-full h-[68vh] shadow-md sm:rounded-lg border border-slate-700 drop-shadow-2xl shadow-black">
                
                <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 scroll-auto" id='tabela'>
                    <thead className="relative sticky fixed top-0 text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr className="">
                            <th scope="col" className="px-6 py-3">
                                ID 
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Nome
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Ações
                            </th>
                        </tr>
                    </thead>
                    <tbody className="">
                        {barbeirosFiltradas.map(barbeiro => (
                            <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700" key={barbeiro.ID}>
                                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    {barbeiro.ID}
                                </th>
                                <td className="px-6 py-4">
                                    {barbeiro.NOME}
                                </td>
                                <td className="px-6 py-4 flex">
                                    <button className="delete mx-2" onClick={()=>handleDelete(barbeiro.ID)}>Deletar</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div> 
            <button className='uppercase bg-gray-700 dark:text-gray-100 w-full p-2 my-4 rounded-lg  '>
                <Link to="/addB">Adicionar barbeiro</Link>
            </button>

            <br />
            <button className='uppercase bg-gray-700 dark:text-gray-100 w-full p-2 my-4 rounded-lg  '>
                <Link to="/reserva">voltar</Link>
            </button>
        </div>

        </>
        

    )
}

export default Barbeiro
