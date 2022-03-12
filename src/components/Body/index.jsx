import React, { useContext } from 'react';
import { Container } from './style';
import { FlowersContext } from '../../context';

const Body = () => {
  const [data, setData] = useContext(FlowersContext);
  const onDelete = id => {
    const res = data.filter(value => value.id !== id)
    setData(res)
  }
  return (
    <Container>
      {data.map((value) => (
        <h1 key={value.id}>
          {value.id}={value.name}
          <button onClick={() => onDelete(value.id)}>delete</button>
        </h1>
      ))}
    </Container>
  );
};

export default Body;
