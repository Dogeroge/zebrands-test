import React from 'react'
import { Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

export default function Main() {
  const navigate = useNavigate()
  return (
    <div className="main-container">
      <div className="container fluid">
        <div className="row h100 align-content-center">
          <div className="col">
            <div className="card bg-wetasphalt shadow-lg">
              <div className="card-body">
                <img src={require('../assets/GitHub.png')} className="d-block mx-auto my-4 logo" alt="logo"/>
                <div className="col-12 text-center my-4">
                  <p className="fs-1 fw-bold text-white">
                    Bienvenido a la Web Git API Search
                  </p>
                  <p className="fw-light text-white">
                    Esta app sirve para realizar busquedas de los repositorios que gustes!!
                    <br/>
                    Prueba nuestras opciones de busqueda!!
                  </p>
                </div>
                <div className="col-xs-12 d-grid my-4">
                  <Button variant="primary" size="lg" onClick={() => navigate('search/users')}>Busqueda por usuarios</Button>
                </div>
                <div className="col-xs-12 d-grid my-4">
                  <Button variant="primary" size="lg" onClick={() => navigate('search/repos')}>Busqueda por repositorio</Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
