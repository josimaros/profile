import styled from 'styled-components';

export const Container = styled.button`
  background: rgb(109, 219, 154);
  height: 48px;
  border-radius: 48px;
  border: 0;
  padding: 0 16px;
  color: #ffffff;
  width: 100%;
  font-weight: 500;
  margin-top: 16px;
  transition: background-color 0.2s;
  &:hover {
    background: rgba(102, 193, 140,0.8);
  }
`;