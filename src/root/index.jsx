import React, { useState } from 'react';
import Body from '../components/Body';
import Navbar from '../components/Navbar';
import { Flowers } from '../Mockdata/MockData';

const Root = () => {
  const [data, setData] = useState(Flowers);
  const onDelete = id => {
    const res = data.filter(value => value.id !== id)
    setData(res);
  }

  return (
    <div>
      <Navbar count={data.length} />
      <Body onDelete={onDelete} data={data} />
    </div>
  );
};
export default Root;
