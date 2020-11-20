import React from 'react';
import PropType from 'prop-types';

const SkillBar = (props) => {
  const { skill } = props;
  const cssStyle = {
    backgroundColor: `${skill.displayColor}`,
    width: `${skill.level * 10}%`,
    height: '100%',
    border: '1px solid',
  };

  return (
    <div className="skill-bar-wrapper">
      <p>{skill.name}</p>
      <div className="skill-bar__skill">
        <div style={cssStyle}>{skill.level} / 10</div>
      </div>
      <hr />
      <hr />
    </div>
  );
};

SkillBar.propTypes = {
  skill: PropType.shape({
    name: PropType.string,
    level: PropType.number,
    displayColor: PropType.string,
  }),
};

export default SkillBar;
