import styled from 'styled-components';
import { AiOutlineDelete } from 'react-icons/ai';

export const ContactName = styled.li`
  display: flex;
  margin-bottom: 15px;
  border: 1px dashed black;
  padding-top: 10px;
  :hover {
    color: rgb(100, 100, 100);
  }
`;
export const Name = styled.p`
  font-size: 18px;
  line-height: 20px;
  font-weight: 400;
  letter-spacing: 0.5px;
  width: 300px;
  text-align: center;
`;

export const DeleteButton = styled.button`
  border: none;
  outline: none;
  background-color: #e1e1e1;
  margin-left: 10px;
  cursor: pointer;
`;

export const DeleteIcon = styled(AiOutlineDelete)`
  position: relative;
  bottom: 3px;
  :hover {
    fill: red;
  }
`;
