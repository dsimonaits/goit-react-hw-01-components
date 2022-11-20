import styled from 'styled-components';

export const ProfileWrapper = styled.div`
  /* margin: 0 auto; */
  width: 300px;
  height: auto;
  border: 1px solid black;
  border-radius: 10px;
  background-color: #faffdb;
  overflow: hidden;
`;

export const DescriptionWrapper = styled.div`
  padding: 10px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  flex-flow: column;
`;

export const Avatar = styled.img`
  width: 80%;
  border: 1px solid #fff;
  background-color: #fff;
  border-radius: 100%;
`;

export const Text = styled.p`
  margin-top: 10px;
  font-weight: ${({ username }) => (username ? '600' : '400')};

  font-size: ${({ username }) => (username ? '30px' : '20px')};
`;

export const StatsList = styled.ul`
  padding-top: 20px;
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
  border-top: 1px solid black;

  &:not(:last-child) {
    border-right: 1px solid black;
  }
`;

export const ItemLabel = styled.span`
  font-weight: 400;
`;

export const ItemData = styled.span`
  font-size: 20px;
  font-weight: 600;
`;
