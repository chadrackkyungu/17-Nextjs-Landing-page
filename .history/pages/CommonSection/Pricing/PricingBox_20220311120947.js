import React from "react";
import { Col } from "reactstrap";
import Link from "next/link";
const PricingBox = ({ projects }) => {
  return (
    <React.Fragment>
      {(projects || []).map((pricing, key) => (
        <Col lg={4} key={key}>
          <div
            className={
              pricing.isActive
                ? "text-center pricing-box bg-white hover-effect price-active"
                : "text-center pricing-box hover-effect"
            }
          >
            <h4 className="text-uppercase">{pricing.title}</h4>
            {/* <h1>${pricing.price}0</h1> */}
            <h6 className="text-uppercase text-muted">
              Billing Per {pricing.duration}
            </h6>
            <div className="pricing-border"></div>
            <div className="plan-features mt-4">
              <img src={pricing.img} alt="" />
            </div>
            <Link href="#">
              <a className="btn btn-primary waves-effect waves-light mt-4">
                Join Now
              </a>
            </Link>
          </div>
        </Col>
      ))}
    </React.Fragment>
  );
};

export default PricingBox;
