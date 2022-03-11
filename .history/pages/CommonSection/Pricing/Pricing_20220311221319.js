import React from "react";
import { Container, Row } from "reactstrap";

//Import Section Title
import SectionTitle from "components/Common/SectionTitle";

//Import Pricing
import PricingBox from "./PricingBox";

const projects = [
  {
    title: "Slack",
    img: "https://media.flaticon.com/dist/min/img/home/slides-home/gsuite-slide.png",
  },
  {
    title: "Amazon",
    img: "https://piktochart.com/wp-content/uploads/2020/09/Infographic_benefit_templatesno-video.png",
  },
  {
    title: "Discord",
    img: "https://piktochart.com/wp-content/uploads/2021/07/Piktochart-reports.png",
  },
  {
    title: "Takealot",
    img: "https://imagekit.io/blog/content/images/size/w600/2019/12/image-optimization.jpg",
  },
  {
    title: "Alibaba",
    img: "https://piktochart.com/wp-content/uploads/2020/09/Infographic_benefit_templatesno-video.png",
  },
  {
    title: "Discord",
    img: "https://creazilla-store.fra1.digitaloceanspaces.com/cliparts/1998567/coding-svg-clipart-xl.png",
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

          <Row>
            <PricingBox projects={projects} />
          </Row>
        </Container>
      </section>
    </React.Fragment>
  );
};

export default Pricing;
