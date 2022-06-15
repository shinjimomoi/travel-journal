import React from "react"

const Card = (props) => {
  return (
      <div className="card container">
        <img className="card-img" src={props.item.imageUrl} alt="Big mountain"></img>
        <div class="card-stats">
          <span><i class="fas fa-map-marker"></i> {(props.item.location).toUpperCase()}</span>
          <span><a className="card--map-url" href={props.item.googleMapsUrl}> View on Google Maps</a></span>
          <h1 className="card--title">{props.item.title}</h1>
          <p className="card--date"><strong>{props.item.startDate} - {props.item.endDate}</strong></p>
          <p className="card--description">{props.item.description}</p>
        </div>
      </div>
  )
}

export default Card;
