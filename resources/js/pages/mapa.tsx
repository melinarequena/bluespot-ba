import 'leaflet/dist/leaflet.css';

import { MapContainer, TileLayer } from 'react-leaflet';

export default function Mapa() {
    return (
        <div className="min-h-screen bg-slate-50 p-6">
            <h1 className="mb-4 text-2xl font-semibold">
                BlueSpot.BA
            </h1>

            <div className="h-[600px] overflow-hidden rounded-xl">
                <MapContainer
                    center={[-34.6037, -58.3816]}
                    zoom={13}
                    className="h-full w-full"
                >
                    <TileLayer
                        attribution='&copy; OpenStreetMap contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                </MapContainer>
            </div>
        </div>
    );
}