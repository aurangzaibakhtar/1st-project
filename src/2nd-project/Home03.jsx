import React, { useState } from "react";

function Home03() {
  const [text, setText] = useState("");
  // onchange
  const onchange = (a) => {
    setText(a.target.value);
  };
  // Clear Text
  const clearText = () => {
    setText("");
  };

  //Uppercase
  const Uppercase = () => {
    const text02 = text.toUpperCase();
    setText(text02);
  };

  //LOWERcase
  const lowercase = () => {
    const text03 = text.toLowerCase();
    setText(text03);
  };
  // copy txt
  const Copytext = () => {
    navigator.clipboard.writeText(text);
  };
  // remove spc 
      
  const removespc = () => {
    const txt= text.split(/[ ]+/);
    setText(txt.join(" "));
  };

  return (
    <>
      <div className="container ">
        <div className="mb-3">
          <label htmlFor="exampleFormControlTextarea1" className="form-label">
            Enter Your Text
          </label>
          <textarea
            className="form-control"
            id="exampleFormControlTextarea1"
            rows="8"
            // placeholder="Enter Your Text Here"
            value={text}
            onChange={onchange}
          ></textarea>
        </div>
        <button className="btn btn-primary mr-1" onClick={clearText}>
          Clear-Text
        </button>

        <button className="btn btn-primary mr-1" onClick={Uppercase}>
          Upper-Case
        </button>

        <button className="btn btn-primary mr-1" onClick={lowercase}>
          lower-Case
        </button>

        <button className="btn btn-primary mr-1" onClick={Copytext}>
          Copy-text
        </button>

        <button className="btn btn-primary mr-1" onClick={removespc}>
          remove-spc
        </button>
      </div>
    </>
  );
}

export default Home03;
