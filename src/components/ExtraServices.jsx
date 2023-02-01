import React from "react";
import {
  extraServicesImageOne,
  extraServicesImageTwo,
  extraServicesImageThree,
  extraServicesImageFour,
} from "../assets/index";
import { AiOutlineSearch } from 'react-icons/ai';
import { BiBox } from 'react-icons/bi';
import { FaPaperPlane } from 'react-icons/fa';
import { GiCheckedShield } from 'react-icons/gi';

function ExtraServices() {
  return (
      <div className="extra-services">
          <h2>Our Extra services</h2>
          <div className="extra-services-container">
              <div className="extra-services-box">
                  <img src={extraServicesImageOne} alt="boxes" />
                  <AiOutlineSearch />
                  <h4>Source from <br/> Industry Hubs</h4>
              </div>
              <div className="extra-services-box">
                  <img src={extraServicesImageTwo} alt="boxes" />
                  <BiBox/>
                  <h4>Custumize Your <br/> Products</h4>
              </div>
              <div className="extra-services-box">
                  <img src={extraServicesImageThree} alt="boxes" />
                  <FaPaperPlane/>
                  <h4>Fast, reliable shipping<br/> by ocean or air</h4>
              </div>
              <div className="extra-services-box">
                  <img src={extraServicesImageFour} alt="boxes" />
                  <GiCheckedShield/>
                  <h4>Product monitoring<br/> and Inspection</h4>
              </div>
          </div>
      
    </div>
  );
}

export default ExtraServices;
