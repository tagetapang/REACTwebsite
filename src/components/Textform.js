import React, { useState } from "react";

export default function Textform(props) {
  const handleupclick = () => {
    let newtxt = textt.toUpperCase();
    settext(newtxt);
    props.showalert("converted upper case","success");
  };
  const handlelowerc = () => {
    let newtxt = textt.toLowerCase();
    settext(newtxt);
    props.showalert("converted lower case","success");
  };
  const handleonchange = (event) => {
    settext(event.target.value);
    
  };
  const handleencript = ()=>{
    let newtxt = (textt.split("t" || "T"));
    settext(newtxt.join("h" || "H"))
    props.showalert("encripted","success");
  };
  const handleerase = () =>{
    props.showalert("cleared","success");
    settext("");
  }
  const handlecopy = () =>{


    var text = document.getElementById("mybox");
    text.select();
    text.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(text.value);
    props.showalert("copied","success");
  }

  const [textt, settext] = useState('');
  return (
    <>
      <div className={`container text-${props.mode === 'light'?"dark": "light"}`}>
        <div className="mb-3">
          <h1>{props.titletext}</h1>
          <textarea
            className="form-control"
            value={textt}
            onChange={handleonchange}
            id="mybox"
            rows="5"
            style={{backgroundColor:props.mode === 'light'?"white": "grey",color: props.mode === 'light'?'black':"white"}}
          ></textarea>
        </div>
      </div>
      <div className="buttons">
        <button className={`btn btn-${props.mode=== 'light'?'primary':'secondary'} mx-2`} onClick={handleupclick}>
          upper case
        </button>
        <button className={`btn btn-${props.mode=== 'light'?'primary':'secondary'}  mx-2`} onClick={handlelowerc}>
          lower case
        </button>
        <button className={`btn btn-${props.mode=== 'light'?'primary':'secondary'}  mx-2`} onClick={handleencript}>
          encript
        </button>
        <button className={`btn btn-${props.mode=== 'light'?'primary':'secondary'}  mx-2`} onClick={handlecopy}>copy</button>
        <button className={`btn btn-${props.mode=== 'light'?'primary':'secondary'}  mx-2`} onClick={handleerase}>erase</button>
      </div>
      <div className={`container text-${props.mode === 'light'?"dark": "light"}`}>
        <h1>your text summary</h1>
        <p>
          {textt.split(" ").length - 1} no of words and {textt.length} no of
          characters
        </p>
        <p>
          {0.008 * textt.split(" ").length} minutes required to read the above
        </p>
        <h2>preview</h2>
        <p><b>{textt.length > 0? textt : "enter text in the above section to preview it here"}</b></p>
      </div>
    </>
  );
}
