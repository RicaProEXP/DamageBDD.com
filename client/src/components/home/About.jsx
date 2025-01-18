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
                  Excellence in Damage Prevention Solutions
                </h3>
                <p className="mb-17">
                  DamageBDD is a leader in providing innovative solutions for
                  damage prevention, ensuring safety, and enhancing project
                  efficiency across industries.
                </p>
                <p className="mb-26">
                  Our team is dedicated to delivering top-tier services and
                  products tailored to meet the needs of our clients. We employ
                  advanced technology and best practices to ensure optimal
                  outcomes, reducing risks and fostering sustainable growth for
                  businesses.
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