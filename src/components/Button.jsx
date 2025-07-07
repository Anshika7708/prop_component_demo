import React from "react";

const Button = ({ text, onClick }) => (
  <button
    style={{ marginRight: "10px", padding: "5px 10px", cursor: "pointer" }}
    onClick={onClick}
  >
    {text}
  </button>
);

export default Button;
