import React, { useState } from 'react';
import Navbar from './components/Navbar';
import BottomNav from './components/BottomNav';
import HeroDashboard from './pages/HeroDashboard';
import WaterMap from './pages/WaterMap';
import WaterCatalog from './pages/WaterCatalog';
import WaterEducation from './pages/WaterEducation';
import AboutProject from './pages/AboutProject';
import WaterDetail from './pages/WaterDetail';

export default function App() {
    const [activeTab, setActiveTab] = useState('beranda');
    const [selectedLocation, setSelectedLocation] = useState(null);

    // Helper to open details view
    const openDetail = (loc) => {
        setSelectedLocation(loc);
        setActiveTab('detail');
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <div className="min-h-screen font-sans flex flex-col">
            <Navbar activeTab={activeTab === 'detail' ? 'peta' : activeTab} setActiveTab={setActiveTab} />

            <main className="flex-1 w-full pb-safe">
                {activeTab === 'beranda' && <HeroDashboard setActiveTab={setActiveTab} />}
                {activeTab === 'peta' && <WaterMap openDetail={openDetail} />}
                {activeTab === 'katalog' && <WaterCatalog openDetail={openDetail} />}
                {activeTab === 'edukasi' && <WaterEducation />}
                {activeTab === 'tentang' && <AboutProject />}
                {activeTab === 'detail' && selectedLocation && (
                    <WaterDetail loc={selectedLocation} setActiveTab={setActiveTab} />
                )}
            </main>

            {/* Footer Desktop */}
            <footer className="hidden md:block bg-white/70 backdrop-blur border-t border-slate-200 mt-auto py-8">
                <div className="max-w-7xl mx-auto px-4 lg:px-8 flex flex-col md:flex-row justify-between items-center text-slate-500 text-sm">
                    <div>&copy; 2024 Gampong Tanoh Rata. KKN Tematik Sumber Daya Air.</div>
                    <div className="flex gap-6 mt-4 md:mt-0 font-medium text-slate-500">
                        <span className="hover:text-slate-800 cursor-pointer transition">Kebijakan Privasi</span>
                        <span className="hover:text-slate-800 cursor-pointer transition">Syarat Layanan</span>
                        <span className="hover:text-slate-800 cursor-pointer transition">Kontak Admin</span>
                    </div>
                </div>
            </footer>

            <BottomNav activeTab={activeTab === 'detail' ? 'peta' : activeTab} setActiveTab={setActiveTab} />
        </div>
    );
}
