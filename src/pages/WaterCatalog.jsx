import React from 'react';
import { MapPin, ArrowRight, CheckCircle, Activity, Droplet } from 'lucide-react';
import waterSources from '../data/waterSources.json';

export default function WaterCatalog({ openDetail }) {
    return (
        <div className="max-w-6xl mx-auto p-4 md:py-10 lg:px-8 pb-24 md:pb-12">

            <div className="mb-10 text-center max-w-2xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-serif font-black text-slate-800 drop-shadow-sm mb-4">
                    Katalog Fasilitas Dusun
                </h2>
                <p className="text-slate-600 text-sm md:text-base font-medium">
                    Eksplorasi jangkauan infrastruktur penyediaan air bersih di Gampong Tanoh Rata.
                </p>
                <div className="w-20 h-1.5 bg-[#0284C7] rounded-full mx-auto mt-6 shadow-sm"></div>
            </div>

            {/* Grid 2 Kolom (2x2 Kiri Kanan) */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
                {waterSources.map((loc) => {
                    return (
                        <div
                            key={loc.id}
                            className="bg-white/80 backdrop-blur-md rounded-3xl border border-white/60 shadow-lg shadow-slate-200/50 flex flex-col transform hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-sky-200/50 transition-all duration-300 overflow-hidden group"
                        >
                            {/* Image Header */}
                            <div className="relative h-56 sm:h-64">
                                <div className="absolute inset-0 bg-slate-900/10 group-hover:bg-slate-900/0 transition-colors z-10"></div>
                                <img
                                    src={loc.foto}
                                    alt={loc.nama}
                                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                                />

                                {/* Glassmorphism Badges */}
                                <div className="absolute top-4 left-4 z-20">
                                    <span className="bg-white/90 backdrop-blur-md px-3 py-1.5 rounded-xl shadow-sm text-xs font-bold text-slate-800 border border-white/50 flex items-center gap-2">
                                        <span className={`w-2 h-2 rounded-full shadow-inner ${loc.sumber === 'POLRI' ? 'bg-[#1E3A8A]' : 'bg-[#EA580C]'}`}></span>
                                        {loc.sumber}
                                    </span>
                                </div>

                                <div className="absolute top-4 right-4 z-20">
                                    <span className={`px-3 py-1.5 rounded-xl shadow-md text-[10px] font-black tracking-wider uppercase border flex items-center gap-1.5 backdrop-blur-md ${loc.status === 'aktif'
                                            ? 'bg-emerald-500/90 text-white border-emerald-400'
                                            : 'bg-amber-500/90 text-white border-amber-400'
                                        }`}>
                                        {loc.status === 'aktif' ? <CheckCircle size={12} /> : <Activity size={12} />}
                                        {loc.labelStatus}
                                    </span>
                                </div>
                            </div>

                            {/* Content Body */}
                            <div className="p-6 flex-1 flex flex-col items-center text-center">

                                <h3 className="text-2xl font-serif font-black text-slate-900 mb-3 leading-tight group-hover:text-[#0284C7] transition-colors">
                                    {loc.nama}
                                </h3>

                                <div className="flex flex-wrap justify-center items-center gap-3 text-sm font-semibold text-slate-600 mb-6">
                                    <div className="flex items-center gap-1.5 px-3 py-1 bg-slate-100/80 rounded-lg">
                                        <MapPin size={16} className="text-[#0284C7]" /> {loc.dusun}
                                    </div>
                                    <div className="flex items-center gap-1.5 px-3 py-1 bg-slate-100/80 rounded-lg">
                                        <Droplet size={16} className="text-[#0284C7]" /> Kapasitas {loc.kapasitas}
                                    </div>
                                </div>

                                {/* Action */}
                                <button
                                    onClick={() => openDetail(loc)}
                                    className="mt-auto w-full py-3 rounded-xl text-sm font-bold bg-[#0284C7] text-white shadow-[0_4px_12px_rgba(2,132,199,0.3)] hover:shadow-[0_6px_20px_rgba(2,132,199,0.5)] hover:bg-[#0369a1] flex justify-center items-center gap-2 transition-all group/btn"
                                >
                                    Lihat Detail & Deskripsi
                                    <ArrowRight size={18} className="transform group-hover/btn:translate-x-1.5 transition-transform" />
                                </button>
                            </div>

                        </div>
                    );
                })}
            </div>

        </div>
    );
}
