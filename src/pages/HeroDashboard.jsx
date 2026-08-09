import React from 'react';
import { Droplet, MapPin, Activity } from 'lucide-react';
import waterSources from '../data/waterSources.json';

export default function HeroDashboard({ setActiveTab }) {
    const totalSpots = waterSources.length;
    const countPolri = waterSources.filter(s => s.sumber === 'POLRI').length;
    const countKemensos = waterSources.filter(s => s.sumber === 'Kemensos Daerah').length;
    const countAktif = waterSources.filter(s => s.status === 'aktif').length;
    const countPending = waterSources.filter(s => s.status === 'pending').length;

    return (
        <div className="flex flex-col items-center justify-center py-10 lg:py-20 px-4">
            {/* Container Box */}
            <div className="w-full max-w-5xl bg-white border border-slate-100 rounded-3xl shadow-sm overflow-hidden mb-8">

                {/* Banner Content */}
                <div className="text-center py-16 px-6 relative overflow-hidden">
                    {/* subtle bg accent */}
                    <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-sky-300 to-[#0284C7]" />

                    <div className="inline-block px-3 py-1 mb-6 text-xs font-semibold text-sky-700 bg-sky-50 rounded-full border border-sky-100 uppercase tracking-wide">
                        [ Portal Resmi Gampong Tanoh Rata ]
                    </div>

                    <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-slate-800 leading-tight mb-6 px-2">
                        Sistem Informasi & Pemetaan <br className="hidden md:block" />
                        <span className="text-[#0284C7]">Air Bersih</span> Gampong Tanoh Rata
                    </h1>

                    <p className="text-slate-500 max-w-2xl mx-auto md:text-lg mb-10 leading-relaxed">
                        Sistem informasi geografis yang mendokumentasikan seluruh titik sumber air bersih, kondisi fisik, kualitas air, serta cakupan pelayanan bagi warga Gampong Tanoh Rata, Kecamatan Peureulak, Aceh Timur.
                    </p>

                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <button
                            onClick={() => setActiveTab('peta')}
                            className="px-8 py-3 bg-[#0284C7] hover:bg-[#0369a1] text-white rounded-lg font-semibold shadow-md shadow-sky-200 transition-all hover:-translate-y-0.5 active:translate-y-0"
                        >
                            Lihat Peta GIS →
                        </button>
                        <button
                            onClick={() => setActiveTab('katalog')}
                            className="px-8 py-3 bg-white text-[#0284C7] hover:bg-sky-50 border border-sky-100 rounded-lg font-semibold shadow-sm transition-all hover:-translate-y-0.5 active:translate-y-0"
                        >
                            Lihat Katalog Air
                        </button>
                    </div>
                </div>
            </div>

            {/* Grid Stats */}
            <div className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-6">

                <div className="bg-white border-t-2 border-[#0284C7] rounded-xl p-6 shadow-sm flex items-start gap-4">
                    <div className="p-3 bg-sky-50 rounded-lg text-[#0284C7]">
                        <Droplet size={24} />
                    </div>
                    <div>
                        <h3 className="text-2xl font-bold text-slate-800">{totalSpots}</h3>
                        <p className="text-slate-500 text-sm">Total Titik Air Bersih</p>
                    </div>
                </div>

                <div className="bg-white border-t-2 border-[#10B981] rounded-xl p-6 shadow-sm flex items-start gap-4">
                    <div className="p-3 bg-emerald-50 rounded-lg text-[#10B981]">
                        <Activity size={24} />
                    </div>
                    <div>
                        <h3 className="text-2xl font-bold text-slate-800">{countAktif} Aktif / {countPending} Pending</h3>
                        <p className="text-slate-500 text-sm">Status Operasional</p>
                    </div>
                </div>

            </div>

            {/* Potensi Air Bersih Section */}
            <div className="w-full max-w-5xl mt-12 mb-8 bg-sky-50/50 border border-sky-100 rounded-3xl p-8 md:p-12 overflow-hidden relative">
                <div className="absolute top-0 right-0 p-8 opacity-5 pointer-events-none">
                    <Droplet size={150} />
                </div>

                <h2 className="text-2xl md:text-3xl font-extrabold text-[#0284C7] mb-6">
                    POTENSI AIR BERSIH DESA TANOH RATA
                </h2>

                <div className="space-y-4 text-slate-700 leading-relaxed font-medium">
                    <p>
                        Desa Tanoh Rata memiliki potensi sumber air bersih yang sangat melimpah dan berpeluang untuk dikembangkan menjadi sumber ekonomi baru bagi desa. Ketersediaan air yang melimpah tidak hanya dapat memenuhi kebutuhan masyarakat Desa Tanoh Rata, tetapi juga memiliki potensi untuk dikelola secara profesional dan didistribusikan ke daerah lain yang membutuhkan.
                    </p>
                    <p>
                        Dengan pengelolaan yang tepat, pembangunan sarana penampungan, pengolahan, pengemasan, dan distribusi, potensi air bersih Desa Tanoh Rata dapat dikembangkan menjadi produk air bersih yang memiliki nilai ekonomi dan dapat dipasarkan ke wilayah sekitar maupun daerah lainnya.
                    </p>
                    <p>
                        Kami mengajak perusahaan untuk melihat potensi ini sebagai sebuah peluang kerja sama yang memiliki manfaat ekonomi sekaligus manfaat sosial. Perusahaan dapat berperan dalam pengembangan fasilitas dan sistem distribusi, sementara Desa Tanoh Rata memiliki potensi sumber air yang dapat dikembangkan secara berkelanjutan.
                    </p>
                    <p>
                        Kerja sama ini diharapkan dapat menciptakan lapangan pekerjaan bagi masyarakat, meningkatkan pendapatan desa, membuka peluang usaha baru, serta menyediakan air bersih bagi daerah lain yang membutuhkan.
                    </p>

                    <div className="mt-6 p-5 bg-white border-l-4 border-[#0284C7] rounded-r-xl shadow-sm italic text-[#0284C7] font-semibold">
                        "Desa Tanoh Rata memiliki sumber daya air yang melimpah. Dengan dukungan dan investasi yang tepat, potensi tersebut dapat dikembangkan menjadi sumber kesejahteraan masyarakat dan peluang usaha yang berkelanjutan. Mari bersama-sama mengubah potensi air bersih Desa Tanoh Rata menjadi manfaat yang lebih luas—untuk masyarakat, desa, dan daerah di sekitarnya."
                    </div>
                </div>
            </div>

        </div>
    );
}

