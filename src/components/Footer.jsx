import React from "react";

const Footer = () => {
  const fecha = new Date().getFullYear();
  return (
      <div>
        <footer className="ed-container">
          <p className="ed-item s-center">
            Todos los derechos reservados &copy; {fecha}
          </p>
        </footer>
      </div>
    );
};

export default Footer;
