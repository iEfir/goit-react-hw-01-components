import PropTypes from 'prop-types';

import {
  Container,
  Discription,
  Img,
  Name,
  UserTag,
  Location,
  List,
  ListItem,
  Div,
  SpanPopularity,
  SpanPopularityQuantity,
} from './Profile.styled';

export const Profile = ({ username, tag, location, avatar, stats }) => {
  return (
    <Container>
      <Div>
        <Discription>
          <Img src={avatar} alt="User avatar" className="avatar" />
          <Name>{username}</Name>
          <UserTag>@{tag}</UserTag>
          <Location>{location}</Location>
        </Discription>
        <List>
          <ListItem>
            <SpanPopularity>Followers</SpanPopularity>
            <SpanPopularityQuantity>{stats.followers}</SpanPopularityQuantity>
          </ListItem>
          <ListItem>
            <SpanPopularity>Views</SpanPopularity>
            <SpanPopularityQuantity>{stats.views}</SpanPopularityQuantity>
          </ListItem>
          <ListItem>
            <SpanPopularity>Likes</SpanPopularity>
            <SpanPopularityQuantity>{stats.likes}</SpanPopularityQuantity>
          </ListItem>
        </List>
      </Div>
    </Container>
  );
};

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.objectOf(PropTypes.number).isRequired,
};
