import { useState } from "react";

function ColorChange() {
    const [red, setRed] = useState(0);
    const [green, setGreen] = useState(0);
    const [blue, setBlue] = useState(0);

    return (
        <div>
            <div
                style={{
                    backgroundColor: `rgb(${red}, ${green}, ${blue})`,
                    width: "200px",
                    height: "200px"
                }}
            ></div>

            <button onClick={() => {
                setRed(255);
                setGreen(0);
                setBlue(0);
            }}>
                RED
            </button>

            <button onClick={() => {
                setRed(0);
                setGreen(255);
                setBlue(0);
            }}>
                GREEN
            </button>

            <button onClick={() => {
                setRed(0);
                setGreen(0);
                setBlue(255);
            }}>
                BLUE
            </button>
        </div>
    );
}

export default ColorChange;