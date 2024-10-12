import React from "react";

const Contact = () => {
  return (
    <section className="contact section" id="contact">
      <div className="contact__container container">
        <h2 className="section__title">
          CONTACT US TO <br />
          EAT CHIPS
        </h2>

        <div className="contact__content grid">
          <div className="contact__data grid">
            <div>
              <h3 className="contact__title">Write to us</h3>

              <div className="contact__social">
                <a
                  href="https://api.whatsapp.com/send?phone=03184152091"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="ri-whatsapp-fill"></i>
                </a>

                <a
                  href="https://www.instagram.com/zaain_maqsood/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="ri-instagram-fill"></i>
                </a>

                <a
                  href="mailto:zainmaqsood2004@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="ri-mail-fill"></i>
                </a>
              </div>
            </div>

            <div>
              <h3 className="contact__title">Call us</h3>

              <address className="contact__info">+92 3184152091</address>
            </div>

            <div>
              <h3 className="contact__title">Find us here</h3>

              <address className="contact__info">
                House no 485, Sector 2D1 <br />
                Township, Lahore
              </address>
            </div>
          </div>

          <img
            src="public/contact-man.png"
            alt="contact man"
            className="contact__img"
          />
        </div>

        <img
          src="public/shrimp.png"
          alt="contact shrimp"
          className="contact__shrimp"
        />
        <img
          src="public/crab.png"
          alt="contact crab"
          className="contact__crab"
        />
        <img
          src="public/meat.png"
          alt="contact meat"
          className="contact__meat"
        />
      </div>
    </section>
  );
};

export default Contact;
