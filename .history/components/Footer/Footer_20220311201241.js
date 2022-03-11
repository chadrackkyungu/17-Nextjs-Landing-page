import React from "react";
import { Container, Row, Col } from "reactstrap";
import Link from "next/link";

const links = [
  {
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
                  <div className="text-muted mt-4 d-flex ">
                    <ul className="list-unstyled  footer-list">
                      {fLink.child.map((fLinkChild, key) => (
                        <li key={key}>
                          <Link href={fLinkChild.link}>
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
    </React.Fragment>
  );
};

export default Footer;
