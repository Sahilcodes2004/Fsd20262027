import { useState } from "react";
import cat from "../assets/cat.webp";
import { use } from "react";
function ImageManipulation()
{ const[CatHeight,setCatHeight]=useState(200);
    const[CatWidth,setCatWidth]=useState(200);
    const[red,setRed]=useState(0);
    const [green,setGreen]=useState(0);
    const[blue,setBlue]=useState(0);
    function increaseHeight()
    {
        setCatHeight(CatHeight+20);
    }
    function increaseWidth()
    {
        setCatWidth(CatWidth+20);
        
    }
    function changeBGcolor()
    {
        setRed(Math.random()*255);
        setGreen(Math.random()*255);
        setBlue(Math.random()*255);
    }
    return(
        <div>
            <h2>Image Manipulation</h2>
            <div style={{backgroundColor:`rgb(${red},${green},${green})`,height:`400px`,width:`400px`,border:`4px solid black`,marginLeft:'10px',marginRight:`10px`}}>
                <img src={cat}height={CatHeight} width={CatWidth}/>
            </div>
            <div>
                <button onClick={increaseHeight}   >
Increase Height
                </button>
                <button onClick={increaseWidth}>Increase Width</button>
               
            </div>
            <div>
                 <button onClick={changeBGcolor} >Change BG color</button>
            </div>
        </div>
    );
}
export default ImageManipulation;
