import FriendListItem from 'components/FriendListItem/FriendListItem';
import PropTypes from 'prop-types';
import { List } from './FriendList.styled';
import { Item } from './FriendList.styled';

const FriendList = ({ friends }) => {
  return (
    <List>
      {friends.map(friend => {
        return (
          <Item key={friend.id} isOnline={friend.isOnline}>
            <FriendListItem
              avatar={friend.avatar}
              name={friend.name}
              isOnline={friend.isOnline}
            />
          </Item>
        );
      })}
    </List>
  );
};

export default FriendList;

FriendList.protoType = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    })
  ),
};
