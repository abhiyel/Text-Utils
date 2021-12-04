import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
  };
  const handleLoClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
  };
  const handleClearClick = () => {
    let newText = "";
    setText(newText);
  };
  const handleOnChange = (event) => {
    setText(event.target.value);
  };
  const [text, setText] = useState("");
  return (
    <>
      <div
        className="container"
        style={{ color: props.mode === "dark" ? "white" : "#042743" }}
      >
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            style={{
              backgroundColor: props.mode === "dark" ? "#042743" : "white",
              color: props.mode === "dark" ? "white" : "#042743",
            }}
            id="mybox"
            rows="8"
          ></textarea>
          <button className="btn btn-primary mx-2" onClick={handleUpClick}>
            Convert to Uppercase
          </button>
          <button className="btn btn-primary mx-2 my-2" onClick={handleLoClick}>
            Convert to Lowercase
          </button>
          <button
            className="btn btn-primary mx-2 my-2"
            onClick={handleClearClick}
          >
            Clear Text
          </button>
        </div>
        <div
          className="container my-3 my-2"
          style={{ color: props.mode === "dark" ? "white" : "#042743" }}
        >
          <h1>Your Text Summary</h1>
          <p>
            {text === "" ? 0 : text.split(" ").length} words and {text.length}{" "}
            characters
          </p>
          <p>{text === "" ? 0 : 0.008 * text.split(" ").length} Minute read</p>
          <h2>Preview Your Text Here</h2>
          <p>
            {text.length > 0
              ? text
              : "Enter in the textbox above to preview it"}
          </p>
        </div>
      </div>
    </>
  );
}
