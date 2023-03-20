import {
  Container,
  Div,
  List,
  ListItem,
  Title,
  UploadFormat,
  UploadPercentage,
} from './Statistics.styled';

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

export const Statistics = ({ title, stats }) => {
  return (
    <Container>
      <Div>
        <Title>{title}</Title>
        <List>
          {stats.map(stat => (
            <ListItem
              key={stat.id}
              style={{ backgroundColor: getRandomHexColor() }}
            >
              <UploadFormat>{stat.label}</UploadFormat>
              <UploadPercentage>{stat.percentage}%</UploadPercentage>
            </ListItem>
          ))}
        </List>
      </Div>
    </Container>
  );
};
