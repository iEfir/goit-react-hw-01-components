import styled from 'styled-components';

const Table = styled.table`
  border-collapse: collapse;
  width: 700px;
  text-align: center;
  background-color: white;
  box-shadow: 3px 4px 21px 0px #000000;
`;

const Tr = styled.tr`
  background-color: #497bd1;
  color: whitesmoke;
  width: 100%;
`;

const Categories = styled.th`
  padding: 20px;
  &:not(:last-child) {
    border-style: solid;
    border-width: 0 1px 1px 0;
    border-color: white;
  }
  &:last-child {
    border-style: solid;
    border-width: 0 0 1px 0;
    border-color: white;
  }
`;

const Cell = styled.td`
  padding: 20px;
  &:not(:last-child) {
    border-style: solid;
    border-width: 0 1px 1px 0;
    border-color: #dce0e6;
  }
  &:last-child {
    border-style: solid;
    border-width: 0 0 1px 0;
    border-color: #dce0e6;
  }
`;

const Row = styled.tr`
  &:nth-child(odd) {
    background-color: #a6a6a6;
  }
`;

export { Table, Tr, Categories, Cell, Row };
