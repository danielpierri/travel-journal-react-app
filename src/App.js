import React from "react"
import Navbar from "./components/Navbar"
import Main from "./components/Main"
import data from "./data"

export default function App() {
  const trips = data.map(trip => {
    return (
      <Main
        // title={trip.title}
        // location={trip.location}
        // startDate={trip.startDate}
        // endDate={trip.endDate}
        // description={trip.description}
        googleMapsLink={trip.googleMapsUrl}
        image={trip.imageUrl}
        {...trip}
      />
    )
  })
  return (
    <div>
      <Navbar />
      <section>
        {trips}
      </section>
      {/* <Main /> */}
    </div>
  )
}