import PropTypes from 'prop-types';
import { ProfileWrapper } from './Profile.styled';
import { DescriptionWrapper } from './Profile.styled';
import { Avatar } from './Profile.styled';
import { Text } from './Profile.styled';
import { StatsList } from './Profile.styled';
import { StatsItem } from './Profile.styled';
import { ItemLabel } from './Profile.styled';
import { ItemData } from './Profile.styled';

const Profile = ({
  username,
  tag,
  location,
  avatar,
  stats: { followers, views, likes },
}) => {
  return (
    <ProfileWrapper>
      <DescriptionWrapper>
        <Avatar src={avatar} alt="User avatar" className="avatar" />
        <Text username>{username}</Text>
        <Text>@{tag}</Text>
        <Text>{location}</Text>
      </DescriptionWrapper>

      <StatsList>
        <StatsItem>
          <ItemLabel>Followers</ItemLabel>
          <ItemData>{followers}</ItemData>
        </StatsItem>
        <StatsItem>
          <ItemLabel>Views</ItemLabel>
          <ItemData>{views}</ItemData>
        </StatsItem>
        <StatsItem>
          <ItemLabel>Likes</ItemLabel>
          <ItemData>{likes}</ItemData>
        </StatsItem>
      </StatsList>
    </ProfileWrapper>
  );
};

export default Profile;

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }),
};
