import React,{useState} from 'react';
import './style.css';
import { SliderPicker } from 'react-color';
import Highlight from 'react-highlight';
import copy from 'copy-to-clipboard';
import 'bootstrap/dist/css/bootstrap.min.css';

function Linear() {
    const [background,setBackground] = useState("#1256c4");
    const [background2,setBackground2] = useState("#19e0d3");
    const [division,setDivision] = useState(50);
    const [angle,setAngle] = useState(90);

    const handleChangeComplete = (color) => {
        setBackground(color.hex);
    }
    const handleChangeCompleteTwo = (color) => {
        setBackground2(color.hex);
    }
    const handleRange = () => {
        const data = document.getElementById("inputRangePart").value;
        setDivision(data);
    }
    const handleAngle = () => {
        const data = document.getElementById("angle").value;
        setAngle(data);
    }
    const handleCopy = () => {
        copy(`background : linear-gradient(90deg, ${background} ${division}%, ${background2})`);
        document.getElementById("copyBtn").innerText = "Copied!"
    }
    return (
        <div className="container">
            <h1 className="text-center fw-bolder">
                Gradient Generator
            </h1>
            <hr/>
            <div className="color-preview"
                style ={{background:`linear-gradient(${angle}deg, ${background} ${division}%, ${background2})`}}>
            </div>
            <div className="picker" style={{marginTop:40}}>
                <hr/>
                <div className="card">
                    <div className="card-body">
                        <h3>
                            Color Division - <b>{division}%</b>{" "}
                        </h3>
                        <input
                            type="range"
                            min="0"
                            max="100"
                            className="form-range"
                            step="1"
                            id="inputRangePart"
                            onChange={handleRange}
                        />
                        <hr />
                        <h3>Angle - <b>{angle}deg</b></h3>
                        <input
                            type="range"
                            min="0"
                            max="360"
                            className="form-range"
                            step="1"
                            id="angle"
                            onChange={handleAngle}
                        />
                    </div>
                </div>
                <br/>
                <div className="card">
                    <div className="card-body">
                    <h3>Choose Color #1</h3>
                    <hr />
                    <SliderPicker
                        color={background}
                        onChangeComplete={handleChangeComplete}
                    />
                    </div>
                </div>
                <br />
                <div className="card">
                    <div className="card-body">
                    <h3>Choose Color #2</h3>
                    <hr />
                    <SliderPicker
                        color={background2}
                        onChangeComplete={handleChangeCompleteTwo}
                    />
                    </div>
                </div>
                <div className="card">
                    <div className="card-body">
                        <Highlight language="css">
                            {`background: linear-gradient(${angle}deg, ${background} ${division}%, ${background2})`}
                        </Highlight>
                        <button
                            className="btn btn-primary"
                            onClick={handleCopy}
                            id="copyBtn"
                        >
                            Copy
                        </button>
                    </div>
                </div>
                <br />
            </div>
        </div>
    )
}

export default Linear
