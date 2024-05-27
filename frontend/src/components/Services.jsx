import React from "react";
import {
  IoBrushOutline,
  IoCodeSlashOutline,
  IoDesktopOutline,
} from "react-icons/io5";
import { FaNetworkWired } from "react-icons/fa";
import { MdSupportAgent } from "react-icons/md";

const Services = () => {
  return (
    <section className="services">
      <div className="container ">
        <h1 className="sub-heading">Our Services</h1>
        <div className="services-card">
          <div className="box">
            <div className="content">
              <div className="icon">
                <IoBrushOutline />
              </div>
              <div className="text">
                <h1 className="sub-heading">Designing</h1>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Nostrum ut expedita delectus dolores eligendi beatae labore
                  sequi, harum officia perferendis.
                </p>
              </div>
              <div className="overlays overlaysLeft"></div>
            </div>
          </div>
          <div className="box">
            <div className="content">
              <div className="icon">
                <IoCodeSlashOutline />
              </div>
              <div className="text">
                <h1 className="sub-heading">Development</h1>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Nostrum ut expedita delectus dolores eligendi beatae labore
                  sequi, harum officia perferendis.
                </p>
              </div>
            </div>
          </div>
          <div className="box">
            <div className="content">
              <div className="icon">
                <IoDesktopOutline />
              </div>
              <div className="text">
                <h1 className="sub-heading">Learning</h1>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Nostrum ut expedita delectus dolores eligendi beatae labore
                  sequi, harum officia perferendis.
                </p>
              </div>
            </div>
          </div>
          <div className="box">
            <div className="content">
              <div className="icon">
                <FaNetworkWired />
              </div>
              <div className="text">
                <h1 className="sub-heading">Networking</h1>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Nostrum ut expedita delectus dolores eligendi beatae labore
                  sequi, harum officia perferendis.
                </p>
              </div>
            </div>
          </div>
          <div className="box">
            <div className="content">
              <div className="icon">
                <MdSupportAgent />
              </div>
              <div className="text">
                <h1 className="sub-heading">Desktop Support</h1>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Nostrum ut expedita delectus dolores eligendi beatae labore
                  sequi, harum officia perferendis.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
