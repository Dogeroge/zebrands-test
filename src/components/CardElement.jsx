import React from 'react';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { Badge } from 'react-bootstrap';
import useGetUsers from '../hooks/useGetUsers';
import { useSelector } from 'react-redux';

const CardElement = ({item, type}) => {
  const { requestUserDetails } = useGetUsers();
  const userDetails = useSelector((state) => state.users.itemDetail);

  const showDetails = (user) => {
    requestUserDetails({user});
  }
  return (
    <Card className="bg-wetasphalt text-white my-2 shadow">
      <Card.Body>
        <Row>
          {type === 'users' && (
            <>
              <Col xs="12 text-start">
                <img
                  src={item.avatar_url}
                  className="bg-white avatar-img rounded-circle me-3"
                  alt="avatar" 
                />
                <a
                  className="fs-6 fw-bold text-white"
                  href={item.html_url}
                  target="_blank"
                  rel="noreferrer"
                >{item.login}</a>
              </Col>
              {userDetails && userDetails.login === item.login && (
                <Col xs="12" className='text-start mt-2' style={{fontSize: 14}}>
                  <Row>
                    <Col xs="6" className="mb-1">
                      <span>{userDetails.name ? userDetails.name : 'no data'}</span>
                    </Col>
                    <Col xs="6" className="mb-1">
                      <a
                        className="text-white"
                        href={userDetails.blog}
                        target="_blank"
                        rel="noreferrer"
                      >
                        <i className="bi-globe" /> {userDetails.blog ? userDetails.blog : 'none'}
                      </a>
                    </Col>
                    <Col xs="12" className="mb-1">
                      <span className='fst-italic'>"{userDetails.bio ? userDetails.bio : 'nothing'}"</span>
                    </Col>
                    <Col xs="12" className="mb-1 text-end">
                      <span><i className="bi-pin-map-fill" /> {userDetails.location  ? userDetails.location : 'No Where'}</span>
                    </Col>
                  </Row>
                </Col>
              )}
              <Col xs="12" className="text-end">
                <Button
                  variant="outline-light"
                  size="sm"
                  onClick={() => showDetails(item.login)}
                > 
                  {userDetails && userDetails.login === item.login ? (
                    <>
                      <i className="bi-caret-up me-1" />
                      Hide
                    </>
                    ) : (
                      <>
                        <i className="bi-caret-down me-1" />
                        Show
                      </>
                    )}
                </Button>
              </Col>
            </>
          )}
          {
            type === 'repos' && (
              <>
                <Col xs="12 text-start mb-2">
                  <div className="d-flex justify-content-between">
                    <a className="fs-6 fw-bold text-white decoration-none" href={item.html_url} target="_blank" rel="noreferrer">
                      <i className="bi-journal-bookmark-fill me-2"/>
                      {item.full_name}
                    </a>
                    <img src={item.owner.avatar_url} className="avatar-img-xs rounded-circle" alt="avatar" />
                  </div>
                  <span className="fw-light fst-italic" style={{fontSize: 14}}>
                    {item.description}
                  </span>
                </Col>
                <Col xs="12" className="text-start mb-2">
                  {item.topics.map((topic, i) => (
                    <span key={i}>
                      <Badge pill bg="primary" text="light" className='fw-normal me-1 mb-1'>
                        {topic}
                      </Badge>
                    </span>
                  ))}
                </Col>
                <Col xs="12" className="text-start" style={{fontSize: 12}}>
                  <Row className="justify-content-between">
                    <Col xs="4">
                      <span className="text-white">
                        <i className="bi-star me-1" />
                        {item.stargazers_count}
                      </span>
                    </Col>
                    <Col xs="4">
                      <span className="text-white">
                        <i className="bi-eye me-1" />
                        {item.stargazers_count}
                      </span>
                    </Col>
                    <Col xs="4">
                      <span className="fw-bold">
                        <div className="badge rounded-pill bg-warning p-1 me-1">
                          <div className="visually-hidden"/>
                        </div>
                        {item.language}
                      </span>
                    </Col>
                    <Col xs="4">
                      <span className="text-white">
                        created: {new Date(item.created_at).toLocaleDateString()}
                      </span>
                    </Col>
                    <Col xs="4">
                      <span className="text-white">
                        updated: {new Date(item.updated_at).toLocaleDateString()}
                      </span>
                    </Col>
                  </Row>
                </Col>
              </>
            )
          }
        </Row>
      </Card.Body>
    </Card>
  );
};

export default CardElement;