import React, { useState } from 'react';
import Navbar from './components/Navbar';
import BottomNav from './components/BottomNav';
import HeroDashboard from './pages/HeroDashboard';
import WaterMap from './pages/WaterMap';
import WaterCatalog from './pages/WaterCatalog';
import WaterEducation from './pages/WaterEducation';
import WaterDetail from './pages/WaterDetail';
import SejarahVillage from './pages/SejarahVillage';
import AboutProject from './pages/AboutProject';

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
                {activeTab === 'sejarah' && <SejarahVillage />}
                {activeTab === 'tentang' && <AboutProject />}
                {activeTab === 'detail' && selectedLocation && (
                    <WaterDetail loc={selectedLocation} setActiveTab={setActiveTab} />
                )}
            </main>

            {/* Footer */}
            <footer className="bg-white/70 backdrop-blur border-t border-slate-200 mt-auto py-8 mb-16 md:mb-0">
                <div className="max-w-7xl mx-auto px-4 lg:px-8 flex flex-col md:flex-row justify-between items-start md:items-center text-slate-500 text-sm gap-6">
                    <div className="space-y-1">
                        <div className="font-semibold text-slate-700">&copy; 2026 Pemerintahan Gampong Tanoh Rata</div>
                    </div>
                    <div className="flex flex-col md:text-right space-y-1">
                        <span className="font-semibold text-slate-700">Kantor Gampong Tanoh Rata</span>
                        <span className="text-slate-600">JL. Monisa Km. 05 kode pos 24453</span>
                        <span className="text-[#0284C7]">Email: gampongtanohrata@gmail.com</span>
                    </div>
                </div>
            </footer>

            <BottomNav activeTab={activeTab === 'detail' ? 'peta' : activeTab} setActiveTab={setActiveTab} />
        </div>
    );
}
