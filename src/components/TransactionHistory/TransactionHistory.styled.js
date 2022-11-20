import styled from 'styled-components';

export const Table = styled.table`
  width: 300px;

  border: 1px solid grey;
  border-collapse: collapse;

  td {
    text-align: center;
    line-height: 3;
    border: 1px solid grey;
  }

  tbody tr {
    :nth-of-type(odd) {
      background-color: #efefef;
    }
    :hover {
      background-color: lightsteelblue;
    }
  }
  thead > tr {
    line-height: 3;
    background-color: navajowhite;
  }

  thead th {
    border: 1px solid grey;
  }
`;
