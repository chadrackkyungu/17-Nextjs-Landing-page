import React from "react";
import { Col } from "reactstrap";

const ServiceBox = ({ services }) => {
  return (
    <React.Fragment>
      {(services || []).map((service, key) => (
        <Col lg={4} key={key} className="mt-3">
          <div className="services-box text-center hover-effect">
            <img src={service.image} alt="image" style="width: 100px" />
            <h4 className="pt-3">{service.title}</h4>
            <p className="pt-3 text-muted">{service.desc}</p>
          </div>
        </Col>
      ))}
    </React.Fragment>
  );
};

export default ServiceBox;
