import React, { useState } from 'react';

type Step = 1 | 2 | 3;

interface FormData {
  tier: string;
  software: string[];
  name: string;
  email: string;
}

export default function ConsultationForm() {
  const [step, setStep] = useState<Step>(1);
  const [formData, setFormData] = useState<FormData>({
    tier: '',
    software: [],
    name: '',
    email: '',
  });

  const handleTierSelect = (tierName: string) => {
    setFormData({ ...formData, tier: tierName });
    setStep(2);
  };

  const handleSoftwareToggle = (tech: string) => {
    const current = [...formData.software];
    const index = current.indexOf(tech);
    if (index > -1) {
      current.splice(index, 1);
    } else {
      current.push(tech);
    }
    setFormData({ ...formData, software: current });
  };

  // Bypassing strict event type requirements natively
  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log('Sams Customs - Intake Submission:', formData);
    setStep(3);
  };

  return (
    <section className="w-full min-h-[70vh] bg-white text-zinc-900 py-20 px-6 border-t border-zinc-100 flex flex-col items-center justify-center font-sans">
      <div className="w-full max-w-3xl border border-zinc-200/80 rounded-2xl p-8 md:p-12 shadow-sm bg-zinc-50/30 backdrop-blur-sm">

        {/* Progress Tracker Line */}
        <div className="w-full flex items-center justify-between mb-12">
          <span className={`text-xs uppercase tracking-widest transition-colors duration-300 ${step >= 1 ? 'text-zinc-900 font-medium' : 'text-zinc-400'}`}>01 / Select Tier</span>
          <div className="flex-1 h-[1px] bg-zinc-200 mx-4"></div>
          <span className={`text-xs uppercase tracking-widest transition-colors duration-300 ${step >= 2 ? 'text-zinc-900 font-medium' : 'text-zinc-400'}`}>02 / Workflow Specs</span>
          <div className="flex-1 h-[1px] bg-zinc-200 mx-4"></div>
          <span className={`text-xs uppercase tracking-widest transition-colors duration-300 ${step === 3 ? 'text-zinc-900 font-medium' : 'text-zinc-400'}`}>03 / Secure Audit</span>
        </div>

        {/* STEP 1: ARCHITECTURAL WORKFLOW TIERS */}
        {step === 1 && (
          <div className="animate-fadeIn">
            <h2 className="text-2xl font-light uppercase tracking-wider text-center mb-2 text-zinc-900">ARCHITECT YOUR RIG</h2>
            <p className="text-sm text-zinc-500 text-center mb-10 tracking-wide font-light">Select a baseline structural tier to initiate consultation configuration.</p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { name: 'Individual Studio Tier', price: '₦50,000 Consultation', desc: 'Optimized for independent architects, 3D artists, and executive workspaces.' },
                { name: 'Studio Practice Tier', price: '₦150,000 Consultation', desc: 'Engineered pipeline evaluation for design boutique teams up to 5 systems.' },
                { name: 'Enterprise Assessment', price: '₦350,000 Consultation', desc: 'Comprehensive infrastructure audit for large firms and multi-GPU render arrays.' }
              ].map((tier) => (
                <div 
                  key={tier.name}
                  onClick={() => handleTierSelect(tier.name)}
                  className="border border-zinc-200 bg-white p-6 rounded-xl cursor-pointer transition-all duration-300 ease-in-out hover:border-zinc-900 hover:scale-[1.01] hover:shadow-md group"
                >
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-sm uppercase tracking-wider font-medium text-zinc-800">{tier.name}</h3>
                    <span className="text-xs tracking-wider text-zinc-400 group-hover:text-zinc-900 transition-colors">[ Select ]</span>
                  </div>
                  <p className="text-xs text-zinc-500 font-light leading-relaxed mb-4">{tier.desc}</p>
                  <span className="text-xs uppercase font-medium tracking-widest text-zinc-900 bg-zinc-100 px-3 py-1.5 rounded-md">{tier.price}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* STEP 2: WORKFLOW DETAIL */}
        {step === 2 && (
          <form onSubmit={handleSubmit} className="animate-fadeIn">
            <h2 className="text-xl font-light uppercase tracking-wider mb-8 text-zinc-950">Engineered Workload Variables</h2>

            <div className="space-y-8">
              <div>
                <label className="block text-xs uppercase tracking-widest text-zinc-500 mb-3">Primary Engineering Software Environment (Select All)</label>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {['Autodesk Revit', 'Lumion', 'Twinmotion', 'Blender 3D', 'Chaos V-Ray', 'Adobe Suite'].map((tech) => (
                    <button
                      type="button"
                      key={tech}
                      onClick={() => handleSoftwareToggle(tech)}
                      className={`py-2.5 px-4 text-xs tracking-wider rounded-lg border uppercase transition-all duration-200 ${
                        formData.software.includes(tech) 
                          ? 'border-zinc-900 bg-zinc-900 text-white' 
                          : 'border-zinc-200 bg-white text-zinc-600 hover:border-zinc-400'
                      }`}
                    >
                      {tech}
                    </button>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs uppercase tracking-widest text-zinc-500 mb-2">Lead Contact Name</label>
                  <input 
                    required
                    type="text" 
                    placeholder="e.g., Arc. Samuel"
                    className="w-full bg-white border border-zinc-200 rounded-lg p-3 text-sm focus:outline-none focus:border-zinc-900 transition-colors"
                    onChange={(e: any) => setFormData({ ...formData, name: e.target.value })}
                  />
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-widest text-zinc-500 mb-2">Corporate Email Pipeline</label>
                  <input 
                    required
                    type="email" 
                    placeholder="sam@firm.com"
                    className="w-full bg-white border border-zinc-200 rounded-lg p-3 text-sm focus:outline-none focus:border-zinc-900 transition-colors"
                    onChange={(e: any) => setFormData({ ...formData, email: e.target.value })}
                  />
                </div>
              </div>
            </div>

            <div className="flex justify-between items-center mt-12 pt-6 border-t border-zinc-200">
              <button 
                type="button" 
                onClick={() => setStep(1)} 
                className="text-xs uppercase tracking-widest text-zinc-400 hover:text-zinc-900 transition-colors"
              >
                [ Back ]
              </button>
              <button 
                type="submit" 
                className="bg-zinc-900 text-white text-xs uppercase tracking-widest px-8 py-3.5 rounded-lg transition-all duration-300 ease-in-out hover:opacity-80 hover:scale-[1.02]"
              >
                [ Request Design Consultation ]
              </button>
            </div>
          </form>
        )}

        {/* STEP 3: SUCCESS BLOCK */}
        {step === 3 && (
          <div className="text-center py-8 animate-fadeIn">
            <div className="w-12 h-12 bg-zinc-900 text-white rounded-full flex items-center justify-center mx-auto mb-6 text-xl">✓</div>
            <h2 className="text-2xl font-light uppercase tracking-wider text-zinc-900 mb-3">PIPELINE SECURED</h2>
            <p className="text-sm text-zinc-500 font-light max-w-md mx-auto leading-relaxed mb-6">
              Our engineering office has queued your configuration parameters. An engineering diagnostic invoice and calendar bridge will hit your corporate inbox within 12 business hours.
            </p>
            <div className="inline-block border border-zinc-200 bg-white rounded-lg p-3 px-6 text-xs text-zinc-400 tracking-wider">
              Selected Assignment: <span className="text-zinc-900 font-medium uppercase">{formData.tier}</span>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}