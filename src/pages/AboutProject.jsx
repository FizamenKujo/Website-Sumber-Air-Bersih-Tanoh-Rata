import React from 'react';
import { Target, Eye, Database, RefreshCw, ChevronRight } from 'lucide-react';

export default function AboutProject() {
    return (
        <div className="max-w-6xl mx-auto p-4 md:py-8 lg:px-8 pb-24 md:pb-12 text-slate-800">

            {/* Intro Header */}
            <div className="text-center mb-12 max-w-2xl mx-auto">
                <h2 className="text-3xl font-extrabold text-[#0284C7] mb-4">Tentang Proyek</h2>
                <p className="text-slate-500 leading-relaxed">
                    Inisiatif KKN Informatika untuk digitalisasi dan pemetaan infrastruktur air bersih di Gampong Tanoh Rata,
                    demi tata kelola yang lebih transparan dan efisien.
                </p>
            </div>

            <div className="flex flex-col lg:flex-row gap-8 relative">

                {/* Left Col: Goals */}
                <div className="lg:w-2/3">
                    <div className="flex items-center gap-2 mb-6">
                        <span className="text-[#0284C7] bg-sky-100 p-2 rounded">🚩</span>
                        <h3 className="text-xl font-bold">Tujuan Utama</h3>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-4">
                        <GoalCard
                            icon={<Target size={20} />}
                            title="Pemetaan Infrastruktur"
                            desc="Digitalisasi lokasi sumber air, perpipaan, dan meteran warga dalam sistem informasi geografis terpadu."
                        />
                        <GoalCard
                            icon={<Eye size={20} />}
                            title="Transparansi Data"
                            desc="Menyediakan portal yang dapat diakses warga untuk melihat sebaran fasilitas dan status."
                        />
                        <GoalCard
                            icon={<Database size={20} />}
                            title="Inventarisasi Aset Desa"
                            desc="Membantu pengurus desa dalam inventarisasi digital seluruh fasilitas bantuan fisik air."
                        />
                        <GoalCard
                            icon={<RefreshCw size={20} />}
                            title="Keberlanjutan Program"
                            desc="Membangun sistem open-source statis yang sangat mudah dikelola tanpa beban langganan server."
                        />
                    </div>

                    <div className="mt-10 p-6 bg-sky-50 rounded-2xl border border-sky-100 text-sm md:text-base leading-relaxed text-slate-600">
                        <h4 className="font-bold text-sky-900 mb-3 text-lg">💡 Latar Belakang & Apresiasi</h4>
                        <p className="mb-3 text-justify">
                            mahasiswa <strong>KKN Kelompok 20 Universitas Samudra Tahun 2026</strong>
                            di Gampong Tanoh Rata, Kecamatan Peureulak, Aceh Timur.
                        </p>
                        <p className="text-justify">
                            Kami mengucapkan apresiasi dan terima kasih yang sebesarnya atas kolaborasi perangkat gampong, serta
                            instansi <strong>Kepolisian Republik Indonesia (POLRI)</strong> dan <strong>Kementerian Sosial
                                Daerah</strong> yang telah berupaya mewujudkan penyediaan titik-titik infrastruktur air bersih di
                            seluruh pelosok dusun Gampong Tanoh Rata.
                        </p>
                    </div>
                </div>

                {/* Right Col: Tech Stack */}
                <div className="lg:w-1/3">
                    <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm sticky top-24">
                        <div className="flex items-center gap-2 mb-4">
                            <span className="text-[#0284C7] bg-sky-100 p-2 rounded">⚙️</span>
                            <h3 className="text-xl font-bold">Teknologi</h3>
                        </div>

                        <p className="text-sm text-slate-500 mb-6">
                            Portal ini dibangun dengan arsitektur statis modern (Zero-backend) untuk performa web sangat cepat.
                        </p>

                        <div className="space-y-3">
                            <TechRow name="React & Vite" desc="Framework Frontend" />
                            <TechRow name="Leaflet JS" desc="Pemetaan Geospasial" />
                            <TechRow name="Tailwind CSS" desc="Utility-first Styling" />
                            <TechRow name="Vercel" desc="Deployment & Hosting" />
                        </div>
                    </div>
                </div>

            </div>

        </div>
    );
}

function GoalCard({ icon, title, desc }) {
    return (
        <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm hover:shadow transition-shadow">
            <div className="w-10 h-10 bg-[#0284C7] text-white rounded-xl flex items-center justify-center mb-4">
                {icon}
            </div>
            <h4 className="font-bold text-slate-800 mb-2">{title}</h4>
            <p className="text-sm text-slate-500 leading-relaxed">{desc}</p>
        </div>
    );
}

function TechRow({ name, desc }) {
    return (
        <div className="flex items-center justify-between p-3 bg-slate-50 border border-slate-100 rounded-lg group hover:bg-white hover:border-sky-200 transition-colors">
            <div>
                <h5 className="font-bold text-slate-700 text-sm">{name}</h5>
                <span className="text-xs text-slate-400">{desc}</span>
            </div>
            <ChevronRight size={16} className="text-slate-300 group-hover:text-[#0284C7]" />
        </div>
    );
}
