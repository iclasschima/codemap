import React from "react"
import GoogleMapReact from 'google-map-react';

export default ({coordinates, address}) => {

     const option = {
            center: {
            lat: coordinates.lat,
            lng: coordinates.lng
            },
            zoom: 11
        };
    
    return (
        <div className="col-12" style={{height: "60vh"}}>
            <span>{address ? `Address: ${address}` : ""}</span>
             <GoogleMapReact
                bootstrapURLKeys={{ key: "AIzaSyDgTcD4dVl-YsLAFj9wkrb07CWGlCi-7FA"}}
                center={option.center}
                defaultZoom={option.zoom}
                // onGoogleApiLoaded={({ map, maps }) => handleApiLoaded(map, maps)}
                // yesIWantToUseGoogleMapApiInternals
            />
        </div>
    )
}

  // const handleApiLoaded = (map, maps) => {
  //     let marker = new maps.Marker({
  //       position: {lat: 6.530050, lng: 3.351800},
  //       map,
  //       title: "Here is wey street"
  //     })
  // }