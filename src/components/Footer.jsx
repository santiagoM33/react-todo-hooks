import React from "react";

const Footer = () => {
  const fecha = new Date().getFullYear();

  return <p>Todos los derechos reservados &copy; {fecha}</p>;
};

export default Footer;
