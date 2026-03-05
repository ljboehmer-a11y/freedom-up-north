"use client";

import { useEffect, useRef, useState } from "react";

const offerings = [
  {
    num: "01",
    label: "ASSESS",
    name: "Technology Readiness Assessment",
    badge: "Fixed Fee · 30–60 Days",
    headline: "Assess",
    headlineRest: "your current state.",
    body: "An independent technology audit showing exactly where your agency stands — cybersecurity posture, legacy system risk, modernization opportunities. No vendor bias. A clear picture and a prioritized action plan you actually own.",
    priceLabel: "Starting at",
    price: "$3,500",
    priceNote: "/ engagement",
    delivers: [
      "Current-state technology inventory",
      "Cybersecurity gap analysis",
      "Prioritized modernization roadmap",
      "Budget estimation for improvements",
      "Vendor-neutral recommendations",
      "Executive briefing deck",
    ],
    cta: "Schedule an assessment",
    color: "#4750F5",
  },
  {
    num: "02",
    label: "ADVISE",
    name: "Technology Advisory",
    badge: "Retainer or Project · Ongoing",
    headline: "Advise",
    headlineRest: "on what\u2019s next.",
    body: "Fractional technology leadership for agencies that need expert guidance without a full-time CIO. We develop RFPs, evaluate vendor responses, support contract negotiations, and oversee implementations \u2014 as your advocate, not the vendor\u2019s.",
    priceLabel: "Starting at",
    price: "$1,500",
    priceNote: "/ month",
    delivers: [
      "RFP development and management",
      "Vendor evaluation scorecards",
      "Contract negotiation support",
      "Implementation oversight",
      "Board & council presentations",
      "Ongoing strategic guidance",
    ],
    cta: "Explore advisory engagement",
    color: "#1F84CD",
  },
  {
    num: "03",
    label: "CONNECT",
    name: "Curated Solutions",
    badge: "Commission-Based · Fully Transparent",
    headline: "Connect",
    headlineRest: "to the right tools.",
    body: "After understanding your needs, we match your agency with vetted solutions from proven government vendors \u2014 cybersecurity, permitting, fleet, financial systems, and more. We earn referral fees from vendors, disclosed upfront. Your cost: nothing.",
    priceLabel: "Cost to agency",
    price: "$0",
    priceNote: "vendor commissions disclosed",
    delivers: [
      "Vetted vendor shortlist",
      "Comparative product analysis",
      "Demo coordination",
      "Reference check management",
      "Cooperative purchasing guidance",
      "Implementation introduction",
    ],
    cta: "Find your solution",
    color: "#5CB93D",
  },
];

function OfferingsSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleScroll = () => {
      const rect = container.getBoundingClientRect();
      const stickyHeight = window.innerHeight;
      const scrollableHeight = container.offsetHeight - stickyHeight;
      const scrolled = -rect.top;
      const pct = Math.max(0, Math.min(1, scrolled / scrollableHeight));
      setProgress(pct);

      const idx = Math.min(2, Math.floor(pct * 3));
      setActiveIndex(idx);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const o = offerings[activeIndex];
  const segmentProgress = (progress * 3) - activeIndex;
  const cardOpacity = Math.min(1, segmentProgress * 3);
  const cardY = Math.max(0, (1 - segmentProgress * 3) * 40);

  return (
    <div ref={containerRef} className="off-scroll-container" id="offerings">
      <div className="off-sticky">
        <div className="off-sticky-inner">
          {/* Left: progress + labels */}
          <div className="off-nav">
            <div className="off-progress-track">
              <div
                className="off-progress-fill"
                style={{ height: `${progress * 100}%` }}
              />
              {offerings.map((item, i) => (
                <div
                  key={i}
                  className={`off-progress-dot ${i <= activeIndex ? "active" : ""}`}
                  style={{ top: `${(i / 2) * 100}%` }}
                />
              ))}
            </div>
            <div className="off-nav-labels">
              {offerings.map((item, i) => (
                <div
                  key={i}
                  className={`off-nav-item ${i === activeIndex ? "active" : ""}`}
                >
                  <span className="off-nav-num">{item.num}</span>
                  <span className="off-nav-name">{item.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: content card */}
          <div className="off-content">
            <div
              className="off-card"
              style={{
                opacity: Math.min(1, Math.max(0.3, cardOpacity)),
                transform: `translateY(${cardY}px)`,
              }}
            >
              <div className="off-card-badge" style={{ borderColor: `${o.color}33`, color: o.color, background: `${o.color}0d` }}>
                {o.badge}
              </div>
              <h3 className="off-card-title">
                <span style={{ color: o.color }}>{o.headline}</span>{" "}
                {o.headlineRest}
              </h3>
              <p className="off-card-body">{o.body}</p>
              <div className="off-card-price" style={{ borderColor: `${o.color}22`, background: `${o.color}08` }}>
                <span className="off-card-price-label">{o.priceLabel}</span>
                <span className="off-card-price-val">{o.price}</span>
                <span className="off-card-price-note">{o.priceNote}</span>
              </div>
              <div className="off-card-delivers">
                {o.delivers.map((d, i) => (
                  <div key={i} className="off-card-dlv">
                    <div className="off-card-pip" style={{ background: o.color, boxShadow: `0 0 6px ${o.color}66` }} />
                    {d}
                  </div>
                ))}
              </div>
              <a href="#contact" className="off-card-cta" style={{ color: o.color }}>
                {o.cta}{" "}
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="7" y1="17" x2="17" y2="7" />
                  <polyline points="7 7 17 7 17 17" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Scroll hint */}
        {progress < 0.05 && (
          <div className="off-scroll-hint">
            <span>Scroll to explore</span>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="12" y1="5" x2="12" y2="19" />
              <polyline points="19 12 12 19 5 12" />
            </svg>
          </div>
        )}
      </div>
    </div>
  );
}

export default function Home() {
  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add("on");
        });
      },
      { threshold: 0.1 }
    );
    document.querySelectorAll(".rv").forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <>
      {/* Status bar */}
      <div className="status">
        <div className="s-pip"></div>
        <span>Traverse City, MI</span>
        <span style={{ color: "var(--text-20)" }}>·</span>
        <span>Accepting Engagements</span>
      </div>

      {/* Nav */}
      <nav>
        <a href="#" className="nav-logo">
          <div className="pip"></div>Freedom Up North
        </a>
        <ul className="nav-links">
          <li><a href="#verticals">Verticals</a></li>
          <li><a href="#offerings">Services</a></li>
          <li><a href="#process">Process</a></li>
          <li><a href="#about">About</a></li>
        </ul>
        <a href="#contact" className="nav-btn">Start Assessment</a>
      </nav>

      {/* Hero */}
      <div className="hero">
        <div className="eyebrow-pill">
          <div className="eyebrow-pip"></div>Public Sector Technology Advisory · Northern Michigan
        </div>
        <h1 className="hero-h1">
          Modern tech.<br />
          <span className="acc">Built for</span><br />
          public service.
        </h1>
        <p className="hero-sub">
          Independent technology advisory for municipalities, transit authorities, airports, and regional agencies across Northern Michigan — without the enterprise overhead.
        </p>
        <div className="hero-acts">
          <a href="#offerings" className="btn-f">
            View Services{" "}
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <line x1="7" y1="17" x2="17" y2="7" />
              <polyline points="7 7 17 7 17 17" />
            </svg>
          </a>
          <a href="#process" className="btn-o">How it works</a>
        </div>
        <div className="hero-stats">
          <div>
            <div className="stat-val">10<b>+</b></div>
            <div className="stat-lbl">Counties<br />Served</div>
          </div>
          <div>
            <div className="stat-val">4</div>
            <div className="stat-lbl">Public Sector<br />Verticals</div>
          </div>
          <div>
            <div className="stat-val">100<b>%</b></div>
            <div className="stat-lbl">Vendor-Independent<br />Advisory</div>
          </div>
        </div>
      </div>

      {/* Ticker */}
      <div className="ticker-wrap">
        <div className="ticker-track">
          {[1, 2].map((i) => (
            <span key={i} style={{ display: "contents" }}>
              <span className="t-item"><span className="td">◆</span>Cybersecurity Assessments</span>
              <span className="t-item"><span className="td">◆</span>Permitting Modernization</span>
              <span className="t-item"><span className="td">◆</span>Fleet Technology</span>
              <span className="t-item"><span className="td">◆</span>Asset Management</span>
              <span className="t-item"><span className="td">◆</span>Aviation Operations Tech</span>
              <span className="t-item"><span className="td">◆</span>Transit Technology</span>
              <span className="t-item"><span className="td">◆</span>Financial System Modernization</span>
              <span className="t-item"><span className="td">◆</span>Records Management</span>
              <span className="t-item"><span className="td">◆</span>GIS &amp; Mapping</span>
              <span className="t-item"><span className="td">◆</span>Broadband Planning</span>
            </span>
          ))}
        </div>
      </div>

      {/* Verticals */}
      <div className="vert-band" id="verticals">
        <div className="vert-inner">
          <div className="sec-eye">Who we serve</div>
          <h2 className="sec-h2">Four verticals.<br />One standard of service.</h2>
          <div className="vert-grid">
            <div className="v-card rv d1">
              <div className="v-icon"><svg viewBox="0 0 24 24"><path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" /><polyline points="9 22 9 12 15 12 15 22" /></svg></div>
              <div className="v-num">01 / 04</div>
              <div className="v-name">Municipal Government</div>
              <p className="v-desc">Cities, townships, and counties across Northern Michigan&apos;s 10-county region. From cybersecurity hardening to permitting modernization.</p>
              <div className="v-chips"><span className="chip">Cities</span><span className="chip">Townships</span><span className="chip">Counties</span></div>
            </div>
            <div className="v-card rv d2">
              <div className="v-icon"><svg viewBox="0 0 24 24"><rect x="1" y="3" width="15" height="13" rx="1" /><polygon points="16 8 20 8 23 11 23 16 16 16 16 8" /><circle cx="5.5" cy="18.5" r="2.5" /><circle cx="18.5" cy="18.5" r="2.5" /></svg></div>
              <div className="v-num">02 / 04</div>
              <div className="v-name">Transit Authorities</div>
              <p className="v-desc">Scheduling, dispatch, passenger information systems, and fleet electrification planning for regional transit agencies.</p>
              <div className="v-chips"><span className="chip">Scheduling</span><span className="chip">Fleet</span><span className="chip">Riders</span></div>
            </div>
            <div className="v-card rv d3">
              <div className="v-icon"><svg viewBox="0 0 24 24"><polygon points="3 11 22 2 13 21 11 13 3 11" /></svg></div>
              <div className="v-num">03 / 04</div>
              <div className="v-name">Airport Authorities</div>
              <p className="v-desc">General aviation and commercial airports across the region. Security compliance, airfield ops systems, and FAA-aligned technology planning.</p>
              <div className="v-chips"><span className="chip">Security</span><span className="chip">Ops</span><span className="chip">Compliance</span></div>
            </div>
            <div className="v-card rv d4">
              <div className="v-icon"><svg viewBox="0 0 24 24"><path d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z" /><line x1="12" y1="22.08" x2="12" y2="12" /></svg></div>
              <div className="v-num">04 / 04</div>
              <div className="v-name">Regional Agencies</div>
              <p className="v-desc">Regional planning organizations, road commissions, and special districts navigating complex technology decisions with limited IT staff.</p>
              <div className="v-chips"><span className="chip">Planning</span><span className="chip">Roads</span><span className="chip">Districts</span></div>
            </div>
          </div>
        </div>
      </div>

      {/* Offerings — scroll-driven */}
      <div className="off-section-header">
        <div className="off-section-header-inner">
          <div className="sec-eye">What we do</div>
          <h2 className="sec-h2" style={{ marginBottom: 0 }}>Three ways we<br />engage with agencies.</h2>
        </div>
      </div>
      <OfferingsSection />

      {/* Process */}
      <div className="proc-band" id="process">
        <div className="proc-inner">
          <div className="sec-eye">How it works</div>
          <h2 className="sec-h2">From first call<br />to fully deployed.</h2>
          <div className="proc-grid">
            <div className="p-card rv d1"><div className="p-big">01</div><div className="p-title">Discovery Call</div><p className="p-body">30 minutes. We learn your agency&apos;s current state, pain points, and goals. No pitch. Just the right questions.</p><div className="p-when">Week 1</div></div>
            <div className="p-card rv d2"><div className="p-big">02</div><div className="p-title">Scoped Proposal</div><p className="p-body">A clear proposal outlining deliverables, timeline, and fixed fee. No retainer traps. No surprises.</p><div className="p-when">Weeks 1–2</div></div>
            <div className="p-card rv d3"><div className="p-big">03</div><div className="p-title">Assess &amp; Report</div><p className="p-body">Structured technology audit, stakeholder interviews, and a written report with prioritized next steps.</p><div className="p-when">Weeks 3–6</div></div>
            <div className="p-card rv d4"><div className="p-big">04</div><div className="p-title">Advise &amp; Execute</div><p className="p-body">Ongoing advisory or matched vendor solutions — depending on where your agency needs to go next.</p><div className="p-when">Month 2+</div></div>
          </div>
        </div>
      </div>

      {/* About */}
      <div className="about-band" id="about">
        <div className="about-inner">
          <div className="sec-eye">Who&apos;s behind this</div>
          <h2 className="sec-h2">We sit on <em>your side</em><br />of the table.</h2>
          <div className="about-columns">
            <div className="about-col rv d1">
              <h3 className="about-col-h">The problem</h3>
              <p>Northern Michigan agencies are making technology decisions without a roadmap. Vendors pitch. Consultants generalize. And when implementation fails, the agency absorbs the cost.</p>
              <p>Most firms treat public sector work as a side project. They send junior staff, recycle templates from metro engagements, and disappear after the final invoice. The agency is left with a system that doesn&apos;t fit, a contract it can&apos;t exit, and no one to call.</p>
            </div>
            <div className="about-col rv d2">
              <h3 className="about-col-h">Our approach</h3>
              <p>We&apos;ve sat at the same tables you sit at. We understand your budget cycles, your procurement constraints, and what it takes to get a technology decision approved and actually implemented.</p>
              <p>We bring a decade of enterprise technology experience at the national level. We know <strong>how vendors price, negotiate, and structure deals</strong>. That knowledge works for your agency — not against it.</p>
            </div>
          </div>
          <div className="about-statement rv d3">
            <p>Freedom Up North exists because Northern Michigan agencies deserve the same caliber of technology guidance that metro governments receive. Without the six-figure retainer or the 200-page report that sits on a shelf.</p>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="cta-sec" id="contact">
        <div className="cta-glass">
          <div className="cta-glow"></div>
          <div className="cta-eye">Ready to move forward?</div>
          <h2 className="cta-h2">Start with a free<br />discovery call.</h2>
          <p className="cta-sub">30 minutes. No pitch. An honest conversation about where your agency stands and where it needs to go.</p>
          <div className="cta-btns">
            <a href="mailto:hello@freedomupnorth.com" className="btn-f">
              Schedule a call{" "}
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <line x1="7" y1="17" x2="17" y2="7" /><polyline points="7 7 17 7 17 17" />
              </svg>
            </a>
            <a href="tel:2317149622" className="btn-o">231.714.9622</a>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer>
        <div className="f-logo">
          <div className="pip" style={{ width: "6px", height: "6px", boxShadow: "0 0 6px var(--blue)" }}></div>
          Freedom Up North
        </div>
        <span className="f-copy">© 2026 Freedom Up North LLC · Traverse City, Michigan</span>
        <ul className="f-links">
          <li><a href="#verticals">Verticals</a></li>
          <li><a href="#offerings">Services</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </footer>
    </>
  );
}
