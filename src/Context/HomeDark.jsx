import React, { createContext, useState } from "react";
import Form from "../counter/Form";
import Counter from "../counter/Counter";
export default function Home() {
  const [dark, setDark] = useState(false);


  const Dark = createContext()

  const handleCheckbox = (e) => {
    setDark(e.target.checked);
  };

  return (
    <div style={dark ? { backgroundColor: "black", color: "white" } : {}}>
      <h1>Welcome, You have to login</h1>

      <div className="form-check form-switch">
        <input
          name="dark"
          onChange={handleCheckbox}
          className="form-check-input"
          type="checkbox"
          id="darkModeSwitch"
          checked={dark}
        />
        <label className="form-check-label" htmlFor="darkModeSwitch">
          Dark Mode
        </label>
      </div>

      <Form />
      <Counter />
    </div>
  );
}
