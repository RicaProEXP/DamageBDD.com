import React from 'react';

const Banner = () => {
  return (
    <>
      <section className="banner">
        <div className="shape right" />
        <div className="container big">
          <div className="row">
            <div className="col-xl-6 col-md-12">
              <div className="banner__left">
                <div className="block-text">
                  <h2 className="headingwow">
                    Unlock the Power of Seamless AI Testing
                  </h2>
                  <p className="desc">
                    DamageBDD empowers teams to achieve seamless collaboration, bridging the gap between business and development through Behaviour-Driven Development.
                  </p>
                  <a href="contact.html" className="action-btn">
                    <span>Start Collaborating</span>
                  </a>
                </div>
                <div className="pay">
                  <h6>Join the DamageBDD Community</h6>
                  <div className="list">
                    <p>We support:</p>
                    <ul>
                      <li>
                        <a href="#">
                          <span className="icon-logo-01" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <span className="icon-logo-02" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <span className="icon-logo-03" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <span className="icon-logo-04" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <span className="icon-logo-05">
                            <span className="path1" />
                            <span className="path2" />
                            <span className="path3" />
                            <span className="path4" />
                          </span>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <span className="icon-logo-06" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-6 col-md-12">
              <div className="banner__right">
                <div className="image">
                  <img src="assets/images/layouts/logo.png" alt="DamageBDD Banner" />
                </div>
                <div className="price">
                  <div className="icon">
                    <img src="assets/images/icon/icon-01.png" alt="Current Bid Icon" />
                  </div>
                  <div className="content">
                    <p>Seamless Integration</p>
                    <h5>BDD Workflows</h5>
                  </div>
                </div>
                <div className="owner">
                  <div className="image">
                    <img src="assets/images/layouts/avt-01.png" alt="Owner Avatar" />
                  </div>
                  <div className="content">
                    <h5>Empowered Teams</h5>
                    <p>Collaboration Made Easy</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Banner;
