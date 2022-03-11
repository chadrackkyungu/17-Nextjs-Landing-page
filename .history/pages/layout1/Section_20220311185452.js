import React, { useState } from "react";
import Link from "next/link";

import { Container, Row, Col } from "reactstrap";

const Section = () => {
  return (
    <React.Fragment>
      <section
        className="section bg-home home-half"
        data-image-src="images/bg-home.jpg"
        id="home"
      >
        <div className="bg-overlay bg-yellow"></div>

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
                    Etiam sed.Interdum consequat proin vestibulum class at.
                  </p>
                </Col>
              </Row>
            </Container>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default Section;
