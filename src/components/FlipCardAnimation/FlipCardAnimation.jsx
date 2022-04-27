import React from "react";
import "./index.css";

const FlipCardAnimation = (props) => {
    return (
        <div className="flip-card mt-4">
            <div className="flip-card-front"
                 style={{backgroundColor: props.frontColor}}
            >
                <div className="inner">
                    <h3>{props.dataf} </h3>
                </div>
            </div>
            <div
                className="flip-card-back"
                style={{backgroundColor: props.backColor}}
            >
                <div className="inner">
                    <h3>{props.datab}</h3>
                </div>
            </div>
        </div>
    );
};

export default FlipCardAnimation;
