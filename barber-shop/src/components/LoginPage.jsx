// import React from 'react'

export default function LoginPage() {
  return (
    <>
    <div className="container ">
        <div className="flex justify-content-center">
            <h2>Faça login em sua conta</h2>
            <div className="col-md-8 input-area">
                <label htmlFor="usuario">Usuário:</label>
                <input type="text" placeholder="NomeUsuario" />
            </div>
            <div className="col-md-4"></div>
        </div>
    </div>
    </>
  )
}
