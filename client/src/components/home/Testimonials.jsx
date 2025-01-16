import React from 'react';

const Testimonials = () => {
  return (
    <>
      <section className="testimonials">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="testimonials__main">
                <div className="block-text center">
                  <h6 className="sub-heading">
                    <span>Testimonials</span>
                  </h6>
                  <h3 className="headingwow" data-splitting="">
                    What Our Users Say About DamageBDD
                  </h3>
                </div>
                <div className="swiper testimonials-swiper">
                  <div className="swiper-wrapper">
                    <div className="swiper-slide">
                      <div className="box-testimonial center">
                        <img src="assets/images/icon/quote.png" alt="" />
                        <p className="text">
                          “DamageBDD has revolutionized our approach to
                          Behavior-Driven Development. The collaboration it
                          enables across teams has significantly improved our
                          testing processes, ensuring greater product quality
                          and faster delivery times.”
                        </p>
                        <div className="info">
                          <img src="assets/images/layouts/avt-02.png" alt="" />
                          <h5 className="name">Emily Roberts</h5>
                          <p>Head of Development, Tech Solutions</p>
                        </div>
                      </div>
                    </div>
                    <div className="swiper-slide">
                      <div className="box-testimonial center">
                        <img src="assets/images/icon/quote.png" alt="" />
                        <p className="text">
                          “Thanks to DamageBDD, our teams now have a unified
                          framework for writing and automating tests, which has
                          drastically reduced errors and improved collaboration
                          between developers and QA testers.”
                        </p>
                        <div className="info">
                          <img src="assets/images/layouts/avt-03.png" alt="" />
                          <h5 className="name">John Carter</h5>
                          <p>Product Manager, Innovatech</p>
                        </div>
                      </div>
                    </div>
                    <div className="swiper-slide">
                      <div className="box-testimonial center">
                        <img src="assets/images/icon/quote.png" alt="" />
                        <p className="text">
                          “Adopting DamageBDD was a game-changer for our
                          organization. It allowed our development and testing
                          teams to work seamlessly together, leading to faster
                          iterations and better-tested features.”
                        </p>
                        <div className="info">
                          <img src="assets/images/layouts/avt-04.png" alt="" />
                          <h5 className="name">Michael Tan</h5>
                          <p>Lead QA Engineer, FutureTech</p>
                        </div>
                      </div>
                    </div>
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

export default Testimonials;
