"use client";

import { useState, useEffect } from 'react';

export default function CookieBanner() {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookieConsent');
    if (!consent) {
      setShowBanner(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookieConsent', 'accepted');
    setShowBanner(false);
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('consent', 'update', { analytics_storage: 'granted' });
    }
  };

  const handleReject = () => {
    localStorage.setItem('cookieConsent', 'rejected');
    setShowBanner(false);
  };

  if (!showBanner) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-navy text-white p-4 z-50 shadow-lg">
      <div className="container-custom mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm">
          Usamos cookies propias y de terceros (Google Analytics) para analizar el tráfico. Puedes aceptarlas o rechazarlas.
        </p>
        <div className="flex gap-4 shrink-0">
          <button 
            onClick={handleReject}
            className="px-4 py-2 text-sm font-semibold text-white border border-white/30 rounded-md hover:bg-white/10 transition-colors"
          >
            Rechazar
          </button>
          <button 
            onClick={handleAccept}
            className="px-4 py-2 text-sm font-semibold bg-blue text-white rounded-md hover:bg-blue-dark transition-colors"
          >
            Aceptar cookies
          </button>
        </div>
      </div>
    </div>
  );
}
