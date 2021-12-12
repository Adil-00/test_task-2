import React from "react";
import "../css/style.css";

import user_avatar from "../icon/icon_avatar.png";
import icon_star from "../icon/icon_star.png";
import icon_star_active from "../icon/icon_star-active.png";
import icon_like from "../icon/btn_like.png";
import icon_dislike from "../icon/btn_dislike.png";

const Reviews = () => {
  return (
    <div className="container">
      <div className="reviews">
        <div className="reviews__textTitle">
          <div className="title">отзывы</div>

          <div className="total">(всего 345)</div>

          <div className="text">Правила оформелния отзывов</div>
        </div>

        <div className="reviews__btn_write">Написать отзыв</div>

        <div className="reviews__user">
          <div className="user__img">
            <img src={user_avatar} alt="" />
          </div>
          <div className="user__information">
            <div className="user__name">
              <p>Иванова Ира</p>
              <span>07 июня, 10:15</span>
            </div>

            <div className="user__rating">
              <img src={icon_star_active} alt="" />
              <img src={icon_star_active} alt="" />
              <img src={icon_star_active} alt="" />
              <img src={icon_star} alt="" />
              <img src={icon_star} alt="" />
            </div>

            <div className="user__comments">
              Классная рубашка! Заказывала уже эту рубашку своего размера (44),
              но утонула в ней, спустя несколько месяцев решила попробовать
              заказать еще раз, но 40 размер, этот размер сел идеально, качество
              пошива и ткани очень нравится. Попробую еще что-нибудь приобрести
              у этого бренда.
            </div>

            <div className="user__btn">
              <div className="btn__like">
                <img src={icon_like} alt="" />
                <span>12</span>
              </div>
              <div className="btn__dislike">
                <img src={icon_dislike} alt="" />
                <span>8</span>
              </div>
            </div>
          </div>
        </div>

        <div className="reviews__user">
          <div className="user__img">
            <img src={user_avatar} alt="" />
          </div>
          <div className="user__information">
            <div className="user__name">
              <p>Ольга</p>
              <span>07 июня, 10:15</span>
            </div>

            <div className="user__rating">
              <img src={icon_star_active} alt="" />
              <img src={icon_star_active} alt="" />
              <img src={icon_star_active} alt="" />
              <img src={icon_star} alt="" />
              <img src={icon_star} alt="" />
            </div>

            <div className="user__comments">
              Рубашка классная и сшита хорошо, но прям очень широка на мой 42/44
              верх, очень очень широка.
            </div>

            <div className="user__btn">
              <div className="btn__like">
                <img src={icon_like} alt="" />
                <span>12</span>
              </div>
              <div className="btn__dislike">
                <img src={icon_dislike} alt="" />
                <span>8</span>
              </div>
            </div>
          </div>
        </div>

        <div className="reviews__user">
          <div className="user__img">
            <img src={user_avatar} alt="" />
          </div>
          <div className="user__information">
            <div className="user__name">
              <p>Иванова Ира</p>
              <span>07 июня, 10:15</span>
            </div>

            <div className="user__rating">
              <img src={icon_star_active} alt="" />
              <img src={icon_star_active} alt="" />
              <img src={icon_star_active} alt="" />
              <img src={icon_star} alt="" />
              <img src={icon_star} alt="" />
            </div>

            <div className="user__comments">
              Классная рубашка! Заказывала уже эту рубашку своего размера (44),
              но утонула в ней, спустя несколько месяцев решила попробовать
              заказать еще раз, но 40 размер, этот размер сел идеально, качество
              пошива и ткани очень нравится. Попробую еще что-нибудь приобрести
              у этого бренда.
            </div>

            <div className="user__btn">
              <div className="btn__like">
                <img src={icon_like} alt="" />
                <span>12</span>
              </div>
              <div className="btn__dislike">
                <img src={icon_dislike} alt="" />
                <span>8</span>
              </div>
            </div>
          </div>
        </div>

        <div className="reviews__btnShowMore">
          <p>Показать еще отзывы</p>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
