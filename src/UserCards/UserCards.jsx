import React,  { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';

const UL = styled.ul`
  padding: 30px;
  font-size: 16px;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

`;
const LI = styled.li`
  list-style: none;
  border: 1px solid rgb(178, 196, 24);
  border-radius: 10px;
  width: 300px;
  padding: 10px;
  margin: 10px auto;
`;
const TITLE = styled.p`
height: 150px;
text-align: center;
font-size: 24px;
color:  rgb(178, 196, 24);
font-weight: 500;
margin-bottom: 10px;
`;

const UserCards = ({openModal}) => {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/`)
      .then(({ data }) => setUsers(data))
      .catch(error => {
        setError(error);
        alert(error);
      });
    
  }, []);

  return (
    <UL>
      {users.map(({ id, title, body }) => (
        <LI key={id} onClick={openModal} id={id}>
          <TITLE>{title}</TITLE>
          <p>{body}</p>
        </LI>
      ))}
    </UL>
    
  )
};
export default UserCards;