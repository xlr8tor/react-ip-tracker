//Third party components
import { useState } from "react";
import { MapContainer, TileLayer, Marker } from "react-leaflet";

const Map = ({ coordinates }) => {
  const [map, setMap] = useState(null);

  const style = {
    position: "relative",
    width: "inherit",
    height: "100vh",
    zIndex: "-1",
    top: "87px",
  };

  const position = [coordinates.latitude, coordinates.longitude];
  if (map) {
    map.flyTo(position);
  }
  return (
    <MapContainer
      center={position}
      zoom={13}
      style={style}
      zoomControl={false}
      whenCreated={setMap}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={position} className="marker"></Marker>
    </MapContainer>
  );
};

export default Map;
