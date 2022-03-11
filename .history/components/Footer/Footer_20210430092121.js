import React from 'react';
import { Container, Row, Col, Form } from "reactstrap";
import Link from "next/link";
import FooterLink from './FooterLink';

const links = [
    {
        title: "DORSIN",
        child: [
            { link: "#", title: "Home" },
            { link: "#", title: "About us" },
            { link: "#", title: "Careers" },
            { link: "#", title: "Contact us" },
        ],
    },
    {
        title: "Information",
        child: [
            { link: "#", title: "Terms & Condition" },
            { link: "#", title: "About us" },
            { link: "#", title: "Jobs" },
            { link: "#", title: "Bookmarks" },
        ],
    },
    {
        title: "Support",
        child: [
            { link: "#", title: "FAQ" },
            { link: "#", title: "Contact" },
            { link: "#", title: "Disscusion" },
        ],
    },
];

const Footer = props => {
    return (
        <React.Fragment>
            <footer className="footer">
                <Container>
                    <Row>
                        {links.map((fLink, key) => (
                            <Col key={key} lg={3} className="mt-4">
                                <h4>{fLink.title}</h4>
                                <div className="text-muted mt-4">
                                    <ul className="list-unstyled footer-list">
                                        {fLink.child.map((fLinkChild, key) => (
                                            <li key={key}>
                                                <Link href={fLinkChild.link}><a>{fLinkChild.title}</a></Link>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </Col>
                        ))}

                        <Col lg={3} className="mt-4">
                            <h4>Subscribe</h4>
                            <div className="text-muted mt-4">
                                <p>
                                    In an ideal world this text wouldn’t exist, a client would
                                    acknowledge the importance of having web copy before the
                                    design starts.
                                </p>
                            </div>
                            <Form className="subscribe">
                                <input
                                    placeholder="Email"
                                    className="form-control"
                                    required
                                />
                                <Link href="#">
                                    <a className="submit"><i className="pe-7s-paper-plane"></i></a>
                                </Link>
                            </Form>
                        </Col>
                    </Row>
                </Container>
            </footer>
            {/* import Footer link */}
            <FooterLink />
        </React.Fragment>
    );
}

export default Footer;