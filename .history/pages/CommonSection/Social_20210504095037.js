import React from 'react';
import { Container, Row, Col } from "reactstrap";
import Link from "next/link";

const Social = () => {
    return (
        <React.Fragment>
            <section className="contact-social bg-light">
                <Container>
                    <Row className="align-items-center">
                        <Col lg={6}>
                            <ul className="list-inline social mt-4">
                                <li className="list-inline-item">
                                    <Link href="#">
                                        <a className="social-icon"><i className="mdi mdi-facebook"></i></a>
                                    </Link>
                                </li>
                                <li className="list-inline-item">
                                    <Link href="#">
                                        <a className="social-icon"><i className="mdi mdi-twitter"></i></a>
                                    </Link>
                                </li>
                                <li className="list-inline-item">
                                    <Link href="#">
                                        <a className="social-icon"><i className="mdi mdi-linkedin"></i></a>
                                    </Link>
                                </li>
                                <li className="list-inline-item">
                                    <Link href="#">
                                        <a className="social-icon"><i className="mdi mdi-google-plus"></i></a>
                                    </Link>
                                </li>
                                <li className="list-inline-item">
                                    <Link href="#">
                                        <a className="social-icon"><i className="mdi mdi-dribbble"></i></a>
                                    </Link>
                                </li>
                            </ul>
                        </Col>
                        <Col lg={3} className="mt-4">
                            <p className="contact-title">
                                <i className="pe-7s-call"></i> &nbsp;+91 123 4556 789
                </p>
                        </Col>
                        <Col lg={3} className="mt-4 text-right">
                            <p className="contact-title">
                                <i className="pe-7s-mail-open"></i>&nbsp; Support@info.com
                </p>
                        </Col>
                    </Row>
                </Container>
            </section>
        </React.Fragment>
    );
}

export default Social;