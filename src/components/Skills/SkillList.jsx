import React from 'react';
import PropTypes from 'prop-types';
import SkillBar from './SkillBar';

const SkillList = (props) => {
  const { list } = props;
  return (
    <div className="skill-list">
      {list
        ? list
            .sort((a, b) => b.level - a.level)
            .map((skill, i) => <SkillBar key={i.toString()} skill={skill} />)
        : ''}
    </div>
  );
};

SkillList.propTypes = {
  list: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      level: PropTypes.number,
    })
  ),
};

export default SkillList;
