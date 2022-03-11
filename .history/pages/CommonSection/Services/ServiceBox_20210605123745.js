import React from 'react';
import { Col } from "reactstrap";

const ServiceBox = ({ services }) => {
    return (
        <React.Fragment>
            {(services || []).map((service, key) => (
                <Col lg={4} key={key} className="mt-3">
                    <div className="services-box text-center hover-effect">
                        <i className={service.icon + " text-primary"}></i>
                        <h4 className="pt-3">{service.title}</h4>
                        <p className="pt-3 text-muted">{service.desc}</p>
                    </div>
                </Col>
            ))}
        </React.Fragment>
    );
}

export default ServiceBox;