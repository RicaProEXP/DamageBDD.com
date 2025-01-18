import React, { useState } from 'react';

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="faq s3" style={{ padding: '20px' }}>
      <div className="shape" />
      <div className="container" style={{ padding: '0 15px' }}>
        <div className="row">
          <div className="col-xl-6 col-md-12">
            <div className="block-text">
              <h6 className="sub-heading" style={{ fontSize:'20px'}}>
                <span>FAQs</span>
              </h6>
              <h3 className="heading" style={{ fontSize:'30px'}}>
                Frequently
                <br />
                Asked Questions
              </h3>
              <p>
                Below is a list of frequently asked questions and answers
                related to damage assessment, DBB policies, and related services.
                Please check this FAQ first before contacting us.
              </p>
            </div>
            <div className="faq__main flat-tabs"  style={{
          paddingLeft: "10px",
          paddingRight: "10px",
          width: "100%",
          maxWidth: "1200px",
          margin: "0 auto",
        }}>
              <ul className="menu-tab">
                <li>
                  <h6 className="fs-14">Damage Assessment</h6>
                </li>
                <li className="active">
                  <h6 className="fs-14">DBB Policies</h6>
                </li>
                <li>
                  <h6 className="fs-14">Insurance Claims</h6>
                </li>
                <li>
                  <h6 className="fs-14">Prevention Tips</h6>
                </li>
              </ul>
              <div className="content-tab">
                <div className="content-inner">
                  <div className="flat-accordion">
                    {[
                      {
                        question: 'How to assess damage effectively?',
                        answer:
                          'Begin by inspecting the area for visible signs of wear, cracks, or structural issues. Use professional tools for detailed measurements and consider consulting experts if needed for comprehensive analysis.',
                      },
                      {
                        question: 'What are DBB policies and their benefits?',
                        answer:
                          'DBB policies offer guidelines to ensure damage control and effective repairs. They often include preventative measures, cost coverage details, and timelines for rectifying issues.',
                      },
                      {
                        question: 'How to file an insurance claim for damage?',
                        answer:
                          'Collect evidence, such as photos or videos of the damage, and submit these with your claim form. Ensure all required documents are completed accurately to avoid delays in processing.',
                      },
                      {
                        question: 'What are the best tips to prevent damage?',
                        answer:
                          'Regular maintenance, using quality materials, and addressing minor issues before they escalate can significantly reduce the risk of damage.',
                      },
                    ].map((item, index) => (
                      <div className="flat-toggle" key={index}>
                        <h6
                          className="toggle-title"
                          onClick={() => handleToggle(index)}
                          style={{ cursor: 'pointer' }}
                        >
                          <span>{`0${index + 1}.`}</span> {item.question}{' '}
                          <span
                            className={`icon-${activeIndex === index ? 'minus' : 'plus'}`}
                          />
                        </h6>
                        {activeIndex === index && (
                          <div className="toggle-content">
                            <p>{item.answer}</p>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              
              </div>
            </div>
          </div>
          <div className="col-xl-6 col-md-12">
            <div className="image" style={{ paddingLeft: '15px', paddingRight: '15px' }}>
              <img src="assets/images/layouts/img-faq.png" alt="FAQs" />
            </div>
          </div>
        </div>
      </div>
      <style>
        {`
          @media (max-width: 768px) {
            .container {
              padding-left: 20px;
              padding-right: 20px;
            }
          }
        `}
      </style>
    </section>
  );
};

export default Faq;
