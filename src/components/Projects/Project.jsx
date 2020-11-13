import React from 'react';
import PropTypes from 'prop-types';
import { VerticalTimelineElement } from 'react-vertical-timeline-component';
import ProjectImg from '../Image/ProjectImg';
import TechStackBar from '../TechStackBar/TechStackBar';

const Project = (props) => {
  const { data, timeLineStyle, iconButtonStyle } = props;
  const { title, info, img, info2, tech, url } = data;
  return (
    <VerticalTimelineElement
      className="vertical-timeline-element--work"
      contentStyle={timeLineStyle}
      contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
      iconStyle={iconButtonStyle}
      onTimelineElementClick={() => window.open(url)}
    >
      <div className="vertical-timeline__title-wrapper">
        <h3 className="vertical-timeline-element-title">{title}</h3>
      </div>
      <p className="vertical-timeline-element-subtitle">{info}</p>
      <ProjectImg filename={img} alt={title} />
      <p className="vertical-timeline-element-paragraph">{info2}</p>
      <TechStackBar content={tech} />
    </VerticalTimelineElement>
  );
};

Project.propTypes = {
  data: PropTypes.shape,
  timeLineStyle: PropTypes.shape,
  iconButtonStyle: PropTypes.shape,
};

export default Project;
