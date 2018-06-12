import React from "react";
import "./Card.css";

const Card = props => (

    <div className="card">
        {/* <div className="img-container" onClick={props.handleClick}>
            <img alt={props.name} src={props.image} />
        </div> */}
        <img className="img-container" alt={props.name} src={props.image} onClick={props.handleClick} />
    </div>
);

export default Card;