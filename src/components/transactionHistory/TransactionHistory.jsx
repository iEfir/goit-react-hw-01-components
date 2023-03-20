import { Categories, Cell, Row, Table, Tr } from './TransactionHistory.styled';

export const TransactionHistory = ({ items }) => {
  return (
    <Table>
      <thead>
        <Tr>
          <Categories>TYPE</Categories>
          <Categories>AMOUNT</Categories>
          <Categories>CURRENCY</Categories>
        </Tr>
      </thead>
      <tbody>
        {items.map(item => (
          <Row key={item.id}>
            <Cell>{item.type}</Cell>
            <Cell>{item.amount}</Cell>
            <Cell>{item.currency}</Cell>
          </Row>
        ))}
      </tbody>
    </Table>
  );
};
