// components/RangeSlider.js
"use client"
import { useState } from 'react';

const RangeSlider = () => {
  const [sliderValue, setSliderValue] = useState(50);

  const handleSliderChange = (event) => {
    setSliderValue(event.target.value);
  };

  return (
    <div>
      <label htmlFor="rangeSlider">Range Slider:</label>
      <input
        type="range"
        id="rangeSlider"
        min="0"
        max="100"
        step="1"
        value={sliderValue}
        onChange={handleSliderChange}
      />
      <p>Selected Value: {sliderValue}</p>
    </div>
  );
};

export default RangeSlider;
