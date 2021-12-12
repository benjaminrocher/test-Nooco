import React, { useState, useEffect} from "react";
import { MapContainer, TileLayer, Marker, Popup, useMapEvents} from 'react-leaflet'
import './Home.css'
import axios from 'axios';

function CustomMarker({marker, handleAddMarker}) {
    const map = 
    useMapEvents({
        click(event) {
          const { lat, lng } = event.latlng;
          handleAddMarker([lat, lng]);
        },
      });
      const [data, dataSet] = useState([])
      useEffect(() => {
        axios.get("http://localhost:5500/?lat="+marker[0]+"&lng="+marker[1])
        .then((res) => {
            console.log("ADRESS = "+"http://localhost:5500/?lat="+marker[0]+"&lng="+marker[1])
            let response = []
            response = res.data.stations[0]

            dataSet(response)
        });
      }, {});
    return (
        marker.latitude !== 0 ? (
        <Marker position={marker} interactive={true}>
            <Popup>
            CO    = {data["CO"]}<br/>
            NO2   = {data["NO2"]}<br/>
            OZONE = {data["OZONE"]}<br/>
            PM10  = {data["PM10"]}<br/>
            PM25  = {data["PM25"]}<br/>
            SO2   = {data["SO2"]}<br/>
            </Popup>
        </Marker>
      ) : null
    );}

const Home = () => {
    const [markers,setMarkers] = useState([[51.505, -0.09]])
    const handleAddMarker = (position) => {
        markers.push(position);
        setMarkers([...markers]);
    }

    return (
        <div className="home">
            <MapContainer center={[51.505, -0.09]} zoom={13} scrollWheelZoom={true}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
               {markers.map((markerPosition) => <CustomMarker handleAddMarker = {handleAddMarker} marker = {markerPosition}/>)}
            </MapContainer>
        </div>
    );
    
};

export default Home;