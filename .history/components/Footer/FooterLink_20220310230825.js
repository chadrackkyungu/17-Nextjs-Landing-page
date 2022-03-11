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
              {/* <div className="float-end pull-none">
                                <img
                                    alt="payment"
                                    src={require("assets/images/payment.png")}
                                    height="36"
                                />
                            </div> */}
              <div className="clearfix"></div>
            </Col>
          </Row>
        </Container>
      </div>
    </React.Fragment>
  );
};

export default FooterLink;
