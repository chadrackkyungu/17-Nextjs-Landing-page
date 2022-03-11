import React from "react";
import { Container, Row, Col } from "reactstrap";

const FooterLink = () => {
  return (
    <React.Fragment>
      <div className="footer-alt">
        <Container>
          <Row>
            <Col lg={12}>
              <div className="float-start pull-none">
                <p className="copy-rights text-muted">
                  Copy Right chadrack_code 2022
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </React.Fragment>
  );
};

export default FooterLink;
