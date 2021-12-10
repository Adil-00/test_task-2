import React from "react";
import "../css/style.css";
import iconDrop_grey from "../icon/icon_dropDown-grey.png";
import logo from "../icon/Logo.png";
import icon_burgerMenu from "../icon/icon_burgerMenu.png";
import icon_search from "../icon/icon_search.png";

import icon_like from "../icon/icon_like.png";
import icon_comments from "../icon/icon_comments.png";
import icon_basket from "../icon/icon_basket.png";
import icon_user from "../icon/icon_user.png";

import icon_dropDown_black from "../icon/icon_dropDown-black.png";

import img_tShirt from "../img/img_T-shirt.png";
import icon_favorite from "../icon/icon_favorite.png";
import arrow_btn from "../icon/arrow_btn.png";
import icon_email from "../icon/icon_email.png";

import img_manual from "../img/img_manual.png";
import SimilarProduckts from "../SimilarProducts/SimilarProduckts";
import HaveYouWatched from "../HaveYouWatched/HaveYouWatched";
import TShirtRating from "../T-shirtRating/TShirtRating";
import Reviews from "../Reviews/Reviews";
import Footer from "../Footer/Footer";
const CardPage = () => {
  return (
    <div className="cardPage">
      <div className="header">
        <div className="container">
          <div className="header__top">
            <ul>
              <li className="topNav">
                RUB <img src={iconDrop_grey} alt="" />
              </li>
              <li className="topNav">О нас</li>
              <li className="topNav">Как заказать</li>
              <li className="topNav">Доставка</li>
              <li className="topNav">Отзывы</li>
            </ul>
          </div>

          <div className="header__mid">
            <div className="mid__logo">
              <img src={logo} alt="" />
            </div>

            <div className="mid__burgerMenu">
              <img src={icon_burgerMenu} alt="" />
            </div>

            <div className="mid__search">
              <img src={icon_search} alt="" />
              <input placeholder="Поиск по 130198 товаров..." type="text" />
            </div>

            <div className="mid__favorites midNav">
              <img src={icon_like} alt="" />
              Избранное
            </div>

            <div className="mid__comments midNav">
              <img src={icon_comments} alt="" />
              Сообщения
            </div>

            <div className="mid__basket midNav">
              <img src={icon_basket} alt="" />
              Корзина
            </div>

            <div className="mid__user midNav">
              <img src={icon_user} alt="" />
              Войти
            </div>
          </div>

          <div className="header__bottom">
            <ul>
              <li>
                Женщинам <img src={icon_dropDown_black} alt="" />
              </li>
              <li>
                Детям <img src={icon_dropDown_black} alt="" />
              </li>
              <li>
                Мужчинам <img src={icon_dropDown_black} alt="" />
              </li>
              <li>Новинки</li>
              <li>Осень-Зима 2020 </li>
              <li>Распродажа</li>
              <li>Акции</li>
              <li>Большие размеры</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="currentPath">
        <div className="container">
          <p>
            Главная {">"} Для девочек {">"} Платья и сарафаны {">"} Платья-макси{" "}
            {">"}
            <span>Ангоровое платье миди без застежки</span>
          </p>
        </div>
      </div>

      <div className="container">
        <div className="card">
          <div className="updated">Обновлено 20.08.2020 17:16</div>
          <div className="card__detail">
            <div className="cardImg">
              <div className="cardImg__btn_left cardImg__btn">
                <img src={arrow_btn} alt="" />
              </div>

              <div className="cardImg_img">
                <img src={img_tShirt} alt="" />
              </div>

              <div className="cardImg__btn_right cardImg__btn">
                <img src={arrow_btn} alt="" />
              </div>

              <div className="cardImg__icon_favorite">
                <img src={icon_favorite} alt="" />
              </div>
            </div>

            <div className="cardInformation">
              <div className="cardInformation__title">Футболка Smile </div>
              <div className="cardInformation__manufacturerAndInformation">
                <div className="cardInformation__manufacturer">
                  Производитель: bluzki_style
                </div>

                <div className="cardInformation__information">
                  <img src={icon_email} alt="" />
                  <span>
                    Для получения информации <br /> касательно цен,
                    индивидуальных <br />
                    заказов и других вопросов:
                  </span>
                </div>
              </div>

              <div className="cardInformation__price">
                <div className="cardInformation__discountedPrice">833 р</div>
                <div className="cardInformation__priceWithoutDiscount">
                  1042 р
                </div>
                <div className="cardInformation__bonus">
                  (+ бонус 12.84 руб)
                </div>
              </div>

              <div className="cardInformation__economy">
                Ваша экономия составит 80 руб
              </div>

              <div className="cardInformation__rowImg">
                <img src={img_tShirt} alt="" className="rowImg__variants" />
                <img src={img_tShirt} alt="" className="rowImg__variants" />
                <img src={img_tShirt} alt="" className="rowImg__variants" />
                <img src={img_tShirt} alt="" className="rowImg__variants" />
                <img src={img_tShirt} alt="" className="rowImg__variants" />
              </div>

              <div className="cardInformation__sizes">
                Размеры в наличии: <span>42, 44, 46, 48</span>
              </div>

              <div className="cardInformation__dimensionalGrid">
                размерная сетка
              </div>

              <div className="cardInformation__colorTShirt">
                <div className="colorTShirt_red colors"></div>
                <div className="colorTShirt_blue colors"></div>
                <div className="colorTShirt_white colors"></div>
                <div className="colorTShirt_black colors"></div>
                <div className="colorTShirt_grey colors"></div>
                <div className="colorTShirt_pink colors"></div>
                <div className="colorTShirt_brown colors"></div>
              </div>

              <div className="cardInformation__btn">Добавить корзину</div>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="aboutTheProduct">
          <div className="aboutTheProduct__colLeft">
            <div className="colLeft__title">О товаре</div>
            <div className="colLeft__colInformation">
              <ul>
                <li>
                  Артикул
                  <p>130772</p>
                </li>
                <li>
                  Сезон
                  <p>демисезон</p>
                </li>
                <li>
                  Ткань
                  <p>
                    ангора (полиэстер 97%, <br /> эластан 3%)
                  </p>
                </li>
                <li>
                  Комплектация
                  <p>платье</p>
                </li>
                <li>
                  Тип платья
                  <p>платье миди</p>
                </li>
                <li>
                  Декоративные элементы
                  <p>пайетки</p>
                </li>
                <li>
                  Конструктивные элементы
                  <p>без элементов</p>
                </li>
                <li>
                  Материал подкладки
                  <p>без подклада</p>
                </li>
                <li>
                  Гарантии
                  <p>есть</p>
                </li>
                <li>
                  Вырез горловины
                  <p>округлый</p>
                </li>
                <li>
                  Длина изделия
                  <p>миди</p>
                </li>
                <li>
                  Тип карманов
                  <p>без карманов</p>
                </li>
              </ul>

              <ul>
                <li>
                  Наличие
                  <p>В наличии</p>
                </li>
                <li>
                  Комплектация
                  <p>демисезон</p>
                </li>
                <li>
                  В упаковке
                  <p>4 шт</p>
                </li>
                <li>
                  Страна-производитель
                  <p>Киргизия</p>
                </li>
                <li>
                  Вид застежки
                  <p>без застежки</p>
                </li>
                <li>
                  Возрастная категория
                  <p>дошкольное</p>
                </li>
                <li>
                  Покрой
                  <p>полуприлегающий</p>
                </li>
                <li>
                  Сезон
                  <p>демисезон</p>
                </li>
                <li>
                  Длина изделия по спинке, см.:
                  <p>62</p>
                </li>
                <li>
                  Тип рукавов
                  <p>длинные</p>
                </li>
                <li>
                  Числовые параметры соотв. размеру
                  <p>34</p>
                </li>
              </ul>
            </div>
          </div>

          <div className="aboutTheProduct__colRight">
            <div className="colRight__description">
              описание
              <p>
                Детские платье для девочек Весна-осень . Длина-62, обхват-68 ,
                рукава-40
              </p>
            </div>

            <div className="colRight__refund">
              Возврат
              <p>
                Порядок и условия возврата приобретенного товара определяются
                законодательством Российской Федерации, условиями
                оферты/договора и Политикой возврата товаров.
              </p>
            </div>

            <div className="colRight__conditions">Условия возврата</div>

            <div className="colRight__manual">
              Инструкция по осуществлению возврата
            </div>

            <div className="colRight__manual_img">
              <img src={img_manual} alt="" />
            </div>
          </div>
        </div>
      </div>

      <SimilarProduckts />

      <HaveYouWatched />

      <TShirtRating />

      <Reviews />

      <Footer />
    </div>
  );
};

export default CardPage;
