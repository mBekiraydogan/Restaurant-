import React from 'react'


export default function Restaurant({restaurant}) {
  return (
    <div>
<div className="restaurantDiv">
          <div className="restaurant">
        <div className='logo'>
            <img src={restaurant.logo}/>
        </div>

        <div className="restuarantİnfo">
          <div className="restuarantNameType">
            <h1 className="restuarantName">{restaurant.name}</h1>
            <h1 className="restuarantType">{restaurant.type}</h1>
          </div>

          <div className="restuarantDesc">{restaurant.description}</div>
          <div className="restuarantAddress">{restaurant.address}</div>
          <div className="restuarantPhone">{restaurant.phone_number}</div>

          <div className="restuarantDays">
          {Object.keys(restaurant.hours).map((day) => (
            <p key={day} style={{color:restaurant.hours[day].is_closed ? 'tomato' : 'green'}} className="day">{day}</p>
          ))}
        </div>
        </div>

        
      </div>
      </div>
    </div>
  )
}
