import React from 'react';
import { CheckCircle2, AlertTriangle, Droplets, Eye, Wind, Droplet } from 'lucide-react';

export default function WaterEducation() {
    return (
        <div className="max-w-4xl mx-auto p-4 md:py-8 pb-24 md:pb-8">

            <div className="text-center mb-10">
                <div className="inline-flex justify-center items-center w-12 h-12 bg-sky-100 text-[#0284C7] rounded-full mb-4">
                    <Droplets size={24} />
                </div>
                <h2 className="text-3xl font-bold text-slate-800 mb-4">Edukasi Kualitas Air</h2>
                <p className="text-slate-500 max-w-2xl mx-auto">
                    Panduan standar kualitas air sehat & tips perawatan fasilitas air bersih (tandon/sumur)
                    untuk warga Gampong Tanoh Rata.
                </p>
            </div>

            <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm mb-8">
                <div className="bg-[#0284C7] p-6 text-white">
                    <h3 className="text-xl font-bold mb-1">Standar Fisik Air Layak Minum</h3>
                    <p className="text-sky-100 text-sm">Menurut standar Kepmenkes RI, air sehat bisa dikenali dari fisiknya.</p>
                </div>
                <div className="p-6 md:p-8 grid md:grid-cols-3 gap-6 text-center">
                    <div className="p-5 bg-slate-50 rounded-xl border border-slate-100 flex flex-col items-center">
                        <div className="w-14 h-14 bg-sky-100 text-[#0284C7] rounded-full flex items-center justify-center mb-4">
                            <Eye size={28} />
                        </div>
                        <h4 className="font-bold text-slate-800 mb-2">Jernih & Tidak Berwarna</h4>
                        <p className="text-sm text-slate-500">Air harus jernih, tidak keruh, dan tidak meninggalkan noda kecoklatan atau pudar.</p>
                    </div>
                    <div className="p-5 bg-slate-50 rounded-xl border border-slate-100 flex flex-col items-center">
                        <div className="w-14 h-14 bg-sky-100 text-[#0284C7] rounded-full flex items-center justify-center mb-4">
                            <Wind size={28} />
                        </div>
                        <h4 className="font-bold text-slate-800 mb-2">Bebas Bau</h4>
                        <p className="text-sm text-slate-500">Air sehat sama sekali tidak bebas dari aroma amis, besi, maupun bau belerang.</p>
                    </div>
                    <div className="p-5 bg-slate-50 rounded-xl border border-slate-100 flex flex-col items-center">
                        <div className="w-14 h-14 bg-sky-100 text-[#0284C7] rounded-full flex items-center justify-center mb-4">
                            <Droplet size={28} />
                        </div>
                        <h4 className="font-bold text-slate-800 mb-2">Tidak Berasa</h4>
                        <p className="text-sm text-slate-500">Saat diminum (setelah direbus) air harus tawar, bebas dari rasa payau atau asam.</p>
                    </div>
                </div>
            </div>

            <div className="bg-emerald-50 border border-emerald-100 rounded-2xl p-6 md:p-8">
                <h3 className="text-lg font-bold text-emerald-900 mb-4 flex items-center gap-2">
                    <CheckCircle2 className="text-emerald-500" />
                    Perawatan Tandon Gampong
                </h3>
                <ul className="space-y-4 text-emerald-800 text-sm md:text-base text-justify">
                    <li className="flex gap-3">
                        <span className="font-bold text-emerald-600">1.</span>
                        <span><strong>Kuras Secara Berkala:</strong> Lakukan pengurasan tandon minimal setiap 3-6 bulan sekali untuk mencegah lumut, endapan lumpur, ataupun bakteri.</span>
                    </li>
                    <li className="flex gap-3">
                        <span className="font-bold text-emerald-600">2.</span>
                        <span><strong>Bersihkan Filter:</strong> Jika fasilitas dilengkapi filter penyaring, cek kondisinya secara berkala satu bulan sekali.</span>
                    </li>
                    <li className="flex gap-3">
                        <span className="font-bold text-emerald-600">3.</span>
                        <span><strong>Tutup Rapat:</strong> Pastikan tutup tandon atas selalu terkunci dengan rapat. Mencegah masuknya debu, sinar UV (penyebab lumut), dan hewan.</span>
                    </li>
                    <li className="flex gap-3 text-amber-700 bg-amber-50 p-3 rounded mt-4 items-center">
                        <AlertTriangle className="flex-shrink-0 text-amber-500" size={18} />
                        <span><strong>Penting:</strong> Bila kualitas air tiba-tiba berubah warna atau berbau tajam, harap langsung lapor kepada perangkat desa/pengurus air (BUMG).</span>
                    </li>
                </ul>
            </div>

        </div>
    );
}
