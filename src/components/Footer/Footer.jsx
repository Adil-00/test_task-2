import React from "react";
import "../css/style.css";

import icon_legpron from "../icon/icon_legpron.png";
import icon_secure from "../icon/icon_secure.png";
import icon_whatcapp from "../icon/icon_whatcapp.png";
import icon_ok from "../icon/icon_ok.png";
import icon_wk from "../icon/icon_wk.png";
import icon_twitter from "../icon/icon_twitter.png";
import icon_faceBook from "../icon/iconFaceBook.png";
import icon_youtube from "../icon/icon_youtube.png";
import icon_instagram from "../icon/icon_instagram.png";
import icon_masterCard from "../icon/icon_masterCard.png";
import icon_visa from "../icon/icon_visa.png";
import icon_scissors from "../icon/icon_scissors.png";

const Footer = () => {
  return (
    <footer className="footer">
      <img className="scissors" src={icon_scissors} alt="" />
      <div className="container">
        <div className="footer__content">
          <div className="content__col">
            <ul>
              <li>О компании</li>
              <li>О нас</li>
              <li>Отзывы</li>
              <li>Оферта</li>
              <li>Организаторам</li>
              <li>Контакты</li>
              <li>Персональная скидка</li>
              <li>Инвесторам</li>
              <li>Бонусная программа</li>
            </ul>

            <ul>
              <li>Наши проекты</li>
              <li>Online журнал</li>
              <li>Одежда из Киргизии в розницу</li>
            </ul>

            <ol>
              <li>
                &copy; 2013-2020 kgmart.ru <br /> Все права защищены
              </li>
            </ol>
          </div>
          <div className="content__col">
            <ul>
              <li>Сервис и помощь</li>
              <li>Инструкции</li>
              <li>Доставка</li>
              <li>Способы оплаты</li>
              <li>Как заказать</li>
              <li>Размерная сетка</li>
              <li>Возврат товара</li>
              <li>Вопросы и ответы</li>
              <li>Правообладателям</li>
            </ul>

            <ol>
              <li>
                <img src={icon_legpron} alt="" />
              </li>
              <li>
                При поддержки Ассоциации “Легпром” <br /> Кыргызской Республики
              </li>
            </ol>
          </div>
          <div className="content__col">
            <ul>
              <li>Контакты</li>
              <li>Отдел продаж: </li>
              <li>
                <img src={icon_whatcapp} alt="" /> Азиза + 996 555 000 555
              </li>
              <li>
                <img src={icon_whatcapp} alt="" /> Азиза + 996 555 000 555
              </li>
              <li>
                <img src={icon_whatcapp} alt="" /> Азиза + 996 555 000 555
              </li>
              <li>Отдел контроля качества:</li>
              <li>
                <img src={icon_whatcapp} alt="" /> Азиза + 996 555 000 555
              </li>
              <li>Руководитель отдела продаж:</li>
              <li>
                <img src={icon_whatcapp} alt="" /> Азиза + 996 555 000 555
              </li>
              <li>Руководитель отдела доставки:</li>
              <li>
                <img src={icon_whatcapp} alt="" /> Азиза + 996 555 000 555
              </li>
            </ul>

            <ol>
              <li>
                <img src={icon_secure} alt="" />
              </li>
              <li>
                Покупки с гарантией безопасности <br />
                от Comodo Secure
              </li>
            </ol>
          </div>
          <div className="content__col">
            <ol>
              <li>Служба поддержки:</li>
              <li>+ 7 929 950 62 35</li>
              <li>+ 7 929 950 62 35</li>
            </ol>

            <ol>
              <li>Наша почта:</li>
              <li>info@kgmart.ru</li>
            </ol>

            <div className="socialNetwork">
              <img className="faceBook" src={icon_faceBook} alt="" />
              <img className="isntagram" src={icon_instagram} alt="" />
              <img className="ok" src={icon_ok} alt="" />
              <img className="twitter" src={icon_twitter} alt="" />
              <img className="youtube" src={icon_youtube} alt="" />
              <img className="wk" src={icon_wk} alt="" />
              <img className="visa" src={icon_visa} alt="" />
              <img className="masterCard" src={icon_masterCard} alt="" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
