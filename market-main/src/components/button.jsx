import React from "react";
import { useGlobalForm } from "./context";

function Button({ text }) {
  const { isFormOpen, openForm } = useGlobalForm();
  console.log("in button components", isFormOpen);
  return (
    <button
      type="button"
      className="text-white text-xl bg-orange-400 font-semibold rounded-lg px-16 py-7 text-center hover:bg-orange-500 hover:drop-shadow-md transition duration-300 ease-in-out"
      onClick={openForm}
    >
      {text}
    </button>
  );
}

export default Button;
