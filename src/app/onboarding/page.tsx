"use client";
import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function Onboarding() {
  const router = useRouter();
  const [step, setStep] = useState(1);
  const [preferences, setPreferences] = useState({
    bodyShape: '',
    modestyLevel: '',
    budget: '',
  });

  const nextStep = () => {
    if (step < 3) setStep(step + 1);
    else {
      // Finish onboarding
      router.push('/dashboard');
    }
  };

  return (
    <div className="container" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', padding: '3rem 1.5rem' }}>
      <header style={{ marginBottom: '3rem' }}>
        <h1 style={{ fontSize: '1.5rem' }}>BiyakStyle AI</h1>
      </header>
      
      <main style={{ flex: 1, maxWidth: '600px', margin: '0 auto', width: '100%' }}>
        <div style={{ marginBottom: '2rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <span style={{ color: 'var(--text-secondary)' }}>Step {step} of 3</span>
          <div style={{ display: 'flex', gap: '4px' }}>
            {[1, 2, 3].map(i => (
              <div key={i} style={{ 
                height: '4px', width: '40px', borderRadius: '4px',
                backgroundColor: i <= step ? 'var(--accent-emerald)' : 'var(--bg-secondary)'
              }} />
            ))}
          </div>
        </div>

        <div className="glass-panel animate-fade-in" style={{ padding: '2.5rem' }}>
          {step === 1 && (
            <div>
              <h2 style={{ fontSize: '2rem', marginBottom: '1.5rem' }}>What's your preferred modesty level?</h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {['Always cover neck & arms', 'Prefers loose silhouettes', 'Knee-length or longer', 'Flexible / Mix & Match'].map(level => (
                  <button 
                    key={level}
                    className="btn btn-outline hover-lift"
                    style={{ 
                      justifyContent: 'flex-start', padding: '1.5rem', 
                      backgroundColor: preferences.modestyLevel === level ? 'var(--bg-secondary)' : 'transparent',
                      borderColor: preferences.modestyLevel === level ? 'var(--accent-emerald)' : 'var(--border-color)'
                    }}
                    onClick={() => setPreferences({...preferences, modestyLevel: level})}
                  >
                    <span style={{ fontSize: '1.125rem' }}>{level}</span>
                  </button>
                ))}
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="animate-fade-in">
              <h2 style={{ fontSize: '2rem', marginBottom: '1.5rem' }}>Tell us about your body shape</h2>
              <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem' }}>This helps our AI suggest flattering, modest cuts.</p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {['Pear-shaped (wider hips)', 'Apple-shaped (wider midsection)', 'Hourglass (defined waist)', 'Rectangle (straight)'].map(shape => (
                  <button 
                    key={shape}
                    className="btn btn-outline hover-lift"
                    style={{ 
                      justifyContent: 'flex-start', padding: '1.5rem', 
                      backgroundColor: preferences.bodyShape === shape ? 'var(--bg-secondary)' : 'transparent',
                      borderColor: preferences.bodyShape === shape ? 'var(--accent-emerald)' : 'var(--border-color)'
                    }}
                    onClick={() => setPreferences({...preferences, bodyShape: shape})}
                  >
                    <span style={{ fontSize: '1.125rem' }}>{shape}</span>
                  </button>
                ))}
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="animate-fade-in">
              <h2 style={{ fontSize: '2rem', marginBottom: '1.5rem' }}>What's your typical budget?</h2>
              <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem' }}>We'll recommend items that fit your budget.</p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {['Budget-friendly ($0 - $50)', 'Mid-range ($50 - $150)', 'Premium ($150+)'].map(budget => (
                  <button 
                    key={budget}
                    className="btn btn-outline hover-lift"
                    style={{ 
                      justifyContent: 'flex-start', padding: '1.5rem', 
                      backgroundColor: preferences.budget === budget ? 'var(--bg-secondary)' : 'transparent',
                      borderColor: preferences.budget === budget ? 'var(--accent-emerald)' : 'var(--border-color)'
                    }}
                    onClick={() => setPreferences({...preferences, budget: budget})}
                  >
                    <span style={{ fontSize: '1.125rem' }}>{budget}</span>
                  </button>
                ))}
              </div>
            </div>
          )}

          <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '3rem' }}>
            {step > 1 ? (
               <button className="btn btn-outline" onClick={() => setStep(step - 1)}>Back</button>
            ) : <div></div>}
            
            <button 
              className="btn btn-primary" 
              onClick={nextStep}
              disabled={
                (step === 1 && !preferences.modestyLevel) || 
                (step === 2 && !preferences.bodyShape) || 
                (step === 3 && !preferences.budget)
              }
              style={{ width: '120px' }}
            >
              {step === 3 ? 'Finish' : 'Next'}
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}
