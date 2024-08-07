import { useEffect, useState } from "react";
import "./styles.css";

export default function RandomColor() {
  // State to track the type of color (hex or rgb)
  const [typeOfColor, setTypeOfColor] = useState("hex");

  // State to track the current color value
  const [color, setColor] = useState("#000000");

  // Utility function to generate a random number between 0 and length - 1
  function randomColorUtility(length) {
    return Math.floor(Math.random() * length);
  }

  // Function to generate a random HEX color
  function handleCreateRandomHexColor() {
    // Array of HEX characters
    const hex = [1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
    let hexColor = "#";

    // Generate a HEX color by randomly selecting 6 characters from the array
    for (let i = 0; i < 6; i++) {
      hexColor += hex[randomColorUtility(hex.length)];
    }
    setColor(hexColor); // Set the generated HEX color
  }

  // Function to generate a random RGB color
  function handleCreateRandomRgbColor() {
    // Generate random values for red, green, and blue components
    const r = randomColorUtility(256);
    const g = randomColorUtility(256);
    const b = randomColorUtility(256);

    // Set the RGB color value
    setColor(`rgb(${r},${g}, ${b})`);
  }

  // useEffect to run whenever typeOfColor changes
  useEffect(() => {
    // Call the appropriate color generation function based on the typeOfColor
    if (typeOfColor === "rgb") handleCreateRandomRgbColor();
    else handleCreateRandomHexColor();
  }, [typeOfColor]);

  return (
    <div className="color-container" style={{ background: color }}>
      {/* Button to switch to HEX color generation */}
      <button className="color-button" onClick={() => setTypeOfColor("hex")}>
        Create HEX Color
      </button>
      {/* Button to switch to RGB color generation */}
      <button className="color-button" onClick={() => setTypeOfColor("rgb")}>
        Create RGB Color
      </button>
      {/* Button to generate a random color based on the current typeOfColor */}
      <button
        className="color-button"
        onClick={
          typeOfColor === "hex"
            ? handleCreateRandomHexColor
            : handleCreateRandomRgbColor
        }
      >
        Generate Random Color
      </button>
      {/* Display the current color and its type */}
      <div className="color-display">
        <h3>{typeOfColor === "rgb" ? "RGB Color" : "HEX Color"}</h3>
        <h1>{color}</h1>
      </div>
    </div>
  );
}
