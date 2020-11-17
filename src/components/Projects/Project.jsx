import React from 'react';
import PropTypes from 'prop-types';
import { VerticalTimelineElement } from 'react-vertical-timeline-component';
import ProjectImg from '../Image/ProjectImg';
import TechStackBar from '../TechStackBar/TechStackBar';

const Project = (props) => {
  const { data, timeLineStyle, iconButtonStyle } = props;
  const { title, info, img, info2, tech, repo } = data;
  return (
    <VerticalTimelineElement
      className="vertical-timeline-element--work"
      contentStyle={timeLineStyle}
      contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
      iconStyle={iconButtonStyle}
      onTimelineElementClick={() => window.open(repo)}
    >
      <h3 className="project-wrapper__text-title">{title}</h3>
      <p className="project-wrapper__text-subtitle">{info}</p>
      <div className="project-wrapper__image">
        <ProjectImg filename={img} alt={title} />
      </div>
      <p className="project-wrapper__text">{info2}</p>
      <TechStackBar content={tech} />
    </VerticalTimelineElement>
  );
};

Project.propTypes = {
  data: PropTypes.shape({
    img: PropTypes.string,
    title: PropTypes.string,
    info: PropTypes.string,
    info2: PropTypes.string,
    date: PropTypes.number,
    url: PropTypes.string,
    repo: PropTypes.string,
    tech: PropTypes.arrayOf(PropTypes.string),
  }),
  timeLineStyle: PropTypes.shape({
    background: PropTypes.string,
    color: PropTypes.string,
  }),
  iconButtonStyle: PropTypes.shape({
    background: PropTypes.string,
  }),
};

export default Project;
