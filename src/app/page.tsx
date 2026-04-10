'use client';
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

const FEATURES = [
  {
    emoji: '📸',
    title: 'AI Digital Closet',
    desc: 'Upload photos of your clothes. AI auto-removes backgrounds, tags by category (Abaya, Maxi Skirt, Cardigan), fabric, and color — transforming your wardrobe into a professional editorial catalogue.',
    accent: '#e8f5ef',
    accentBorder: '#c3e8d8',
    tag: 'Core Feature',
  },
  {
    emoji: '🎨',
    title: 'Outfit Builder',
    desc: 'Drag, layer, and combine your own pieces interactively. Visualise complete modest outfits before you get dressed — including layering a cardigan over a sleeveless maxi dress.',
    accent: '#e8edf8',
    accentBorder: '#c8d4f0',
    tag: 'Creative',
  },
  {
    emoji: '✨',
    title: 'Virtual Try-On',
    desc: 'Upload a selfie and watch AI generate a photorealistic image of you wearing any outfit. Shop smarter, return less, and wear better. Powered by Generative AI.',
    accent: '#f5ecf2',
    accentBorder: '#e8cfe0',
    tag: 'AI Magic',
  },
  {
    emoji: '🛍️',
    title: 'Curated Marketplace',
    desc: 'Discover affordable local vendors selling modest pieces that complement exactly what you already own. GPS-powered local sourcing cuts shipping costs.',
    accent: '#f5f2e8',
    accentBorder: '#e8dfc3',
    tag: 'Marketplace',
  },
  {
    emoji: '🧕',
    title: 'Modesty Filter Engine',
    desc: 'Set your personal preferences — "always covers neck," "loose silhouettes," "knee-length coverage." The AI only suggests outfits that respect your specific modesty rules.',
    accent: '#edf5e8',
    accentBorder: '#cde8c3',
    tag: 'Personalized',
  },
  {
    emoji: '💸',
    title: 'Affordability Algorithm',
    desc: 'When suggesting a "missing piece" to complete your look, our AI prioritises items within your budget — finding similar styles from affordable vendors first.',
    accent: '#f5e8e8',
    accentBorder: '#e8c3c3',
    tag: 'Smart',
  },
];

const STEPS = [
  {
    num: '01',
    title: 'Build Your Digital Closet',
    desc: 'Take photos of your clothes. The AI instantly background-removes them, creating professional product-style shots, then auto-tags every item by type, colour, and fabric.',
    icon: '📸',
  },
  {
    num: '02',
    title: 'Set Your Style Profile',
    desc: 'Tell us your modesty preferences, body shape, skin tone, and budget. Our styling engine only ever works within your personal guidelines.',
    icon: '🎯',
  },
  {
    num: '03',
    title: 'Get Daily Outfit Suggestions',
    desc: 'Open the app, select your occasion, and receive 3 ready-to-wear outfits built entirely from clothes you already own.',
    icon: '👗',
  },
  {
    num: '04',
    title: 'Try Before You Buy',
    desc: 'Upload a selfie for any outfit — including a recommended purchase — to see exactly how it will look on your body before spending a penny.',
    icon: '✨',
  },
];

const PLANS = [
  {
    name: 'Free',
    price: '$0',
    period: 'forever',
    desc: 'Perfect to get started and explore your wardrobe.',
    highlight: false,
    features: [
      'Digitise up to 20 wardrobe items',
      'AI auto-tagging & background removal',
      'Basic text-based outfit generator',
      '5 Virtual Try-Ons per month',
      'Marketplace browsing',
    ],
    cta: 'Start for Free',
    ctaHref: '/login',
  },
  {
    name: 'Premium',
    price: '$5',
    period: 'per month',
    desc: 'Unlock the full power of your AI personal stylist.',
    highlight: true,
    features: [
      'Unlimited wardrobe items',
      'Advanced AI Styling Engine',
      'Unlimited Virtual Try-On',
      'Photo Studio access',
      'Priority local vendor matches',
      'Modesty filter customisation',
      'Body shape AI analysis',
    ],
    cta: 'Go Premium',
    ctaHref: '/login',
  },
];

const TESTIMONIALS = [
  {
    name: 'Fatima A.',
    location: 'London, UK',
    quote: 'I had 60 items in my wardrobe and felt like I had nothing to wear. BiyakStyle showed me 40 outfits I\'d never thought of. It\'s genuinely changed how I dress.',
    avatar: '🧕',
  },
  {
    name: 'Amira S.',
    location: 'Dubai, UAE',
    quote: 'The Virtual Try-On is unbelievable. I bought a blazer I was unsure about — tried it on in the app first — and it\'s now my favourite piece.',
    avatar: '👩',
  },
  {
    name: 'Nour K.',
    location: 'Toronto, CA',
    quote: 'Finding affordable modest fashion was always a struggle. The marketplace connected me to a local vendor 10 minutes from my house. No shipping. No hassle.',
    avatar: '🧣',
  },
];

const STATS = [
  { value: '50K+', label: 'Sisters Styling Modestly' },
  { value: '$300B', label: 'Global Modest Fashion Market' },
  { value: '2M+', label: 'Wardrobe Items Digitised' },
  { value: '<5s', label: 'Virtual Try-On Generation' },
];

const COMPETITORS = [
  { name: 'Zedit / Alta', focus: 'General wardrobe management', advantage: 'Our Modesty Filter engine handles layering & coverage rules that general apps completely ignore.' },
  { name: 'Fashn.AI', focus: 'High-end Virtual Try-On', advantage: 'We focus on your existing wardrobe & affordability — not just selling new luxury items.' },
  { name: 'Stitch Fix', focus: 'Human styling + shipping boxes', advantage: 'We are digital-first & instant. No waiting. No subscription boxes. Much lower cost structure.' },
];

export default function Home() {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const faqs = [
    { q: 'Is BiyakStyle AI free to use?', a: 'Yes! Our Free tier lets you digitise up to 20 wardrobe items, use the basic outfit generator, and get 5 Virtual Try-Ons per month — all completely free, no credit card required.' },
    { q: 'How does the modesty filter work?', a: 'During onboarding you set your personal preferences — neck coverage, sleeve length, hemline rules, and silhouette preferences. The AI only generates outfits that match your specific requirements. You\'re always in control.' },
    { q: 'How accurate is the Virtual Try-On?', a: 'Our AI generates photorealistic outfit previews in under 5 seconds. For MVP we use a hybrid 2D overlay + AI approach, with full generative AI try-on available in Premium.' },
    { q: 'How does the Marketplace work?', a: 'We partner with local, independent modest fashion vendors. When you need a "missing piece" to complete an outfit, we show you matching items from nearby vendors, often with no shipping costs.' },
    { q: 'Is my data private?', a: 'Absolutely. Your wardrobe photos and personal measurements are stored securely and never shared. You own your data.' },
  ];

  return (
    <>
      {/* ──────────── HERO ──────────── */}
      <div className="lp-hero-bg">
        <div className="lp-orb lp-orb-1" />
        <div className="lp-orb lp-orb-2" />
        <div className="lp-orb lp-orb-3" />

        {/* Nav */}
        <nav className="lp-nav container">
          <span className="lp-nav-logo">BiyakStyle AI</span>
          <div className="lp-nav-links">
            <a href="#features" className="lp-nav-link">Features</a>
            <a href="#how-it-works" className="lp-nav-link">How It Works</a>
            <a href="#marketplace" className="lp-nav-link">Marketplace</a>
            <a href="#pricing" className="lp-nav-link">Pricing</a>
          </div>
          <div className="lp-nav-actions">
            <Link href="/login" className="lp-nav-signin">Sign In</Link>
            <Link href="/login" className="btn btn-primary lp-nav-cta">Get Started →</Link>
          </div>
        </nav>

        {/* Hero Content */}
        <section className="lp-hero container animate-fade-in">
          <div className="lp-hero-inner">
            <div className="lp-hero-text">
              <div className="lp-badge">✦ AI-Powered Modest Fashion Platform</div>
              <h1 className="lp-headline">
                Your wardrobe.<br />
                <span className="lp-gradient-text">Unlocked by AI.</span>
              </h1>
              <p className="lp-sub">
                Stop saying "I have nothing to wear." BiyakStyle AI digitises your closet, builds
                modesty-first outfits from what you own, and finds affordable new pieces only when
                you truly need them.
              </p>
              <div className="lp-hero-actions">
                <Link href="/login" className="btn btn-primary lp-btn-primary">Open My Wardrobe</Link>
                <Link href="/dashboard/market" className="lp-btn-ghost">Explore Marketplace →</Link>
              </div>
              <div className="lp-hero-proof">
                <div className="lp-proof-avatars">
                  {['🧕','👩','🧣','👗','🌸'].map((e, i) => (
                    <span key={i} className="lp-avatar">{e}</span>
                  ))}
                </div>
                <span className="lp-proof-text">Join 12,000+ sisters styling modestly</span>
              </div>
            </div>
            <div className="lp-hero-visual">
              <div className="lp-hero-img-wrapper">
                <Image
                  src="/hero_illustration.png"
                  alt="BiyakStyle AI — Digital Wardrobe Assistant"
                  width={560}
                  height={560}
                  className="lp-hero-img"
                  priority
                />
                <div className="lp-hero-card lp-hero-card-top">
                  <span className="lp-hc-icon">✅</span>
                  <div>
                    <div className="lp-hc-title">AI Outfit Ready</div>
                    <div className="lp-hc-sub">Work look · 3 pieces · Modest ✓</div>
                  </div>
                </div>
                <div className="lp-hero-card lp-hero-card-bot">
                  <span className="lp-hc-icon">💄</span>
                  <div>
                    <div className="lp-hc-title">Try-On Complete</div>
                    <div className="lp-hc-sub">Generated in 3.2s</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* ──────────── STATS ──────────── */}
      <section className="lp-stats-band">
        <div className="container lp-stats-grid">
          {STATS.map(s => (
            <div key={s.label} className="lp-stat">
              <div className="lp-stat-value">{s.value}</div>
              <div className="lp-stat-label">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ──────────── PROBLEM STATEMENT ──────────── */}
      <section className="lp-problem container">
        <div className="lp-problem-inner">
          <div className="lp-problem-text">
            <div className="lp-section-tag">The Problem</div>
            <h2 className="lp-section-title">Mainstream fashion tech was never built for you.</h2>
            <p className="lp-section-desc">
              Women seeking modest fashion face challenges that nobody else is solving:
            </p>
            <ul className="lp-problem-list">
              {[
                { icon: '🔀', text: 'Layering complexity — visualising how a long sleeve fits under a dress is nearly impossible without trying it.' },
                { icon: '🔍', text: 'Fragmentation — finding modest-friendly items means scouring dozens of niche sites.' },
                { icon: '🛍️', text: 'Wardrobe inefficiency — buying new items because you don\'t know how to restyle what you already own.' },
                { icon: '📸', text: 'Visual gap — product photos rarely show items styled modestly, making purchases feel like a gamble.' },
              ].map((p, i) => (
                <li key={i} className="lp-problem-item">
                  <span className="lp-problem-icon">{p.icon}</span>
                  <span>{p.text}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="lp-problem-visual">
            <Image
              src="/wardrobe_mockup.png"
              alt="BiyakStyle AI digital wardrobe app interface"
              width={460}
              height={500}
              className="lp-problem-img"
            />
          </div>
        </div>
      </section>

      {/* ──────────── HOW IT WORKS ──────────── */}
      <section className="lp-hiw" id="how-it-works">
        <div className="container">
          <div className="lp-section-tag-center">How It Works</div>
          <h2 className="lp-section-title lp-center">Four steps to a fully styled, modest wardrobe</h2>
          <p className="lp-section-desc lp-center" style={{ maxWidth: '600px', margin: '0 auto 4rem' }}>
            From closet chaos to daily outfit confidence — all driven by AI that understands modesty.
          </p>
          <div className="lp-steps">
            {STEPS.map((step, i) => (
              <div key={i} className="lp-step">
                <div className="lp-step-num">{step.num}</div>
                <div className="lp-step-icon">{step.icon}</div>
                <h3 className="lp-step-title">{step.title}</h3>
                <p className="lp-step-desc">{step.desc}</p>
                {i < STEPS.length - 1 && <div className="lp-step-arrow">→</div>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ──────────── FEATURES ──────────── */}
      <section className="lp-features container" id="features">
        <div className="lp-section-tag-center">Core Features</div>
        <h2 className="lp-section-title lp-center">Everything built for modest fashion</h2>
        <p className="lp-section-desc lp-center" style={{ maxWidth: '580px', margin: '0 auto 3.5rem' }}>
          Not a generic fashion app with a modesty filter bolted on — built modesty-first from the ground up.
        </p>
        <div className="lp-features-grid">
          {FEATURES.map(f => (
            <div
              key={f.title}
              className="lp-feature-card"
              style={{
                '--card-bg': f.accent,
                '--card-border': f.accentBorder,
              } as React.CSSProperties}
            >
              <div className="lp-feature-tag">{f.tag}</div>
              <div className="lp-feature-icon">{f.emoji}</div>
              <h3 className="lp-feature-title">{f.title}</h3>
              <p className="lp-feature-desc">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ──────────── VIRTUAL TRY-ON ──────────── */}
      <section className="lp-tryon">
        <div className="container lp-tryon-inner">
          <div className="lp-tryon-visual">
            <Image
              src="/tryon_mockup.png"
              alt="Virtual Try-On AI technology for modest fashion"
              width={540}
              height={480}
              className="lp-tryon-img"
            />
            <div className="lp-tryon-badge">
              <span className="lp-tryon-badge-dot" />
              AI generating your look...
            </div>
          </div>
          <div className="lp-tryon-text">
            <div className="lp-section-tag">Virtual Try-On</div>
            <h2 className="lp-section-title">See it on you before you buy it.</h2>
            <p className="lp-section-desc">
              Upload a single selfie and our Generative AI produces a photorealistic image of you
              wearing any outfit — including items you don't yet own. No more guessing. No more
              returns. Just confident modest style.
            </p>
            <ul className="lp-tryon-list">
              {[
                'Generated in under 5 seconds',
                'Works with layered modest outfits',
                'Try-on marketplace items before buying',
                '5 free try-ons/month on Free plan',
                'Unlimited with Premium',
              ].map((item, i) => (
                <li key={i} className="lp-tryon-item">
                  <span className="lp-check">✓</span>
                  {item}
                </li>
              ))}
            </ul>
            <Link href="/login" className="btn btn-primary lp-btn-primary" style={{ marginTop: '2rem' }}>
              Try It Free →
            </Link>
          </div>
        </div>
      </section>

      {/* ──────────── MARKETPLACE ──────────── */}
      <section className="lp-marketplace container" id="marketplace">
        <div className="lp-marketplace-inner">
          <div className="lp-marketplace-text">
            <div className="lp-section-tag">The Marketplace</div>
            <h2 className="lp-section-title">Shop locally. Dress modestly. Spend less.</h2>
            <p className="lp-section-desc">
              When our AI identifies a "missing piece" in your wardrobe, it doesn't send you to
              an overpriced designer. It connects you to affordable, vetted local vendors —
              often within your own city.
            </p>
            <div className="lp-market-cards">
              {[
                { icon: '📍', title: 'GPS-Powered Sourcing', desc: 'Find vendors near you to eliminate shipping costs entirely.' },
                { icon: '🔎', title: '"Shop the Look" for Less', desc: 'AI finds dupe styles from affordable vendors when you love an expensive item.' },
                { icon: '🤝', title: 'Vetted Local Brands', desc: 'Every vendor is reviewed for quality and modesty alignment before listing.' },
              ].map((m, i) => (
                <div key={i} className="lp-market-card">
                  <span className="lp-market-icon">{m.icon}</span>
                  <div>
                    <div className="lp-market-card-title">{m.title}</div>
                    <div className="lp-market-card-desc">{m.desc}</div>
                  </div>
                </div>
              ))}
            </div>
            <Link href="/dashboard/market" className="btn btn-primary lp-btn-primary" style={{ marginTop: '2rem' }}>
              Browse Marketplace →
            </Link>
          </div>
          <div className="lp-marketplace-visual">
            <Image
              src="/marketplace_illustration.png"
              alt="BiyakStyle AI curated modest fashion marketplace"
              width={500}
              height={480}
              className="lp-marketplace-img"
            />
          </div>
        </div>
      </section>

      {/* ──────────── PRICING ──────────── */}
      <section className="lp-pricing" id="pricing">
        <div className="container">
          <div className="lp-section-tag-center">Pricing</div>
          <h2 className="lp-section-title lp-center">Personal styling shouldn't cost a fortune</h2>
          <p className="lp-section-desc lp-center" style={{ maxWidth: '520px', margin: '0 auto 3.5rem' }}>
            Start free, upgrade whenever you're ready. No contracts. Cancel anytime.
          </p>
          <div className="lp-plans">
            {PLANS.map(plan => (
              <div
                key={plan.name}
                className={`lp-plan${plan.highlight ? ' lp-plan-highlight' : ''}`}
              >
                {plan.highlight && <div className="lp-plan-badge">Most Popular</div>}
                <div className="lp-plan-name">{plan.name}</div>
                <div className="lp-plan-price">
                  <span className="lp-plan-amount">{plan.price}</span>
                  <span className="lp-plan-period">/{plan.period}</span>
                </div>
                <p className="lp-plan-desc">{plan.desc}</p>
                <ul className="lp-plan-features">
                  {plan.features.map((f, i) => (
                    <li key={i} className="lp-plan-feature">
                      <span className="lp-check">✓</span>
                      {f}
                    </li>
                  ))}
                </ul>
                <Link
                  href={plan.ctaHref}
                  className={`btn ${plan.highlight ? 'btn-primary' : 'lp-btn-outline-navy'} lp-plan-cta`}
                >
                  {plan.cta}
                </Link>
              </div>
            ))}
          </div>
          <p className="lp-pricing-note">
            💼 Marketplace Commission Model: Vendors pay a 5–10% commission on sales. Your use is always subsidised by the brands, not you.
          </p>
        </div>
      </section>

      {/* ──────────── TESTIMONIALS ──────────── */}
      <section className="lp-testimonials container">
        <div className="lp-section-tag-center">What Sisters Are Saying</div>
        <h2 className="lp-section-title lp-center">Real women. Real wardrobes.</h2>
        <div className="lp-testimonials-grid">
          {TESTIMONIALS.map((t, i) => (
            <div key={i} className="lp-testimonial">
              <div className="lp-t-avatar">{t.avatar}</div>
              <blockquote className="lp-t-quote">"{t.quote}"</blockquote>
              <div className="lp-t-name">{t.name}</div>
              <div className="lp-t-location">📍 {t.location}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ──────────── WHY US ──────────── */}
      <section className="lp-why">
        <div className="container">
          <div className="lp-section-tag-center">Competitive Edge</div>
          <h2 className="lp-section-title lp-center">Why BiyakStyle AI wins</h2>
          <div className="lp-competitors">
            <div className="lp-comp-header">
              <div>Competitor</div>
              <div>Their Focus</div>
              <div>Our Advantage</div>
            </div>
            {COMPETITORS.map((c, i) => (
              <div key={i} className="lp-comp-row">
                <div className="lp-comp-name">{c.name}</div>
                <div className="lp-comp-focus">{c.focus}</div>
                <div className="lp-comp-adv">
                  <span className="lp-check">✓</span> {c.advantage}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ──────────── VALUES ──────────── */}
      <section className="lp-values container">
        <div className="lp-section-tag-center">Our Core Values</div>
        <h2 className="lp-section-title lp-center">Built on principles, not just algorithms</h2>
        <div className="lp-values-grid">
          {[
            { icon: '🕌', title: 'Modesty First', desc: 'Every recommendation respects cultural and religious guidelines. Modesty is the foundation, not a filter.' },
            { icon: '🌱', title: 'Sustainability', desc: 'We promote "shop your closet" behaviour and mindful consumption — because the most sustainable outfit is one you already own.' },
            { icon: '🌍', title: 'Inclusivity', desc: 'Serving diverse body types, skin tones, and definitions of modesty. Every sister belongs here.' },
            { icon: '💚', title: 'Affordability', desc: 'Personal styling shouldn\'t be a luxury. We make it accessible to everyone, not just the high-end market.' },
          ].map((v, i) => (
            <div key={i} className="lp-value-card">
              <div className="lp-value-icon">{v.icon}</div>
              <h3 className="lp-value-title">{v.title}</h3>
              <p className="lp-value-desc">{v.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ──────────── FAQ ──────────── */}
      <section className="lp-faq container">
        <div className="lp-section-tag-center">FAQ</div>
        <h2 className="lp-section-title lp-center">Frequently asked questions</h2>
        <div className="lp-faq-list">
          {faqs.map((faq, i) => (
            <div key={i} className={`lp-faq-item${activeFaq === i ? ' lp-faq-open' : ''}`}>
              <button className="lp-faq-q" onClick={() => setActiveFaq(activeFaq === i ? null : i)}>
                {faq.q}
                <span className="lp-faq-chevron">{activeFaq === i ? '−' : '+'}</span>
              </button>
              {activeFaq === i && <p className="lp-faq-a">{faq.a}</p>}
            </div>
          ))}
        </div>
      </section>

      {/* ──────────── CTA ──────────── */}
      <section className="lp-cta-section container">
        <div className="lp-cta-card">
          <div className="lp-cta-orb" />
          <div className="lp-cta-orb lp-cta-orb-2" />
          <div className="lp-section-tag-light">Get Started Today</div>
          <h2 className="lp-cta-headline">
            Your closet is full.<br />Let AI style it.
          </h2>
          <p className="lp-cta-sub">
            Free forever plan. No credit card required. Join 12,000+ modest fashion sisters.
          </p>
          <div className="lp-cta-actions">
            <Link href="/login" className="lp-cta-btn-primary">
              Create Free Account →
            </Link>
            <Link href="/dashboard/market" className="lp-cta-btn-ghost">
              Explore Marketplace
            </Link>
          </div>
        </div>
      </section>

      {/* ──────────── FOOTER ──────────── */}
      <footer className="lp-footer">
        <div className="container lp-footer-inner">
          <div className="lp-footer-brand">
            <div className="lp-footer-logo">BiyakStyle AI</div>
            <p className="lp-footer-tagline">
              Empowering modest fashion through AI.<br />
              Modesty first. Always.
            </p>
          </div>
          <div className="lp-footer-links">
            <div className="lp-footer-col">
              <div className="lp-footer-col-title">Product</div>
              <a href="#features">Features</a>
              <a href="#how-it-works">How It Works</a>
              <a href="#pricing">Pricing</a>
              <Link href="/dashboard/market">Marketplace</Link>
            </div>
            <div className="lp-footer-col">
              <div className="lp-footer-col-title">Platform</div>
              <Link href="/login">Sign In</Link>
              <Link href="/login">Get Started</Link>
              <a href="#faq">FAQ</a>
            </div>
            <div className="lp-footer-col">
              <div className="lp-footer-col-title">Community</div>
              <a href="#">Instagram</a>
              <a href="#">TikTok</a>
              <a href="#">For Vendors</a>
            </div>
          </div>
        </div>
        <div className="lp-footer-bottom container">
          <span>© 2026 BiyakStyle AI. All rights reserved.</span>
          <span>Built with love for the modest fashion community 🧕</span>
        </div>
      </footer>

      <style dangerouslySetInnerHTML={{__html: `
        /* ── Reset & Base ── */
        .lp-hero-bg {
          position: relative;
          overflow: hidden;
          background: linear-gradient(160deg, #fdfbf7 0%, #eef6f2 40%, #eff2f8 100%);
          padding-bottom: 6rem;
          min-height: 100vh;
        }

        /* ── Orbs ── */
        .lp-orb {
          position: absolute;
          border-radius: 50%;
          filter: blur(80px);
          opacity: 0.5;
          pointer-events: none;
        }
        .lp-orb-1 { width: 500px; height: 500px; background: radial-gradient(#a8d8c8, transparent); top: -150px; right: -120px; }
        .lp-orb-2 { width: 360px; height: 360px; background: radial-gradient(#b8c8e8, transparent); bottom: 80px; left: -100px; }
        .lp-orb-3 { width: 240px; height: 240px; background: radial-gradient(#f0b8c8, transparent); top: 40%; left: 55%; }

        /* ── Navigation ── */
        .lp-nav {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 1.5rem;
          position: relative;
          z-index: 20;
        }
        .lp-nav-logo {
          font-weight: 800;
          font-size: 1.25rem;
          color: var(--accent-navy);
          letter-spacing: -0.02em;
        }
        .lp-nav-links {
          display: flex;
          gap: 2rem;
          align-items: center;
        }
        .lp-nav-link {
          color: var(--text-secondary);
          font-size: 0.9rem;
          font-weight: 500;
          transition: color 0.2s;
          text-decoration: none;
        }
        .lp-nav-link:hover { color: var(--accent-navy); }
        .lp-nav-actions {
          display: flex;
          gap: 1rem;
          align-items: center;
        }
        .lp-nav-signin {
          color: var(--text-secondary);
          font-size: 0.9rem;
          font-weight: 500;
          transition: color 0.2s;
        }
        .lp-nav-signin:hover { color: var(--accent-navy); }
        .lp-nav-cta {
          font-size: 0.9rem;
          padding: 0.6rem 1.25rem;
          border-radius: 10px;
        }

        /* ── Hero ── */
        .lp-hero {
          padding: 5rem 1.5rem 3rem;
          position: relative;
          z-index: 5;
        }
        .lp-hero-inner {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4rem;
          align-items: center;
        }
        @media (max-width: 900px) {
          .lp-hero-inner { grid-template-columns: 1fr; }
          .lp-hero-visual { display: none; }
          .lp-hero-text { text-align: center; }
          .lp-hero-actions { justify-content: center; }
          .lp-hero-proof { justify-content: center; }
          .lp-nav-links { display: none; }
        }
        .lp-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
          background: rgba(39,103,73,0.1);
          color: var(--accent-emerald);
          font-size: 0.82rem;
          font-weight: 600;
          padding: 0.4rem 1rem;
          border-radius: 24px;
          border: 1px solid rgba(39,103,73,0.2);
          margin-bottom: 1.5rem;
        }
        .lp-headline {
          font-size: clamp(2.8rem, 5.5vw, 4.2rem);
          font-weight: 800;
          letter-spacing: -0.04em;
          line-height: 1.08;
          margin-bottom: 1.5rem;
          color: var(--accent-navy);
        }
        .lp-gradient-text {
          background: linear-gradient(135deg, var(--accent-emerald) 0%, #2a6fa8 60%, #8b5cf6 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        .lp-sub {
          font-size: 1.1rem;
          color: var(--text-secondary);
          max-width: 540px;
          line-height: 1.75;
          margin-bottom: 2.5rem;
        }
        .lp-hero-actions {
          display: flex;
          gap: 1rem;
          flex-wrap: wrap;
          margin-bottom: 2rem;
        }
        .lp-btn-primary {
          font-size: 1rem;
          padding: 0.85rem 2rem;
          border-radius: 12px;
          box-shadow: 0 4px 20px rgba(39,103,73,0.3);
          transition: all 0.2s;
        }
        .lp-btn-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 30px rgba(39,103,73,0.4);
        }
        .lp-btn-ghost {
          font-size: 1rem;
          padding: 0.85rem 1.75rem;
          border-radius: 12px;
          background: rgba(255,255,255,0.75);
          backdrop-filter: blur(8px);
          border: 1.5px solid var(--border-color);
          color: var(--accent-navy);
          display: inline-flex;
          align-items: center;
          font-weight: 600;
          transition: all 0.2s;
          text-decoration: none;
        }
        .lp-btn-ghost:hover {
          background: white;
          border-color: var(--accent-navy);
          transform: translateY(-2px);
        }
        .lp-hero-proof {
          display: flex;
          align-items: center;
          gap: 0.75rem;
        }
        .lp-proof-avatars {
          display: flex;
        }
        .lp-avatar {
          width: 32px;
          height: 32px;
          border-radius: 50%;
          background: var(--bg-secondary);
          border: 2px solid white;
          margin-left: -8px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1rem;
        }
        .lp-avatar:first-child { margin-left: 0; }
        .lp-proof-text {
          font-size: 0.88rem;
          color: var(--text-secondary);
          font-weight: 500;
        }

        /* Hero Visual */
        .lp-hero-visual {
          position: relative;
          display: flex;
          justify-content: center;
        }
        .lp-hero-img-wrapper {
          position: relative;
        }
        .lp-hero-img {
          border-radius: 28px;
          object-fit: cover;
          width: 100%;
          max-width: 480px;
          height: auto;
          box-shadow: 0 30px 80px rgba(26,54,93,0.15);
        }
        .lp-hero-card {
          position: absolute;
          background: rgba(255,255,255,0.92);
          backdrop-filter: blur(16px);
          border: 1px solid rgba(255,255,255,0.8);
          border-radius: 16px;
          padding: 0.8rem 1.2rem;
          display: flex;
          align-items: center;
          gap: 0.75rem;
          box-shadow: 0 8px 32px rgba(0,0,0,0.12);
          animation: lp-card-float 4s ease-in-out infinite;
        }
        .lp-hero-card-top { top: 24px; left: -24px; }
        .lp-hero-card-bot { bottom: 40px; right: -24px; animation-delay: 2s; }
        @keyframes lp-card-float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-8px); }
        }
        .lp-hc-icon { font-size: 1.5rem; }
        .lp-hc-title { font-weight: 700; font-size: 0.85rem; color: var(--accent-navy); }
        .lp-hc-sub { font-size: 0.75rem; color: var(--text-secondary); }

        /* ── Stats Band ── */
        .lp-stats-band {
          background: var(--accent-navy);
          padding: 3rem 0;
        }
        .lp-stats-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 2rem;
          text-align: center;
        }
        @media (max-width: 700px) {
          .lp-stats-grid { grid-template-columns: repeat(2, 1fr); }
        }
        .lp-stat-value {
          font-size: 2.4rem;
          font-weight: 800;
          color: white;
          letter-spacing: -0.03em;
          line-height: 1;
          margin-bottom: 0.4rem;
        }
        .lp-stat-label {
          font-size: 0.85rem;
          color: rgba(255,255,255,0.65);
          font-weight: 500;
        }

        /* ── Section Utilities ── */
        .lp-section-tag {
          display: inline-flex;
          background: rgba(39,103,73,0.08);
          color: var(--accent-emerald);
          font-size: 0.78rem;
          font-weight: 700;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          padding: 0.3rem 0.85rem;
          border-radius: 24px;
          border: 1px solid rgba(39,103,73,0.15);
          margin-bottom: 1rem;
        }
        .lp-section-tag-center {
          display: flex;
          justify-content: center;
          margin-bottom: 1rem;
        }
        .lp-section-tag-center::after {
          content: attr(data-text);
        }
        /* Workaround: use a span for centered tags */
        .lp-section-tag-center {
          background: rgba(39,103,73,0.08);
          color: var(--accent-emerald);
          font-size: 0.78rem;
          font-weight: 700;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          padding: 0.3rem 0.85rem;
          border-radius: 24px;
          border: 1px solid rgba(39,103,73,0.15);
          width: fit-content;
          margin: 0 auto 1rem;
        }
        .lp-section-tag-light {
          background: rgba(255,255,255,0.15);
          color: rgba(255,255,255,0.9);
          font-size: 0.78rem;
          font-weight: 700;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          padding: 0.3rem 0.85rem;
          border-radius: 24px;
          border: 1px solid rgba(255,255,255,0.2);
          display: inline-flex;
          margin-bottom: 1rem;
        }
        .lp-section-title {
          font-size: clamp(1.8rem, 3.5vw, 2.6rem);
          font-weight: 800;
          letter-spacing: -0.03em;
          margin-bottom: 1rem;
          color: var(--accent-navy);
          line-height: 1.15;
        }
        .lp-center { text-align: center; }
        .lp-section-desc {
          font-size: 1.05rem;
          color: var(--text-secondary);
          line-height: 1.75;
          margin-bottom: 2rem;
        }

        /* ── Problem Section ── */
        .lp-problem {
          padding: 7rem 1.5rem;
        }
        .lp-problem-inner {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 5rem;
          align-items: center;
        }
        @media (max-width: 900px) {
          .lp-problem-inner { grid-template-columns: 1fr; }
          .lp-problem-visual { display: none; }
        }
        .lp-problem-list {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 1rem;
          margin-top: 1.5rem;
        }
        .lp-problem-item {
          display: flex;
          align-items: flex-start;
          gap: 0.85rem;
          font-size: 0.97rem;
          color: var(--text-secondary);
          line-height: 1.65;
        }
        .lp-problem-icon {
          font-size: 1.15rem;
          flex-shrink: 0;
          margin-top: 0.1rem;
        }
        .lp-problem-img {
          border-radius: 24px;
          object-fit: cover;
          width: 100%;
          height: auto;
          box-shadow: 0 20px 60px rgba(26,54,93,0.1);
        }

        /* ── How It Works ── */
        .lp-hiw {
          background: #f8f5f0;
          padding: 7rem 1.5rem;
        }
        .lp-steps {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 1.5rem;
          position: relative;
        }
        @media (max-width: 900px) {
          .lp-steps { grid-template-columns: repeat(2, 1fr); }
          .lp-step-arrow { display: none; }
        }
        @media (max-width: 560px) {
          .lp-steps { grid-template-columns: 1fr; }
        }
        .lp-step {
          background: white;
          border-radius: 20px;
          padding: 2rem 1.5rem;
          border: 1px solid var(--border-color);
          position: relative;
          text-align: center;
          transition: transform 0.25s, box-shadow 0.25s;
        }
        .lp-step:hover {
          transform: translateY(-6px);
          box-shadow: 0 16px 40px rgba(0,0,0,0.08);
        }
        .lp-step-num {
          font-size: 0.75rem;
          font-weight: 800;
          letter-spacing: 0.1em;
          color: var(--accent-emerald);
          opacity: 0.6;
          margin-bottom: 0.75rem;
        }
        .lp-step-icon {
          font-size: 2.2rem;
          margin-bottom: 1rem;
        }
        .lp-step-title {
          font-size: 1.05rem;
          font-weight: 700;
          color: var(--accent-navy);
          margin-bottom: 0.6rem;
        }
        .lp-step-desc {
          font-size: 0.9rem;
          color: var(--text-secondary);
          line-height: 1.65;
        }
        .lp-step-arrow {
          position: absolute;
          right: -1.25rem;
          top: 50%;
          transform: translateY(-50%);
          font-size: 1.5rem;
          color: var(--accent-emerald);
          z-index: 1;
        }

        /* ── Features ── */
        .lp-features {
          padding: 7rem 1.5rem;
        }
        .lp-features-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1.5rem;
        }
        @media (max-width: 900px) {
          .lp-features-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 560px) {
          .lp-features-grid { grid-template-columns: 1fr; }
        }
        .lp-feature-card {
          background: var(--card-bg, white);
          border: 1.5px solid var(--card-border, var(--border-color));
          border-radius: 20px;
          padding: 2rem;
          transition: transform 0.25s, box-shadow 0.25s;
          position: relative;
          overflow: hidden;
        }
        .lp-feature-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 16px 40px rgba(0,0,0,0.09);
        }
        .lp-feature-tag {
          display: inline-flex;
          font-size: 0.7rem;
          font-weight: 700;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: var(--accent-emerald);
          background: rgba(39,103,73,0.1);
          padding: 0.2rem 0.65rem;
          border-radius: 20px;
          margin-bottom: 1rem;
        }
        .lp-feature-icon {
          font-size: 2.4rem;
          margin-bottom: 1rem;
          display: block;
        }
        .lp-feature-title {
          font-size: 1.15rem;
          font-weight: 700;
          color: var(--accent-navy);
          margin-bottom: 0.6rem;
        }
        .lp-feature-desc {
          font-size: 0.92rem;
          color: var(--text-secondary);
          line-height: 1.7;
        }

        /* ── Virtual Try-On ── */
        .lp-tryon {
          background: linear-gradient(160deg, #0f2749 0%, #1a4d35 100%);
          padding: 7rem 1.5rem;
        }
        .lp-tryon-inner {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 5rem;
          align-items: center;
        }
        @media (max-width: 900px) {
          .lp-tryon-inner { grid-template-columns: 1fr; }
          .lp-tryon-visual { display: none; }
        }
        .lp-tryon-visual {
          position: relative;
        }
        .lp-tryon-img {
          border-radius: 24px;
          object-fit: cover;
          width: 100%;
          height: auto;
          box-shadow: 0 30px 80px rgba(0,0,0,0.4);
        }
        .lp-tryon-badge {
          position: absolute;
          bottom: 24px;
          left: 50%;
          transform: translateX(-50%);
          background: rgba(255,255,255,0.12);
          backdrop-filter: blur(16px);
          border: 1px solid rgba(255,255,255,0.2);
          color: white;
          font-size: 0.85rem;
          font-weight: 600;
          padding: 0.6rem 1.25rem;
          border-radius: 40px;
          display: flex;
          align-items: center;
          gap: 0.5rem;
          white-space: nowrap;
        }
        .lp-tryon-badge-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: #4ade80;
          animation: lp-pulse 1.5s ease-in-out infinite;
        }
        @keyframes lp-pulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.5; transform: scale(1.3); }
        }
        .lp-tryon-text .lp-section-tag {
          background: rgba(255,255,255,0.1);
          color: rgba(255,255,255,0.85);
          border-color: rgba(255,255,255,0.2);
        }
        .lp-tryon-text .lp-section-title {
          color: white;
        }
        .lp-tryon-text .lp-section-desc {
          color: rgba(255,255,255,0.7);
        }
        .lp-tryon-list {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }
        .lp-tryon-item {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          font-size: 0.95rem;
          color: rgba(255,255,255,0.85);
        }
        .lp-check {
          width: 22px;
          height: 22px;
          border-radius: 50%;
          background: rgba(39,103,73,0.3);
          border: 1.5px solid var(--accent-emerald);
          color: #4ade80;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          font-size: 0.7rem;
          font-weight: 800;
          flex-shrink: 0;
        }
        .lp-tryon-text .lp-btn-primary {
          display: inline-flex;
        }

        /* ── Marketplace ── */
        .lp-marketplace {
          padding: 7rem 1.5rem;
        }
        .lp-marketplace-inner {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 5rem;
          align-items: center;
        }
        @media (max-width: 900px) {
          .lp-marketplace-inner { grid-template-columns: 1fr; }
          .lp-marketplace-visual { display: none; }
        }
        .lp-marketplace-img {
          border-radius: 24px;
          object-fit: cover;
          width: 100%;
          height: auto;
          box-shadow: 0 20px 60px rgba(26,54,93,0.1);
        }
        .lp-market-cards {
          display: flex;
          flex-direction: column;
          gap: 1rem;
          margin-top: 1.5rem;
        }
        .lp-market-card {
          display: flex;
          align-items: flex-start;
          gap: 1rem;
          background: #f8f5f0;
          border: 1px solid var(--border-color);
          border-radius: 14px;
          padding: 1rem 1.25rem;
        }
        .lp-market-icon { font-size: 1.5rem; flex-shrink: 0; }
        .lp-market-card-title {
          font-weight: 700;
          font-size: 0.95rem;
          color: var(--accent-navy);
          margin-bottom: 0.25rem;
        }
        .lp-market-card-desc {
          font-size: 0.88rem;
          color: var(--text-secondary);
          line-height: 1.55;
        }

        /* ── Pricing ── */
        .lp-pricing {
          background: #f8f5f0;
          padding: 7rem 1.5rem;
        }
        .lp-plans {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 2rem;
          max-width: 860px;
          margin: 0 auto;
        }
        @media (max-width: 680px) {
          .lp-plans { grid-template-columns: 1fr; }
        }
        .lp-plan {
          background: white;
          border: 1.5px solid var(--border-color);
          border-radius: 24px;
          padding: 2.5rem 2rem;
          position: relative;
          transition: transform 0.25s, box-shadow 0.25s;
        }
        .lp-plan:hover {
          transform: translateY(-4px);
          box-shadow: 0 16px 40px rgba(0,0,0,0.08);
        }
        .lp-plan-highlight {
          background: linear-gradient(160deg, #0f2749 0%, #1a4d35 100%);
          border-color: transparent;
        }
        .lp-plan-badge {
          position: absolute;
          top: -16px;
          left: 50%;
          transform: translateX(-50%);
          background: var(--accent-emerald);
          color: white;
          font-size: 0.75rem;
          font-weight: 700;
          padding: 0.3rem 1rem;
          border-radius: 20px;
          white-space: nowrap;
        }
        .lp-plan-name {
          font-weight: 800;
          font-size: 1rem;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          color: var(--accent-navy);
          margin-bottom: 0.75rem;
        }
        .lp-plan-highlight .lp-plan-name { color: rgba(255,255,255,0.65); }
        .lp-plan-price {
          display: flex;
          align-items: baseline;
          gap: 0.25rem;
          margin-bottom: 0.5rem;
        }
        .lp-plan-amount {
          font-size: 3rem;
          font-weight: 800;
          letter-spacing: -0.04em;
          color: var(--accent-navy);
        }
        .lp-plan-highlight .lp-plan-amount { color: white; }
        .lp-plan-period {
          font-size: 0.9rem;
          color: var(--text-secondary);
        }
        .lp-plan-highlight .lp-plan-period { color: rgba(255,255,255,0.55); }
        .lp-plan-desc {
          font-size: 0.9rem;
          color: var(--text-secondary);
          margin-bottom: 1.75rem;
          line-height: 1.55;
        }
        .lp-plan-highlight .lp-plan-desc { color: rgba(255,255,255,0.6); }
        .lp-plan-features {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
          margin-bottom: 2rem;
        }
        .lp-plan-feature {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          font-size: 0.92rem;
          color: var(--text-secondary);
        }
        .lp-plan-highlight .lp-plan-feature { color: rgba(255,255,255,0.8); }
        .lp-plan-highlight .lp-check {
          background: rgba(78,222,128,0.15);
          border-color: rgba(78,222,128,0.4);
        }
        .lp-plan-cta {
          width: 100%;
          font-size: 0.95rem;
          padding: 0.85rem;
          border-radius: 12px;
          font-weight: 700;
        }
        .lp-btn-outline-navy {
          background: transparent;
          border: 1.5px solid var(--accent-navy);
          color: var(--accent-navy);
          display: inline-flex;
          align-items: center;
          justify-content: center;
          font-weight: 600;
          transition: all 0.2s;
          cursor: pointer;
          text-decoration: none;
        }
        .lp-btn-outline-navy:hover {
          background: var(--accent-navy);
          color: white;
        }
        .lp-pricing-note {
          text-align: center;
          margin-top: 2.5rem;
          font-size: 0.88rem;
          color: var(--text-secondary);
          background: white;
          border: 1px solid var(--border-color);
          border-radius: 12px;
          padding: 1rem 1.5rem;
          max-width: 600px;
          margin-left: auto;
          margin-right: auto;
        }

        /* ── Testimonials ── */
        .lp-testimonials {
          padding: 7rem 1.5rem;
        }
        .lp-testimonials-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1.5rem;
          margin-top: 3rem;
        }
        @media (max-width: 900px) {
          .lp-testimonials-grid { grid-template-columns: 1fr; }
        }
        .lp-testimonial {
          background: #f8f5f0;
          border: 1px solid var(--border-color);
          border-radius: 20px;
          padding: 2rem;
          transition: transform 0.25s;
        }
        .lp-testimonial:hover { transform: translateY(-4px); }
        .lp-t-avatar {
          font-size: 2.5rem;
          margin-bottom: 1rem;
        }
        .lp-t-quote {
          font-size: 0.97rem;
          color: var(--text-secondary);
          line-height: 1.75;
          margin-bottom: 1.25rem;
          font-style: italic;
        }
        .lp-t-name {
          font-weight: 700;
          font-size: 0.95rem;
          color: var(--accent-navy);
        }
        .lp-t-location {
          font-size: 0.82rem;
          color: var(--text-secondary);
          margin-top: 0.2rem;
        }

        /* ── Why Section ── */
        .lp-why {
          background: var(--accent-navy);
          padding: 7rem 1.5rem;
        }
        .lp-why .lp-section-tag-center {
          background: rgba(255,255,255,0.1);
          color: rgba(255,255,255,0.8);
          border-color: rgba(255,255,255,0.15);
        }
        .lp-why .lp-section-title { color: white; }
        .lp-competitors {
          margin-top: 3rem;
          border: 1px solid rgba(255,255,255,0.1);
          border-radius: 20px;
          overflow: hidden;
        }
        .lp-comp-header {
          display: grid;
          grid-template-columns: 1fr 1.5fr 2fr;
          gap: 1.5rem;
          padding: 1rem 1.5rem;
          background: rgba(255,255,255,0.08);
          font-size: 0.78rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          color: rgba(255,255,255,0.5);
        }
        @media (max-width: 700px) {
          .lp-comp-header { display: none; }
          .lp-comp-row { flex-direction: column; gap: 0.4rem; }
        }
        .lp-comp-row {
          display: grid;
          grid-template-columns: 1fr 1.5fr 2fr;
          gap: 1.5rem;
          padding: 1.25rem 1.5rem;
          border-top: 1px solid rgba(255,255,255,0.07);
          align-items: center;
          transition: background 0.2s;
        }
        .lp-comp-row:hover { background: rgba(255,255,255,0.05); }
        .lp-comp-name {
          font-weight: 700;
          font-size: 0.95rem;
          color: white;
        }
        .lp-comp-focus {
          font-size: 0.9rem;
          color: rgba(255,255,255,0.55);
        }
        .lp-comp-adv {
          display: flex;
          align-items: flex-start;
          gap: 0.5rem;
          font-size: 0.9rem;
          color: rgba(255,255,255,0.8);
          line-height: 1.55;
        }

        /* ── Values ── */
        .lp-values {
          padding: 7rem 1.5rem;
        }
        .lp-values-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 1.5rem;
          margin-top: 3rem;
        }
        @media (max-width: 900px) {
          .lp-values-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 560px) {
          .lp-values-grid { grid-template-columns: 1fr; }
        }
        .lp-value-card {
          background: #f8f5f0;
          border: 1px solid var(--border-color);
          border-radius: 20px;
          padding: 2rem 1.5rem;
          text-align: center;
          transition: transform 0.25s, box-shadow 0.25s;
        }
        .lp-value-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 12px 30px rgba(0,0,0,0.07);
        }
        .lp-value-icon { font-size: 2.5rem; margin-bottom: 1rem; }
        .lp-value-title {
          font-size: 1.05rem;
          font-weight: 700;
          color: var(--accent-navy);
          margin-bottom: 0.6rem;
        }
        .lp-value-desc {
          font-size: 0.88rem;
          color: var(--text-secondary);
          line-height: 1.65;
        }

        /* ── FAQ ── */
        .lp-faq {
          padding: 7rem 1.5rem;
          background: #f8f5f0;
        }
        .lp-faq-list {
          max-width: 780px;
          margin: 3rem auto 0;
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }
        .lp-faq-item {
          background: white;
          border: 1.5px solid var(--border-color);
          border-radius: 16px;
          overflow: hidden;
          transition: border-color 0.2s;
        }
        .lp-faq-open { border-color: rgba(39,103,73,0.4); }
        .lp-faq-q {
          width: 100%;
          background: none;
          border: none;
          padding: 1.25rem 1.5rem;
          text-align: left;
          font-size: 0.97rem;
          font-weight: 600;
          color: var(--accent-navy);
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 1rem;
          transition: color 0.2s;
        }
        .lp-faq-q:hover { color: var(--accent-emerald); }
        .lp-faq-chevron {
          font-size: 1.4rem;
          width: 24px;
          height: 24px;
          border-radius: 50%;
          background: rgba(39,103,73,0.1);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--accent-emerald);
          flex-shrink: 0;
          line-height: 1;
          font-weight: 400;
        }
        .lp-faq-a {
          padding: 0 1.5rem 1.25rem;
          font-size: 0.93rem;
          color: var(--text-secondary);
          line-height: 1.75;
        }

        /* ── CTA ── */
        .lp-cta-section {
          padding: 0 1.5rem 7rem;
        }
        .lp-cta-card {
          background: linear-gradient(135deg, #0f2749 0%, #1a4d35 100%);
          border-radius: 32px;
          padding: 6rem 3rem;
          text-align: center;
          position: relative;
          overflow: hidden;
        }
        .lp-cta-orb {
          position: absolute;
          width: 400px;
          height: 400px;
          background: radial-gradient(rgba(255,255,255,0.08), transparent);
          border-radius: 50%;
          top: -150px;
          right: -100px;
          pointer-events: none;
        }
        .lp-cta-orb-2 {
          width: 300px;
          height: 300px;
          bottom: -100px;
          left: -80px;
          top: auto;
          right: auto;
        }
        .lp-cta-headline {
          font-size: clamp(2rem, 4vw, 3.2rem);
          font-weight: 800;
          color: white;
          letter-spacing: -0.03em;
          line-height: 1.12;
          margin-bottom: 1.25rem;
          position: relative;
        }
        .lp-cta-sub {
          color: rgba(255,255,255,0.65);
          font-size: 1.05rem;
          margin-bottom: 2.5rem;
          position: relative;
        }
        .lp-cta-actions {
          display: flex;
          gap: 1rem;
          justify-content: center;
          flex-wrap: wrap;
          position: relative;
        }
        .lp-cta-btn-primary {
          background: white;
          color: #0f2749;
          font-weight: 700;
          padding: 0.9rem 2.25rem;
          border-radius: 14px;
          font-size: 1.05rem;
          display: inline-flex;
          align-items: center;
          transition: all 0.2s;
          text-decoration: none;
        }
        .lp-cta-btn-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 12px 30px rgba(0,0,0,0.2);
        }
        .lp-cta-btn-ghost {
          background: rgba(255,255,255,0.1);
          color: rgba(255,255,255,0.9);
          font-weight: 600;
          padding: 0.9rem 2.25rem;
          border-radius: 14px;
          font-size: 1.05rem;
          display: inline-flex;
          align-items: center;
          border: 1px solid rgba(255,255,255,0.2);
          transition: all 0.2s;
          text-decoration: none;
        }
        .lp-cta-btn-ghost:hover {
          background: rgba(255,255,255,0.18);
          transform: translateY(-2px);
        }

        /* ── Footer ── */
        .lp-footer {
          background: #0a1628;
          padding: 5rem 0 0;
        }
        .lp-footer-inner {
          display: grid;
          grid-template-columns: 1.5fr 2fr;
          gap: 4rem;
          padding-bottom: 4rem;
        }
        @media (max-width: 700px) {
          .lp-footer-inner { grid-template-columns: 1fr; gap: 2rem; }
        }
        .lp-footer-logo {
          font-size: 1.3rem;
          font-weight: 800;
          color: white;
          margin-bottom: 0.75rem;
          letter-spacing: -0.02em;
        }
        .lp-footer-tagline {
          font-size: 0.9rem;
          color: rgba(255,255,255,0.45);
          line-height: 1.7;
        }
        .lp-footer-links {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 2rem;
        }
        @media (max-width: 560px) {
          .lp-footer-links { grid-template-columns: repeat(2, 1fr); }
        }
        .lp-footer-col {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }
        .lp-footer-col-title {
          font-size: 0.78rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          color: rgba(255,255,255,0.35);
          margin-bottom: 0.25rem;
        }
        .lp-footer-col a {
          font-size: 0.9rem;
          color: rgba(255,255,255,0.55);
          transition: color 0.2s;
          text-decoration: none;
        }
        .lp-footer-col a:hover { color: white; }
        .lp-footer-bottom {
          border-top: 1px solid rgba(255,255,255,0.06);
          padding: 1.5rem 1.5rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
          font-size: 0.82rem;
          color: rgba(255,255,255,0.3);
          gap: 1rem;
          flex-wrap: wrap;
        }
      `}} />
    </>
  );
}
