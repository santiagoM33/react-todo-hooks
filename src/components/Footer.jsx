import React from "react";

const Footer = () => {
  const fecha = new Date().getFullYear();

  return <p className="s-center">Todos los derechos reservados &copy; {fecha}</p>;
};

export default Footer;
