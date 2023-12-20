import React from "react";
import { Link } from "react-router-dom";

function Success() {
  return (
    <div className="bg1">
      <section className="wrapper1">
        <div className="logo12">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Twitter_Verified_Badge.svg/2048px-Twitter_Verified_Badge.svg.png"
            alt=""
          />
        </div>

        <div className="payment12">
          <h1>Form submission completed...</h1>
        </div>

        <div className="btn-pera12">
          <p>click on this button for go back</p>
          <Link to="/">
            <button>GO BACK</button>
          </Link>
        </div>
      </section>
    </div>
  );
}

export default Success;
