import React from 'react';
import Toast from 'react-bootstrap/Toast';
import ToastContainer from 'react-bootstrap/ToastContainer';
import { useDispatch } from 'react-redux';
import { closeNotification } from '../features/notifications/notifReducer';

const Notifications = (props) => {
  const { notification } = props;
  const dispatch = useDispatch();
  return (
    <>
      <ToastContainer position="top-end" className='p-3'>
        <Toast
          bg={notification.type}
          show={notification.isOpen}
          onClose={() => dispatch(closeNotification())}
          autohide
          delay="3000"
        >
          <Toast.Header
            className="bg-transparent text-white"
            closeVariant="white"
            style={{justifyContent: 'space-between'}}
          >
            <strong>{notification.title}</strong>
          </Toast.Header>
          <Toast.Body className="text-white">
            {notification.message}
          </Toast.Body>
        </Toast>
      </ToastContainer>
    </>
  );
};

export default Notifications;