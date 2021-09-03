import React, { useRef, useState } from 'react'

export default function TextForm(props) {
    const [text, setText] = useState("")
  
    const txtarea = useRef();

    const ivkupc = () => {

        setText(text.toUpperCase())
    }
    const ivklwc = () => {

        setText(text.toLowerCase())
    }
    const del = () => {
        
        setText("")
    }
   
   
    const textAreaRef = useRef();
      console.log(textAreaRef)
    function copyCodeToClipboard(e) {
        textAreaRef.current.select();
        document.execCommand('copy');
        e.target.focus();
    };
    const handleOnChange = (event) => {
        setText(event.target.value)
    }
    const removespace=(e)=>{
     let newText = text.split(/[ ]+/);
     setText(newText.join(" "));
    }

    let Tminutes = parseInt((text.split(" ").length / 125))
    let Tsecs = parseInt((text.split(" ").length * 0.48) - (Tminutes * 60))
    return (
        <>
            <div className="container m-5">
                <h2 className="my-3">{props.heading}</h2>
                <textarea className="form-control" ref={textAreaRef} id="txtarea" onChange={handleOnChange}  value={text} rows="5" placeholder="Enter Your Text" required></textarea>
                <button type="button" className="btn btn-success my-3 mx-1" onClick={ivkupc} >Uppercase</button>
                <button type="button" className="btn btn-success my-3 mx-1" onClick={ivklwc} >Lowercase</button>
                <button type="button" className="btn btn-danger my-3 mx-1" onClick={del}>Delete</button>
                <button type="button" className="btn btn-danger my-3 mx-1" onClick={copyCodeToClipboard}>Copy</button>
                <button type="button" className="btn btn-warning my-3 mx-1" onClick={removespace}>Extra Space Remover</button>
            </div>
            <div className="container m-5">
                <h1>Text Summery</h1>
                <p><span>Char</span>: {text.length}</p>
                <p><span>Words</span>: {text.split(" ").length - 1}</p>
                <p><span>Spaces</span>: {text.split(" ").length - 2}</p>
                <p><span>Read Time</span>: {Tminutes} Minutes {Tsecs} Seconds</p>
            </div>
            <div className="container m-5">
                <h1>Text Preview</h1>
                <p>{text.length>0? text:"Enter Text Above To Preview"}</p>
            </div>
        </>
    )
}
