import PropTypes from 'prop-types';
import { SectionStats } from './Statistics.styled';
import { StatsTitle } from './Statistics.styled';
import { StatsList } from './Statistics.styled';
import { StatsItem } from './Statistics.styled';
import { StatsLabel } from './Statistics.styled';
import { StatsPct } from './Statistics.styled';

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const Statistics = ({ title, stats }) => {
  return (
    <SectionStats>
      <StatsTitle>{title}</StatsTitle>
      <StatsList>
        {stats.map(stat => {
          return (
            <StatsItem
              key={stat.id}
              style={{ backgroundColor: `${getRandomHexColor()}` }}
            >
              <StatsLabel>{stat.label}</StatsLabel>
              <StatsPct>{stat.percentage}</StatsPct>
            </StatsItem>
          );
        })}
      </StatsList>
    </SectionStats>
  );
};

export default Statistics;

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};
