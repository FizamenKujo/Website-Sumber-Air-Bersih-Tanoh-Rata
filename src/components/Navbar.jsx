import React from 'react';
import { Droplet } from 'lucide-react';

export default function Navbar({ activeTab, setActiveTab }) {
    const navItems = [
        { id: 'beranda', label: 'Beranda' },
        { id: 'peta', label: 'Peta' },
        { id: 'katalog', label: 'Katalog Air' },
        { id: 'edukasi', label: 'Edukasi & Info' },
        { id: 'sejarah', label: 'Sejarah' },
        { id: 'tentang', label: 'Tentang' }
    ];

    return (
        <nav className="bg-[#0284C7] text-white shadow-md sticky top-0 z-50">
            <div className="w-full mx-auto px-4 lg:px-12 min-h-[5rem] py-4 flex items-center justify-between gap-4">

                <div className="flex items-center gap-3 sm:gap-4 cursor-pointer" onClick={() => setActiveTab('beranda')}>
                    <img
                        src="/logo-aceh-timur.png"
                        alt="Logo Aceh Timur"
                        className="h-12 md:h-14 w-auto object-contain bg-white rounded-full p-1.5 shrink-0 shadow-sm"
                    />
                    <div className="bg-white/20 p-2 md:p-2.5 rounded-full hidden sm:block shrink-0 shadow-sm">
                        <Droplet size={24} className="text-white md:w-7 md:h-7" />
                    </div>
                    <span className="font-bold text-[15.5px] sm:text-lg md:text-xl tracking-tight leading-snug break-words">
                        SIPAIR - Sistem Informasi Air Bersih Gampong Tanoh Rata
                    </span>
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
