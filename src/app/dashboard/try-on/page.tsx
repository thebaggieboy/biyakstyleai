"use client";
import React, { useState } from 'react';

export default function VirtualTryOn() {
  const [outfitSelected, setOutfitSelected] = useState(false);
  const [photoUploaded, setPhotoUploaded] = useState(false);
  const [isGenerating, setIsGenerating] = useState(false);
  const [resultImage, setResultImage] = useState<string | null>(null);

  const handleGenerate = () => {
    setIsGenerating(true);
    setTimeout(() => {
      setResultImage('https://via.placeholder.com/400x600/fdfbf7/2d3748?text=Try-On+Result');
      setIsGenerating(false);
    }, 3000);
  };

  return (
    <div style={{ maxWidth: '800px', margin: '0 auto' }}>
      <h1 style={{ fontSize: '2rem', color: 'var(--accent-navy)', marginBottom: '1rem' }}>Virtual Try-On</h1>
      <p style={{ color: 'var(--text-secondary)', marginBottom: '3rem' }}>See how an outfit looks on you before heading out.</p>

      {!resultImage ? (
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
          
          <div className="glass-panel hover-lift" style={{ padding: '2rem', textAlign: 'center', minHeight: '300px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', border: outfitSelected ? '2px solid var(--accent-emerald)' : '1px solid var(--border-color)' }}>
             {!outfitSelected ? (
               <>
                 <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>👗</div>
                 <h3 style={{ marginBottom: '1rem' }}>Step 1: Choose Outfit</h3>
                 <button className="btn btn-outline" onClick={() => setOutfitSelected(true)}>Select from Saved</button>
               </>
             ) : (
               <>
                 <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>✅</div>
                 <h3 style={{ marginBottom: '1rem' }}>Outfit Selected</h3>
                 <p style={{ color: 'var(--text-secondary)' }}>"Casual Friday Look"</p>
                 <button className="btn btn-outline" style={{ marginTop: '1rem' }} onClick={() => setOutfitSelected(false)}>Change</button>
               </>
             )}
          </div>
          
          <div className="glass-panel hover-lift" style={{ padding: '2rem', textAlign: 'center', minHeight: '300px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', border: photoUploaded ? '2px solid var(--accent-emerald)' : '1px solid var(--border-color)' }}>
            {!photoUploaded ? (
               <>
                 <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>📸</div>
                 <h3 style={{ marginBottom: '1rem' }}>Step 2: Upload Photo</h3>
                 <button className="btn btn-outline" onClick={() => setPhotoUploaded(true)}>Use Camera / Upload</button>
               </>
             ) : (
               <>
                 <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>✅</div>
                 <h3 style={{ marginBottom: '1rem' }}>Photo Ready</h3>
                 <p style={{ color: 'var(--text-secondary)' }}>Selfie.jpg</p>
                 <button className="btn btn-outline" style={{ marginTop: '1rem' }} onClick={() => setPhotoUploaded(false)}>Change</button>
               </>
             )}
          </div>
          
          <div style={{ gridColumn: '1 / -1', textAlign: 'center', marginTop: '2rem' }}>
             <button 
               className="btn btn-primary" 
               style={{ padding: '1rem 3rem', fontSize: '1.25rem' }} 
               disabled={!outfitSelected || !photoUploaded || isGenerating}
               onClick={handleGenerate}
             >
               {isGenerating ? 'AI is Generating... ✨' : 'Generate Try-On'}
             </button>
          </div>
        </div>
      ) : (
        <div className="animate-fade-in" style={{ textAlign: 'center' }}>
           <div className="glass-panel" style={{ padding: '1rem', display: 'inline-block', marginBottom: '2rem' }}>
             <img src={resultImage} alt="Try-on Result" style={{ borderRadius: 'var(--border-radius-sm)', maxWidth: '100%', display: 'block' }} />
           </div>
           
           <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem' }}>
              <button className="btn btn-outline" onClick={() => setResultImage(null)}>Try Another Outfit</button>
              <button className="btn btn-navy">Share Look</button>
           </div>
        </div>
      )}
    </div>
  );
}
