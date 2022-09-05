import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("");
  const [rvtext, setRvText] = useState("");
  const [charcountWOspace, setCharcountWOspace] = useState(0);
  const [uniqueCount, setUniqueCount] = useState(0);

  const handleUpClick = () => {
    props.showAlert("Message converted to uppercase", "success");
    let newText = text.toUpperCase();
    setText(newText);
  };

  const handledownClick = () => {
    props.showAlert("Message converted to lowercase", "success");
    let newText = text.toLowerCase();
    setText(newText);
  };

  const handleclearClick = () => {
    let newText = "";
    setText(newText);
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  const handleCopy = () => {
    props.showAlert("Your Text is Copied", "success");
    let text = document.getElementById("myBox");
    text.select();
    text.setSelectionRange(0, 1000000);
    navigator.clipboard.writeText(text.value);
  };

  const charactersewithoutSpace = () => {
    let newText = text.replace(/\s/g, "").length;
    setCharcountWOspace(newText);
  };

  const reverseString = () => {
    let newText = text.split(" ").reverse().join(" ");
    setRvText(newText);
  };

  const foundUniqWords = () => {
    let str = new Set(text.split(" "));
    setUniqueCount(str.size);
  };

  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
  };

  return (
    <>
      <div
        className="container"
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            id="myBox"
            value={text}
            onChange={handleOnChange}
            rows="8"
            style={{
              backgroundColor: props.mode === "dark" ? "grey" : "white",
              color: props.mode === "dark" ? "white" : "black",
            }}
          />
        </div>
        <button className="btn btn-primary" onClick={handleUpClick}>
          Convert to uppercase
        </button>
        <button className="btn btn-primary mx-1" onClick={handledownClick}>
          Convert to lowercase
        </button>
        <button
          className="btn btn-primary mx-1 my-2"
          onClick={handleclearClick}
        >
          Clear Text
        </button>

        <button
          className="btn btn-primary mx-1"
          onClick={charactersewithoutSpace}
        >
          Characters w/o spaces
        </button>
        <button className="btn btn-primary mx-1 my-2" onClick={reverseString}>
          Reverse Text
        </button>
        <button className="btn btn-primary mx-1 my-2" onClick={foundUniqWords}>
          Uniq Text
        </button>
        <button className="btn btn-primary mx-1 my-2" onClick={handleCopy}>
          Copy to Clipboard
        </button>
        <button
          className="btn btn-primary mx-1 my-2"
          onClick={handleExtraSpaces}
        >
          Remove Extra Spaces
        </button>
      </div>
      <div
        className="container my-2"
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        <h3>Your text summary</h3>
        <p>
          {text.split(" ").length - 1} words and {text.length} characters
        </p>
        <p>{0.008 * text.split(" ").length} Minutes to read</p>
        <h3>Preview</h3>
        <p>
          {text.length > 0
            ? text
            : "Enter something in the TextBox above to preview it here"}
        </p>
        <h3>Charaters without space</h3>
        <p>{charcountWOspace}</p>
        <h3>Reverse String</h3>
        <p>{rvtext}</p>
        <h3>Unique Value in the string</h3>
        <p>{uniqueCount}</p>
      </div>
    </>
  );
}
