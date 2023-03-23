import styled from 'styled-components';

const Container = styled.section`
  width: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 3px 4px 21px 0px #000000;
`;

const Title = styled.h2`
  display: flex;
  justify-content: center;
  width: 100%;
  padding: 25px 0;
  background-color: white;
  color: #4a4a4a;
`;

const List = styled.ul`
  display: flex;
  width: 100%;
`;

const ListItem = styled.li`
  display: flex;
  gap: 10px;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 10px;
`;

const UploadFormat = styled.span`
  font-weight: 500;
  color: white;
`;

const UploadPercentage = styled.span`
  font-size: 20px;
  font-weight: 600;
  color: white;
`;

export { Container, Title, List, ListItem, UploadFormat, UploadPercentage };
