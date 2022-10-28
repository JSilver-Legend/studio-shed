import React, { useState } from "react";
import classNames from "classnames";

const ColorCard = ({ items, type, setValue }) => {
  const [selectedColor, setSelectedColor] = useState(items[0].name);

  const setCurrentColor = (value) => {
    setValue(value);
  }

  return (
    <div className="grid grid-cols-3 gap-3">
      {items.map((item, index) => (
        <div
          key={index}
          onClick={() => {
            setCurrentColor(item.name);
            setSelectedColor(item.name);
          }}
          className={classNames(
            "border-2 rounded-lg flex justify-center items-center flex-col hover:cursor-pointer",
            { "border-yellow-400": selectedColor === item.name },
            { "border-transparent": selectedColor !== item.name },
          )}
        >
            {
                type === 'texture' ?
                <div
                    className="m-2 bg-cover bg-center flex justify-center w-24 h-24"
                    style={{ backgroundImage: `url(${item.url})` }}
                ></div>: type === 'color' && (
                    item.name === 'No Paint' ? 
                    <div
                        className="m-2 bg-cover bg-center flex justify-center w-24 h-24 bg-opacity-0"
                    ></div>:
                    <div
                        className="m-2 bg-cover bg-center flex justify-center w-24 h-24"
                        style={{ backgroundColor: `${item.color}`}}
                    ></div>
                )
            }
          <span className="text-gray-700 text-sm font-semibold">{item.name}</span>
        </div>
      ))}
    </div>
  );
};

export default ColorCard;
