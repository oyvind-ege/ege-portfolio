import React, { useContext, useEffect, useState } from 'react';
import Fade from 'react-reveal/Fade';
import Tilt from 'react-tilt';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { Container } from 'react-bootstrap';
import PortfolioContext from '../../context/context';
import Title from '../Title/Title';
import ProjectImg from '../Image/ProjectImg';

const Projects = () => {
  const { projects } = useContext(PortfolioContext);

  const [isDesktop, setIsDesktop] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (window.innerWidth > 769) {
      setIsDesktop(true);
      setIsMobile(false);
    } else {
      setIsMobile(true);
      setIsDesktop(false);
    }
  }, []);

  return (
    <section id="projects">
      <Container>
        <div className="project-wrapper">
          <Title title="Projects" />
          <VerticalTimeline>
            {projects.map((project, i) => {
              const { title, info, info2, url, repo, img, id, date } = project;
              const timeLineStyle =
                i % 2 === 0
                  ? { background: '#ed91008f', color: '#fff' }
                  : { background: '#0062cc36', color: '#fff' };
              const iconButtonStyle =
                i % 2 === 0 ? { background: 'rgb(138 88 8)' } : { background: 'rgb(9 33 58)' };
              return (
                <VerticalTimelineElement
                  className="vertical-timeline-element--work"
                  contentStyle={timeLineStyle}
                  contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                  date={date}
                  iconStyle={iconButtonStyle}
                >
                  <h3 className="vertical-timeline-element-title">{title}</h3>
                  <p className="vertical-timeline-element-subtitle">{info}</p>
                  <ProjectImg filename={img} alt={title} />
                  <p className="vertical-timeline-element-paragraph">{info2}</p>
                </VerticalTimelineElement>
              );
            })}
          </VerticalTimeline>
        </div>
      </Container>
    </section>
  );
};

export default Projects;
