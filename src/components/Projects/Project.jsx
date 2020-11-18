import React from 'react';
import PropTypes from 'prop-types';
import { VerticalTimelineElement } from 'react-vertical-timeline-component';
import ProjectImg from '../Image/ProjectImg';
import TechStackBar from '../TechStackBar/TechStackBar';
import PropTypeShapeList from '../PropTypes/PropTypes';

const Project = (props) => {
  const { data, timeLineStyle, iconButtonStyle } = props;
  const { title, info, img, info2, tech, repo, url } = data;
  return (
    <VerticalTimelineElement
      className="vertical-timeline-element--work"
      contentStyle={timeLineStyle}
      contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
      iconStyle={iconButtonStyle}
    >
      <h3 className="project-wrapper__text-title">{title}</h3>
      <p className="project-wrapper__text-subtitle">{info}</p>
      <div className="project-wrapper__image">
        <ProjectImg filename={img} alt={title} />
      </div>
      <p className="project-wrapper__text">{info2}</p>
      <div className="project-wrapper__source-links">
        <a
          target="_blank"
          rel="noopener noreferrer"
          className="cta-btn cta-btn--resume"
          href={repo}
        >
          View Source
        </a>
        {url ? (
          <a
            target="_blank"
            rel="noopener noreferrer"
            className="cta-btn cta-btn--resume"
            href={url}
          >
            See live
          </a>
        ) : (
          ''
        )}
      </div>
      <hr />
      <TechStackBar content={tech} />
    </VerticalTimelineElement>
  );
};

Project.propTypes = {
  data: PropTypes.shape(PropTypeShapeList.project),
  timeLineStyle: PropTypes.shape({
    background: PropTypes.string,
    color: PropTypes.string,
  }),
  iconButtonStyle: PropTypes.shape({
    background: PropTypes.string,
  }),
};

export default Project;
