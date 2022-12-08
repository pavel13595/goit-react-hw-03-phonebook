import styled from 'styled-components';
import { BiSearch } from 'react-icons/bi';

export const Box = styled.div`
  width: 258px;
`;

export const TextSearch = styled.p`
  font-size: 18px;
  line-height: 20px;
  font-weight: 400;
  letter-spacing: 0.5px;
  margin-bottom: 8px;
  align-items: center;
  text-align: center;
`;

export const InputSearch = styled.input`
  padding: 5px 12px;
  min-height: 48px;
  margin-bottom: 15px;
  border: 1px solid rgb(117, 117, 117);
  border-radius: 12px;
  outline: none;
  display: block;
  width: 100%;
  padding: 12px 16px px;
  font-size: 20px;
  line-height: 20px;
  font-weight: 400;
  letter-spacing: 1px;
  color: rgb(117, 117, 117);
  background-color: inherit;
  :active,
  :focus {
    color: rgb(127, 127, 127);
    background-color: #fff;
    border: 1px solid #0969da;
  }
`;

export const SearchIcon = styled(BiSearch)`
  position: relative;
  bottom: 50px;
  left: 230px;
  fill: #0969da;
`;
