import React from "react";

const AddItemCard = ({ items, getValue }) => {

  const onClickCard = (value) => {
    getValue(value);
  }

  return (
    <div className="my-2 grid grid-cols-3 gap-3">
      {items.map((item, index) => (
        <div
          onClick={()=>{
            onClickCard(item.name);
          }}
          className="flex p-2 items-center border-2 text-sm border-transparent rounded-lg justify-center flex-col my-2 hover:cursor-pointer hover:border-yellow-400"
          key={index}
        >
          <img src={item.url} />
          <span className="text-gray-700 text-center ">{item.name}</span>
        </div>
      ))}
    </div>
  );
};

export default AddItemCard;
