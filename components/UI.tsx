import React from 'react';

export const BigTitle: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className = "" }) => (
  <h1 className={`font-display text-[6rem] md:text-[9rem] leading-[0.85] uppercase text-wd-dark tracking-tight ${className}`}>
    {children}
  </h1>
);

export const SectionTitle: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className = "" }) => (
  <h2 className={`font-display text-[3rem] md:text-[4.5rem] leading-[0.95] uppercase text-wd-dark tracking-tight ${className}`}>
    {children}
  </h2>
);

export const Card: React.FC<{ children: React.ReactNode; className?: string; accent?: boolean }> = ({ children, className = "", accent = false }) => (
  <div className={`relative bg-white rounded-2xl p-6 overflow-hidden border ${accent ? 'border-wd-dark/20 shadow-lg' : 'border-gray-200'} ${className}`}>
    {children}
  </div>
);

export const Tag: React.FC<{ children: React.ReactNode; lime?: boolean }> = ({ children, lime = false }) => (
  <span className={`inline-block px-3 py-1 text-xs uppercase tracking-wider font-bold rounded-full ${lime ? 'bg-wd-lime text-wd-dark' : 'bg-wd-dark text-white'}`}>
    {children}
  </span>
);

export const SlideHeader: React.FC<{ tag?: string; slideNum?: number; total?: number; lime?: boolean }> = ({ tag, slideNum, total, lime }) => (
  <div className="flex justify-between items-center mb-6">
    {tag && <Tag lime={lime}>{tag}</Tag>}
    {slideNum !== undefined && total !== undefined && (
      <span className="text-sm font-semibold text-wd-muted">{String(slideNum).padStart(2, '0')} / {String(total).padStart(2, '0')}</span>
    )}
  </div>
);

export const MetricCard: React.FC<{ value: string; label: string; accent?: boolean; delay?: string }> = ({ value, label, accent = false, delay = "0s" }) => (
  <div className={`p-6 rounded-2xl border ${accent ? 'border-wd-dark bg-wd-dark text-white' : 'border-gray-200 bg-white'} anim-fade-up`} style={{ animationDelay: delay }}>
    <div className={`text-5xl font-display uppercase tracking-tight mb-2 ${accent ? 'text-wd-lime' : 'text-wd-dark'}`}>{value}</div>
    <div className={`text-base ${accent ? 'text-gray-400' : 'text-wd-gray'}`}>{label}</div>
  </div>
);

export const WDLogo: React.FC<{ className?: string }> = ({ className = "h-8" }) => (
  <img src={`${import.meta.env.BASE_URL}wd-logo.svg`} alt="We Digital" className={className} />
);
