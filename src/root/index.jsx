import React, { useState } from 'react';
import Body from '../components/Body';
import Navbar from '../components/Navbar';
import { Flowers } from '../Mockdata/MockData';

const Root = () => {
  const [data, setData] = useState(Flowers);
 

  return (
    <div>
      <Navbar />
      <Body />
    </div>
  );
};
export default Root;
