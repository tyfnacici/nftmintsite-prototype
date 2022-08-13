import React from "react";

function Card(props) {
  return (
    <div className="flex flex-col py-6 px-4">
      <div className="rounded-lg shadow-lg bg-white">
        <a href="#!">
          <img className="rounded-t-lg h-64 " src={props.image} alt="" />
        </a>
        <div className="p-6 w-64">
          <h5 className="text-gray-900 text-xl font-medium mb-2">
            {props.title}
          </h5>
          {props.button}
        </div>
      </div>
    </div>
  );
}

export default Card;
