import React, {useState} from 'react'

export default function Textform(props) {
    
    function converterUpper(){
    const newtext = Text.toUpperCase();
    setText(newtext);
    props.showAlert("Converted to Uppercase", "success");
  }
  
  const converterLower = ()=>{
    const lowertext = Text.toLowerCase();
    setText(lowertext);
    props.showAlert("Converted to Lowercase", "success");

  }
  const clear =()=>{
    setText("");
    props.showAlert("Text Area Has Been Cleared", "success");
  }


  const handleonchange = (event)=>{
    setText(event.target.value);
  }

  const handleonCOpy = ()=>{
    let text = document.getElementById("Texts");
    navigator.clipboard.writeText(text.value);
    props.showAlert("Copied to Clipboard", "success");  
  }

  const handeExtraSpace = () => {
    let newText = Text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Extra Spaces Has Been Removed", "success");
  }
  const [Text,setText] = useState("Enter Text here");
  return (

    <div className='mx-5'>
        <h1 className='mt-5'>{props.heading}</h1>
<div className="mb-3">
  <textarea className="htmlForm-control w-100 px-2" id="Texts" rows="8" value={Text} onChange={handleonchange} style={{backgroundColor: props.mode === "black " ? "grey" : "white"}}></textarea>
</div>
<button disabled={Text.length===0} className="btn btn-primary my-1" id="btn" onClick={converterUpper}>Convert to UpperCase</button>
<button disabled={Text.length===0} className="btn btn-primary  mx-3 my-1" id="btn" onClick={converterLower}>Convert to LowerCase</button>
<button disabled={Text.length===0} className="btn btn-primary my-1" id="btn" onClick={clear}><i class="bi bi-trash-fill"></i> Clear</button>
<button disabled={Text.length===0} className="btn btn-primary mx-3 my-1" id="btn" onClick={handleonCOpy}><i class="bi bi-clipboard2-fill"></i> Copy Text</button>
<button disabled={Text.length===0} className="btn btn-primary my-1" id="btn" onClick={handeExtraSpace}><i class="bi bi-eraser-fill"></i> Remove Extra Spaces</button>
<h2 id='summary' className='mt-4'>Your Text Summary:</h2>
<div className="card p-3" id='card'>
        <figure className="p-3 mb-0">
          <blockquote class="blockquote">
            <h5><b>Characters:</b></h5>
            <p>{Text.length}</p>
            <h5><b>Words:</b></h5>
            <p>{Text.split(/\s+/).filter((element)=>{return element.length!==0}).length}</p>
          </blockquote>
        </figure>
      </div>
      
    </div>

    
  )
}
