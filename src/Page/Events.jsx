import React from "react";
import Cardhover from "../Components/Cardhover";
import "../Style/events.css";
import { upcoming, past } from "../Data/events";

const Events = () => {
  return (
    <div className="events-top">
      <div className="events-head">Upcoming Events</div>
      <div className="events-card-top">
        <div className="events-card">
          <Cardhover events={upcoming[0]} />
        </div>
      </div>
      <div className="events-head">Past Events</div>
      <div className="events-card-top">
        <div className="events-card">
          <Cardhover events={past[0]} />
        </div>
        <div className="events-card">
          <Cardhover events={past[1]} />
        </div>
        <div className="events-card">
          <Cardhover events={past[2]} />
        </div>
        <div className="events-card">
          <Cardhover events={past[3]} />
        </div>
        <div className="events-card">
          <Cardhover events={past[4]} />
        </div>
      </div>
    </div>
  );
};

export default Events;
