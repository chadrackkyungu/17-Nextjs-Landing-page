import React, { useState } from "react";
import Link from "next/link";

import { Container, Row, Col } from "reactstrap";

// Modal Video
import ModalVideo from "react-modal-video";
import "../../node_modules/react-modal-video/scss/modal-video.scss";

const Section = () => {
  const [isOpen, setisOpen] = useState(false);

  //navtoggle menu
  const openModal = () => {
    setisOpen(!isOpen);
  };
  return (
    <React.Fragment>
      <section
        className="section bg-home home-half"
        data-image-src="images/bg-home.jpg"
        id="home"
      >
        <div className="bg-overlay"></div>
        <div className="display-table">
          <div className="display-table-cell">
            <Container>
              <Row className="justify-content-center">
                <Col lg={8} className="text-white text-center">
                  <h1 className="home-title">
                    I Help small Business launching they are Business Website
                    online
                  </h1>
                  <p className="pt-3 home-desc">
                    Etiam sed.Interdum consequat proin vestibulum class at.
                  </p>
                  <p className="play-shadow mt-4">
                    <Link href="#">
                      <a
                        onClick={() => {
                          openModal();
                        }}
                        className="play-btn video-play-icon"
                      >
                        <i className="mdi mdi-play text-center"></i>
                      </a>
                    </Link>
                  </p>
                </Col>
              </Row>
            </Container>
          </div>
        </div>
        <div className="bg-pattern-effect">
          <img alt="dorsin" src={require("assets/images/bg-pattern.png")} />
        </div>
      </section>
      {/* <ModalVideo
        channel="vimeo"
        isOpen={isOpen}
        videoId="287684225"
        onClose={() => setisOpen(!isOpen)}
      /> */}
    </React.Fragment>
  );
};

export default Section;
