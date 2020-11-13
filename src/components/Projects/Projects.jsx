import React, { useContext } from 'react';
import { VerticalTimeline } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { Container } from 'react-bootstrap';
import PortfolioContext from '../../context/context';
import Title from '../Title/Title';

import Project from './Project';

const Projects = () => {
  const { projects } = useContext(PortfolioContext);

  return (
    <section id="projects">
      <Container>
        <div className="project-wrapper">
          <Title title="Projects" />
          <VerticalTimeline>
            {projects.map((project, i) => {
              const timeLineStyle = { background: '#0062cc36', color: '#fff' };
              const iconButtonStyle = { background: 'rgb(9 33 58)' };
              return (
                <Project
                  key={i}
                  timeLineStyle={timeLineStyle}
                  iconButtonStyle={iconButtonStyle}
                  data={project}
                />
              );
            })}
          </VerticalTimeline>
        </div>
      </Container>
    </section>
  );
};

export default Projects;
