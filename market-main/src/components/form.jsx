import React, { useState } from "react";
import { useGlobalForm } from "./context";
import { FaTimes } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
function Form() {
  const form = document.forms['submit-to-google-sheet']
  const scriptURL =
    "https://script.google.com/macros/s/AKfycbxQYCgMOBOiMI06A6csNsWxCD-pxMmakdtjWbvbvw7nbrmbye7rcezZ9DTJHCBhwszu/exec";

  function handlesubmit(e) {
    e.preventDefault();
    fetch(scriptURL, { method: "POST", body: new FormData(form) })
      .then((response) => {
        alert("Thank you! your form is submitted successfully.");
        navigate("/success");
      })
      .then(() => {
        window.location.reload();
      })
      .catch((error) => console.error("Error!", error.message));
  }

  return (
    // <div
    //   className={
    //     isFormOpen
    //       ? "fixed top-0 left-0 w-[100vw] h-[100vh] bg-black bg-opacity-70 flex items-center justify-center"
    //       : "hidden"
    //   }
    // >
    <div class=" w-[500px] mx-auto bg-white p-8 rounded-3xl shadow-lg relative">
      <h2 class="text-2xl font-semibold mb-4">Please fill the form below</h2>
      <button
        onClick={closeForm}
        className="absolute top-10 right-10 text-red-800 text-2xl hover:text-red-600"
      >
        <FaTimes />
      </button>

      <form method="post" action="" name="contact-form" onSubmit={handlesubmit}>
        <div class="mb-4">
          <label for="name" class="block text-gray-600">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            class="w-full p-2 border rounded focus:outline-none focus:border-blue-400"
            placeholder="John Doe"
          />
        </div>

        <div class="mb-4">
          <label for="email" class="block text-gray-600">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            class="w-full p-2 border rounded focus:outline-none focus:border-blue-400"
            placeholder="johndoe@example.com"
          />
        </div>

        <div class="mb-4">
          <label for="email" class="block text-gray-600">
            Phone
          </label>
          <input
            type="number"
            id="number"
            name="phone"
            class="w-full p-2 border rounded focus:outline-none focus:border-blue-400"
            placeholder="+91 0123456789"
          />
        </div>

        <div class="mb-4">
          <label for="message" class="block text-gray-600">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            class="w-full p-2 border rounded focus:outline-none focus:border-blue-400"
            rows="4"
            placeholder="Enter your message"
          ></textarea>
        </div>

        <div class="flex justify-between items-center">
          <button
            type="submit"
            class="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-400"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
    // </div>
  );
}

export default Form;
