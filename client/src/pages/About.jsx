import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Hero from "../components/about/Hero";
import Frame1 from "../components/about/Frame1";
import Counter from "../components/about/Counter";
import Journey from "../components/home/Journey";

const About = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Frame1 />
      <Counter />
      <Journey />
      <section className="create">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="create__main">
                <div className="content">
                  <h4 className="heading">Build Your Future with Damage BDD</h4>
                  <p>
                    Stay ahead with the latest news, insights, and opportunities
                    in cryptocurrency. Discover the power of Damage BDD.
                  </p>
                  <a href="contact.html" className="action-btn">
                    <span>Join the Revolution</span>
                  </a>
                </div>
                <img src="assets/images/layouts/create.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default About;
