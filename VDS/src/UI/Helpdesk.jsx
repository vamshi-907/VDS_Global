import React from 'react'
import './Helpdesk.css';
import { FaMapMarkerAlt } from "react-icons/fa";

export default function Helpdesk() {
  return (
        <div className="help-desk">
            <span className="label">HELP DESK :</span>
            <span className="phone">+91 9000225946</span>
            <span className="timing">Monday – Friday 09:00 am – 05:00 pm</span>
            <span className="location">
        <FaMapMarkerAlt style={{ color: "red", marginRight: "5px" }} /> Hyderabad
      </span>
          </div>
  )
}
