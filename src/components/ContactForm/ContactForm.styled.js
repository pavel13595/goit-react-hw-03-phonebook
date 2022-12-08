import styled from 'styled-components';
import { BsPeople, BsTelephone } from 'react-icons/bs';
export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 300px;
  padding: 20px;
  border: 1px solid rgb(117, 117, 117);
`;
export const TextLabel = styled.label`
  font-size: 18px;
  line-height: 20px;
  font-weight: 400;
  letter-spacing: 0.5px;
  margin-bottom: 8px;
`;
export const FormInput = styled.input`
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
export const AddButton = styled.button`
  color: #24292f;
  background-color: #f6f8fa;
  display: inline-block;
  padding: 8px;
  font-size: 18px;
  line-height: 20px;
  white-space: nowrap;
  vertical-align: middle;
  cursor: pointer;
  border: 1px solid;
  border-radius: 6px;
  appearance: none;
  transition: background-color 250ms linear;

  :active {
    background-color: #57606a;
    color: #f6f8fa;
  }
`;

export const FormIconPeople = styled(BsPeople)`
  position: relative;
  left: 10px;
  top: 4px;
`;
export const FormIconPhone = styled(BsTelephone)`
  position: relative;
  left: 10px;
  top: 4px;
`;
