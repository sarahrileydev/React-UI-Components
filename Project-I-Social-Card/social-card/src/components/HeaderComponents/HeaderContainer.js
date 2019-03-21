import React from "react";
import "./Header.css";

import ImageThumbnail from "./ImageThumbnail";
import HeaderContent from "./HeaderContent";
import HeaderTitle from "./HeaderTitle";

const HeaderContainer = () => {
  return (
    <div className="HeaderContainer">
      <ImageThumbnail />
      <div className="HeaderMain">
        <HeaderTitle />
        <HeaderContent />
      </div>
    </div>
  );
};

export default HeaderContainer;
