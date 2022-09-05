import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("");
  const [rvtext, setRvText] = useState("");
  const [charcountWOspace, setCharcountWOspace] = useState(0);
  const [uniqueCount, setUniqueCount] = useState(0);

  const handleUpClick = () => {
    console.log("Uppercase was clicked" + text);
    let newText = text.toUpperCase();
    setText(newText);
  };

  const handledownClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
  };

  const handleclearClick = () => {
    let newText = "";
    setText(newText);
  };

  const handleOnChange = (event) => {
    console.log("Uppercase was Change");
    setText(event.target.value);
  };

  const handleCopy = () => {
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
    console.log(str.size);
    setUniqueCount(str.size);
  };

  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
  };

  return (
    <>
      <div className="container">
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            id="myBox"
            value={text}
            onChange={handleOnChange}
            rows="8"
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
      <div className="container my-2">
        <h3>Your text summary</h3>
        <p>
          {text.split(" ").length} words and {text.length} characters
        </p>
        <p>{0.008 * text.split(" ").length} Minutes to read</p>
        <h3>Preview</h3>
        <p>{text}</p>
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
