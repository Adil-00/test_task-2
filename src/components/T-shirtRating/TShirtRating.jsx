import React from "react";
import "../css/style.css";

import icon_star from "../icon/icon_star.png";
import icon_star_active from "../icon/icon_star-active.png";

const TShirtRating = () => {
  return (
    <div className="container">
      <div className="TShirtRating">
        <div className="TShirtRating__title">Футболка Smile </div>
        <div className="TShirtRating__row">
          <div className="TShirtRating__colLeft">
            <div className="colLeft__rating">
              <div className="rating__rating">3.3</div>
              <div className="rating__stars">
                <img src={icon_star_active} alt="" />
                <img src={icon_star_active} alt="" />
                <img src={icon_star_active} alt="" />
                <img src={icon_star} alt="" />
                <img src={icon_star} alt="" />
              </div>
              <div className="rating__reviews">
                На основании 1236 <br /> отзывов
              </div>
            </div>

            <div className="colLeft__percentages">
              <div className="percentages__scale">
                <div className="scale_grey">
                  <div className="scale_orange" style={{ width: "45%" }}></div>
                </div>
                45%
              </div>

              <div className="percentages__scale">
                <div className="scale_grey">
                  <div className="scale_orange" style={{ width: "35%" }}></div>
                </div>
                35%
              </div>

              <div className="percentages__scale">
                <div className="scale_grey">
                  <div className="scale_orange" style={{ width: "65%" }}></div>
                </div>
                65%
              </div>

              <div className="percentages__scale">
                <div className="scale_grey">
                  <div className="scale_orange" style={{ width: "10%" }}></div>
                </div>
                10%
              </div>

              <div className="percentages__scale">
                <div className="scale_grey">
                  <div className="scale_orange" style={{ width: "15%" }}></div>
                </div>
                15%
              </div>
            </div>
          </div>

          <div className="TShirtRating__colRight">
            <div className="colRight__Accordance">Соответствие размеру</div>
            <div className="colRight__rowPercentages">
              <div className="colRight__percentages malomerite">
                <div className="percentages__circrle">
                  <svg>
                    <circle cx="33" cy="33" r="33"></circle>
                    <circle
                      cx="33"
                      cy="33"
                      r="33"
                      style={{
                        strokeDashoffset: "calc(207 + (207 * 15) / 100)",
                      }}
                    ></circle>
                  </svg>
                  <div className="percentages__number">15%</div>
                </div>

                <div className="percentages__text">Маломерит</div>
              </div>

              <div className="colRight__percentages respond">
                <div className="percentages__circrle">
                  <svg>
                    <circle cx="33" cy="33" r="33"></circle>
                    <circle
                      cx="33"
                      cy="33"
                      r="33"
                      style={{
                        strokeDashoffset: "calc(207 + (207 * 45) / 100)",
                      }}
                    ></circle>
                  </svg>
                  <div className="percentages__number">45%</div>
                </div>

                <div className="percentages__text">Соответствует</div>
              </div>

              <div className="colRight__percentages more">
                <div className="percentages__circrle">
                  <svg>
                    <circle cx="33" cy="33" r="33"></circle>
                    <circle
                      cx="33"
                      cy="33"
                      r="33"
                      style={{
                        strokeDashoffset: "calc(207 + (207 * 15) / 100)",
                      }}
                    ></circle>
                  </svg>
                  <div className="percentages__number">15%</div>
                </div>

                <div className="percentages__text">Большемерит</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TShirtRating;
