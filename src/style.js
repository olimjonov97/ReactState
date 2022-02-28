import styled from 'styled-components';

export const Container = styled.div`
  margin: 0;
  background-color: coral;
  width: 100%;
  height: 600px;
`;
export const Title = styled.h2`
  color: red;
`;
const getSize = ({ type }) => {
  console.log(type);
  switch (type) {
    case 'large':
      return '200px';
    case 'medium':
      return '150px';
    case 'small':
      return '100px';
    default:
      return '200px';
  }
};
export const Box = styled.div`
  text-align: center;
  width: ${() => getSize};
  height: ${getSize};
  border: 1 solid red;
  background: yellowgreen;
  margin: 10px;
`;
export const Input = styled.input`
  color:black;
  background-color: grey;
`;
export const Button = styled.button`
  width: ${({width})=>width?`${width}px`:'100px'};
  height: ${({height})=>height?`${height}px`:'100px'};
  cursor:pointer;
  border-radius:5px;
  border:none;
  :hover{
    background-color: grey;
  }
  :active{
    transform: scale(0.97);
  
  }
`;
// export const Small = styled.div`
//   text-align: center;
//   width: 100px;
//   height: 100px;
//   border: 1 solid red;
//   background: yellowgreen;
//   margin:10px;
// `;

// const getSize = ({ type }) => {
//   console.log(type);
//   switch (type) {
//     case 'large':
//       return '200px';
//     case 'medium':
//       return '150px';
//     case 'small':
//       return '100px';
//     default:
//       return '150px';
//   }
// };
// export const Box = styled.div`
//   width: ${getSize};
//   height: ${getSize};
//   background-color: purple;
//   margin: 10px;

//   ${(props) => console.log(props)}
// `;
// export const Input = styled.input`
//   color: grey;
//   background-color: whitesmoke;
// `;
// export const Button = styled.button`
//   width: ${({width}) => width ?`${width}px`:'200px'};
//   color: white;
//   border:0;
//   background-color: blue;
//   cursor:pointer;
//   :active{
//       transform: scale(0.97);
//   }
// `;
// export const Box = styled.div`
//   width: ${({ large }) => (large ? '200px' : '100px')};
//   height: ${(props) => (props.large ? '200px' : '100px')};
//   background-color: purple;
//   margin: 10px;

//   ${(props) => console.log(props)}
// `;

// export const Small = styled.div`
//     margin:10px;
//     width:100px;
//     height:100px;
//     background-color: purple;
//     `
