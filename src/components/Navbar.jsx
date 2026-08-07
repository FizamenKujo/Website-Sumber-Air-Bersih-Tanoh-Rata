import React from 'react';
import { Droplet } from 'lucide-react';

export default function Navbar({ activeTab, setActiveTab }) {
    const navItems = [
        { id: 'beranda', label: 'Beranda' },
        { id: 'peta', label: 'Peta GIS' },
        { id: 'katalog', label: 'Katalog Air' },
        { id: 'edukasi', label: 'Edukasi & Info' },
        { id: 'tentang', label: 'Tentang' }
    ];

    return (
        <nav className="bg-[#0284C7] text-white shadow-md sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 lg:px-8 h-16 flex items-center justify-between">

                <div className="flex items-center gap-2 cursor-pointer" onClick={() => setActiveTab('beranda')}>
                    <img
                        src="/logo-aceh-timur.png"
                        alt="Logo Aceh Timur"
                        className="h-8 md:h-10 w-auto object-contain bg-white rounded-full p-1"
                    />
                    <div className="bg-white/20 p-1.5 md:p-2 rounded-full hidden sm:block">
                        <Droplet size={20} className="text-white md:w-6 md:h-6" />
                    </div>
                    <span className="font-bold text-lg md:text-xl tracking-tight hidden sm:block">Sistem Informasi Air Bersih Tanoh Rata</span>
                    <span className="font-bold text-[15px] tracking-tight sm:hidden leading-snug">Sistem Info Air<br />Tanoh Rata</span>
                </div>

                {/* Desktop Navigation */}
                <div className="hidden md:flex items-center gap-1">
                    {navItems.map((item) => (
                        <button
                            key={item.id}
                            onClick={() => setActiveTab(item.id)}
                            className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${activeTab === item.id
                                ? 'border-b-2 border-white font-bold'
                                : 'text-sky-100 hover:text-white hover:bg-sky-700/50'
                                }`}
                        >
                            {item.label}
                        </button>
                    ))}
                </div>
            </div>
        </nav>
    );
}
