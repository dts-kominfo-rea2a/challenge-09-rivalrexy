// Kalian bisa menambahkan CSS di src/components/Header.css
import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <div>
      <h1>Call a Friend</h1>
      <p className="subtitle">your friendly contact app</p>
      <p className="limit">
        ................................................................................
      </p>
    </div>
  );
};

export default Header;
