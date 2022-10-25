import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { useNavigate} from 'react-router-dom';

const Error404 = () => {
  const navigate = useNavigate();
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
          <img src={require('../assets/Error404.png')} className="img-fluid" alt="error-img"/>
        </Col>
        <Col xs="11" xl="5" className="my-2">
          <Row>
            <Col xs="12" className='my-2'>
              <h1 className="display-3 lh-sm fw-bold text-white">
                Page not found
              </h1>
              <p className="fw-light text-white">
                Oops! We're sorry, the page you requested could not be found <br/>
                Please go back to the homepage
              </p>
            </Col>
            <Col xs="12" xl="6" className="my-2">
              <div className="d-grid">
                <Button
                  variant="primary"
                  size="lg"
                  onClick={() => navigate('/')}
                >
                  Back to home
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
  );
};

export default Error404;