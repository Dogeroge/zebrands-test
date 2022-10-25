import React from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import { useNavigate } from 'react-router-dom'

export default function Main() {
  const navigate = useNavigate()
  return (
    <div className="container">
      <Row className="fixed-top p-3 align-items-center">
        <Col>
          <span className="text-white fs-5 fw-bold">Edwin Rosas</span>
        </Col>
        <Col className='text-end'>
          <a
            className="text-white fs-6 fw-light"
            href="https://github.com/Dogeroge/zebrands-test"
            target="_blank"
            rel="noreferrer"
          >Git hub repository</a>
        </Col>
      </Row>
      <Row className="vh-100 align-items-center justify-content-center" style={{alignContent: 'center'}}>
        <Col xs="11" xl="7" className="my-2">
          <img src={require('../assets/laptop.png')} className="img-fluid" />
        </Col>
        <Col xs="11" xl="5" className="my-2">
          <Row>
            <Col xs="12" className='my-2'>
              <p className="fs-1 lh-sm fw-bold text-white">
                Welcome to the <br/> Github API Search
              </p>
              <p className="fw-light text-white">
                This app will allow you to search for repositories and users in GiHub.
                <br/>
                Try our options!
              </p>
            </Col>
            <Col xs="12" xl="6" className="my-2">
              <div className="d-grid">
                <Button
                  variant="primary"
                  size="lg"
                  onClick={() => navigate('search/users')}
                >
                  Search by user
                </Button>
              </div>
            </Col>
            <Col xs="12" xl="6" className="my-2">
              <div className="d-grid">
                <Button
                  variant="primary"
                  size="lg"
                  onClick={() => navigate('search/repos')}
                >
                  Search by repository
                </Button>
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
      <Row className="fixed-bottom p-3 text-end">
        <Col>
          <span className="text-white fs-6 fw-light">2022</span>
        </Col>
      </Row>
    </div>
  )
}
