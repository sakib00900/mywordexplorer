import React,{useState} from 'react'


const Textform = (props) => {

    const [text,setText] = useState("");
    const handleupclick=()=>{
        let uptext = text.toUpperCase();
        setText(uptext)
        props.showalert(' Converted to UpperCase!','success')
    }
    const handlelowclick=()=>{
        let lowtext = text.toLowerCase();
        setText(lowtext)
        props.showalert(' Converted to LowerCase!','success')
    }
    const onChange=(event)=>{
        setText(event.target.value)
    }
    const copy=()=>{
        let text = document.getElementById("my")
        text.select();
        props.showalert(' Text copied!','success')
    }
    const extraspaces=()=>{
        let mynewtext = text.split(/[ ]+/)
        setText(mynewtext.join(" "))
        props.showalert(' Extra Spaces has been removed!','success')
    }
    const clear=()=>{
        let ctext = ""
        setText(ctext)
        props.showalert(' All cleared!','success')
    }
  return (
    <>
        <div className='container' style={{color:props.mode==="dark"?"white":"black"}}>
            <div className="mb-3 my-4 ">
                <h1><b><center>Enter your text to Analyze below</center></b></h1>
                    <textarea className="form-control"  value = {text} onChange={onChange} id="my" rows="8" placeholder='Enter Your Text' style={{backgroundColor:props.mode==="dark"?"#042743":"white" ,color:(props.mode==="dark"?"white":"black")}}></textarea>
            </div>
            <button disabled={text.length==0} className="btn btn-warning mx-2 my-1" onClick={handleupclick}><b><i>Convert in UpperCase</i></b></button>
            <button disabled={text.length==0} className="btn btn-secondary mx-2 my-2" onClick={handlelowclick}><b><i>Convert in LowerCase</i></b></button>
            <button disabled={text.length==0}  className="btn btn-danger mx-2 my-2" onClick={copy}><b><i>Copy</i></b></button>
            <button disabled={text.length==0} className="btn btn-success mx-2 my-2" onClick={extraspaces}><b><i>Remove Extra Spaces</i></b></button>
            <button disabled={text.length==0} className="btn btn-info mx-2 my-2" onClick={clear}><b><i>Clear</i></b></button>
        </div>
        <div className="container my-4" style={{color:props.mode==="dark"?"white":"black"}}>
            <h3><u>Your Text Summary</u></h3>
            
            <h4>🫱{text.split(/\s+/).filter((element)=>{return element.length !== 0}).length} words and {text.length} characters!!🫲</h4>
        </div>
    </>
  )
}

export default Textform

