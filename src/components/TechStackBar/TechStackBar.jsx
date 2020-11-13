import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import PortfolioContext from '../../context/context';

const TechStackBar = (props) => {
  const { techDta } = useContext(PortfolioContext);
  const { content } = props;

  return (
    <div className="timeline__techstack">
      {content.map((tech, i) => {
        const a = techDta.find((el) => el.name === tech) || { name: 'Unknown', svg: '' };
        return <img width="48px" key={i} src={a.svg} alt={tech} />;
      })}
    </div>
  );
};

TechStackBar.propTypes = {
  content: PropTypes.shape,
};

export default TechStackBar;
