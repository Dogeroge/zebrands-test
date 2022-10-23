import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Button from 'react-bootstrap/Button'

const MainNavbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  return (
    <Col xs="12" className="main-navbar text-center sticky-top shadow-lg">
      <Row className="justify-content-center">
        <Col xs="12">
          <span className='fs-2 fw-bold text-white brand-name' onClick={() => navigate('/')}>Git API Search</span>
        </Col>
        <Col sm="6" xl="2">
          <div className="d-grid">
            <Button
              className="my-2 border-0"
              active={location.pathname === '/search/users'}
              variant="outline-light"
              size="sm"
              onClick={() => navigate('users')}
            >
              Busqueda por usuarios
            </Button>
          </div>
        </Col>
        <Col sm="6" xl="2">
          <div className="d-grid">
            <Button
              className="my-2 border-0"
              active={location.pathname === '/search/repos'}
              variant="outline-light"
              size="sm"
              onClick={() => navigate('repos')}
            >
              Busqueda por Repositorio
            </Button>
          </div>
        </Col>
      </Row>
    </Col>
  );
};

export default MainNavbar;