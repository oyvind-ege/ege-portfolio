import React from 'react';
import PropTypes from 'prop-types';
import { VerticalTimelineElement } from 'react-vertical-timeline-component';
import ProjectImg from '../Image/ProjectImg';
import TechStackBar from '../TechStackBar/TechStackBar';

const Project = (props) => {
  const { data, timeLineStyle, iconButtonStyle } = props;
  const { date, title, info, img, info2, tech } = data;
  return (
    <VerticalTimelineElement
      className="vertical-timeline-element--work"
      contentStyle={timeLineStyle}
      contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
      date={date}
      iconStyle={iconButtonStyle}
    >
      <div>
        <h3 className="vertical-timeline-element-title">{title}</h3>
        <TechStackBar content={tech} />
      </div>
      <p className="vertical-timeline-element-subtitle">{info}</p>
      <ProjectImg filename={img} alt={title} />
      <p className="vertical-timeline-element-paragraph">{info2}</p>
    </VerticalTimelineElement>
  );
};

Project.propTypes = {
  data: PropTypes.shape,
  timeLineStyle: PropTypes.shape,
  iconButtonStyle: PropTypes.shape,
};

export default Project;
