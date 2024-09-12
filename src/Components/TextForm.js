import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("");
  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
  };
  const handleLowClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
  };
  const handleOnChange = (event) => {
    setText(event.target.value);
  };
  const clearText = () => {
    setText("");
  };
  const speak = () => {
    let msg = new SpeechSynthesisUtterance();
    msg.text = text;
    window.speechSynthesis.speak(msg);
  }
  return (
    <>
      <div className="container" style={{color: props.mode === 'dark'?'white':'black'}}>
        <h1>{props.heading}</h1>
        <label for="mBox" className="form-label"></label>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            style={{backgroundColor: props.mode === 'dark'?'#808080':'white',color: props.mode === 'dark'?'white':'black'}}
            id="myBox"
            rows="8"
          ></textarea>
        </div>
        <button className="btn btn-primary mx-1" onClick={handleUpClick}>
          Convert to Uppercase
        </button>
        <button className="btn btn-primary mx-1" onClick={handleLowClick}>
          Convert to Lowercase
        </button>
        <button type="button" className="btn btn-success" onClick={clearText}>Clear</button>
        <button type="submit" onClick={speak} className="btn btn-warning mx-2 my-2">Speak</button>

      </div>
      <div className="container" style={{color: props.mode === 'dark'?'white':'black'}}>
        <h1>Your Text Summary</h1>
        <p>
              {(text.length>0)?text.trim().split(" ").length:0} words and {text.length} characters
            </p>        <h2>Preview</h2>
        <p>{text}</p>
      </div>
    </>
  );
}
