import React from 'react';
import imgMain from "./img/skreen-3/Diamond.png";
import img1 from "./img/skreen-3/Pencil — копия.png"
import "./css/screen-3.css"

const Main = () => {
    return (
        <div>
            <div className="screen-3">
                <div className="wrap">
                    <div className="text">
                        <div className="icon">
                            <img
                                className="imgMainscreen"
                                src={imgMain}
                                alt="тут должна была быть картина"
                            />
                        </div>
                        <h1>Кафедры</h1>
                        <div className="big-line"></div>
                    </div>
                    <div className="squares">
                        <div className="square">
                            <div className="title">
                                <img
                                    className="img1"
                                    src={img1}
                                    alt="тут должна была быть картина"
                                />
                                <div className="line"></div>
                            </div><div className="title">
                                <img
                                    className="img1"
                                    src={img1}
                                    alt="тут должна была быть картина"
                                />
                                <div className="line"></div>
                            </div><div className="title">
                                <img
                                    className="img1"
                                    src={img1}
                                    alt="тут должна была быть картина"
                                />
                                <div className="line"></div>
                            </div><div className="title">
                                <img
                                    className="img1"
                                    src={img1}
                                    alt="тут должна была быть картина"
                                />
                                <div className="line"></div>
                            </div><div className="title">
                                <img
                                    className="img1"
                                    src={img1}
                                    alt="тут должна была быть картина"
                                />
                                <div className="line"></div>
                            </div><div className="title">
                                <img
                                    className="img1"
                                    src={img1}
                                    alt="тут должна была быть картина"
                                />
                                <div className="line"></div>
                            </div><div className="title">
                                <img
                                    className="img1"
                                    src={img1}
                                    alt="тут должна была быть картина"
                                />
                                <div className="line"></div>
                            </div><div className="title">
                                <img
                                    className="img1"
                                    src={img1}
                                    alt="тут должна была быть картина"
                                />
                                <div className="line"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Main;