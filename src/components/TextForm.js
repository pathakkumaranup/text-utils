import React, {useState} from 'react'

export default function TextForm(props) {
    const handleUpClick=()=>{
        setText(text.toUpperCase());
        props.showAlert("Text is converted to Uppercase","Success");
    }
    const handleLowerClick=()=>{
        setText(text.toLowerCase());
        props.showAlert("Text is converted to Lowercase","Success");

    }
    const handleClearClick=()=>{
        setText("");
        props.showAlert("Text is cleared","Success");

    }
    const handleOnChange=(event)=>{
        setText(event.target.value);
    }
    const handleCopy=()=>{
        var text=document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Text is copied to clipboard","Success");

    }

    const handleExtraSpaces=()=>{
        let newText=text.split(/[  ]+/);
        setText(newText.join(" "));
        props.showAlert("Extra spaces has been removed","Success");

    }
    const [text, setText]=useState("");

    return (
        <>
          <div className="container" style={{color:props.mode=="dark"?"white":"#001a76"}}>
          <h1>Enter Your Text Below</h1>
          <div className="mb-3" >
          <textarea className="form-control" id="myBox" value={text} onChange={handleOnChange} rows="8" style={{background:props.mode=="dark"?"#afe0ee":"white",color:props.mode=="dark"?"white":"#0e0200"}}></textarea>
          </div>
          <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert To Uppercase</button>
          <button className="btn btn-primary mx-2" onClick={handleLowerClick}>Convert To Lowercase</button>
          <button className="btn btn-primary mx-2" onClick={handleCopy}>Copy Text</button>
          <button className="btn btn-primary mx-2" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
          <button className="btn btn-primary mx-2" onClick={handleClearClick}>Clear</button>

      </div>
      <div className="container my-4" style={{color:props.mode=="dark"?"white":"#001a76"}}>
          <h2>
            Your Text Summary
          </h2> 
          <p>
              Total words : {text.split(" ").length}   
          </p>
          <p>
              Total Chars : {text.length}  
          </p>
          <p>Time to read : {0.008 * text.split(" ").length}</p>
          <h2>Preview</h2>
          <p>{text.length>0?text:"Enter Something in The Box"}</p>
      </div>
      </>
    );
}
