import React from 'react';
import { ArrowLeft, Navigation, CheckCircle, Droplet, Settings, Wrench, MapPin } from 'lucide-react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

// Fix for default marker icons
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';
let DefaultIcon = L.icon({
    iconUrl: icon,
    shadowUrl: iconShadow,
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
});
L.Marker.prototype.options.icon = DefaultIcon;

const dropIcon = L.divIcon({
    className: 'custom-pin',
    html: `<div style="background-color: #0284C7; width: 32px; height: 32px; border-radius: 50%; border: 3px solid white; box-shadow: 0 4px 6px rgba(0,0,0,0.3); display: flex; align-items: center; justify-content: center;"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22a7 7 0 0 0 7-7c0-2-1-3.9-3-5.5s-3.5-4-4-6.5c-.5 2.5-2 4.9-4 6.5C6 11.1 5 13 5 15a7 7 0 0 0 7 7z"></path></svg></div>`,
    iconSize: [32, 32],
    iconAnchor: [16, 16]
});

export default function WaterDetail({ loc, setActiveTab }) {
    if (!loc) return null;

    return (
        <div className="min-h-screen">

            {/* Breadcrumb section */}
            <div className="max-w-7xl mx-auto px-4 lg:px-8 py-4 flex items-center text-sm">
                <button
                    onClick={() => setActiveTab('peta')}
                    className="flex items-center text-slate-500 hover:text-slate-800 transition-colors font-medium"
                >
                    <ArrowLeft size={16} className="mr-1" /> Kembali ke Peta GIS
                </button>
                <span className="mx-2 text-slate-300">/</span>
                <span className="font-semibold text-slate-700">{loc.nama}</span>
            </div>

            {/* Map Banner */}
            <div className="max-w-7xl mx-auto px-4 lg:px-8 mb-8">
                <div className="w-full h-[250px] md:h-[300px] border border-slate-200 rounded-xl overflow-hidden shadow-sm relative relative-z-layer">
                    <MapContainer
                        center={[loc.lat, loc.lng]}
                        zoom={16}
                        style={{ height: '100%', width: '100%' }}
                        zoomControl={false}
                        scrollWheelZoom={false}
                        dragging={false} // static feel
                    >
                        {/* Satellite styled layer for real appeal if desired, using OSM standard for now */}
                        <TileLayer
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        />
                        <Marker position={[loc.lat, loc.lng]} icon={dropIcon}>
                            <Popup autoPan={false}>
                                <b>Titik Sumber Air Aktif</b><br />
                                Koordinat: {loc.lat}, {loc.lng}
                            </Popup>
                        </Marker>
                    </MapContainer>

                    <div className="absolute top-4 left-4 z-[400] bg-white/95 backdrop-blur-sm p-3 rounded-lg shadow border border-slate-100 min-w-[200px]">
                        <div className="flex items-center gap-1.5 text-slate-800 font-bold text-sm mb-1">
                            <MapPin size={16} className="text-[#0284C7]" /> Titik Sumber Air Aktif
                        </div>
                        <p className="text-xs text-slate-500 font-medium">Koordinat: {loc.lat.toFixed(4)}° U, {loc.lng.toFixed(4)}° T</p>
                    </div>
                </div>
            </div>

            {/* Main Content Layout */}
            <div className="max-w-7xl mx-auto px-4 lg:px-8 pb-16 flex flex-col lg:flex-row gap-8">

                {/* Left Column */}
                <div className="lg:w-2/3">

                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-6 gap-4">
                        <div>
                            <h1 className="text-3xl font-serif font-extrabold text-slate-900 mb-3">{loc.nama}</h1>
                            <div className="flex flex-wrap items-center gap-3">
                                <span className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold border ${loc.status === 'aktif' ? 'bg-sky-50 text-[#0284C7] border-sky-200' : 'bg-amber-50 text-amber-700 border-amber-200'}`}>
                                    <CheckCircle size={14} /> Status: {loc.labelStatus}
                                </span>
                                <span className="flex items-center gap-1.5 px-3 py-1.5 text-slate-600 bg-white border border-slate-200 rounded-full text-xs font-medium">
                                    <Droplet size={14} className="text-slate-400" /> Kapasitas {parseInt(loc.kapasitas) >= 5000 ? 'Tinggi' : 'Pusat'}
                                </span>
                            </div>
                        </div>
                        <a
                            href={`https://www.google.com/maps/search/?api=1&query=${loc.lat},${loc.lng}`}
                            target="_blank" rel="noreferrer"
                            className="inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-[#0284C7] text-white rounded-lg font-bold shadow-md hover:bg-[#0369a1] transition-colors whitespace-nowrap"
                        >
                            <Navigation size={18} /> Buka di Google Maps
                        </a>
                    </div>

                    <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm mb-6 flex flex-col md:flex-row gap-6">
                        <img src={loc.foto} alt={loc.nama} className="w-full md:w-64 h-64 object-cover rounded-xl border border-slate-100" />

                        <div className="flex-1">
                            <h2 className="text-xl font-serif font-bold text-slate-900 mb-3">Deskripsi Fasilitas</h2>
                            <p className="text-slate-600 leading-relaxed text-sm lg:text-base text-justify mb-6">
                                {loc.deskripsi}
                            </p>

                            <h4 className="font-bold text-slate-800 text-sm mb-3">Kualitas Air Terakhir (Hasil Uji Lab)</h4>
                            <div className="grid grid-cols-2 gap-4">
                                <div className="bg-slate-50 border border-slate-200 rounded-lg p-3">
                                    <span className="text-[11px] font-medium text-slate-500 uppercase tracking-wide block mb-1">Kejernihan</span>
                                    <div className="flex items-center gap-1.5 text-sm font-bold text-slate-800">
                                        <span className="w-2 h-2 rounded-full bg-[#0284C7]"></span> {loc.kualitas?.kejernihan || 'Jernih'}
                                    </div>
                                </div>
                                <div className="bg-slate-50 border border-slate-200 rounded-lg p-3">
                                    <span className="text-[11px] font-medium text-slate-500 uppercase tracking-wide block mb-1">pH Air</span>
                                    <div className="flex items-center gap-1.5 text-sm font-bold text-slate-800">
                                        <span className="w-2 h-2 rounded-full bg-emerald-500"></span> {loc.kualitas?.ph || '7.0 (Netral)'}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

                {/* Right Column */}
                <div className="lg:w-1/3 space-y-6">

                    {/* Spesifikasi Teknis */}
                    <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
                        <h3 className="text-xl font-serif font-bold text-slate-900 mb-5 flex items-center gap-2">
                            <Settings className="text-[#0284C7]" /> Spesifikasi Teknis
                        </h3>

                        <ul className="space-y-4">
                            <li className="flex justify-between items-center text-sm border-b border-slate-100 pb-3">
                                <span className="text-slate-500">Kedalaman Sumur</span>
                                <span className="font-bold text-slate-800">{loc.spesifikasi?.kedalaman || '-'}</span>
                            </li>
                            <li className="flex justify-between items-center text-sm border-b border-slate-100 pb-3">
                                <span className="text-slate-500">Debit Air</span>
                                <span className="font-bold text-slate-800">{loc.spesifikasi?.debit || '-'}</span>
                            </li>
                            <li className="flex justify-between items-center text-sm border-b border-slate-100 pb-3">
                                <span className="text-slate-500">Kapasitas Tangki</span>
                                <span className="font-bold text-slate-800">{loc.kapasitas}</span>
                            </li>
                            <li className="flex justify-between items-center text-sm pb-1">
                                <span className="text-slate-500">Tipe Pompa</span>
                                <span className="font-bold text-slate-800 text-right">{loc.spesifikasi?.pompa || '-'}</span>
                            </li>
                        </ul>
                    </div>

                    {/* Riwayat Pemeliharaan */}
                    <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
                        <h3 className="text-xl font-serif font-bold text-slate-900 mb-5 flex items-center gap-2">
                            <Wrench className="text-[#0284C7]" /> Riwayat Pemeliharaan
                        </h3>

                        <div className="relative border-l-2 border-slate-100 ml-3 space-y-6 pb-2">

                            {loc.riwayat && loc.riwayat.map((r, i) => (
                                <div key={i} className="relative pl-5">
                                    <div className={`absolute -left-[5px] top-1 w-2.5 h-2.5 rounded-full ${i === 0 ? 'bg-[#0284C7] ring-4 ring-sky-50' : 'bg-slate-300'}`}></div>
                                    <div className="text-xs font-bold text-[#0284C7] mb-1">{r.tanggal}</div>
                                    <h4 className="font-bold text-slate-800 text-sm mb-0.5">{r.tindakan}</h4>
                                    <p className="text-xs text-slate-500">{r.teknisi ? `Teknisi: ${r.teknisi}` : `Status: ${r.status}`}</p>
                                </div>
                            ))}

                            {!loc.riwayat && (
                                <div className="relative pl-5">
                                    <div className="absolute -left-[5px] top-1 w-2.5 h-2.5 rounded-full bg-slate-300"></div>
                                    <p className="text-xs text-slate-500 italic">Belum ada catatan riwayat pemeliharaan.</p>
                                </div>
                            )}

                        </div>

                        <button className="w-full mt-4 py-2 border border-[#0284C7] text-[#0284C7] font-semibold text-sm rounded-lg hover:bg-sky-50 hover:shadow-sm transition-all">
                            Lihat Semua Riwayat
                        </button>
                    </div>

                </div>
            </div>

            <style>{`
        .relative-z-layer .leaflet-container {
          z-index: 10;
        }
      `}</style>
        </div>
    );
}
