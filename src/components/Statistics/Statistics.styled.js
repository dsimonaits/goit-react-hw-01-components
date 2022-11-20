import styled from 'styled-components';
import data from '../../data/data.json';

export const SectionStats = styled.section`
  width: 400px;

  overflow: hidden;

  outline: 1px solid black;
  border-radius: 10px;
  box-shadow: 10px 10px 5px 0px rgba(0, 0, 0, 0.75);
  -webkit-box-shadow: 10px 10px 5px 0px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 10px 10px 5px 0px rgba(0, 0, 0, 0.75);
`;

export const StatsTitle = styled.h2`
  display: block;
  margin: 20px 0px;
  text-align: center;
  text-transform: uppercase;
`;

export const StatsList = styled.ul`
  display: flex;
  list-style: none;

  outline: 1px solid black;
`;

export const StatsItem = styled.li`
  display: flex;
  align-items: center;
  flex-flow: column;
  padding: 10px;
  flex-basis: calc(100% / ${data.length});
  outline: 1px solid black;
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
