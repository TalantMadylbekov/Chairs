import React from 'react';
import "./css/Chairs.css"
import imgblock1 from "./img/Психология/Last-Piece1.jpg"
import imgblock3 from "./img/Психология/DSC_0002.JPG"
import imgblock4 from "./img/Психология/photo_2021-02-19_14-18-50.jpg"
import imgblock5 from "./img/Психология/IMG_20200911_133716.jpg"


const Psychology = () => {
    return (
        <div className="container">
            <div className="wrapper">
                <div className="econom-block-1">
                    <h1 className="font">Психология и педагогическая дисциплина</h1>
                    <img
                        className="img-block1"
                        src={imgblock1}
                        alt="тут должна была быть картина
                "/>
                </div>
                <div className="econom-block-2">
                    <p>Происходящие изменения в обществе привели к перемене ценностных ориентаций, мнений, взглядов людей. Общественно-экономические, политические отношения влияют на психологию людей. Поэтому морально-психологический климат общества необходим для здорового развития населения. Роль психолога в этом процессе очень важна и актуальна, так как в его задачи входит оказание психологических услуг населению, пропаганда психологических знаний в обществе, проведение семинаров, тренингов среди населения. <br/>
                        Следует указать на то, что люди склонны решать проблемы, не обращаясь к профессиональным психологам, а через другие не совсем эффективные способы, например, рассказывая о своих проблемах своим друзьям, близким людям. Все это происходит из-за недостаточной осведомленности людей о значении психологии в жизни общества. В развитых странах 85% людей при решении своих проблем пользуются услугами психолога, психоаналитика, психотерапевта, т.е. они получают квалифицированную помощь в решении своих проблем. <br/>
                        Практические занятия для студентов проводятся в Центрах реабилитации, кризисных центрах, центрах доверия, средних школах, детских садах.
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

export default Psychology