import React from 'react';
import "./css/Statejurist.css"
import imgblock1 from "./img/gossluzba2.jpg"
import imgblock3 from "./img/images (3).jpg"
import imgblock4 from "./img/photo_2021-02-19_14-18-48.jpg"
import imgblock5 from "./img/images.jpg"


const StatejuristFakulty = () => {
    return (
        <div className="container">
            <div className="wrapper">
                <div className="econom-block-1">
                    <h1 className="font">Государственное и муниципальное <br/> управление и юриспруденция</h1>
                    <img
                        className="img-block1"
                        src={imgblock1}
                        alt="тут должна была быть картина
                "/>
                </div>
                <div className="econom-block-2">
                    <p>Кафедра Экономики и стратегических исследований открыта в 1997 году, с момента образования КРАО. Ежегодно кафедра осуществляет выпуск специалистов по направлению 521603 — «Финансы и кредит» по специальности «Экономист» со специализацией: «Банковское дело», «Оценка собственности» и «Налоговые расследования». Основной целью является обучение и подготовка кадров по данной специальности на современном высоком профессиональном уровне. Преподаватели, работающие на кафедре, прошли переподготовку по американской программе повышения квалификации преподавателей по экономическим и бизнес дисциплинам в Академии образовательной ресурсной сети EDNET в рамках программы USAID.
                    </p>
                </div>
                <div className="econom-block-3">
                    <div className="part1-3">
                        <h1>ВЫПУСКНИК</h1>
                        <h2>Оставаться на связи</h2>
                        <p>Выпускники могут оставаться на связи, посещая общественные мероприятия и встречи, присоединяясь к нам в социальных сетях и читая нашу электронную новостную рассылку для выпускников.
                        </p>
                        <button>Подробнее</button>
                    </div>
                    <div className="part2-3">
                        <img
                            className="img-block3"
                            src={imgblock3}
                            alt="тут должна была быть картина
                        "/>
                    </div>
                </div>
                <div className="econom-block-4">
                    <div className="part2-4">
                        <img
                            className="img-block4"
                            src={imgblock4}
                            alt="тут должна была быть картина
                        "/>
                    </div>
                    <div className="part1-4">
                        <h1>РОДИТЕЛИ И УЧИТЕЛЯ</h1>
                        <h2>Ассоциация родителей, учителей и друзей</h2>
                        <p>Мы заинтересованная, дружелюбная и инновационная организация, активно вовлеченная в Академическое сообщество.
                        </p>
                        <button>Подробнее</button>
                    </div>
                </div>
                <div className="econom-block-5">
                    <div className="part1-5">
                        <h1>ПРЕДОСТАВЛЕНИЕ</h1>
                        <h2>Мечтайте о больших мечтах для наших студентов</h2>
                        <p>Ваша поддержка может вывести нас за рамки того, что мы можем
                        </p>
                        <button>Подробнее</button>
                    </div>
                    <div className="part2-5">
                        <img
                            className="img-block5"
                            src={imgblock5}
                            alt="тут должна была быть картина
                        "/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default StatejuristFakulty