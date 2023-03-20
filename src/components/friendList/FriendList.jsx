import { IsOnline, List, ListItem } from './FriendList.styled';

export const FriendList = ({ friends }) => {
  return (
    <List>
      {friends.map(friend => (
        <ListItem key={friend.id}>
          <IsOnline isOnline={friend.isOnline === true}>
            {friend.isOnline}
          </IsOnline>
          <img
            className="avatar"
            src={friend.avatar}
            alt="User avatar"
            width="48"
          />
          <p className="name">{friend.name}</p>
        </ListItem>
      ))}
    </List>
  );
};
