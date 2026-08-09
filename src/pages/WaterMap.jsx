import React, { useState, useMemo } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap, GeoJSON } from 'react-leaflet';
import { Navigation, MapPin } from 'lucide-react';
import L from 'leaflet';
import waterSources from '../data/waterSources.json';
import tanohRataBoundary from '../data/batas-tanoh-rata.json';

const polriIcon = L.divIcon({
    className: 'custom-pin',
    html: `<div style="background-color: #1E3A8A; width: 24px; height: 24px; border-radius: 50%; border: 3px solid white; box-shadow: 0 4px 6px rgba(0,0,0,0.3)"></div>`,
    iconSize: [24, 24],
    iconAnchor: [12, 12]
});

const kemensosIcon = L.divIcon({
    className: 'custom-pin',
    html: `<div style="background-color: #EA580C; width: 24px; height: 24px; border-radius: 50%; border: 3px solid white; box-shadow: 0 4px 6px rgba(0,0,0,0.3)"></div>`,
    iconSize: [24, 24],
    iconAnchor: [12, 12]
});

const userLocIcon = L.divIcon({
    className: 'custom-pin',
    html: `<div style="background-color: #10B981; width: 16px; height: 16px; border-radius: 50%; border: 2px solid white; box-shadow: 0 0 10px rgba(16,185,129,0.8)"></div>`,
    iconSize: [16, 16],
    iconAnchor: [8, 8]
});

function MapControl({ userLocation }) {
    const map = useMap();
    React.useEffect(() => {
        if (userLocation) {
            map.flyTo(userLocation, 16, { animate: true });
        }
    }, [userLocation, map]);
    return null;
}

export default function WaterMap({ openDetail }) {
    const [filter, setFilter] = useState('Semua');
    const [userLoc, setUserLoc] = useState(null);

    const filteredData = useMemo(() => {
        if (filter === 'Semua') return waterSources;
        if (filter === 'POLRI') return waterSources.filter(s => s.sumber === 'POLRI');
        if (filter === 'Kemensos Daerah') return waterSources.filter(s => s.sumber === 'Kemensos Daerah');
        if (filter === 'Aktif') return waterSources.filter(s => s.status === 'aktif');
        if (filter === 'Pending') return waterSources.filter(s => s.status === 'pending');
        return waterSources;
    }, [filter]);

    const handleLocateMe = () => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (pos) => setUserLoc([pos.coords.latitude, pos.coords.longitude]),
                () => alert("Gagal mendapatkan lokasi Anda.")
            );
        } else {
            alert("Browser tidak mendukung Geolocation.");
        }
    };

    const DEFAULT_CENTER = [4.8125, 97.8550];

    return (
        <div className="max-w-7xl mx-auto p-4 md:py-8 lg:px-8 flex flex-col h-[calc(100vh-64px)] md:h-auto pb-24 md:pb-8">

            <div className="mb-4">
                <h2 className="text-2xl font-serif font-bold text-slate-800 mb-2">Peta Sebaran Air Bersih</h2>
                <p className="text-slate-500 text-sm">Gunakan filter untuk menemukan sumber air yang spesifik.</p>
            </div>

            {/* Filters */}
            <div className="flex gap-2 overflow-x-auto pb-2 mb-4 scrollbar-hide">
                {['Semua', 'POLRI', 'Kemensos Daerah', 'Aktif', 'Pending'].map(f => (
                    <button
                        key={f}
                        onClick={() => setFilter(f)}
                        className={`px-4 py-1.5 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${filter === f
                            ? 'bg-[#0284C7] text-white shadow-md'
                            : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-50'
                            }`}
                    >
                        {f === 'POLRI' ? 'Bantuan POLRI' : f === 'Kemensos Daerah' ? 'Bantuan Kemensos Daerah' : f === 'Aktif' ? 'Siap Pakai' : f === 'Pending' ? 'Belum Aktif' : f}
                    </button>
                ))}
            </div>

            <div className="w-full h-[55vh] md:h-[550px] border border-slate-200 overflow-hidden shadow-sm relative rounded-2xl mb-16 md:mb-0">
                <MapContainer center={DEFAULT_CENTER} zoom={15} style={{ height: '100%', width: '100%' }}>
                    <TileLayer
                        attribution='&copy; OpenStreetMap'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />

                    {/* Batas Wilayah GeoJSON */}
                    {tanohRataBoundary && (
                        <GeoJSON
                            data={tanohRataBoundary}
                            style={{
                                color: '#EF4444',      // Warna garis batas (Merah)
                                weight: 2.5,           // Ketebalan garis
                                fillColor: '#EF4444',  // Warna isi area
                                fillOpacity: 0.2       // Transparansi merah pekat
                            }}
                        />
                    )}

                    {userLoc && (
                        <Marker position={userLoc} icon={userLocIcon}>
                            <Popup>Lokasi Anda Saat Ini</Popup>
                        </Marker>
                    )}

                    {filteredData.map(loc => (
                        <Marker
                            key={loc.id}
                            position={[loc.lat, loc.lng]}
                            icon={loc.sumber === 'POLRI' ? polriIcon : kemensosIcon}
                        >
                            <Popup className="rounded-xl font-sans">
                                <div className="w-48">
                                    <div className={`text-[10px] uppercase font-bold text-white px-2 py-0.5 rounded inline-block mb-1 ${loc.status === 'aktif' ? 'bg-emerald-500' : 'bg-amber-500'}`}>
                                        {loc.labelStatus}
                                    </div>
                                    <h3 className="font-bold text-slate-800 text-sm mb-1 leading-tight">{loc.nama}</h3>
                                    <img src={loc.foto} alt={loc.nama} className="w-full h-24 object-cover rounded mb-2 bg-slate-100" />

                                    <button
                                        onClick={() => openDetail(loc)}
                                        className="flex justify-center items-center gap-1.5 w-full bg-[#0284C7] text-white py-1.5 rounded text-xs px-2 font-semibold hover:bg-sky-700 transition-colors"
                                    >
                                        Lihat Detail Titik Air
                                    </button>
                                </div>
                            </Popup>
                        </Marker>
                    ))}
                    <MapControl userLocation={userLoc} />
                </MapContainer>

                {/* Floating Action Button for Location */}
                <button
                    onClick={handleLocateMe}
                    className="absolute bottom-6 right-4 z-[400] w-12 h-12 bg-white rounded-full shadow-[0_4px_12px_rgba(0,0,0,0.15)] flex justify-center items-center text-slate-700 hover:text-[#0284C7] transition-colors border border-slate-100"
                    title="Lokasi Saya"
                >
                    <MapPin size={24} />
                </button>
            </div>

        </div>
    );
}
