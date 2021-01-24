import React from "react";

const Header = ({ title }) => (
    <header className="ed-container">
      <div className="ed-item logo">
        <h2>{title}</h2>
      </div>
    </header>
  );

export default Header;
