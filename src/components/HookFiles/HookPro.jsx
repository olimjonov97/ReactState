import { useState, useEffect } from 'react';
import { Flowers } from './MockData';
const HookPro = (props) => {
  const [data, setData] = useState(Flowers);
  const onDelete=(id)=>{
    let res = data.filter((value) => value.id !== id)
    setData(res)
  }
  

  return (
    <div>
      <h1>Hooks Component</h1>

      {data.map((value) => {
        return (
          <h1>
            {value.id}-{value.name} <button onClick={()=>onDelete(value.id)}>delete</button>
          </h1>
        );
      })}
    </div>
  );
};
export default HookPro;
