import React from 'react';
import { Home, Map, Grid, Info, BookOpen, Clock } from 'lucide-react';

export default function BottomNav({ activeTab, setActiveTab }) {
    const navItems = [
        { id: 'beranda', label: 'Beranda', icon: Home },
        { id: 'peta', label: 'Peta', icon: Map },
        { id: 'katalog', label: 'Katalog', icon: Grid },
        { id: 'edukasi', label: 'Edukasi', icon: BookOpen },
        { id: 'sejarah', label: 'Sejarah', icon: Clock },
        { id: 'tentang', label: 'Tentang', icon: Info }
    ];

    return (
        <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-slate-200 px-1 py-1.5 flex justify-between items-center z-50 pb-safe">
            {navItems.map((item) => {
                const Icon = item.icon;
                const isActive = activeTab === item.id;
                return (
                    <button
                        key={item.id}
                        onClick={() => setActiveTab(item.id)}
                        className={`flex flex-col items-center justify-center w-full py-1 gap-1 transition-colors ${isActive ? 'text-[#0284C7]' : 'text-slate-500'
                            }`}
                    >
                        <Icon size={18} className={isActive ? 'fill-sky-100' : ''} />
                        <span className={`text-[9.5px] tracking-tight whitespace-nowrap ${isActive ? 'font-bold' : 'font-medium'}`}>
                            {item.label}
                        </span>
                    </button>
                );
            })}
        </div>
    );
}
