import React from 'react';
import { Container, Row, Col } from "reactstrap";
import Link from "next/link";

function WebsiteDesc(props) {
    return (
        <React.Fragment>
            <section className="section section-lg bg-web-desc">
                <div className="bg-overlay"></div>
                <Container>
                    <Row>
                        <Col lg={12} className="text-center">
                            <h2 className="text-white">Build your dream website today</h2>
                            <p className="pt-3 home-desc">
                                But nothing the copy said could convince her and so it didn’t
                                take long until a few insidious Copy Writers ambushed her.
                            </p>
                            <Link
                                href="#"
                            >
                                <a className="btn btn-white mt-4 waves-effect waves-light mb-5">View Plan & Pricing</a>
                            </Link>
                        </Col>
                    </Row>
                </Container>
                <div className="bg-pattern-effect">
                    <img
                        alt="dorsin"
                        src={require("assets/images/bg-pattern.png")}
                    />
                </div>
            </section>
        </React.Fragment>
    );
}

export default WebsiteDesc;