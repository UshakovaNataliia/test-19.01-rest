import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import axios from 'axios';

const modal = document.querySelector('#modal-root');

const Modal = ({id}) => {
    const [users, setUsers] = useState([]);
    const [error, setError] = useState(null);

  useEffect(() => {
  axios
    .get(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then(({ data }) => {
          setUsers(data);
    })
    .catch(error => {
      setError(error);
      alert(error);
    });
      window.addEventListener('keydown', handleKeydown);
      modal.classList.remove('close');
      
  }, []);
    
  const onClose = () => {
      modal.classList.add('close');
  }
  const handleBackdropClick = e => {
      if (e.currentTarget === e.target) onClose();
  }
  const handleKeydown = e => {
      if (e.code === 'Escape') onClose();  
  }
  window.removeEventListener('keydown', handleKeydown);   
    
  return createPortal(
      <>
      <div className="Overlay" onClick={handleBackdropClick} key={users.id}>
            <div className="Modal" >
                  <p>ID: {users.id}</p>
                  <p>USERID: {users.userId}</p>
                  <span>TITLE:</span>
                  <p> {users.title}</p>
                  <span>BODY: </span>
                  <p>{users.body}</p>
            </div>
      </div>
      </>,
    modal,
  );
};

export default Modal;