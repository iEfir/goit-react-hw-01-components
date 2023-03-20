import styled from 'styled-components';

const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 15px;
  width: 250px;
  padding: 10px;
  background-color: white;
  justify-content: center;
`;

const ListItem = styled.li`
  display: flex;
  gap: 10px;
  align-items: center;
  padding: 10px;
  background-color: whitesmoke;
  box-shadow: 3px 3px 10px -3px rgba(0, 0, 0, 0.75);
`;

const IsOnline = styled.span`
  width: 15px;
  height: 15px;
  border-radius: 50%;
  background: ${props => {
    return props.isOnline ? 'green' : 'red';
  }};
`;

export { List, ListItem, IsOnline };
