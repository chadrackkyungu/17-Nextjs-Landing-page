import React from 'react';
import { Container, Row, Col } from "reactstrap";
import Link from "next/link";

const GetStart = () => {
    return (
        <React.Fragment>
            <section className="section section-lg bg-get-start">
                <div className="bg-overlay"></div>
                <Container>
                    <Row>
                        <Col lg={{ size: 8, offset: 2 }} className="text-center">
                            <h1 className="get-started-title text-white">
                                Let's Get Started
                            </h1>
                            <div className="section-title-border mt-4 bg-white"></div>
                            <p className="section-subtitle font-secondary text-white text-center pt-4">
                                Far far away, behind the word mountains, far from the countries
                                Vokalia and Consonantia, there live the blind texts.{" "}
                            </p>
                            <Link
                                href="#"
                            >
                                <a className="btn btn-white waves-effect mt-3 mb-4">Get Started <i className="mdi mdi-arrow-right"></i>{" "}</a>
                            </Link>
                        </Col>
                    </Row>
                </Container>
                <div className="bg-pattern-effect">
                    <img
                        alt="pattern"
                        src={require("assets/images/bg-pattern-light.png")}
                    />
                </div>
            </section>
        </React.Fragment>
    );
}

export default GetStart;