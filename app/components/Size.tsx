import React, { useState } from "react";

interface props {
  setFormData: React.Dispatch<React.SetStateAction<any>>;
}
const Size = ({ setFormData }: props) => {
  const [selectedSizes, setSelectedSizes] = useState<string[]>([]);
  const sizes = ["sm", "md", "xl", "2xl", "3xl", "4xl"];

  const handleSizeButtonClick = (size: string) => {
    setSelectedSizes((prev) => {
      if (prev.includes(size)) {
        return prev.filter((s) => s !== size);
      } else {
        return [...prev, size];
      }
    });
  };

  const handleSubmit = () => {
    setFormData((prevFormData: FormData) => ({
      ...prevFormData,
      size: selectedSizes.join(","),
    }));
  };
  return (
    <div>
      {sizes.map((size) => (
        <button
          key={size}
          className={`border-[0.5px] rounded-lg text-center text-[14px] py-[2px] cursor-pointer px-3 mt-4 mb-5 mr-5
          ${selectedSizes.includes(size) ? "bg-gray-500 text-white" : ""}`}
          onClick={() => handleSizeButtonClick(size)}
        >
          {size}
        </button>
      ))}
      <button onClick={() => handleSubmit()}>submit</button>
    </div>
  );
};

export default Size;
Size;
