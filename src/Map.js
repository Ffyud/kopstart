
import { MapContainer, Marker, Popup, TileLayer, useMap } from 'react-leaflet'

const position = [51.505, -0.09]

function Map() {
    return (
            <MapContainer center={position} zoom={23} scrollWheelZoom={false}>
                <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={position}>
                <Popup>
                    Hier ben je
                </Popup>
                </Marker>
            </MapContainer>
    )
}

export default Map;