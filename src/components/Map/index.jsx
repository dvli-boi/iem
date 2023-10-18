import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";
import Image from "next/image";

function Map() {
  const position = [36.77560486870581, 10.232006325402647];

  return (
    <MapContainer
      className="leaflet"
      center={position}
      zoom={16}
      scrollWheelZoom={true}
      style={{ flex: 1 }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={position} draggable={false} animate={true}>
        <Popup>
          <div className={"popup-content"}>
            {/* <Image
              src="/softylinesLogo2.png"
              width={150}
              height={40}
              alt="softylines-logo"
            /> */}
            <p className>IEM LOCATION</p>
          </div>
        </Popup>
      </Marker>
    </MapContainer>
  );
}

export default Map;
