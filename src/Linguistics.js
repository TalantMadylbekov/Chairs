import React from 'react';
import "./css/Chairs.css"
import imgblock1 from "./img/Лингвистика/C1D9AC823914A4DADA002A3400ECB34B.png"
import imgblock3 from "./img/Лингвистика/1034162672.jpg"
import imgblock4 from "./img/Лингвистика/DSC_0125.JPG"
import imgblock5 from "./img/Лингвистика/DSC_0049.JPG"


const Linguistics  = () => {
    return (
        <div className="container">
            <div className="wrapper">
                <div className="econom-block-1">
                    <h1 className="font">Лингвистика государственного языка</h1>
                    <img
                        className="img-block1"
                        src={imgblock1}
                        alt="тут должна была быть картина
                "/>
                </div>
                <div className="econom-block-2">
                    <p>
                        Лингвистика — это в первую очередь наука о языке, и такое понимание подразумевает исследование широкого круга явлений. Лингвисты стремятся прежде всего смоделировать бессознательное владение родным языком у взрослых и освоение первого языка детьми; исследовать структуру конкретных языков и человеческого Языка в целом, описать разнообразие языков в мире и, наконец, изучить, каким образом язык влияет на наше повседневное общение и в какой степени он определяет наше восприятие окружающего мира.
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

export default Linguistics