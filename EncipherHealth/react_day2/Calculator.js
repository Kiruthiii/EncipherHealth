import {useState} from "react";

function Calculator(){
    const[val,setValue]=useState("");
    function Click(e){
        setValue(val+e.target.value)
    }
    function Clear(){
        setValue("")
    }
    function equals(){
        setValue(eval(val))
    }
    return(
        <div className="Calc">
        <h2>Calculator</h2>
        <input type="text" value={val} readOnly />
        <div>
        <button value="1" onClick={Click}>1</button>
        <button value="2" onClick={Click}>2</button>
        <button value="3" onClick={Click}>3</button>
        <button value="+" onClick={Click}>+</button>
      </div>

      <div>
        <button value="4" onClick={Click}>4</button>
        <button value="5" onClick={Click}>5</button>
        <button value="6" onClick={Click}>6</button>
        <button value="-" onClick={Click}>-</button>
      </div>

      <div>
        <button value="7" onClick={Click}>7</button>
        <button value="8" onClick={Click}>8</button>
        <button value="9" onClick={Click}>9</button>
        <button value="*" onClick={Click}>*</button>
      </div>

      <div>
        <button value="0" onClick={Click}>0</button>
        <button onClick={Clear}>C</button>
        <button onClick={equals}>=</button>
        <button value="/" onClick={Click}>/</button>
      </div>
    </div>
  
        
    );
}
export default Calculator;