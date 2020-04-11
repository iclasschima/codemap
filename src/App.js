import React, {useState} from 'react';
import GoogleMap from "./components/GoogleMap"
import Form from "./components/Form"
import SearchCode from "./components/SearchCode"

const App = () => {

  const [coordinates, setCoordinates] = useState([])

  const [latitudeLongitude, setLatitudeLongitude] = useState({id: null, address: "", lat: null, lng: null})

  const [codeCoordinate, setCodeCoordinate] = useState({address: "", lat: null, lng: null})

  const changeCoordinates = coordinate => {
      setLatitudeLongitude(coordinate)
      let tempCoordinates = [...coordinates]
      tempCoordinates.push(coordinate)
      setCoordinates(tempCoordinates)
  }

  const searchCode = code => {
      coordinates.map(coordinate => {
          coordinate.id == code ? setCodeCoordinate({
            address: coordinate.address,
            lat: coordinate.lat,
            lng: coordinate.lng
          }) : console.log("")
      })
  }
 
  return (
      <div className="container">
        <div className="row pt-2">
          <div className="col-md-6">
              <Form changeCoordinates={changeCoordinates} id={latitudeLongitude.id}/>
              {latitudeLongitude.lat != null ? <GoogleMap coordinates={latitudeLongitude}/> : ""}
          </div>
          <div className="col-md-6">
              <SearchCode searchCode={searchCode}/>
              {codeCoordinate.lat != null ? <GoogleMap coordinates={codeCoordinate} address={codeCoordinate.address}/> : ""}
          </div>
          {coordinates.length !== 0 ?
            <div className="mt-3">
              <h6>All stored Locations</h6>
              {coordinates.map(({id,address}) => {
                return (
                  <React.Fragment key={id}>
                      <p>location: {address} || Code: {id}</p>
                  </React.Fragment>
                )
              })}
            </div>
            : "" }
        </div>
      </div>
  );
}

export default App;
