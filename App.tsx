import React, { useState, useEffect, useCallback } from 'react';
import { ChevronRight, ChevronLeft } from 'lucide-react';
import { ALL_SLIDES } from './components/Slides';

export default function App() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const goTo = useCallback((idx: number) => {
    if (isTransitioning || idx === currentSlide || idx < 0 || idx >= ALL_SLIDES.length) return;
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentSlide(idx);
      setTimeout(() => setIsTransitioning(false), 300);
    }, 300);
  }, [currentSlide, isTransitioning]);

  const handleNext = useCallback(() => goTo(currentSlide + 1), [currentSlide, goTo]);
  const handlePrev = useCallback(() => goTo(currentSlide - 1), [currentSlide, goTo]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === ' ' || e.key === 'PageDown') { e.preventDefault(); handleNext(); }
      if (e.key === 'ArrowLeft' || e.key === 'PageUp') { e.preventDefault(); handlePrev(); }
      if (e.key === 'f') {
        if (document.fullscreenElement) document.exitFullscreen();
        else document.documentElement.requestFullscreen();
      }
      if (e.key === 'Home') { e.preventDefault(); goTo(0); }
      if (e.key === 'End') { e.preventDefault(); goTo(ALL_SLIDES.length - 1); }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleNext, handlePrev, goTo]);

  const CurrentSlideComponent = ALL_SLIDES[currentSlide];

  return (
    <div className="relative w-screen h-screen bg-white text-wd-dark overflow-hidden selection:bg-wd-purple/20 selection:text-wd-purple">
      <main className={`relative z-10 w-full h-full transition-all duration-300 ${isTransitioning ? 'opacity-0 scale-[0.98]' : 'opacity-100 scale-100'}`}>
        <div className="w-full h-full">
          <CurrentSlideComponent isActive={!isTransitioning} />
        </div>
      </main>

      {/* Footer Bar */}
      <div className="fixed bottom-0 left-0 w-full z-20 bg-white/90 backdrop-blur-sm border-t border-gray-200">
        <div className="flex items-center justify-between px-8 py-3">
          <div className="flex gap-1.5 items-center">
            {ALL_SLIDES.map((_, idx) => (
              <button key={idx} onClick={() => goTo(idx)}
                className={`h-2 rounded-full transition-all duration-300 ${currentSlide === idx ? 'w-8 bg-wd-dark' : 'w-2 bg-gray-300 hover:bg-gray-400'}`} />
            ))}
          </div>

          <div className="flex items-center gap-10 text-xs text-wd-gray">
            <span>ИИ-агенты и автоматизация</span>
            <span className="font-semibold text-wd-dark">TashkentCity Mall</span>
            <span>2026</span>
          </div>

          <div className="flex gap-2">
            <button onClick={handlePrev} disabled={currentSlide === 0}
              className="p-2 border border-gray-200 hover:border-wd-dark hover:text-wd-dark text-gray-400 disabled:opacity-20 rounded-lg transition-all">
              <ChevronLeft size={18} />
            </button>
            <button onClick={handleNext} disabled={currentSlide === ALL_SLIDES.length - 1}
              className="p-2 border border-gray-200 hover:border-wd-dark hover:text-wd-dark text-gray-400 disabled:opacity-20 rounded-lg transition-all">
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
