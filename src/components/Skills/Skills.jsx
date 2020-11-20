import React, { useContext } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
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
        </div>
      </Container>
    </section>
  );
};

export default Skills;
