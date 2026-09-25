"use client";

import { SunMoon } from "lucide-react";
import { useEffect, useState } from "react";

export default function Home() {
  const [theme, setTheme] = useState<"light" | "dark">("dark");

  useEffect(() => {
    const stored = localStorage.getItem("portfolio-theme");
    const preferredIsLight = window.matchMedia("(prefers-color-scheme: light)").matches;

    if (stored === "light" || stored === "dark") {
      setTheme(stored);
      return;
    }

    setTheme(preferredIsLight ? "light" : "dark");
  }, []);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("portfolio-theme", theme);
  }, [theme]);

  return (
    <>
      <div className="grid-bg" />

      <header className="nav">
        <div className="nav-inner">
          <a className="brand" href="#top">
            <span className="brand-mark">OB</span>
            <span>
              <span className="brand-name">Om Badade</span>
              <br />
              <span className="brand-sub">product / systems</span>
            </span>
          </a>

          <nav className="links" aria-label="Main navigation">
            <a href="#about">About</a>
            <a href="#case-study">Case Study</a>
            <a href="#projects">Projects</a>
            <a href="#experience">Experience</a>
            <a href="#skills">Skills</a>
            <a href="#contact">Contact</a>
          </nav>

          <button
            type="button"
            className="theme-toggle"
            id="themeToggle"
            aria-label="Toggle light and dark theme"
            title="Toggle theme"
            onClick={() => setTheme((current) => (current === "light" ? "dark" : "light"))}
          >
            <SunMoon size={16} strokeWidth={1.8} />
          </button>
        </div>
      </header>

      <main id="top">
        <section className="hero" style={{ borderTop: "none" }}>
          <div className="wrap">
            <div className="kicker reveal d1">PRODUCT MANAGEMENT · MUMBAI, INDIA</div>
            <h1 className="reveal d2">I don't just plan the product. I build the first version to prove it should exist.</h1>
            <p className="hero-lede reveal d3">
              Om Badade — final-year Electronics &amp; Computer Engineering student who moved from writing backend code
              to deciding what the code is for. He&apos;s shipped a safety-analytics tool inside a Fortune 500 energy company,
              built a fintech app end to end, and led a nine-person technical team through a 1,200-attendee event.
            </p>
            <div className="hero-cta reveal d4">
              <a className="btn btn-primary" href="#case-study">See the case study →</a>
              <a className="btn btn-ghost" href="mailto:om.badade@gmail.com">Get in touch</a>
            </div>

            <div className="stat-strip reveal d4">
              <div className="stat">
                <div className="num">75%</div>
                <div className="label">less manual effort on BPCL&apos;s incident reporting, after Om&apos;s tool shipped</div>
              </div>
              <div className="stat">
                <div className="num">1,200+</div>
                <div className="label">attendees reached across GDG&apos;s Flutter Roadshow &amp; Spectrum</div>
              </div>
              <div className="stat">
                <div className="num">9</div>
                <div className="label">engineers on the technical team Om led at GDG on Campus</div>
              </div>
              <div className="stat">
                <div className="num">F500</div>
                <div className="label">Bharat Petroleum — Digital Solutions &amp; Business Analyst Intern</div>
              </div>
            </div>
          </div>
        </section>

        <section id="about">
          <div className="wrap">
            <div className="sec-head">
              <span className="sec-tag">01 — ABOUT</span>
              <h2>From &quot;can I build this&quot; to &quot;should this exist&quot;</h2>
            </div>
            <div className="about-grid">
              <div>
                <p>
                  Om is finishing a B.E. in Electronics &amp; Computer Science at Vidyalankar Institute of Technology, Mumbai —
                  expected June 2026. His path into product didn&apos;t start with a business framework; it started with a keyboard.
                  He wrote the backend, wired up the database, shipped the feature — and only later started asking why the
                  feature needed to exist in the first place.
                </p>
                <p>
                  That instinct is the thread through everything he&apos;s done since: a summer at Bharat Petroleum where he replaced
                  a manual safety-reporting process with a working analytics tool; a fintech side project, CIBILIZE, built solo
                  from data pipeline to recommendation logic; two applied ML systems; and a platform he built for a nonprofit
                  that&apos;s still used by its students and partner organizations.
                </p>
                <p>
                  He also spent a year learning the other half of product — getting things done through people, not just code —
                  as Technical Lead for Google Developer Groups on Campus, where he ran a nine-person team and the logistics
                  behind a week-long, 1,200-attendee event.
                </p>
              </div>
              <div className="fact-card">
                <div className="fact-row"><span className="k">Based in</span><span className="v">Mumbai, IN</span></div>
                <div className="fact-row"><span className="k">Studying</span><span className="v">B.E. ECE, VIT</span></div>
                <div className="fact-row"><span className="k">Graduating</span><span className="v">Jun 2026</span></div>
                <div className="fact-row"><span className="k">Recent role</span><span className="v">BA Intern, BPCL</span></div>
                <div className="fact-row"><span className="k">Also builds in</span><span className="v">Python · React · SQL</span></div>
                <div className="fact-row"><span className="k">Leads</span><span className="v">9-person team, GDG</span></div>
              </div>
            </div>
          </div>
        </section>

        <section id="case-study">
          <div className="wrap">
            <div className="sec-head">
              <span className="sec-tag">02 — FEATURED CASE STUDY</span>
              <h2>CIBILIZE</h2>
            </div>

            <div className="spec-block">
              <div className="case-hero">
                <div>
                  <h3>Turning a bank statement into a credit decision</h3>
                  <div className="tag-row">
                    <span className="tag">0 → 1</span>
                    <span className="tag">Fintech</span>
                    <span className="tag">Solo-built</span>
                  </div>
                </div>
              </div>
              <p className="case-sub">
                A full-stack financial assistant that reads a user&apos;s raw bank statement and turns it into a credit-card
                recommendation, a spending breakdown, and a set of eligibility checks — instead of another generic
                &quot;best cards of 2025&quot; listicle.
              </p>

              <div className="case-grid">
                <div className="case-item">
                  <h4>PROBLEM</h4>
                  <p>
                    Most first-time credit users pick a card off a generic ranking, not off their actual spending.
                    The one input that would make a recommendation trustworthy — a real bank statement — is also the
                    most tedious thing to read and categorize by hand.
                  </p>
                </div>
                <div className="case-item">
                  <h4>MY ROLE</h4>
                  <p>
                    Sole builder and de facto PM. Scoped what a v1 needed to prove, designed the data flow from raw PDF
                    to recommendation, and decided what shipped first: the parsing pipeline, not the interface — because
                    without clean transaction data, there was no product.
                  </p>
                </div>
                <div className="case-item">
                  <h4>KEY DECISIONS</h4>
                  <ul>
                    <li>Chose a rule-based recommendation engine over an ML model — a financial decision needed to be
                      explainable, not just accurate.</li>
                    <li>Prioritized the PDF statement parser ahead of UI polish, since it was the actual constraint on
                      whether the product worked at all.</li>
                    <li>Used the Gemini API for the parts that benefit from language understanding (statement extraction),
                      and kept eligibility logic deterministic and auditable.</li>
                  </ul>
                </div>
                <div className="case-item">
                  <h4>WHAT HE BUILT</h4>
                  <ul>
                    <li>Automated PDF expense parser — extracts, cleans, and categorizes transaction data.</li>
                    <li>Rule-based card recommendation and ranking engine with eligibility checks.</li>
                    <li>REST API backend with JWT auth on Node/Express + MySQL.</li>
                    <li>Interactive spend dashboards built with Recharts.</li>
                  </ul>
                </div>
              </div>

              <div className="case-item" style={{ marginTop: "8px" }}>
                <h4>IMPACT — TO ADD</h4>
                <p>Resume doesn&apos;t include usage numbers for this project yet.</p>
                <span className="fill-chip">✎ add: users tested / parsing accuracy / statements processed</span>
              </div>

              <div className="stack-row">
                <span className="chip">React</span>
                <span className="chip">Node.js</span>
                <span className="chip">Express</span>
                <span className="chip">MySQL</span>
                <span className="chip">Gemini API</span>
                <span className="chip">Recharts</span>
                <span className="chip">JWT</span>
              </div>
            </div>
          </div>
        </section>

        <section id="projects">
          <div className="wrap">
            <div className="sec-head">
              <span className="sec-tag">03 — OTHER BUILDS</span>
              <h2>Shipped elsewhere</h2>
            </div>
            <div className="proj-grid">
              <div className="proj-card">
                <div className="proj-num">EXP. 01</div>
                <h3>In-Transit Incident Analysis — BPCL</h3>
                <p>
                  Region and state-wise safety data — incidents, injuries, fatalities — was being compiled by hand.
                  Om built a Streamlit + SQLite tool that pulled and visualized it automatically, cutting reporting
                  effort by 75% and feeding directly into two executive-facing reports.
                </p>
                <div className="proj-tags">
                  <span className="proj-tag">Python</span>
                  <span className="proj-tag">Streamlit</span>
                  <span className="proj-tag">SQLite</span>
                  <span className="proj-tag">Internal tool</span>
                </div>
              </div>

              <div className="proj-card">
                <div className="proj-num">EXP. 02</div>
                <h3>Internship Discovery Platform — Suvidha Foundation</h3>
                <p>
                  Backend for a platform helping underprivileged students find and apply to internships. Built secure
                  auth, role-based access, and REST APIs supporting 100+ student profiles and 10+ partner organizations
                  through pilot.
                </p>
                <div className="proj-tags">
                  <span className="proj-tag">Flask</span>
                  <span className="proj-tag">MySQL</span>
                  <span className="proj-tag">REST APIs</span>
                </div>
              </div>

              <div className="proj-card">
                <div className="proj-num">EXP. 03</div>
                <h3>Brain Tumor Detection</h3>
                <p>
                  Desktop app that highlights abnormalities in MRI scans using thresholding and morphological image
                  processing, wrapped in a Tkinter GUI simple enough for a non-technical user to run.
                </p>
                <div className="proj-tags">
                  <span className="proj-tag">Python</span>
                  <span className="proj-tag">OpenCV</span>
                  <span className="proj-tag">Tkinter</span>
                </div>
              </div>

              <div className="proj-card">
                <div className="proj-num">EXP. 04</div>
                <h3>Heart Stroke Prediction</h3>
                <p>
                  Ensemble ML system predicting stroke risk from patient health records. Used XGBoost and LightGBM with
                  SMOTE to correct for class imbalance and protect recall on the minority (at-risk) class.
                </p>
                <div className="proj-tags">
                  <span className="proj-tag">XGBoost</span>
                  <span className="proj-tag">LightGBM</span>
                  <span className="proj-tag">SMOTE</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="experience">
          <div className="wrap">
            <div className="sec-head">
              <span className="sec-tag">04 — EXPERIENCE &amp; LEADERSHIP</span>
              <h2>Where the hours went</h2>
            </div>

            <div className="timeline">
              <div className="t-item">
                <div className="t-date">JUN 2025 — AUG 2025</div>
                <h3>Digital Solutions &amp; Business Analyst Intern</h3>
                <div className="t-org">Bharat Petroleum Corporation Ltd · Fortune Global 500</div>
                <ul>
                  <li>Designed the official BPCL Fact Sheet 2025, consolidating operational, financial, and safety metrics for executive and stakeholder reporting.</li>
                  <li>Co-authored the Incident Analysis Report Booklet 2025 — contributed close to half its analytical content.</li>
                  <li>Built the Python/Streamlit incident-analysis tool described above; collaborated directly with safety officers and department heads to validate the underlying data.</li>
                </ul>
              </div>

              <div className="t-item">
                <div className="t-date">MAR 2025 — MAY 2025</div>
                <h3>Web Development Intern</h3>
                <div className="t-org">Suvidha Foundation · Education &amp; women&apos;s empowerment nonprofit</div>
                <ul>
                  <li>Built backend services in Flask and MySQL with secure authentication and role-based access.</li>
                  <li>Integrated REST APIs connecting frontend and backend across 100+ student profiles and 10+ organizations.</li>
                </ul>
              </div>

              <div className="t-item">
                <div className="t-date">OCT 2024 — SEPT 2025</div>
                <h3>Technical Lead</h3>
                <div className="t-org">Google Developer Groups on Campus, VIT</div>
                <ul>
                  <li>Led and mentored a 9-member technical core team across roadmaps and end-to-end project execution.</li>
                  <li>Coordinated the Flutter Roadshow, reaching 1,200+ attendees through workshops and mentorship.</li>
                  <li>Planned and ran Spectrum, the group&apos;s flagship week-long event, and hosted a 100+ attendee GSoC guidance session with Google Developer Experts.</li>
                </ul>
              </div>

              <div className="t-item">
                <div className="t-date">AUG 2023 — 2024</div>
                <h3>Events Core</h3>
                <div className="t-org">Student Council, VIT</div>
                <ul>
                  <li>Organized and managed high-footfall events, including War of DJ and the inter-band Musical Battle, for the institute&apos;s flagship fest, VERVE.</li>
                </ul>
              </div>

              <div className="t-item">
                <div className="t-date">JAN 2023 — FEB 2023</div>
                <h3>Student Teacher</h3>
                <div className="t-org">Seva Sahayog Foundation</div>
                <ul>
                  <li>Mentored underprivileged children in mathematics and science.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section id="skills">
          <div className="wrap">
            <div className="sec-head">
              <span className="sec-tag">05 — SKILLS</span>
              <h2>The toolkit</h2>
            </div>
            <div className="skill-grid">
              <div className="skill-col">
                <h4>PRODUCT</h4>
                <span className="chip">Product strategy</span>
                <span className="chip">Roadmapping</span>
                <span className="chip">Stakeholder management</span>
                <span className="chip">Product lifecycle mgmt.</span>
                <span className="chip">Prioritization</span>
                <span className="chip">Business &amp; technical writing</span>
              </div>
              <div className="skill-col">
                <h4>TECHNICAL</h4>
                <span className="chip">Python</span>
                <span className="chip">Java</span>
                <span className="chip">SQL</span>
                <span className="chip">Flask</span>
                <span className="chip">React</span>
                <span className="chip">MongoDB</span>
                <span className="chip">REST APIs</span>
                <span className="chip">Machine Learning</span>
              </div>
              <div className="skill-col">
                <h4>TOOLS &amp; ANALYTICS</h4>
                <span className="chip">Power BI</span>
                <span className="chip">Data visualization</span>
                <span className="chip">Git / GitHub</span>
                <span className="chip">Notion</span>
                <span className="chip">ClickUp</span>
                <span className="chip">MS Office</span>
              </div>
            </div>

            <div className="cert-strip" style={{ marginTop: "44px" }}>
              <div className="cert"><b>Product School</b>Product Strategy Micro-Certification (PSC)</div>
              <div className="cert"><b>McKinsey &amp; Company</b>Forward Program — Management &amp; Problem Solving</div>
              <div className="cert"><b>Oracle</b>OCI AI Foundation Certification</div>
              <div className="cert"><b>Google Arcade</b>Level 3 — Generative AI: Prompt Engineering</div>
            </div>
          </div>
        </section>

        <footer id="contact">
          <div className="wrap">
            <div className="footer-grid">
              <h2>Let&apos;s talk about what you&apos;re building.</h2>
              <div className="footer-links">
                <a href="mailto:om.badade@gmail.com">om.badade@gmail.com</a>
                <a href="tel:+919136049280">+91 91360 49280</a>
                <a href="https://linkedin.com/in/ombadade234" target="_blank" rel="noopener">linkedin.com/in/ombadade234</a>
                <a href="https://github.com/OmSantoshBadade" target="_blank" rel="noopener">github.com/OmSantoshBadade</a>
              </div>
            </div>
            <div className="foot-note">
              <span>Om Badade — Mumbai, India</span>
              <span>Built by hand, not from a template.</span>
            </div>
          </div>
        </footer>
      </main>
    </>
  );
}
