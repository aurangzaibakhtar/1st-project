import React, {useState} from 'react';

function Home03() {
  const [text, setText] = useState(''); 
    // onchange 
    const onchange = (a) => {
      setText(a.target.value);
    };
    // Clear Text 
    const clearText = () => { 
      setText('');
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
      <button className="btn btn-primary" onClick={clearText}>
        Clear Text
      </button>

      <button className="btn btn-primary" onClick={Uppercase}>
        Upper-Case
      </button>

      <button className="btn btn-primary" onclick={lowercase}>
      lower-Case
      </button>
    </div>

    

      
    </>
  )
}

export default Home03;