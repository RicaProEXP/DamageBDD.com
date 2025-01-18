import React from 'react'

const About = () => {
  return (
    <>
      <section className="about">
        <div className="shape" />
        <div className="container">
          <div className="row rev">
            <div className="col-xl-6 col-md-12">
              <div className="about__right">
                <div className="images">
                  <img
                    className="img1"
                    src="assets/images/layouts/ai-4.jpg"
                    alt=""
                  />
                  <img
                    className="img2"
                    src="assets/images/layouts/logo.png"
                    alt=""
                  />
                  <img
                    className="img3"
                    src="assets/images/layouts/logo.png"
                    alt=""
                  />
                  <img
                    className="img4"
                    src="assets/images/layouts/logo.png"
                    alt=""
                  />
                  <img
                    className="img5"
                    src="assets/images/layouts/logo.png"
                    alt=""
                  />
                </div>
              </div>
            </div>
            <div className="col-xl-6 col-md-12">
              <div className="block-text">
                <h6 className="sub-heading">
                  <span>About DamageBDD</span>
                </h6>
                <h3 className="headingwow" data-splitting="">
					Building the Future of Software with Precision, Integrity, and Innovation
                </h3>
                <p className="mb-17">
                  At DamageBDD, we believe in transforming the way software is built, tested, and delivered. As a Bitcoin-first, blockchain-powered platform, we specialize in Behavior-Driven Development (BDD) to ensure the highest standards of quality, resilience, and integrity in software systems.
					By combining cutting-edge verification tools with a robust tokenized ecosystem, DamageBDD empowers high-performance development teams and engineering leaders to create reliable software while unlocking new opportunities for collaboration and innovation.
                </p>
                <p className="mb-26">
					Our mission is simple: to incentivize excellence and deliver verifiable results that drive progress. Join us in shaping the future of software development with transparency, accountability, and unmatched precision.
                </p>
                <a href="about.html" className="action-btn">
                  <span>Learn More About Us</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default About
