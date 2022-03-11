import React, { useState,createContext } from 'react'
import { Flowers} from'../Mockdata/MockData'
export const FlowersContext5 = createContext()

const Flower = (props) => {
    const children = props.children
  const [data, setData] = useState(Flowers);
  console.log(data)
    return (
      <FlowersContext.Provider value={[data, setData]}>
        {children}
      </FlowersContext.Provider>
    );
}
export default Flower;