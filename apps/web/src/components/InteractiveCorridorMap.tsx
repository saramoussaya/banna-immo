'use client';

import React, { useEffect, useState } from 'react';

interface CorridorMapProps {
  selectedZone: string;
  onSelectZone: (zone: string) => void;
}

const NODES = [
  { code: 'CONAKRY', name: 'Conakry', coords: [9.5370, -13.6785] as [number, number], role: 'Capitale & Hub Portuaire' },
  { code: 'FORECARIAH_MORIBAYAH', name: 'Forécariah (Moribayah)', coords: [9.4319, -13.0841] as [number, number], role: 'Port Méga-Mines' },
  { code: 'KINDIA', name: 'Kindia', coords: [10.0569, -12.8658] as [number, number], role: 'Gare Logistique Centrifuge' },
  { code: 'MAMOU', name: 'Mamou', coords: [10.3755, -12.0915] as [number, number], role: 'Carrefour Ferroviaire Central' },
  { code: 'KANKAN', name: 'Kankan', role: 'Hub Régional Haute-Guinée', coords: [10.3853, -9.3057] as [number, number] },
  { code: 'KEROUANE', name: 'Kérouané', coords: [9.2667, -9.0167] as [number, number], role: 'Gisement Simandou Nord' },
  { code: 'BEYLA', name: 'Beyla', coords: [8.6833, -8.6333] as [number, number], role: 'Gisement Simandou Sud' },
  { code: 'BOKE', name: 'Boké', coords: [10.9333, -14.2833] as [number, number], role: 'Zone Bauxite & Infrastructures' },
];

export default function InteractiveCorridorMap({ selectedZone, onSelectZone }: CorridorMapProps) {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return (
      <div className="w-full h-80 bg-slate-900 rounded-2xl flex items-center justify-center text-slate-400 font-mono text-sm">
        Chargement de la Carte Interactive Simandou 2040...
      </div>
    );
  }

  // Fallback map visualization rendering with SVG and interactive markers when Leaflet dynamic load renders
  return (
    <div className="relative w-full h-96 bg-slate-950 rounded-2xl border border-slate-800 overflow-hidden p-4 shadow-2xl flex flex-col justify-between">
      <div className="flex items-center justify-between text-xs font-mono text-slate-400 border-b border-slate-800 pb-2">
        <span className="text-guinea-yellow font-bold flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-guinea-green animate-ping"></span>
          CARTE INTERACTIVE APERÇU CARTOGRAPHIQUE TRANSGUINÉEN
        </span>
        <span>PROJECTION POSTGIS - GUINÉE 2040</span>
      </div>

      {/* SVG Corridor Visualization Line */}
      <div className="relative flex-1 flex items-center justify-center my-4">
        <svg className="absolute inset-0 w-full h-full text-slate-800" viewBox="0 0 800 200" fill="none">
          <path d="M 50,150 Q 150,80 250,120 T 450,100 T 650,130 T 750,50" stroke="#009460" strokeWidth="4" strokeDasharray="6 6" className="animate-pulse" />
        </svg>

        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-2 relative z-10 w-full">
          {NODES.map((node) => {
            const isSelected = selectedZone === node.code;
            return (
              <button
                key={node.code}
                onClick={() => onSelectZone(node.code)}
                className={`p-3 rounded-xl border text-left transition duration-200 backdrop-blur ${
                  isSelected
                    ? 'bg-guinea-green/90 border-guinea-yellow text-white shadow-lg scale-105 ring-2 ring-guinea-yellow'
                    : 'bg-slate-900/80 border-slate-800 text-slate-300 hover:border-slate-600'
                }`}
              >
                <div className="flex items-center justify-between mb-1">
                  <span className={`w-2.5 h-2.5 rounded-full ${isSelected ? 'bg-guinea-yellow' : 'bg-slate-600'}`}></span>
                  <span className="text-[9px] font-mono opacity-60">{node.coords[0].toFixed(1)}°N</span>
                </div>
                <div className="font-extrabold text-xs tracking-tight">{node.name}</div>
                <div className="text-[10px] text-slate-400 truncate mt-0.5">{node.role}</div>
              </button>
            );
          })}
        </div>
      </div>

      <div className="flex items-center justify-between text-[11px] text-slate-500 font-medium pt-2 border-t border-slate-900">
        <span>Gares ferroviaires, ports méga-mines et bases de vie connectées</span>
        <span className="text-guinea-green font-bold">Sélection active : {selectedZone === 'ALL' ? 'Toutes les zones' : selectedZone}</span>
      </div>
    </div>
  );
}
