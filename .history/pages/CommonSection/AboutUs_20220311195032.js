import React from "react";
import { Container, Row, Col } from "reactstrap";
import Link from "next/link";
import exciting from "../../assets/images/services/Exciting.svg";

const AboutUs = (props) => {
  return (
    <React.Fragment>
      <section className="section bg-light" id="features">
        <Container>
          <Row className="vertical-content">
            <Col lg={5}>
              <div className="features-box">
                <h3>
                  My business includes helping people launch their businesses
                  online, both a freelancing and small business owner
                </h3>
                <p className="text-muted web-desc">
                  Hi, I'm Chadrack and I am a highly skilled IT developer with
                  over 3 years of experience. I've been on Upwork since 2021,
                  and I have worked on all types of projects from small to
                  large. I have also successfully developed 10+ React projects.
                </p>
                <ul className="text-muted list-unstyled mt-4 features-item-list">
                  <li className="">
                    I put a lot of effort in designing & maintaining{" "}
                  </li>
                  <li className="">
                    The most important ingredient of successful website.
                  </li>
                  {/* <li className="">
                    Sed ut perspiciatis unde omnis iste natus error sit.
                  </li>
                  <li className="">Submit Your Orgnization.</li> */}
                </ul>
                <Link href="#">
                  <a className="btn  mt-4 waves-effect waves-light btn-mauve">
                    Learn More <i className="mdi mdi-arrow-right"></i>
                  </a>
                </Link>
              </div>
            </Col>
            <Col lg={7}>
              <div className="features-img features-right text-right">
                <img alt="macbook" src={exciting} className="img-fluid" />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </React.Fragment>
  );
};

export default AboutUs;
