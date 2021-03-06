import React, { useContext, useState, useEffect } from 'react';
import Fade from 'react-reveal/Fade';
import { Container, Row, Col } from 'react-bootstrap';
import Title from '../Title/Title';
import AboutImg from '../Image/AboutImg';
import PortfolioContext from '../../context/context';

const About = () => {
  const { about, windowWidth } = useContext(PortfolioContext);
  const { img1, img2, paragraphs, resume } = about;

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
    <section id="about">
      <Container>
        <Title title="About Me" />
        <Row className="about-wrapper" md={1} lg={1} xl={2}>
          <Col>
            <Fade bottom duration={1000} delay={600} distance="30px">
              <div className="about-wrapper__image">
                {windowWidth > 1199 ? (
                  <AboutImg alt="profile picture" filename={img2} />
                ) : (
                  <AboutImg alt="profile picture" filename={img1} />
                )}
              </div>
            </Fade>
          </Col>
          <Col>
            <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={1000} distance="30px">
              <div className="about-wrapper__info">
                {paragraphs ? (
                  paragraphs.map((para, i) => (
                    <p key={i.toString()} className="about-wrapper__info-text">
                      {para}
                    </p>
                  ))
                ) : (
                  <p>Nothing</p>
                )}
                {resume && (
                  <span className="d-flex mt-3">
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      className="cta-btn cta-btn--resume"
                      href={resume}
                    >
                      Resume
                    </a>
                  </span>
                )}
              </div>
            </Fade>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;
