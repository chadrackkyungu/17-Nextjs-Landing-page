import React from "react";
import { Container, Row, Col, Form } from "reactstrap";
import Link from "next/link";
import FooterLink from "./FooterLink";

const links = [
  {
    title: "CK",
    child: [
      { link: "#", title: "Home" },
      { link: "#", title: "About " },
      { link: "#", title: "Service" },
      { link: "#", title: "Projects" },
      { link: "#", title: "contact" },
    ],
  },
];

const Footer = (props) => {
  return (
    <React.Fragment>
      <footer className="footer">
        <Container>
          <Row>
            {links.map((fLink, key) => (
              <Col key={key} lg={12} className="mt-4 ">
                <div className="d-flex">
                  <h4>{fLink.title}</h4>
                  <div className="text-muted mt-4 d-flex">
                    <ul className="list-unstyled footer-list d-flex">
                      {fLink.child.map((fLinkChild, key) => (
                        <li key={key} className="x-10">
                          <Link href={fLinkChild.link} className="x-10">
                            <a>{fLinkChild.title}</a>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </footer>
      <FooterLink />
    </React.Fragment>
  );
};

export default Footer;
