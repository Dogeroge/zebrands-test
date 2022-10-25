import React from 'react';
import MainNavbar from './MainNavbar';
import Notifications from './Notifications';
import Footer from './Footer';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  const notification = useSelector(state => state.notifications)
  return (
    <>
      <Notifications notification={notification} />
      <Container fluid className='vh-100'>
        <Row className="align-items-center justify-content-center">
          <MainNavbar />
          <Col xs="12" xl="6" className="text-center mb-5">
            <Outlet />
          </Col>
        </Row>
        <Footer />
      </Container>
    </>
  );
};

export default Layout;