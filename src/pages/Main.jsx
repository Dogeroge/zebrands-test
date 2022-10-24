import React from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import { useNavigate } from 'react-router-dom'

export default function Main() {
  const navigate = useNavigate()
  return (
    <div className="vh-100">
      <div className="container fluid">
        <div className="row vh-100 align-content-center justify-content-center">
          <div className="col-xl-10">
            <div className="card bg-wetasphalt shadow-lg">
              <div className="card-body">
                <Row>
                  <Col xs="12">
                    <img src={require('../assets/GitHub.png')} className="d-block mx-auto my-4 logo" alt="logo"/>
                  </Col>
                  <Col xs="12" className="text-center">
                    <p className="fs-2 lh-sm fw-bold text-white">
                      Welcome to the <br/> Github API Search app
                    </p>
                    <p className="fw-light text-white">
                      This app will allow you to search for repositories and users in GiHub.
                      <br/>
                      Try our options!
                    </p>
                  </Col>
                  <Col xs="12" lg="6" xl="6" className="my-2">
                    <div className="d-grid">
                      <Button
                        variant="light"
                        size="lg"
                        onClick={() => navigate('search/users')}
                      >
                        Search by user
                      </Button>
                    </div>
                  </Col>
                  <Col xs="12" lg="6" xl="6" className="my-2">
                    <div className="d-grid">
                      <Button
                        variant="light"
                        size="lg"
                        onClick={() => navigate('search/repos')}
                      >
                        Search by repository
                      </Button>
                    </div>
                  </Col>
                </Row>
              </div>
            </div>
          </div>
        </div>
        <div className="fixed-bottom bottom-0 end-0">
          <p className="text-secondary text-end mx-4 my-2">
            Developed by Edwin Rosas
          </p>
        </div>
      </div>
    </div>
  )
}
