import React from "react";
import { Container, Row } from "reactstrap";

//Import Section Title
import SectionTitle from "components/Common/SectionTitle";

//Import Pricing
import PricingBox from "./PricingBox";

const pricings = [
  {
    title: "Economy",
    price: 9.9,
    duration: "MONTH",
    // features: [
    //   { title: "Bandwidth", value: "1GB" },
    //   { title: "Onlinespace ", value: "50MB" },
    //   { title: "Support", value: "No" },
    //   { title: "Domain", value: "1" },
    //   { title: "Hidden Fees", value: "No" },
    // ],
  },
  {
    title: "DELUXE",
    price: 19.9,
    duration: "Mo",
    isActive: true,
    // features: [
    //   { title: "Bandwidth", value: "10GB" },
    //   { title: "Onlinespace ", value: "500MB" },
    //   { title: "Support", value: "No" },
    //   { title: "Domain", value: "10" },
    //   { title: "Hidden Fees", value: "No" },
    // ],
  },
  {
    title: "ULTIMATE",
    price: 29.9,
    duration: "Mo",
    // features: [
    //   { title: "Bandwidth", value: "100GB" },
    //   { title: "Onlinespace ", value: "2 GB" },
    //   { title: "Support", value: "Yes" },
    //   { title: "Domain", value: "Unlimited" },
    //   { title: "Hidden Fees", value: "No" },
    // ],
  },
];

const Pricing = (props) => {
  return (
    <React.Fragment>
      <section className="section pt-5" id="pricing">
        <Container>
          {/* section title */}
          <SectionTitle
            title="My Projects"
            desc="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters"
          />

          <Row className="mt-5">
            {/* pricing box */}
            <PricingBox pricings={pricings} />
          </Row>
        </Container>
      </section>
    </React.Fragment>
  );
};

export default Pricing;
