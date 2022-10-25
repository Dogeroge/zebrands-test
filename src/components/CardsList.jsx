import React, { useEffect, useState } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import CardElement from './CardElement';
import { numberWithComas } from '../config/utils';
import { Spinner } from 'react-bootstrap';

const CardsList = ({items, total, handleMore, loading, type}) => {
  const [visible, setVisible] = useState(false);

  const handleVisible = () => {
    if (window.scrollY >= 200) {
      setVisible(true);
    } else if (window.scrollY <= 0) {
      setVisible(false);
    }
  }

  const handleScrollT = () => {
    window.scrollTo(0,0)
  }
  
  useEffect(() => {
    window.addEventListener('scroll', handleVisible);
    handleVisible();
  });
  
  return (
    <>
      {items && items.length > 0 && (
        <Row className="justify-content-center">
          <Col xs="11" xl="11">
            <p className="fs-5 fw-light text-white text-start">Showing results: {items.length} of {numberWithComas(total)}</p>
            {items.map((item, index) => (
              <CardElement
                item={item}
                key={index}
                type={type}
              />
            ))}
            {(total > 15 && items.length !== total) && (
              <Button variant="outline-light" onClick={() => handleMore()}>
                {loading && (
                  <Spinner
                    as="span"
                    animation="border"
                    size='sm'
                    className="me-2"
                  />
                )}
                Load more
              </Button>
            )}
          </Col>
        </Row>
      )}
      {items && items.length < 1 && (
        <div className="mt-4">
          <i className="fs-1 bi-emoji-frown text-secondary"></i>
          <p className="fs-5 text-secondary">No results found</p>
        </div>
      )}
      {loading && (
        <Row className="justify-content-center mt-5">
          <Col xs="10" xl="8">
            <div className="spinner-border text-secondary mb-3" style={{height: '4rem', width: '4rem'}} />
            <p className="fs-3 text-secondary mb-5">Searching...</p>
          </Col>
        </Row>
      )}
      {visible && (
        <Button
          className="position-fixed rounded-circle text-white shadow-lg bottom-0 end-0 mb-5 me-3 p-0 "
          onClick={handleScrollT}
          style={{width: '60px', height: '60px'}}
        >
          <i className="bi-arrow-up fs-3" />
        </Button>
      )}
    </>
  )
};

export default CardsList;