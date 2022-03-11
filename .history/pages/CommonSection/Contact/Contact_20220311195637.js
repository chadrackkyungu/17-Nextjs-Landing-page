import React from "react";
import { Container, Row, Col } from "reactstrap";
import { Formik, Field, Form } from "formik";

//Import Section Title
import SectionTitle from "components/Common/SectionTitle";

const Contact = () => {
  return (
    <React.Fragment>
      <section className="section " id="contact">
        <Container>
          {/* section title */}
          <SectionTitle
            title="GET IN TOUCH"
            desc="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout"
          />

          <Row>
            <Col lg={12}>
              <div className="custom-form mt-4 pt-4">
                <div id="message"></div>
                <Formik
                  initialValues={{
                    firstName: "",
                    email: "",
                    subject: "",
                  }}
                  onSubmit={async (values) => {
                    await new Promise((r) => setTimeout(r, 500));
                  }}
                >
                  <Form name="contact-form" id="contact-form">
                    <Row>
                      <Col lg={6}>
                        <div className="mt-2">
                          <Field
                            required
                            name="firstName"
                            id="firstName"
                            type="text"
                            className="form-control"
                            placeholder="Your name*"
                          />
                        </div>
                      </Col>
                      <Col lg={6}>
                        <div className="mt-2">
                          <Field
                            required
                            name="email"
                            id="email"
                            type="email"
                            className="form-control"
                            placeholder="Your email*"
                          />
                        </div>
                      </Col>
                    </Row>
                    <Row>
                      <Col lg={12}>
                        <div className="mt-2">
                          <Field
                            required
                            name="subject"
                            type="text"
                            className="form-control"
                            id="subject"
                            placeholder="Your Subject.."
                          />
                        </div>
                      </Col>
                    </Row>
                    <Row>
                      <Col lg={12}>
                        <div className="mt-2">
                          <textarea
                            name="comments"
                            id="comments"
                            rows="4"
                            className="form-control"
                            placeholder="Your message..."
                          ></textarea>
                        </div>
                      </Col>
                    </Row>
                    <Row>
                      <Col lg={12} className="text-end">
                        <input
                          type="submit"
                          id="submit"
                          name="send"
                          className="submitBnt btn btn-mauve"
                          value="Send Message"
                        />
                        <div id="simple-msg"></div>
                      </Col>
                    </Row>
                  </Form>
                </Formik>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </React.Fragment>
  );
};

export default Contact;
