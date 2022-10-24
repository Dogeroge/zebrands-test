import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Button from 'react-bootstrap/Button'

const MainNavbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  return (
    <Col xs="12" className="sticky-top p-2 bg-wetasphalt shadow-lg">
      <div className="container">
        <Row className="justify-content-center">
          <Col xs="12" className="text-center">
            <span
              className='fs-2 fw-bold text-white mb-3'
              onClick={() => navigate('/')}
            >
              Search
            </span>
          </Col>
          <Col xs="6" xl="3">
            <div className="d-grid">
              <Button
                className="my-2 border-0"
                active={location.pathname === '/search/users'}
                variant="outline-light"
                size="sm"
                onClick={() => navigate('users')}
              >
                By user
              </Button>
            </div>
          </Col>
          <Col xs="6" xl="3">
            <div className="d-grid">
              <Button
                className="my-2 border-0"
                active={location.pathname === '/search/repos'}
                variant="outline-light"
                size="sm"
                onClick={() => navigate('repos')}
              >
                By repository
              </Button>
            </div>
          </Col>
        </Row>
      </div>
    </Col>
  );
};

export default MainNavbar;