import React from "react";
import Section from "./Section";
import Footer from "components/Footer/Footer";
import Header from "components/header/header";
import Services from "pages/CommonSection/Services/Services";
import AboutUs from "pages/CommonSection/AboutUs";
import WebsiteDesc from "pages/CommonSection/WebsiteDesc";
import Pricing from "pages/CommonSection/Pricing/Pricing";
import Contact from "pages/CommonSection/Contact/Contact";

const layout1 = (props) => {
  return (
    <React.Fragment>
      <Header />
      <Section />
      <AboutUs />
      <Services />
      <WebsiteDesc />
      <Pricing />
      <Contact />
      <Footer />
    </React.Fragment>
  );
};

export default layout1;
