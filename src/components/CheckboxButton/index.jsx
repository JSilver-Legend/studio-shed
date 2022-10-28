import React, { useState } from "react";
import classNames from "classnames";

const CheckboxButton = ({ item, setValue }) => {
  const [selectedState, setSelecedState] = useState(null);

  const setStateValue = (value) => {
    setValue(value);
  };

  return (
    <div
      onClick={() => {
        if (!selectedState) {
          setStateValue(item.value);
          setSelecedState(item.value);
        } else {
          setStateValue(null);
          setSelecedState(null);
        }
      }}
      className={classNames(
        "p-4 my-1 rounded-lg font-semibold border-gray-600 hover:bg-gray-700 hover:cursor-pointer hover:text-gray-100",
        {
          "bg-gray-700 text-gray-100": selectedState === item.value,
          "bg-gray-100 text-gray-700": selectedState !== item.value,
        }
      )}
    >
      {item.label}
    </div>
  );
};

export default CheckboxButton;
