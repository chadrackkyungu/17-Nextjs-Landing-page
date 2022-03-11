import React from 'react';
import Section from "./Section";
import Footer from 'components/Footer/Footer';
import Header from 'components/header/header';
import Services from "pages/CommonSection/Services/Services";
import AboutUs from "pages/CommonSection/AboutUs";
import WebsiteDesc from "pages/CommonSection/WebsiteDesc";
import Pricing from "pages/CommonSection/Pricing/Pricing";
import Team from 'pages/CommonSection/Team/Team';
import Process from 'pages/CommonSection/Process/Process';
import Blog from 'pages/CommonSection/Blog/Blog';
import Testimonials from 'pages/CommonSection/Testimonials/Testimonials';
import GetStart from 'pages/CommonSection/GetStart/GetStart';
import Contact from 'pages/CommonSection/Contact/Contact';
import Social from 'pages/CommonSection/Social';

const layout3 = props => {
    return (
        <React.Fragment>
            {/* import Header */}
            <Header />

            <Section />

            {/* import Services */}
            <Services />

            {/* import AboutUs */}
            <AboutUs />

            {/* import WebsiteDesc */}
            <WebsiteDesc />

            {/* import Pricing */}
            <Pricing />

            {/* import Team */}
            <Team />

            {/* import Process */}
            <Process />

            {/* imort Testimonials */}
            <Testimonials />

            {/* import GetStart */}
            <GetStart />

            {/* import Blog */}
            <Blog />

            {/* import Contact */}
            <Contact />

            {/* import Social Icon */}
            <Social />

            {/* import Footer */}
            <Footer />

        </React.Fragment>
    );
}


export default layout3;