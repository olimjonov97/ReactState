import styled, { css, keyframes } from 'styled-components';
import {ReactComponent as search} from'../Icons/search.svg'
import {ReactComponent as heart} from'../Icons/heart.svg'
import {ReactComponent as shopping} from'../Icons/shopping.svg'
export const Container = styled.div`
display:flex;
flex-wrap:wrap;
gap:37px;
background-color:whitesmoke;
`;
export const Card = styled.div`
 display: flex;
 flex-direction: column;
 justify-content: center;
 align-items: center;
  width: 260px;
  height: 400px;
  background-color: #fbfbfb;
  :hover {
    .icon {
      display: inherit;

    }
    box-shadow: 1px 1px 2px red;
    cursor: pointer;
  }
`;
export const Image = styled.img`
  width: 100%;
  height: 250px;
`;
export const Cardwrapper = styled.div`
  display: none;
  gap:10px;
`;
export const SearchIcon = styled(search)`
`;
export const HeartIcon = styled(heart)`
margin:0 10px`;
export const ShoppingIcon = styled(shopping)``;