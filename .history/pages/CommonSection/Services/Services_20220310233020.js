import React from "react";
import { Container, Row } from "reactstrap";

//Import Section Title
import SectionTitle from "components/Common/SectionTitle";
import ServiceBox from "./ServiceBox";

import website from "../../../assets/images/services/website.svg";
// import website from '../../../assets/images/services/website.svg'
// import website from '../../../assets/images/services/website.svg'

const services1 = [
  {
    image: website,
    title: "Website & Web-Design",
    desc: "Some quick example text to build on the card title and make up the bulk of the card's content. Moltin gives you the platform.",
  },
  {
    image: website,
    title: "Web Application",
    desc: "Credibly brand standards compliant users without extensible services. Anibh euismod tincidunt ut laoreet.",
  },
  {
    image: website,
    title: "Mobile Apps",
    desc: "Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean necessary regelialia.",
  },
];

function Services(props) {
  return (
    <React.Fragment>
      <section className="section pt-5" id="services">
        <Container>
          {/* section title */}
          <SectionTitle
            title="What i Offered"
            desc="We craft digital, graphic and dimensional thinking, to create category leading brand experiences that have meaning and add a value for our clients."
          />
          <Row className="mt-4">
            {/* services box */}
            <ServiceBox services={services1} />
          </Row>
          {/* <Row className="mt-4">
            <ServiceBox services={services2} />
          </Row> */}
        </Container>
      </section>
    </React.Fragment>
  );
}

export default Services;
