'use client';

import React, { useState } from 'react';
import {
  Building2,
  Sun,
  Droplets,
  ShieldCheck,
  MapPin,
  Search,
  Compass,
  Smartphone,
  CheckCircle2,
  Sparkles,
  TrainTrack,
  BadgeCheck,
  FileText,
  LayoutDashboard,
  ShieldAlert,
  Users,
  Wallet,
  Building,
  Check,
  X,
  History,
  Lock
} from 'lucide-react';
import InteractiveCorridorMap from '../components/InteractiveCorridorMap';

export default function HomePage() {
  const [activeTab, setActiveTab] = useState<'PORTAL' | 'BACKOFFICE'>('PORTAL');
  const [selectedZone, setSelectedZone] = useState('ALL');
  const [energyFilter, setEnergyFilter] = useState(false);
  const [waterFilter, setWaterFilter] = useState(false);
  const [verifiedTitleOnly, setVerifiedTitleOnly] = useState(false);
  const [properties, setProperties] = useState<any[]>([]);

  // État Back-Office Admin DNDC & Escrow
  const [dndcPendingProperties, setDndcPendingProperties] = useState([
    { id: 'prop-101', title: 'Villa Duplex Kipé', owner: 'M. Diallo', titleNo: 'TF-10492/Conakry', zone: 'Conakry', status: 'En attente DNDC' },
    { id: 'prop-102', title: 'Terrain Zone Industrielle Moribayah', owner: 'Société Banna B2B', titleNo: 'BE-2026/Moribayah', zone: 'Forécariah', status: 'En attente DNDC' },
  ]);

  const [auditLogs, setAuditLogs] = useState([
    { id: 'log-1', user: 'Capitaine Mansaré (Admin DNDC)', action: 'PROPERTY_VERIFIED_DNDC', details: 'Validation Titre Foncier TF-10492/Conakry', ip: '197.149.224.12', time: 'Il y a 10 min' },
    { id: 'log-2', user: 'Kaba Immobilier S.A.R.L.', action: 'ESCROW_RELEASED', details: 'Déblocage Séquestre Orange Money 3.500.000 GNF', ip: '197.149.225.88', time: 'Il y a 25 min' },
  ]);

  React.useEffect(() => {
    const fetchProperties = async () => {
      try {
        const res = await fetch('http://localhost:3001/properties');
        if (res.ok) {
          const data = await res.json();
          if (data && data.data && data.data.length > 0) {
            setProperties(data.data);
            return;
          }
        }
      } catch (err) {
        // Fallback to static mock properties if API server is offline
      }
      setProperties(defaultProperties);
    };

    fetchProperties();
  }, []);

  const handleApproveDNDC = (id: string, titleNo: string) => {
    setDndcPendingProperties(prev => prev.filter(item => item.id !== id));
    setAuditLogs(prev => [
      {
        id: `log-${Date.now()}`,
        user: 'Capitaine Mansaré (Admin DNDC)',
        action: 'PROPERTY_VERIFIED_DNDC',
        details: `Certification DNDC validée pour ${titleNo}`,
        ip: '197.149.224.12',
        time: 'À l\'instant'
      },
      ...prev
    ]);
  };

  const defaultProperties = [
    {
      id: 'prop-1',
      title: 'Villa Duplex de Prestige avec Kit Solaire & Forage Privé',
      city: 'Conakry',
      district: 'Kipé, Ratoma',
      price: '15 000 000 GNF / mois',
      listingType: 'Location',
      propertyType: 'Villa',
      simandouZone: 'CONAKRY',
      energy: 'Solaire 10kVA + Groupe',
      water: 'Forage + Surpresseur',
      titleStatus: 'Titre Foncier Certifié DNDC',
      isVerified: true,
      isFeatured: true,
      image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 'prop-2',
      title: 'Base de Vie & Entrepôt Logistique Grand Format',
      city: 'Forécariah',
      district: 'Zone Portuaire Moribayah',
      price: '5 000 USD / mois',
      listingType: 'Corporate Housing',
      propertyType: 'Base de Vie / Entrepôt',
      simandouZone: 'FORECARIAH_MORIBAYAH',
      energy: 'Autonomie Totale Solaire + Heavy Duty',
      water: 'Système Forage Industriel',
      titleStatus: 'Bail Emphytéotique État',
      isVerified: true,
      isFeatured: true,
      isSimandouSpotlight: true,
      image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 'prop-3',
      title: 'Immeuble Résidentiel pour Cadres Miniers',
      city: 'Kérouané',
      district: 'Centre Proche Gare Transguinéen',
      price: '2 500 000 000 GNF',
      listingType: 'Vente',
      propertyType: 'Immeuble',
      simandouZone: 'KEROUANE',
      energy: 'Système Hybride Onduleur',
      water: 'Forage 80m + Réservoir 5000L',
      titleStatus: 'Titre Foncier Vérifié',
      isVerified: true,
      isFeatured: false,
      isSimandouSpotlight: true,
      image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=800&q=80'
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      {/* Header / Navigation */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 bg-gradient-to-tr from-guinea-green via-guinea-yellow to-guinea-red rounded-xl flex items-center justify-center shadow-md">
              <Building2 className="w-6 h-6 text-white" />
            </div>
            <div>
              <span className="text-2xl font-black tracking-tight text-slate-900">
                BANNA<span className="text-guinea-green">IMMO</span>
              </span>
              <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">
                Guinée • Vision Simandou 2040
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 bg-slate-100 p-1.5 rounded-xl">
            <button
              onClick={() => setActiveTab('PORTAL')}
              className={`px-4 py-2 rounded-lg text-xs font-black transition flex items-center gap-1.5 ${
                activeTab === 'PORTAL'
                  ? 'bg-white text-slate-900 shadow-sm'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <Compass className="w-4 h-4 text-guinea-green" /> Portail Public
            </button>
            <button
              onClick={() => setActiveTab('BACKOFFICE')}
              className={`px-4 py-2 rounded-lg text-xs font-black transition flex items-center gap-1.5 ${
                activeTab === 'BACKOFFICE'
                  ? 'bg-slate-900 text-guinea-yellow shadow-sm'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <LayoutDashboard className="w-4 h-4 text-guinea-yellow" /> Back-Office Admin & Gouvernance
            </button>
          </div>
        </div>
      </header>

      {/* Condition d'affichage : Portail Public ou Back-Office */}
      {activeTab === 'PORTAL' ? (
        <>
          {/* Hero Section */}
          <section className="relative py-20 bg-slate-900 text-white overflow-hidden">
            <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#009460_1px,transparent_1px)] [background-size:16px_16px]"></div>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-800/80 border border-slate-700 text-guinea-yellow text-xs font-bold uppercase tracking-wider mb-6">
                <Sparkles className="w-4 h-4" /> Plateforme Immobilière Nationale de Nouvelle Génération
              </div>
              <h1 className="text-4xl sm:text-6xl font-black tracking-tight leading-tight max-w-4xl mx-auto">
                Trouvez des biens sécurisés sur tout le <span className="text-transparent bg-clip-text bg-gradient-to-r from-guinea-green via-guinea-yellow to-guinea-red">Corridor Simandou 2040</span>
              </h1>
              <p className="mt-6 text-lg text-slate-300 max-w-2xl mx-auto font-medium">
                Première plateforme guinéenne intégrant le filtrage par autonomie énergétique (solaire/groupe), hydraulique (forage/cuve), et la certification Cadastre DNDC.
              </p>

              {/* Moteur de Recherche Multi-critères Guinée */}
              <div id="recherche" className="mt-10 max-w-5xl mx-auto bg-white text-slate-900 rounded-2xl p-6 shadow-2xl border border-slate-100 text-left">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
                  <div>
                    <label className="block text-xs font-bold uppercase text-slate-500 mb-1.5">Type de Transaction</label>
                    <select className="w-full bg-slate-50 border border-slate-200 rounded-lg p-3 font-semibold text-sm focus:outline-none focus:ring-2 focus:ring-guinea-green">
                      <option>Location / Bail</option>
                      <option>Achat / Vente</option>
                      <option>Corporate Housing (Simandou)</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase text-slate-500 mb-1.5">Nœud Corridor Simandou</label>
                    <select
                      value={selectedZone}
                      onChange={(e) => setSelectedZone(e.target.value)}
                      className="w-full bg-slate-50 border border-slate-200 rounded-lg p-3 font-semibold text-sm focus:outline-none focus:ring-2 focus:ring-guinea-green"
                    >
                      <option value="ALL">Toutes les zones de Guinée</option>
                      <option value="CONAKRY">Conakry (Capitale)</option>
                      <option value="FORECARIAH_MORIBAYAH">Forécariah / Moribayah (Port)</option>
                      <option value="KINDIA">Kindia</option>
                      <option value="MAMOU">Mamou</option>
                      <option value="KANKAN">Kankan</option>
                      <option value="KEROUANE">Kérouané (Mines Nord)</option>
                      <option value="BEYLA">Beyla (Mines Sud)</option>
                      <option value="BOKE">Boké (Bauxite)</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase text-slate-500 mb-1.5">Type de Bien</label>
                    <select className="w-full bg-slate-50 border border-slate-200 rounded-lg p-3 font-semibold text-sm focus:outline-none focus:ring-2 focus:ring-guinea-green">
                      <option>Tous les types</option>
                      <option>Villa / Duplex</option>
                      <option>Appartement</option>
                      <option>Bureau / Espace Pro</option>
                      <option>Entrepôt / Base de Vie</option>
                      <option>Terrain Titré</option>
                    </select>
                  </div>

                  <div className="flex items-end">
                    <button className="w-full bg-guinea-green hover:bg-emerald-700 text-white font-bold py-3 px-6 rounded-lg transition flex items-center justify-center gap-2 shadow-lg">
                      <Search className="w-5 h-5" /> Rechercher
                    </button>
                  </div>
                </div>

                {/* Filtres Exclusifs Guinée */}
                <div className="pt-4 border-t border-slate-100 flex flex-wrap items-center justify-between gap-4">
                  <span className="text-xs font-extrabold uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
                    <Compass className="w-4 h-4 text-guinea-green" /> Filtres Exclusifs Guinée :
                  </span>
                  <div className="flex flex-wrap items-center gap-3">
                    <button
                      onClick={() => setEnergyFilter(!energyFilter)}
                      className={`px-3.5 py-1.5 rounded-full text-xs font-bold border transition flex items-center gap-1.5 ${
                        energyFilter
                          ? 'bg-amber-500 text-white border-amber-500'
                          : 'bg-slate-50 text-slate-700 border-slate-200 hover:border-amber-400'
                      }`}
                    >
                      <Sun className="w-3.5 h-3.5" /> Solaire / Groupe Électrogène
                    </button>

                    <button
                      onClick={() => setWaterFilter(!waterFilter)}
                      className={`px-3.5 py-1.5 rounded-full text-xs font-bold border transition flex items-center gap-1.5 ${
                        waterFilter
                          ? 'bg-blue-600 text-white border-blue-600'
                          : 'bg-slate-50 text-slate-700 border-slate-200 hover:border-blue-400'
                      }`}
                    >
                      <Droplets className="w-3.5 h-3.5" /> Forage Privé / Surpresseur
                    </button>

                    <button
                      onClick={() => setVerifiedTitleOnly(!verifiedTitleOnly)}
                      className={`px-3.5 py-1.5 rounded-full text-xs font-bold border transition flex items-center gap-1.5 ${
                        verifiedTitleOnly
                          ? 'bg-emerald-600 text-white border-emerald-600'
                          : 'bg-slate-50 text-slate-700 border-slate-200 hover:border-emerald-400'
                      }`}
                    >
                      <ShieldCheck className="w-3.5 h-3.5" /> Titre Foncier Certifié DNDC
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Corridor Simandou 2040 Interactive Section */}
          <section id="simandou" className="py-16 bg-white border-b border-slate-200">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex flex-col md:flex-row md:items-end justify-between mb-10">
                <div>
                  <div className="inline-flex items-center gap-2 text-xs font-extrabold text-guinea-green uppercase tracking-widest mb-2">
                    <TrainTrack className="w-4 h-4" /> Axe Stratégique National
                  </div>
                  <h2 className="text-3xl font-black text-slate-900 tracking-tight">
                    Cartographie du Corridor Transguinéen Simandou 2040
                  </h2>
                </div>
                <p className="mt-2 md:mt-0 text-slate-600 font-medium max-w-md">
                  Explorez les opportunités immobilières et foncières le long des gares, ports et zones industrielles du mégaprojet.
                </p>
              </div>

              <InteractiveCorridorMap
                selectedZone={selectedZone}
                onSelectZone={(zone) => setSelectedZone(zone)}
              />
            </div>
          </section>

          {/* Grid des Biens Immobiliers */}
          <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-2xl font-black text-slate-900 tracking-tight">
                Annonces à la une & Biens Certifiés
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {(properties.length > 0 ? properties : defaultProperties).map((item) => (
                <div key={item.id} className="bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-xl transition duration-300">
                  <div className="relative h-56 bg-slate-200">
                    <img src={item.image} alt={item.title} className="w-full h-full object-cover" />

                    {item.isSimandouSpotlight && (
                      <span className="absolute top-3 left-3 bg-slate-900/90 text-guinea-yellow px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider flex items-center gap-1 border border-slate-700">
                        <Sparkles className="w-3.5 h-3.5 fill-guinea-yellow" /> Corridor Simandou
                      </span>
                    )}

                    {item.isVerified && (
                      <span className="absolute top-3 right-3 bg-emerald-600 text-white px-2.5 py-1 rounded-full text-xs font-bold flex items-center gap-1 shadow-md">
                        <BadgeCheck className="w-4 h-4" /> Certifié DNDC
                      </span>
                    )}
                  </div>

                  <div className="p-6">
                    <div className="flex items-center justify-between text-xs font-bold text-slate-500 mb-2">
                      <span className="uppercase tracking-wider">{item.listingType} • {item.propertyType}</span>
                      <span className="flex items-center gap-1 text-slate-700"><MapPin className="w-3.5 h-3.5 text-guinea-red" /> {item.district} ({item.city})</span>
                    </div>

                    <h3 className="font-bold text-lg text-slate-900 line-clamp-2 leading-snug mb-3">
                      {item.title}
                    </h3>

                    <div className="space-y-2 text-xs font-semibold text-slate-600 my-4 bg-slate-50 p-3 rounded-lg border border-slate-100">
                      <div className="flex items-center gap-2 text-amber-700">
                        <Sun className="w-4 h-4 shrink-0 text-amber-500" /> {item.energy}
                      </div>
                      <div className="flex items-center gap-2 text-blue-700">
                        <Droplets className="w-4 h-4 shrink-0 text-blue-500" /> {item.water}
                      </div>
                      <div className="flex items-center gap-2 text-emerald-700">
                        <FileText className="w-4 h-4 shrink-0 text-emerald-500" /> {item.titleStatus}
                      </div>
                    </div>

                    <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                      <div className="font-black text-lg text-slate-900">{item.price}</div>
                      <button className="px-4 py-2 bg-slate-900 text-white font-bold text-xs rounded-lg hover:bg-slate-800 transition">
                        Voir détails
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </>
      ) : (
        /* Dynamic Back-Office Admin & Governance View */
        <main className="py-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-black text-guinea-yellow bg-slate-900 px-3 py-1 rounded-md uppercase tracking-wider mb-2">
                <ShieldAlert className="w-4 h-4 text-guinea-yellow" /> Super-Admin & Control Tower DNDC
              </div>
              <h1 className="text-3xl font-black text-slate-900 tracking-tight">
                Console de Gouvernance Banna Immo
              </h1>
            </div>
            <span className="text-xs font-bold text-slate-500 bg-emerald-50 text-emerald-700 border border-emerald-200 px-3 py-1.5 rounded-lg flex items-center gap-1.5">
              <Lock className="w-3.5 h-3.5" /> Session Sécurisée AES-256 / Audit Inviolable
            </span>
          </div>

          {/* KPIs Consolidés */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-extrabold uppercase text-slate-400">Total Utilisateurs & Agences</span>
                <Users className="w-5 h-5 text-guinea-green" />
              </div>
              <div className="text-3xl font-black text-slate-900">1 293</div>
              <p className="text-xs text-slate-500 font-medium mt-1">48 Agences Agréées APIP</p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-extrabold uppercase text-slate-400">Biens Certifiés DNDC</span>
                <BadgeCheck className="w-5 h-5 text-emerald-600" />
              </div>
              <div className="text-3xl font-black text-slate-900">2 180 / 3 420</div>
              <p className="text-xs text-emerald-600 font-bold mt-1">63.7% Taux de Certification</p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-extrabold uppercase text-slate-400">Volume Séquestre Escrow</span>
                <Wallet className="w-5 h-5 text-amber-500" />
              </div>
              <div className="text-2xl font-black text-slate-900">18.5 Mds GNF</div>
              <p className="text-xs text-slate-500 font-medium mt-1">Orange Money & MoMo</p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-extrabold uppercase text-slate-400">Projets Simandou 2040</span>
                <Building className="w-5 h-5 text-slate-900" />
              </div>
              <div className="text-3xl font-black text-slate-900">650</div>
              <p className="text-xs text-slate-500 font-medium mt-1">Bases de vie & Corporate</p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Portail de Validation Cadastre DNDC */}
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
              <div className="flex items-center justify-between border-b border-slate-100 pb-4 mb-6">
                <h3 className="font-extrabold text-lg text-slate-900 flex items-center gap-2">
                  <ShieldCheck className="w-5 h-5 text-guinea-green" /> Validation Titres Fonciers (Cadastre DNDC)
                </h3>
                <span className="text-xs bg-amber-100 text-amber-800 font-bold px-2.5 py-1 rounded-full">
                  {dndcPendingProperties.length} en attente
                </span>
              </div>

              {dndcPendingProperties.length === 0 ? (
                <div className="text-center py-8 text-slate-400 font-medium text-sm">
                  Tous les titres fonciers soumis ont été vérifiés !
                </div>
              ) : (
                <div className="space-y-4">
                  {dndcPendingProperties.map((prop) => (
                    <div key={prop.id} className="bg-slate-50 p-4 rounded-xl border border-slate-200 flex items-center justify-between">
                      <div>
                        <h4 className="font-bold text-slate-900 text-sm">{prop.title}</h4>
                        <div className="text-xs text-slate-500 mt-0.5">Propriétaire: {prop.owner} • Zone: {prop.zone}</div>
                        <span className="inline-block mt-2 text-[10px] font-mono font-bold bg-slate-200 px-2 py-0.5 rounded text-slate-700">
                          {prop.titleNo}
                        </span>
                      </div>

                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => handleApproveDNDC(prop.id, prop.titleNo)}
                          className="px-3 py-1.5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs rounded-lg transition flex items-center gap-1 shadow"
                        >
                          <Check className="w-3.5 h-3.5" /> Certifier
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Audit Logs / Journal Inviolable */}
            <div className="bg-slate-900 text-white p-6 rounded-2xl border border-slate-800 shadow-xl">
              <div className="flex items-center justify-between border-b border-slate-800 pb-4 mb-6">
                <h3 className="font-extrabold text-lg text-white flex items-center gap-2">
                  <History className="w-5 h-5 text-guinea-yellow" /> Journal d'Audit & Traçabilité Immuable
                </h3>
                <span className="text-[10px] font-mono text-slate-400 bg-slate-800 px-2 py-1 rounded">
                  LOGS_LIVE
                </span>
              </div>

              <div className="space-y-3 font-mono text-xs">
                {auditLogs.map((log) => (
                  <div key={log.id} className="bg-slate-800/80 p-3 rounded-lg border border-slate-700/60">
                    <div className="flex items-center justify-between text-[10px] text-slate-400 mb-1">
                      <span className="text-guinea-yellow font-bold">{log.user}</span>
                      <span>{log.time} • IP: {log.ip}</span>
                    </div>
                    <div className="text-emerald-400 font-bold mb-0.5">{log.action}</div>
                    <div className="text-slate-300 text-[11px]">{log.details}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </main>
      )}

      {/* Footer */}
      <footer className="bg-slate-950 text-slate-400 py-12 border-t border-slate-900 mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-guinea-green rounded-lg flex items-center justify-center">
              <Building2 className="w-5 h-5 text-white" />
            </div>
            <span className="text-lg font-black text-white tracking-tight">BANNA IMMO GUINÉE</span>
          </div>

          <div className="text-xs text-slate-500 font-medium text-center sm:text-right">
            © 2026 Banna Immo. Alignement Stratégique Mégaprojet Simandou 2040. Tous droits réservés.
          </div>
        </div>
      </footer>
    </div>
  );
}
