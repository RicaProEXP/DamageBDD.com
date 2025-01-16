import React from 'react';

const Frame1 = () => {
  return (
    <>
      <section className="about s2">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="block-text center pd-0">
                <h6 className="sub-heading">
                  <span>About Us</span>
                </h6>
                <h3 className="heading" style={{ fontSize:'30px'}}>
                  Premium Quality
                  <br />
                  Damage BDD Services
                </h3>
              </div>
              <div className="about__main center">
                <img
                  src="assets/images/layouts/about-06.png"
                  alt=""
                  style={{
                    display: 'block',
                    marginLeft: 'auto',
                    marginRight: 'auto',
                    maxWidth: '100%',
                  }}
                />
                <p className="mb-17">
                  Damage BDD is your trusted partner in delivering high-quality
                  solutions for damage assessment and resolution. Our services
                  are designed to meet the needs of modern businesses and individuals.
                </p>
                <p className="mb-30">
                  We utilize cutting-edge technology and innovative strategies to
                  provide unparalleled accuracy and efficiency. Our team is dedicated
                  to ensuring customer satisfaction by offering tailored solutions
                  for every situation. Experience excellence with Damage BDD services.
                </p>
                <a href="#" className="action-btn">
                  <span>Learn More About Us</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Frame1;
