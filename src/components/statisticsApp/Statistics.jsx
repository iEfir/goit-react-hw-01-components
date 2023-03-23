import PropTypes from 'prop-types';

import {
  Container,
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
      {title && <Title>{title}</Title>}
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
    </Container>
  );
};

Statistics.propTypes = {
  title: PropTypes.string.isRequired,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ).isRequired,
};
