import styled from 'styled-components';
import data from './data.json';

console.log(data.length);

export const SectionStats = styled.section`
  padding-top: 20px;
  width: 400px;
  height: auto;

  overflow: hidden;

  border: 1px solid black;
  border-radius: 10px;
  box-shadow: 10px 10px 5px 0px rgba(0, 0, 0, 0.75);
  -webkit-box-shadow: 10px 10px 5px 0px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 10px 10px 5px 0px rgba(0, 0, 0, 0.75);
`;

export const StatsTitle = styled.h2`
  margin-bottom: 20px;
  text-align: center;
  text-transform: uppercase;
`;

export const StatsList = styled.ul`
  display: flex;
  justify-content: center;
  list-style: none;

  border-top: 1px solid black;
`;

export const StatsItem = styled.li`
  display: flex;
  align-items: center;
  flex-flow: column;
  padding: 10px;
  flex-basis: calc(100% / ${data.length});

  &:not(:last-child) {
    border-right: 1px solid black;
  }
`;

export const StatsLabel = styled.span`
  color: black;
  margin-bottom: 10px;
`;

export const StatsPct = styled.span`
  color: black;
  font-weight: 500;
  font-size: 30px;
`;
