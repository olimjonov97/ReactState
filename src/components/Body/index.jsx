import React, { useState } from 'react';
import { Container } from './style';
const Body = ({ data, onDelete }) => {
  return (
    <Container>
      {data.map((value) => (
        <h1 key={value.id}>
          {value.id}={value.name}
          <button onClick={()=>onDelete(value.id)}>delete</button>
        </h1>
      ))}
    </Container>
  );
};

export default Body;
