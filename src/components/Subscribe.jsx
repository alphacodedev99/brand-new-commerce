import React from "react";
import { BsEnvelope } from "react-icons/bs";

function Subscribe() {
  return (
    <div className="subscribe">
      <h2>Subscribe on our newsletter</h2>
      <p>
        Get daily news on upcoming offers form many suppliers all over the world
      </p>
      <div className="form-container">
        <div className="input-wrapper">
          <BsEnvelope />
          <input type="text" placeholder="E-Mail" />
        </div>
    
        <button>Subscribe</button>
      </div>
    </div>
  );
}

export default Subscribe;
