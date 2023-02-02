import React from "react";
import {
  ArabicEmirates,
  Austalia,
  China,
  Denmark,
  France,
  GreatBritain,
  Russia,
  USA,
} from "../assets/index";

function SuppliersByRegion() {
  return (
    <div className="suppliers-by-region">
      <h2>Suppliers by region</h2>
      <div className="region-container">
        <div className="region">
          <img src={ArabicEmirates} alt="Arabic Emiragtes Flag" />
          <div className="region-details">
            <h2>Emirates</h2>
            <p>shopname.ae</p>
          </div>
        </div>
        <div className="region">
          <img src={Austalia} alt="Arabic Emiragtes Flag" />
          <div className="region-details">
            <h2>Australia</h2>
            <p>shopname.ae</p>
          </div>
        </div>
        <div className="region">
          <img src={USA} alt="Arabic Emiragtes Flag" />
          <div className="region-details">
            <h2>United States</h2>
            <p>shopname.ae</p>
          </div>
        </div>
        <div className="region">
          <img src={Russia} alt="Arabic Emiragtes Flag" />
          <div className="region-details">
            <h2>Russia</h2>
            <p>shopname.ru</p>
          </div>
        </div>
        <div className="region">
          <img src={Denmark} alt="Arabic Emiragtes Flag" />
          <div className="region-details">
            <h2>Denmark</h2>
            <p>shopname.de</p>
          </div>
        </div>
        <div className="region">
          <img src={China} alt="Arabic Emiragtes Flag" />
          <div className="region-details">
            <h2>China</h2>
            <p>shopname.ae</p>
          </div>
        </div>
        <div className="region">
          <img src={GreatBritain} alt="Arabic Emiragtes Flag" />
          <div className="region-details">
            <h2>Great Britain</h2>
            <p>shopname.uk</p>
          </div>
        </div>
        <div className="region">
          <img src={France} alt="Arabic Emiragtes Flag" />
          <div className="region-details">
            <h2>France</h2>
            <p>shopname.fr</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SuppliersByRegion;
