import React from "react";
import "../css/style.css";

import arrow_btn from "../icon/arrow_btn.png";
import icon_dropDown_grey from "../icon/icon_dropDown-grey.png";
import icon_favorite_grey from "../icon/icon_favorite-grey.png";

import white_blouse from "../img/white_blouse.png";
import blue_blouse from "../img/blue_blouse.png";
import brown_blouse from "../img/brown_blouse.png";

const SimilarProduckts = () => {
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
          <div className="similarProducts__card">
            <div className="card__img">
              <img src={white_blouse} alt="" />
              <img src={"icon_favorite_grey"} alt="" />
            </div>

            <div className="card__name">Толстовка</div>
            <div className="card__manufacturer">bluzki_style</div>

            <div className="card__price">
              <div className="card__discountedPrice">833 р</div>
              <div className="card__priceWithoutDiscount">1042 р</div>
              <div className="card__discount">-20%</div>
            </div>
          </div>

          <div className="similarProducts__card">
            <div className="card__img">
              <img src={brown_blouse} alt="" />
              <img src={icon_favorite_grey} alt="" />
            </div>

            <div className="card__name">Толстовка</div>
            <div className="card__manufacturer">bluzki_style</div>

            <div className="card__price">
              <div className="card__discountedPrice">833 р</div>
              <div className="card__priceWithoutDiscount">1042 р</div>
              <div className="card__discount">-20%</div>
            </div>
          </div>

          <div className="similarProducts__card">
            <div className="card__img">
              <img src={blue_blouse} alt="" />
              <img src={"icon_favorite_grey"} alt="" />
            </div>

            <div className="card__name">Толстовка</div>
            <div className="card__manufacturer">bluzki_style</div>

            <div className="card__price">
              <div className="card__discountedPrice">833 р</div>
              <div className="card__priceWithoutDiscount">1042 р</div>
              <div className="card__discount">-20%</div>
            </div>
          </div>

          <div className="similarProducts__card">
            <div className="card__img">
              <img src={white_blouse} alt="" />
              <img src={icon_favorite_grey} alt="" />
            </div>

            <div className="card__name">Толстовка</div>
            <div className="card__manufacturer">bluzki_style</div>

            <div className="card__price">
              <div className="card__discountedPrice">833 р</div>
              <div className="card__priceWithoutDiscount">1042 р</div>
              <div className="card__discount">-20%</div>
            </div>
          </div>

          <div className="similarProducts__card">
            <div className="card__img">
              <img src={brown_blouse} alt="" />
              <img src={icon_favorite_grey} alt="" />
            </div>

            <div className="card__name">Толстовка</div>
            <div className="card__manufacturer">bluzki_style</div>

            <div className="card__price">
              <div className="card__discountedPrice">833 р</div>
              <div className="card__priceWithoutDiscount">1042 р</div>
              <div className="card__discount">-20%</div>
            </div>
          </div>

          <div className="similarProducts__card">
            <div className="card__img">
              <img src={blue_blouse} alt="" />
              <img src={icon_favorite_grey} alt="" />
            </div>

            <div className="card__name">Толстовка</div>
            <div className="card__manufacturer">bluzki_style</div>

            <div className="card__price">
              <div className="card__discountedPrice">833 р</div>
              <div className="card__priceWithoutDiscount">1042 р</div>
              <div className="card__discount">-20%</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SimilarProduckts;
