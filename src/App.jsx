import React, { useState } from "react";
import ItemsList from "./components/ItemsList";
import PersonDetails from "./components/PersonDetails";
import Button from "./components/Button";

function App() {
  const skills = ["Dancing", "Cooking", "Reading", "Travelling"];
  const person = { name: "Anshika Srivastava", age: 21 };

  const [message, setMessage] = useState("");

  const handleClick1 = () => setMessage("Button 1 clicked!");
  const handleClick2 = () => setMessage("Button 2 clicked!");

  return (
    <div style={{ fontFamily: "Arial", padding: "20px" }}>
    
      <div style={{ border: "1px solid black", padding: "10px", marginBottom: "20px" }}>
        <h2>Hobbies</h2>
        <ItemsList items={skills} />
      </div>

      
      <div style={{ border: "1px solid black", padding: "10px", marginBottom: "20px" }}>
        <h2>Person Details</h2>
        <PersonDetails person={person} />
      </div>

      
      <div style={{ border: "1px solid black", padding: "10px" }}>
        <h2>Reusable Button Component</h2>
        <Button text="Click Me 1" onClick={handleClick1} />
        <Button text="Click Me 2" onClick={handleClick2} />
        {message && <p>{message}</p>}
      </div>
    </div>
  );
}

export default App;
