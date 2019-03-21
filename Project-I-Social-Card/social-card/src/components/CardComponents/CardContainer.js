import React from 'react';
import './Card.css';

import CardBanner from "./CardBanner";
import CardContent from "./CardContent";

const CardContainer = () => {
  return (
    <div className="CardContainer">
    <a href="https://www.reactjs.org">
    <CardBanner />
    <CardContent />
    </a>
    </div>
  );
};

export default CardContainer;