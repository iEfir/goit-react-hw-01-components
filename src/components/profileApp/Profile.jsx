// import PropTypes from 'prop-types'

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
            <span className="label">Followers</span>
            <span className="quantity">{stats.followers}</span>
          </ListItem>
          <ListItem>
            <span className="label">Views</span>
            <span className="quantity">{stats.views}</span>
          </ListItem>
          <ListItem>
            <span className="label">Likes</span>
            <span className="quantity">{stats.likes}</span>
          </ListItem>
        </List>
      </Div>
    </Container>
  );
};
