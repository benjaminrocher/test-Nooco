import React, { useState } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMapEvents } from 'react-leaflet'
import './Home.css'

function CustomMarker({marker, handleAddMarker}) {
    const map = 
    useMapEvents({
        click(event) {
          const { lat, lng } = event.latlng;
          handleAddMarker([lat, lng]);
        },
      });
    return (
        marker.latitude !== 0 ? (
        <Marker
          position={marker}
          interactive={false}
        />
      ) : null
    );}

const Home = () => {
    const [markers,setMarkers] = useState([[51.505, -0.09]])
    const handleAddMarker = (position) => {
        markers.push(position);
        setMarkers([...markers]);
    }

console.log(markers)
    return (
        <div className="home">
            <MapContainer center={[51.505, -0.09]} zoom={13} scrollWheelZoom={true}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
               {markers && markers.map && markers.map((markerPosition) => <CustomMarker handleAddMarker = {handleAddMarker} marker = {markerPosition}/>)}
            </MapContainer>
        </div>
    );
    
};

export default Home;