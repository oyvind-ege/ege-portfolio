import React, { useContext } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Fade from 'react-reveal/Fade';
import PortfolioContext from '../../context/context';
import SkillList from './SkillList';
import Title from '../Title/Title';

const Skills = () => {
  const { techskills, softskills } = useContext(PortfolioContext);

  return (
    <section id="skills">
      <Container>
        <div className="skills-wrapper">
          <Title title="Skills" />
          <Fade bottom duration={1000} delay={600} distance="30px">
            <Row>
              <Col>
                <h2>Tech Skills</h2>
                <hr />
                <SkillList list={techskills} />
              </Col>
              <Col>
                <h2>Soft Skills</h2>
                <hr />
                <SkillList list={softskills} />
              </Col>
            </Row>
          </Fade>
        </div>
      </Container>
    </section>
  );
};

export default Skills;
