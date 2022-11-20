import { Section } from './Section/Section';
import Profile from './Profile/Profile';
import user from './Profile/user.json';

export const App = () => {
  return (
    <Section title="Profile">
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
    </Section>
  );
};
