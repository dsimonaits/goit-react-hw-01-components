import styled from 'styled-components';

export const Status = styled.span`
  width: 20px;
  height: 20px;
  margin-right: 15px;

  background-color: ${({ isOnline }) => (isOnline === true ? 'green' : 'red')};
  border-radius: 100%;
`;

export const Img = styled.img`
  margin-right: 15px;
`;

export const Name = styled.p`
  font-weight: 600;
  margin-left: 10px;
`;
