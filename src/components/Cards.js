import React from "react";
import "./Cards.css";
import CardItem from "./CardItem";

function Cards() {
  return (
    <div className="cards">
      <h1>Check out our project around GTA!</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src="images/img-9.jpg"
              text="Pure black aluminum panel with aluminum grid panel on top"
              label="North York"
              path="/services"
            />
            <CardItem
              src="images/img-2.jpg"
              text="Aluminum alloy panels in various colors"
              label="Stouffville"
              path="/services"
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src="images/img-3.jpg"
              text="Aluminum alloy handrail with glass"
              label="Aurora"
              path="/products"
            />
            <CardItem
              src="images/img-4.jpg"
              text="Aluminum handrail"
              label="Scarborough"
              path="/products"
            />
            <CardItem
              src="images/img-8.jpg"
              text="Aluminum handrail on stairs with glass"
              label="Markham"
              path="/products"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
