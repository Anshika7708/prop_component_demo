import React from "react";

const PersonDetails = ({ person }) => {
  const { name, age } = person;

  return (
    <>
      <p><strong>Name:</strong> {name}</p>
      <p><strong>Age:</strong> {age}</p>
    </>
  );
};

export default PersonDetails;
