import React from "react"
import pin from "../img/pin.png"

export default function Main(props) {
  return (
    <main className="main-container">
      <img src={props.image} alt={props.title}className="main-image"/>
      <div className="main-div-container">
        <div className="location-container">
          <img src={pin} alt="map pin" className="main-pin" />
          <div className="location-link-container"> 
            <p className="main-location">{props.location}</p>
            <a href={props.googleMapsLink} className="google-maps-link">View on Google Maps</a>
          </div>
        </div>
        <h1 className="main-title">{props.title}</h1>
        <p className="main-date">{props.startDate} - {props.endDate}</p>
        <p className="main-description">{props.description}</p>
      </div>
    </main>
  )
}