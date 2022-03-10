import styled, { css, keyframes } from 'styled-components';

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
  color: black;
  background-color: grey;
`;
const common = css`
  width: ${({ width }) => (width ? `${width}px` : '100px')};
  height: ${({ height }) => (height ? `${height}px` : '100px')};
  cursor: pointer;
  border-radius: 5px;
  border: none;
  :hover {
    background-color: grey;
  }
  :active {
    transform: scale(0.97);
  }
`;
export const Button = styled.button`
  ${common}
`;
export const InheritedBtn = styled(Button)`
  :active {
    transform: scale(0.97);
    background-color: blue;
  }
`;
const rotate = keyframes`
  from{
    transform: rotate(0deg)
  }
  to{
    transform: rotate(360deg)
  }
`
export const Rotatebtn = styled('div')`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100px;
  height: 100px;
  border: 1px solid red;
  border-radius: 50%;
  animation:${rotate} 5s linear infinite;
`;
