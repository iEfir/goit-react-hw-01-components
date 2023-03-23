import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 240px;
  box-shadow: 3px 4px 21px 0px #000000;
`;

const Discription = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: center;
  justify-content: center;
  width: 240px;
  padding: 40px 40px;
  background-color: whitesmoke;
`;

const Img = styled.img`
  width: 100px;
  border-radius: 50%;
`;

const Name = styled.p`
  font-size: 20px;
  font-weight: 700;
`;

const UserTag = styled.p`
  font-weight: 500;
  color: gray;
`;

const Location = styled.p`
  font-weight: 500;
  color: gray;
`;

const List = styled.ul`
  display: flex;
  width: 100%;
  justify-content: space-between;
  border-top: 3px solid #cfd4d3;
`;

const ListItem = styled.li`
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: center;
  padding: 15px;
  background: #d8ede9;
`;

const SpanPopularity = styled.span`
  font-weight: 500;
  color: gray;
`;

const SpanPopularityQuantity = styled.span`
  font-weight: 500;
`;

export {
  Container,
  Discription,
  Name,
  UserTag,
  Img,
  Location,
  List,
  ListItem,
  SpanPopularity,
  SpanPopularityQuantity,
};
