import React from "react";

const Favorites = () => {
  return (
    <section className="favorite section" id="favorites">
      <div className="favorites__container container grid">
        <div className="favorites__data">
          <h2 className="section__title">
            DISCOVER YOUR <br />
            FAVORITE FLAVORS
          </h2>

          <p className="favorites__description">
            Try some exotic flavors or delicious toppings. We have collected
            some delicious snack recipes from around the world for you.
          </p>

          <img
            src="public/cheese.png"
            alt="image"
            className="favorites__cheese-1"
          />

          <img
            src="public/cheese.png"
            alt="image"
            className="favorites__cheese-2"
          />
        </div>

        <div className="favorites__swiper swiper">
          <div className="swiper-wrapper">
            <article className="favorites__article swiper-slide">
              <img
                src="public/favorite-chips-1.png"
                alt="image"
                className="favorites__img"
              />

              <img
                src="public/leaf-1.png"
                alt="image"
                className="favorites-leaf-1"
              />
              <img
                src="public/leaf-2.png"
                alt="image"
                className="favorites-leaf-2"
              />
            </article>

            <article className="favorites__article swiper-slide">
              <img
                src="public/favorite-chips-2.png"
                alt="image"
                className="favorites__img"
              />

              <img
                src="public/leaf-1.png"
                alt="image"
                className="favorites-leaf-1"
              />
              <img
                src="public/leaf-2.png"
                alt="image"
                className="favorites-leaf-2"
              />
            </article>

            <article className="favorites__article swiper-slide">
              <img
                src="public/favorite-chips-3.png"
                alt="image"
                className="favorites__img"
              />

              <img
                src="public/leaf-1.png"
                alt="image"
                className="favorites-leaf-1"
              />
              <img
                src="public/leaf-2.png"
                alt="image"
                className="favorites-leaf-2"
              />
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Favorites;
