import React from "react";
import { useState } from "react";
import { FiPlus, FiMinus } from "react-icons/fi";

function Question({ id, title, info, activeId, toggleQuestion }) {
  const isActive = id === activeId;
  return (
    <article className="py-6 px-8 my-8 rounded-md shadow border-2 border-gray-100 bg-slate-50">
      <header className="flex justify-between items-center">
        <h4 className="transform-none  text-3xl tracking-wide">{title}</h4>
        <button
          className="flex justify-center items-center cursor-pointer w-8 h-8 text-2xl rounded-full bg-gray-200 text-red-400"
          onClick={() => toggleQuestion(id)}
        >
          {isActive ? <FiMinus /> : <FiPlus />}
        </button>
      </header>
      {isActive && (
        <p className="mt-2 text-slate-600 text-2xl tracking-wide">{info}</p>
      )}
    </article>
  );
}

export default Question;
