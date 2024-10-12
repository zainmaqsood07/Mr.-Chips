import React from "react";

function Products() {
  return (
    <section className="products section" id="products">
      <h2 className="section__title">
        BEST SELLING <br />
        PRODUCT
      </h2>

      <div className="products__container container grid">
        <div className="products__content grid">
          {/* === 1º PRODUCT === */}
          <article className="products__card">
            <img
              src="public/product-chips-1.png"
              alt="product image"
              className="products__img"
            />
            <span className="products__subtitle">Crab</span>
            <h2 className="products__title">Chips</h2>
            <span className="products__price">$8.90</span>
            <button className="products__button">
              <i className="ri-shopping-bag-3-line"></i>
            </button>
          </article>

          {/* === 2º PRODUCT === */}
          <article className="products__card">
            <img
              src="public/product-chips-2.png"
              alt="product image"
              className="products__img"
            />
            <span className="products__subtitle">Cheese</span>
            <h2 className="products__title">Chips</h2>
            <span className="products__price">$5.90</span>
            <button className="products__button">
              <i className="ri-shopping-bag-3-line"></i>
            </button>
          </article>

          {/* === 3º PRODUCT === */}
          <article className="products__card">
            <img
              src="public/product-chips-3.png"
              alt="product image"
              className="products__img"
            />
            <span className="products__subtitle">BBQ</span>
            <h2 className="products__title">Chips</h2>
            <span className="products__price">$6.90</span>
            <button className="products__button">
              <i className="ri-shopping-bag-3-line"></i>
            </button>
          </article>

          {/* === 4º PRODUCT === */}
          <article className="products__card">
            <img
              src="public/product-chips-4.png"
              alt="product image"
              className="products__img"
            />
            <span className="products__subtitle">Hot</span>
            <h2 className="products__title">Chips</h2>
            <span className="products__price">$5.90</span>
            <button className="products__button">
              <i className="ri-shopping-bag-3-line"></i>
            </button>
          </article>

          {/* === 5º PRODUCT === */}
          <article className="products__card">
            <img
              src="public/product-chips-5.png"
              alt="product image"
              className="products__img"
            />
            <span className="products__subtitle">Mix</span>
            <h2 className="products__title">Chips</h2>
            <span className="products__price">$10.90</span>
            <button className="products__button">
              <i className="ri-shopping-bag-3-line"></i>
            </button>
          </article>
          {/* === 6th PRODUCT === */}
          <article className="products__card">
            <img
              src="public/product-chips-5.png"
              alt="product image"
              className="products__img"
            />
            <span className="products__subtitle">Mix</span>
            <h2 className="products__title">Chips</h2>
            <span className="products__price">$20.90</span>
            <button className="products__button">
              <i className="ri-shopping-bag-3-line"></i>
            </button>
          </article>
        </div>

        {/* Crab */}
        <img
          src="public/crab.png"
          alt="products image"
          className="products__crab"
        />

        {/* Hamburguer */}
        <img
          src="public/hamburger.png"
          alt="products image"
          className="products__hamburguer"
        />

        {/* Cheese */}
        <img
          src="public/cheese.png"
          alt="products image"
          className="products__cheese"
        />
      </div>
    </section>
  );
}

export default Products;
