import React from "react";
import { Container, Row, Col } from "reactstrap";
import Link from "next/link";

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
                  <div className="text-muted mt-4 d-flex ">
                    <ul className="list-unstyled  footer-list">
                      {fLink.child.map((fLinkChild, key) => (
                        <li key={key} className="d-flex x-10">
                          <Link href={fLinkChild.link} className="x-1">
                            <a className="d-flex x-1">{fLinkChild.title}</a>
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
    </React.Fragment>
  );
};

export default Footer;
