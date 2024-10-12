import React from "react";

const Care = () => {
  return (
    <section className="care section" id="care">
      <h2 className="section__title">
        ENJOY AND TAKE <br />
        CARE OF YOUR HEALTH
      </h2>

      <div className="care__container container grid">
        <ul className="care__list">
          <li className="care__item">
            <i className="ri-plant-line"></i>
            <p>
              The potatoes that are made into snacks are grown and harvested and
              are 100% organic.
            </p>
          </li>

          <li className="care__item">
            <i className="ri-fire-line"></i>
            <p>
              We fry the fries with vegetable and natural oil for good care.
            </p>
          </li>

          <li className="care__item">
            <i className="ri-heart-pulse-line"></i>
            <p>
              The potatoes are not processed, once cleaned they are cooked
              without preservatives.
            </p>
          </li>

          <li className="care__item">
            <i className="ri-hand-heart-line"></i>
            <p>They contain fewer calories and less fat for good health.</p>
          </li>
        </ul>

        <img src="public/care-chips.png" alt="images" className="care__img" />
      </div>
    </section>
  );
};

const Banner = () => {
  return (
    <section className="banner">
      <div className="banner__container">
        <ul className="banner__list">
          <li className="banner__item">
            <i className="ri-leaf-line"></i>
            <span>GOOD FOR NATURE</span>
          </li>

          <li className="banner__item">
            <i className="ri-heart-pulse-line"></i>
            <span>LOW CALORIES</span>
          </li>
        </ul>
      </div>
    </section>
  );
};

export { Care, Banner };
