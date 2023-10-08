import React, { useEffect, useState } from "react";
import ColorPicker from "react-pick-color";
import { GrAdd } from "react-icons/gr";

interface Props {
  setFormData: React.Dispatch<React.SetStateAction<any>>;
  Color: string;
}
function Color({ setFormData, Color }: Props) {
  const colorArray: string[] = Color.split(",");

  const [open, setOpen] = useState<boolean>(false);
  const [color, setColor] = useState("#fff");
  const [selectedColors, setSelectedColors] = useState<string[]>(colorArray);

  if (colorArray.length < 0) {
    setSelectedColors([]);
  }

  const handleColorButtonClick = () => {
    setSelectedColors((prev) => [...prev, color]);
    setOpen(false);
  };

  const handleSelectedColors = () => {
    setFormData((prev: FormData) => ({
      ...prev,
      color: selectedColors.join(","),
    }));
  };

  const handleDeleteColor = (index: number) => {
    setSelectedColors((prev) => {
      const updateColors = [...prev];
      updateColors.splice(index, 1);
      return updateColors;
    });
  };

  useEffect(() => {
    handleSelectedColors();
  }, [selectedColors]);

  return (
    <div>
      <div className="flex items-center justify-between mt-3">
        <button
          className="block border-[1px] rounded-lg px-3 text-[14px]"
          onClick={() => setOpen(!open)}
        >
          Choose Color
        </button>
        {open && (
          <ColorPicker
            color={color}
            onChange={(color) => setColor(color.hex)}
          />
        )}
        <button
          className="flex items-center space-x-1 border-[1px] rounded-lg p-1 px-3 text-[14px]"
          onClick={handleColorButtonClick}
        >
          Add
          <GrAdd className="ml-1" size={16} />
        </button>
      </div>
      <div className="mt-5">
        {selectedColors.map((selectedColor, index) => (
          <div key={index} className="flex items-center space-x-4 mb-2">
            <div
              style={{
                width: "40px",
                height: "40px",
                borderRadius: "100%",
                backgroundColor: selectedColor,
                display: "inline-block",
              }}
            ></div>
            <span className="border-[1px] rounded-lg p-1 px-3 text-[14px]">
              {selectedColor}
            </span>
            <button
              className="border-[1px] rounded-lg p-1 px-3 text-[14px]"
              onClick={() => handleDeleteColor(index)}
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Color;
