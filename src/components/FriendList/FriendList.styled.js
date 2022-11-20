import styled from 'styled-components';

export const List = styled.ul`
  padding: 10px;
  height: auto;
  display: flex;
  flex-flow: column;
  align-items: center;
`;

export const Item = styled.li`
  display: flex;
  justify-content: space-space-around;
  align-items: center;
  width: ${({ isOnline }) => (isOnline === true ? '250px' : '200px')};
  padding: 10px;

  border: 1px solid black;
  border-radius: 10px;

  box-shadow: 10px 10px 5px -3px rgba(0, 0, 0, 0.71);
  -webkit-box-shadow: 10px 10px 5px -3px rgba(0, 0, 0, 0.71);
  -moz-box-shadow: 10px 10px 5px -3px rgba(0, 0, 0, 0.71);

  &:not(:last-child) {
    margin-bottom: 10px;
  }
`;
