import React from 'react';
import { Clock, Users, BookOpen, Droplet } from 'lucide-react';

export default function SejarahVillage() {
    return (
        <div className="max-w-4xl mx-auto p-4 md:py-8 lg:px-8 pb-24 md:pb-12 text-slate-800">
            {/* Header */}
            <div className="text-center mb-12">
                <h2 className="text-3xl font-extrabold text-[#0284C7] mb-4">Sejarah Gampong Tanoh Rata</h2>
                <p className="text-slate-500 leading-relaxed max-w-2xl mx-auto">
                    Menelusuri jejak masa lalu, pertumbuhan komunitas, dan harmoni masyarakat Gampong Tanoh Rata yang kokoh menjaga warisan adat serta kemandirian air.
                </p>
            </div>

            {/* Timeline or Story section */}
            <div className="bg-white border border-slate-200 rounded-3xl p-8 md:p-10 shadow-sm relative overflow-hidden">
                <div className="absolute -top-10 -right-10 text-sky-50 opacity-5">
                    <BookOpen size={250} />
                </div>

                <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                    <Clock className="text-[#0284C7]" /> Asal Usul dan Perkembangan
                </h3>

                <div className="space-y-5 text-slate-700 leading-relaxed font-medium">
                    <p>
                        Gampong Tanoh Rata, yang secara etimologi berarti "Tanah Rata" dalam bahasa Aceh, adalah sebuah gampong (desa) bersejarah di wilayah Kecamatan Peureulak, Kabupaten Aceh Timur. Penamaan ini diberikan oleh para perintis terdahulu berdasarkan kontur geografis wilayahnya yang membentang relatif datar. Dataran yang ramah inilah yang memudahkan masyarakat awal untuk berkebun, bertani, dan menjadikannya titik persinggahan pelintas jalur pesisir timur Aceh.
                    </p>
                    <p>
                        Dalam perkembangannya, kehidupan sosial masyarakat Tanoh Rata sangat dipengaruhi oleh nilai-nilai keislaman dan adat istiadat "hadih maja". Kesadaran bersama untuk meunasah (musyawarah) menumbuhkan semangat gotong royong yang kuat.
                    </p>

                    <h3 className="text-2xl font-bold text-slate-900 mb-6 mt-10 flex items-center gap-3">
                        <Droplet className="text-[#0284C7]" /> Evolusi dan Sejarah Air Bersih Desa
                    </h3>

                    <p>
                        Air bersih selalu menjadi urat nadi peradaban di Gampong Tanoh Rata. Pada masa lampau, pencarian sumber air bersih mengandalkan sumur galian dangkal dan pemanfaatan tadah hujan secara tradisional. Keterbatasan alat pada zaman itu membuat penyediaan air saat musim kemarau menjadi sebuah tantangan besar bagi warga gampong, karena sumur-sumur dangkal kerap kali mengering.
                    </p>
                    <p>
                        Seiring berjalannya kemajuan zaman dan bentuk kepedulian bersama, transformasi kedaulatan air di Gampong Tanoh Rata pun dimulai. Masyarakat mulai bergotong royong bersama aparatur desa untuk memetakan titik-titik mata air tanah dalam ("deep well"). Transformasi dari sumur timba beralih menjadi sistem pengeboran air tanah dalam mencapai kedalaman lebih dari 45 meter.
                    </p>
                    <p>
                        Upaya mandiri desa ini juga mulai mendapatkan dukungan besar dari berbagai pihak. Lahirlah fasilitas-fasilitas vital modern hasil bantuan dari "Kementerian Sosial Daerah" dan juga bantuan inisisastif kepedulian dari "POLRI". Tandon-tandon penampungan berkapasitas ribuan liter yang dipadukan dengan mesin "Pompa Satelit (Submersible)" dipasang untuk mendorong air yang sangat jernih dari perut bumi agar bisa dinikmati setiap lapisan masyarakat.
                    </p>
                    <p>
                        Menariknya, kedermawanan tata ruang air di Tanoh Rata tidak hanya dinikmati oleh warganya sendiri. Berkat tingginya kualitas dan debit air yang stabil tanpa henti, beberapa titik mata air (seperti sumur bantuan POLRI di Dusun Keumeuning) bahkan sering menjadi penolong bagi warga-warga dari desa tetangga yang turut datang untuk memanen air bersih.
                    </p>

                    <div className="mt-8 p-6 bg-sky-50 rounded-2xl border-l-4 border-[#0284C7]">
                        <h4 className="text-lg font-bold text-[#0284C7] mb-2 flex items-center gap-2">
                            <Users size={20} /> Digitalisasi Air Desa Pertama
                        </h4>
                        <p className="text-sm text-slate-600">
                            Gampong Tanoh Rata hari ini telah mencatatkan sejarah baru. Melalui dedikasi program Mahasiswa KKN Kelompok 20 Universitas Samudra, untuk pertama kalinya Gampong Tanoh Rata memiliki portal `"Pemetaan GIS Air Bersih`" yang memodernisasi tata kelola air, merekam jejak sejarah air desa, sekaligus siap membuka peluang investasi air minum berkelanjutan di masa depan.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
