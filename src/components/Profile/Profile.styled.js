import styled from 'styled-components';

export const ProfileWrapper = styled.div`
  width: 300px;
  height: auto;
  outline: 1px solid black;
  border-radius: 10px;
  background-color: #faffdb;
  overflow: hidden;

  box-shadow: 10px 10px 5px 0px rgba(0, 0, 0, 0.75);
  -webkit-box-shadow: 10px 10px 5px 0px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 10px 10px 5px 0px rgba(0, 0, 0, 0.75);
`;

export const DescriptionWrapper = styled.div`
  padding: 15px;
  display: flex;
  align-items: center;
  flex-flow: column;
`;

export const Avatar = styled.img`
  width: 80%;
  background-color: #fff;
  border-radius: 100%;
`;

export const Text = styled.p`
  margin-top: 15px;
  font-weight: ${({ username }) => (username ? '600' : '400')};

  font-size: ${({ username }) => (username ? '30px' : '20px')};
`;

export const StatsList = styled.ul`
  display: flex;
  justify-content: center;
  list-style: none;
`;

export const StatsItem = styled.li`
  display: flex;
  flex-basis: calc((100%) / 3);
  align-items: center;
  flex-flow: column;
  padding: 5px;
  background-color: #ffffff;
  outline: 1px solid black;
`;

export const ItemLabel = styled.span`
  margin-bottom: 5px;
  font-weight: 400;
`;

export const ItemData = styled.span`
  font-size: 20px;
  font-weight: 600;
`;
