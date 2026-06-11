import React, { useState } from 'react';

type Step = 1 | 2 | 3;

interface IntakeData {
  tier: string;
  software: string[];
  clientName: string;
  corporateEmail: string;
}

export default function WorkstationShowcase() {
  const [step, setStep] = useState<Step>(1);
  const [selectedTier, setSelectedTier] = useState<string>('');
  const [intakeData, setIntakeData] = useState<IntakeData>({
    tier: '',
    software: [],
    clientName: '',
    corporateEmail: '',
  });

  const tiers = [
    {
      id: 'studio',
      title: 'Creator Workstations',
      subtitle: 'Creative Labs',
      description: 'Designed for Photography, Post-Production, 3D Animation, and Multi-Layer Timeline Rendering.',
      price: '₦1,800,000',
      consultation: '₦50,000 baseline audit',
      image: 'https://images.unsplash.com/photo-1587202372775-e229f172b9d7?q=80&w=1200&auto=format&fit=crop',
    },
    {
      id: 'architect',
      title: 'Architectural Studio',
      subtitle: 'Design & Engineering',
      description: 'Optimized for heavy CAD computation, structural BIM pipelines, Revit, Lumion, and Twinmotion.',
      price: '₦3,500,000',
      consultation: '₦150,000 studio assessment',
      image: 'https://images.unsplash.com/photo-1581092335397-9583fe92d232?q=80&w=1200&auto=format&fit=crop',
    },
    {
      id: 'enterprise',
      title: 'Data Science Labs',
      subtitle: 'Compute Arrays',
      description: 'Configured for specialized AI models, machine learning loops, and multi-GPU local render farms.',
      price: '₦5,000,000',
      consultation: '₦350,000 enterprise evaluation',
      image: 'https://images.unsplash.com/photo-1591453089816-0fbb971b454c?q=80&w=1200&auto=format&fit=crop',
    }
  ];

  const handleInitiateAudit = (tierTitle: string) => {
    setSelectedTier(tierTitle);
    setIntakeData(prev => ({ ...prev, tier: tierTitle }));
    setStep(2);
    document.getElementById('intake-anchor')?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleSoftwareToggle = (app: string) => {
    const active = [...intakeData.software];
    const targetIndex = active.indexOf(app);
    if (targetIndex > -1) {
      active.splice(targetIndex, 1);
    } else {
      active.push(app);
    }
    setIntakeData({ ...intakeData, software: active });
  };

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Sams Customs Verified Transmission:', intakeData);
    setStep(3);
  };

  return (
    <div className="w-full bg-zinc-50 text-zinc-900 font-sans selection:bg-zinc-900 selection:text-white">
      
      {/* SECTION 1: PRODUCT SHOWCASE GRID */}
      <section className="max-w-7xl mx-auto py-24 px-6 md:px-12">
        <div className="mb-16 border-l-2 border-zinc-900 pl-6">
          <span className="text-xs uppercase tracking-widest text-zinc-400 block mb-2">EST. — CUSTOM PERFORMANCE STUDIO</span>
          <h2 className="text-4xl font-light tracking-tight text-zinc-950 uppercase">
            Bespoke Performance.<br />
            <span className="font-semibold text-zinc-800">Tailored Digitally.</span>
          </h2>
        </div>

        {/* Crisp Product Tiers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {tiers.map((tier) => (
            <div key={tier.id} className="group relative flex flex-col justify-between bg-white border border-zinc-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl hover:border-zinc-300 transition-all duration-500">
              
              {/* FIXED Image Container with Object-Cover */}
              <div className="w-full h-64 bg-zinc-100 overflow-hidden relative">
                <img 
                  src={tier.image} 
                  alt={tier.title} 
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute top-4 right-4 bg-zinc-950/80 backdrop-blur-md px-3 py-1 rounded-md border border-white/10">
                  <span className="text-[10px] tracking-widest uppercase text-white font-medium">{tier.subtitle}</span>
                </div>
              </div>

              {/* Text Layout & Details */}
              <div className="p-8 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-medium tracking-tight text-zinc-900 mb-2 uppercase">{tier.title}</h3>
                  <p className="text-sm text-zinc-500 font-light leading-relaxed mb-6 min-h-[60px]">{tier.description}</p>
                </div>

                <div className="pt-6 border-t border-zinc-100">
                  <div className="flex flex-col mb-6">
                    <span className="text-[10px] uppercase tracking-widest text-zinc-400 mb-1">Rigs Architected From</span>
                    <span className="text-3xl font-semibold tracking-tight text-zinc-950">{tier.price}</span>
                    <span className="text-xs text-zinc-400 mt-1 italic">{tier.consultation}</span>
                  </div>

                  {/* Anti-Gamer Minimal Button with Scale Interaction */}
                  <button 
                    onClick={() => handleInitiateAudit(tier.title)}
                    className="w-full bg-zinc-950 text-white text-xs uppercase tracking-widest py-4 rounded-xl font-medium transition-all duration-300 ease-in-out hover:bg-zinc-800 hover:scale-[1.02] shadow-sm active:scale-[0.98]"
                  >
                    [ Align Workflow Pipeline ]
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CORE SPEC DETAILS / FLOATING CARD REFACTOR */}
      <section className="w-full bg-zinc-900 text-white py-20 px-6 md:px-12">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7">
            <span className="text-xs tracking-widest uppercase text-zinc-500 block mb-3">Signature Deployment</span>
            <h3 className="text-3xl font-light uppercase tracking-wide mb-6">Unmatched Power. <br/><span className="font-medium text-zinc-400">Unforgettable Style.</span></h3>
            <p className="text-zinc-400 text-sm font-light leading-relaxed max-w-xl">
              Each unit is assembled inside a custom clean-room environment. We completely bypass typical plastic computing chassis variables, utilizing structural sandblasted titanium composites and CNC-milled aluminum.
            </p>
          </div>
          
          {/* FLOATING CARD PATCHED WITH BREATHING ROOM */}
          <div className="lg:col-span-5 bg-zinc-950/50 border border-zinc-800 rounded-2xl p-8 md:p-10 backdrop-blur-md shadow-2xl">
            <div className="flex items-center justify-between mb-8 pb-4 border-b border-zinc-800">
              <span className="text-xs font-semibold tracking-widest text-zinc-400 uppercase">SYSTEM DIAGNOSTIC PARAMETERS</span>
              <span className="flex h-2 w-2 rounded-full bg-emerald-400 animate-pulse"></span>
            </div>
            
            {/* Added systematic internal layout spacing to remove text hugging */}
            <div className="space-y-4 text-xs font-mono tracking-wide text-zinc-300">
              <div className="flex justify-between py-2 border-b border-zinc-900/60"><span className="text-zinc-500">COMPUTE</span><span>RTX 5090 Ti Architecture</span></div>
              <div className="flex justify-between py-2 border-b border-zinc-900/60"><span className="text-zinc-500">THREADS</span><span>36-Core Host Architecture</span></div>
              <div className="flex justify-between py-2 border-b border-zinc-900/60"><span className="text-zinc-500">CACHING</span><span>256GB DDR5 ECC @ 7200 MT/s</span></div>
              <div className="flex justify-between py-2"><span className="text-zinc-500">LOGISTICS</span><span>Direct Wholesale Import Pipeline</span></div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: INTERACTIVE INTAKE AUDIT ENGINE */}
      <span id="intake-anchor" className="block scroll-mt-10"></span>
      <section className="w-full py-24 px-6 bg-white border-t border-zinc-100 flex flex-col items-center">
        <div className="w-full max-w-3xl border border-zinc-200 rounded-2xl p-8 md:p-12 bg-zinc-50/50 backdrop-blur-sm shadow-sm">
          
          {/* Intake Stepper Indicator */}
          <div className="w-full flex items-center justify-between mb-12 select-none">
            <span className={`text-[10px] uppercase tracking-widest transition-colors duration-300 ${step >= 1 ? 'text-zinc-900 font-semibold' : 'text-zinc-400'}`}>01 / Select Tier</span>
            <div className="flex-1 h-[1px] bg-zinc-200 mx-4"></div>
            <span className={`text-[10px] uppercase tracking-widest transition-colors duration-300 ${step >= 2 ? 'text-zinc-900 font-semibold' : 'text-zinc-400'}`}>02 / Workload Allocation</span>
            <div className="flex-1 h-[1px] bg-zinc-200 mx-4"></div>
            <span className={`text-[10px] uppercase tracking-widest transition-colors duration-300 ${step === 3 ? 'text-zinc-900 font-semibold' : 'text-zinc-400'}`}>03 / Secure Audit</span>
          </div>

          {/* STEP 1: PRE-SELECT OR FALLBACK VIEW */}
          {step === 1 && (
            <div className="text-center py-6">
              <h3 className="text-xl font-light uppercase tracking-wider mb-3">Initiate Engineering Analysis</h3>
              <p className="text-xs text-zinc-400 max-w-sm mx-auto mb-8 leading-relaxed font-light">Select a workstation collection block above to begin your specialized structural workspace integration.</p>
              <div className="inline-flex gap-2 text-xs font-mono text-zinc-300 bg-zinc-100 border border-zinc-200 p-2 rounded-lg">
                Status: [ Awaiting Tier Selection ]
              </div>
            </div>
          )}

          {/* STEP 2: DYNAMIC DETAILED INTAKE */}
          {step === 2 && (
            <form onSubmit={handleFormSubmit} className="space-y-8 animate-fadeIn">
              <div>
                <div className="mb-6">
                  <span className="text-[10px] font-mono text-zinc-400 bg-zinc-200/60 px-2 py-1 rounded">Target Architecture: {selectedTier}</span>
                  <h3 className="text-xl uppercase tracking-wider font-light mt-3 text-zinc-950">Engineered Workload Variables</h3>
                </div>
                
                <label className="block text-[10px] uppercase tracking-widest text-zinc-400 font-medium mb-3">Primary Computing Environment (Select All Operating Parameters)</label>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {['Autodesk Revit', 'Lumion', 'Twinmotion', 'Blender 3D', 'Chaos V-Ray', 'Adobe Suite'].map((tech) => (
                    <button
                      type="button"
                      key={tech}
                      onClick={() => handleSoftwareToggle(tech)}
                      className={`py-3 px-4 text-xs tracking-wider rounded-xl border uppercase transition-all duration-300 ${
                        intakeData.software.includes(tech) 
                          ? 'border-zinc-950 bg-zinc-950 text-white shadow-sm' 
                          : 'border-zinc-200 bg-white text-zinc-600 hover:border-zinc-400'
                      }`}
                    >
                      {tech}
                    </button>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
                <div>
                  <label className="block text-[10px] uppercase tracking-widest text-zinc-400 font-medium mb-2">Lead Contact Officer</label>
                  <input 
                    required
                    type="text" 
                    placeholder="e.g., Arc. Samuel"
                    className="w-full bg-white border border-zinc-200 rounded-xl p-3.5 text-sm focus:outline-none focus:border-zinc-900 transition-colors placeholder:text-zinc-300"
                    onChange={(e) => setIntakeData({ ...intakeData, clientName: e.target.value })}
                  />
                </div>
                <div>
                  <label className="block text-[10px] uppercase tracking-widest text-zinc-400 font-medium mb-2">Corporate Digital Pipeline (Email)</label>
                  <input 
                    required
                    type="email" 
                    placeholder="sam@firm.com"
                    className="w-full bg-white border border-zinc-200 rounded-xl p-3.5 text-sm focus:outline-none focus:border-zinc-900 transition-colors placeholder:text-zinc-300"
                    onChange={(e) => setIntakeData({ ...intakeData, corporateEmail: e.target.value })}
                  />
                </div>
              </div>

              <div className="flex justify-between items-center pt-8 border-t border-zinc-200">
                <button 
                  type="button" 
                  onClick={() => setStep(1)} 
                  className="text-xs uppercase tracking-widest text-zinc-400 hover:text-zinc-950 transition-colors"
                >
                  [ Modify Tier ]
                </button>
                <button 
                  type="submit" 
                  className="bg-zinc-950 text-white text-xs uppercase tracking-widest px-8 py-4 rounded-xl transition-all duration-300 ease-in-out hover:bg-zinc-800 hover:scale-[1.01]"
                >
                  [ Validate Architecture & Request Audit ]
                </button>
              </div>
            </form>
          )}

          {/* STEP 3: BULLETPROOF SUCCESS METRIC */}
          {step === 3 && (
            <div className="text-center py-10">
              <div className="w-12 h-12 bg-zinc-950 text-white rounded-full flex items-center justify-center mx-auto mb-6 text-lg font-mono">✓</div>
              <h3 className="text-2xl font-light uppercase tracking-wider text-zinc-950 mb-3">PIPELINE SECURED</h3>
              <p className="text-xs text-zinc-400 font-light max-w-md mx-auto leading-relaxed mb-6">
                Our engineering office has locked your configuration metrics into our diagnostic registry. A specialized workflow audit invoice and secure calendar bridge will hit <span className="text-zinc-900 font-medium">{intakeData.corporateEmail}</span> within 12 business hours.
              </p>
              <div className="inline-block border border-zinc-200 bg-white rounded-xl p-3 px-6 text-xs text-zinc-500 tracking-wider">
                Queued Engine: <span className="text-zinc-950 font-semibold uppercase">{intakeData.tier}</span>
              </div>
            </div>
          )}

        </div>
      </section>
    </div>
  );
}
