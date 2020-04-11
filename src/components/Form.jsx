import React, {useState} from "react"
import shortid from "shortid"
import PlacesAutocomplete, {geocodeByAddress, getLatLng} from "react-places-autocomplete"

export default ({changeCoordinates, id}) => {

    const [address, setAddress] = useState("")


    const handleSelect = async value => {
        const results = await geocodeByAddress(value)
        const latlng = await getLatLng(results[0])
        setAddress(value)

        let finalResult = {id: shortid.generate(), address: address, lat: latlng.lat, lng: latlng.lng}
        changeCoordinates(finalResult)
    }

    return (
        <div className="col-12 mb-5">
            <h6>Welcome! Insert your business address and get a short code now.</h6>
           <PlacesAutocomplete value={address} onChange={setAddress} onSelect={handleSelect}>
            {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
                <div>
                   <input {...getInputProps({placeholder: "Type address"})}/>
                   <span className="ml-3">{id ? `Here is your address code: ${id}`: ""}</span>
                   <div>
                       {loading ? "loading..." : ""}
                        {suggestions.map(suggestion => {

                            const style = {
                                backgroundColor: suggestion.active ? "#41b6e6" : "#fff",
                                cursor: "pointer"
                            }

                            return (
                            <div {...getSuggestionItemProps(suggestion, {style})}>{suggestion.description}</div>
                        )})}
                   </div>
                </div>
            )}
           </PlacesAutocomplete>
        </div>
    )
}