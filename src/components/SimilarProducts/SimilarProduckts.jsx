import React, { useState } from "react";
import "../css/style.css";

import arrow_btn from "../icon/arrow_btn.png";
import icon_dropDown_grey from "../icon/icon_dropDown-grey.png";
import icon_favorite_grey from "../icon/icon_favorite-grey.png";

import white_blouse from "../img/white_blouse.png";
import blue_blouse from "../img/blue_blouse.png";
import brown_blouse from "../img/brown_blouse.png";

const SimilarProduckts = () => {
  const arrHaveYouWatched = [
    {
      icon: "",
      img: white_blouse,
    },
    {
      icon: icon_favorite_grey,
      img: brown_blouse,
    },
    {
      icon: "",
      img: blue_blouse,
    },
    {
      icon: icon_favorite_grey,
      img: white_blouse,
    },
    {
      icon: icon_favorite_grey,
      img: brown_blouse,
    },
    {
      icon: icon_favorite_grey,
      img: blue_blouse,
    },
  ];

  const [screenWidth] = useState(window.screen.width);
  const [currentPage, setCurrentPage] = useState(1);
  const [countriesParPage, setCountriesParPage] = useState(
    arrHaveYouWatched.length
  );

  if (screenWidth > 1024 && countriesParPage !== arrHaveYouWatched.length)
    setCountriesParPage(arrHaveYouWatched.length);
  if (screenWidth === 1024 && countriesParPage !== 4) setCountriesParPage(4);
  if (screenWidth === 768 && countriesParPage !== 3) setCountriesParPage(3);
  if (screenWidth === 576 && countriesParPage !== 2) setCountriesParPage(2);
  if (screenWidth <= 414 && countriesParPage !== 1) setCountriesParPage(1);

  const lastCountryIndex = currentPage * countriesParPage;
  const firstCountryIndex = lastCountryIndex - countriesParPage;

  const currentCountry = arrHaveYouWatched.slice(
    firstCountryIndex,
    lastCountryIndex
  );

  const pageNumbers = [];

  for (
    let i = 1;
    i <= Math.ceil(arrHaveYouWatched.length / countriesParPage);
    i++
  ) {
    pageNumbers.push(i);
  }

  const paginate = (item) => {
    setCurrentPage(item);
  };

  return (
    <div className="container">
      <div className="similarProducts">
        <div className="similarProducts__header">
          <div className="similarProducts__title">похожие товары</div>
          <div className="similarProducts__btn">
            <img src={arrow_btn} alt="" />
            <img src={arrow_btn} alt="" />
          </div>
          <div className="similarProducts__dropDown">
            Все новинки <img src={icon_dropDown_grey} alt="" />
          </div>
        </div>

        <div className="similarProducts__rowCards">
          {currentCountry.map((item) => (
            <div className="similarProducts__card">
              <div className="card__img">
                <img src={item.img} alt="" />
                <img src={item.icon} alt="" />
              </div>

              <div className="card__name">Толстовка</div>
              <div className="card__manufacturer">bluzki_style</div>

              <div className="card__price">
                <div className="card__discountedPrice">833 р</div>
                <div className="card__priceWithoutDiscount">1042 р</div>
                <div className="card__discount">-20%</div>
              </div>
            </div>
          ))}
        </div>
        <div className="pages">
          {screenWidth <= 1025
            ? pageNumbers.map((item) => (
                <div
                  className={`page ${item === currentPage ? "pageActive" : ""}`}
                  key={item}
                  onClick={() => paginate(item)}
                ></div>
              ))
            : " "}
        </div>
      </div>
    </div>
  );
};

export default SimilarProduckts;
