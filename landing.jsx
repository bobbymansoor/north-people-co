// landing.jsx — North People Co committed landing page.
// Dark hero with dynamic twinkles + occasional shooting stars; warm cream
// content sections; dark contact/footer to bookend. Fully responsive via
// CSS media queries (not a viewport prop).

// Contact form — posts to the /api/contact Pages Function, then swaps itself
// in place for a thank-you panel (no page navigation). Field names here must
// match what functions/api/contact.js reads.
function ContactForm() {
  const [status, setStatus] = React.useState("idle"); // idle | sending | sent | error
  const [error, setError] = React.useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    const formEl = e.currentTarget;
    setStatus("sending");
    setError("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { Accept: "application/json" },
        body: new FormData(formEl),
      });
      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.error || "Something went wrong. Please try again.");
      }
      setStatus("sent");
    } catch (err) {
      setError(err.message || "Something went wrong. Please try again.");
      setStatus("error");
    }
  }

  // Success: replace the form with a thank-you card that fills the same space.
  if (status === "sent") {
    return (
      <div className="np-form np-form-thanks" role="status" aria-live="polite">
        <div className="np-form-head">
          <StarMark size={14} color="var(--tan-soft)" stroke={2.4} />
          <span className="np-eyebrow np-eyebrow-tan">Enquiry received</span>
        </div>
        <h3 className="np-thanks-title">Thank you.</h3>
        <p className="np-thanks-body">
          We've got your message and a senior partner will be in touch within
          one business day. Keep an eye on your inbox — including the spam
          folder, just in case.
        </p>
      </div>
    );
  }

  const sending = status === "sending";
  return (
    <form className="np-form" onSubmit={handleSubmit}>
      <div className="np-form-head">
        <StarMark size={14} color="var(--tan-soft)" stroke={2.4} />
        <span className="np-eyebrow np-eyebrow-tan">Send an enquiry</span>
      </div>

      <div className="np-form-row">
        <label className="np-field">
          <span>Your name</span>
          <input type="text" name="name" placeholder="Alex Mercer" required />
        </label>
        <label className="np-field">
          <span>Company</span>
          <input type="text" name="company" placeholder="Halcyon Bio" />
        </label>
      </div>
      <label className="np-field">
        <span>Work email</span>
        <input type="email" name="email" placeholder="alex@halcyon.bio" required />
      </label>
      <label className="np-field">
        <span>What you need help with</span>
        <select name="topic" defaultValue="">
          <option value="" disabled>Select an area…</option>
          <option>HR Advisory / outsourced support</option>
          <option>Employee Relations / Fair Work matter</option>
          <option>Restructure / redundancy</option>
          <option>Workplace investigation</option>
          <option>Capability &amp; culture program</option>
          <option>Something else</option>
        </select>
      </label>
      <label className="np-field">
        <span>Anything else?</span>
        <textarea rows={4} name="notes" placeholder="240 staff across two sites, planning a restructure for end of Q3…" />
      </label>

      {/* Honeypot: hidden from humans, bots tend to fill it. Named "website"
          so it never clashes with the real Company field above. */}
      <input
        type="text"
        name="website"
        className="np-hp"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
      />

      <button type="submit" className="np-btn np-btn-primary np-btn-full" disabled={sending}>
        {sending ? "Sending…" : "Send enquiry"}
        <StarMark size={11} color="currentColor" stroke={2.8} />
      </button>
      {status === "error" && (
        <p className="np-form-error" role="alert">{error}</p>
      )}
      <p className="np-form-fineprint">
        We treat every enquiry as confidential. By submitting, you
        agree to our <a href="#">privacy notice</a>.
      </p>
    </form>
  );
}

function Landing() {
  const [t, setTweak] = useTweaks(window.TWEAK_DEFAULTS);

  // Sky activity → dynamic-sky props
  const skyConfig = {
    calm:   { density: "sparse", minInterval: 7000,  maxInterval: 14000 },
    lively: { density: "dense",  minInterval: 2200,  maxInterval: 6500 },
    vivid:  { density: "dense",  minInterval: 900,   maxInterval: 2800 },
  }[t.skyActivity] || { density: "dense", minInterval: 2200, maxInterval: 6500 };

  // Lower-density companion skies for the voices + footer bands
  const skyVoices = {
    calm:   { density: "sparse", minInterval: 10000, maxInterval: 18000 },
    lively: { density: "normal", minInterval: 3500,  maxInterval: 9000 },
    vivid:  { density: "dense",  minInterval: 1400,  maxInterval: 4000 },
  }[t.skyActivity] || { density: "normal", minInterval: 3500, maxInterval: 9000 };
  const skyFooter = {
    calm:   { density: "sparse", minInterval: 14000, maxInterval: 26000 },
    lively: { density: "sparse", minInterval: 6000,  maxInterval: 14000 },
    vivid:  { density: "normal", minInterval: 2400,  maxInterval: 6000 },
  }[t.skyActivity] || { density: "sparse", minInterval: 6000, maxInterval: 14000 };

  // Smoothly attach a class to <body> on scroll so the nav can switch theme
  React.useEffect(() => {
    const onScroll = () => {
      document.documentElement.toggleAttribute("data-scrolled", window.scrollY > 60);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className={`np-root np-mood-${t.mood} np-voice-${t.headlineVoice}`}>
      {/* ============================== NAV ============================== */}
      <header className="np-nav">
        <div className="np-nav-inner">
          <NorthWordmark size={1.05} layout="horizontal" color="currentColor" />
          <nav className="np-nav-links">
            <a href="#about">About</a>
            <a href="#services">Services</a>
            <a href="#approach">Approach</a>
            <a href="#voices">Voices</a>
            <a href="#contact">Contact</a>
          </nav>
          <a href="#contact" className="np-btn np-btn-sm">Get advice</a>
          <button className="np-nav-burger" aria-label="Menu">
            <svg width="22" height="14" viewBox="0 0 22 14">
              <path d="M0 1h22M0 7h22M0 13h22" stroke="currentColor" strokeWidth="1.6"/>
            </svg>
          </button>
        </div>
      </header>

      {/* ============================== HERO ============================== */}
      <section className="np-hero">
        {/* Soft directional glow toward the north star (top-right) */}
        <div className="np-hero-glow" aria-hidden="true" />

        <div className="np-hero-inner">
          <h1 className="np-hero-title">
            <span>Considered HR advice</span>
            <span>for Australian businesses.</span>
          </h1>

          <p className="np-hero-lead">
            North People Co is a senior HR consultancy partnering with
            Australian employers on the people decisions that matter —
            from advisory and employee relations to capability and culture.
          </p>

          <div className="np-hero-cta">
            <a href="#contact" className="np-btn np-btn-primary">
              Start a conversation
              <span aria-hidden>→</span>
            </a>
            <a href="#services" className="np-btn np-btn-ghost">How we help</a>
          </div>

          <div className="np-hero-meta">
            <div className="np-meta-item"><span className="np-meta-dot"/>Sydney</div>
            <div className="np-meta-item"><span className="np-meta-dot"/>Melbourne</div>
            <div className="np-meta-item"><span className="np-meta-dot"/>Brisbane</div>
            <div className="np-meta-item"><span className="np-meta-dot"/>Perth</div>
            <div className="np-meta-sep">—</div>
            <div className="np-meta-item">Partnering with 180+ Australian employers</div>
          </div>
        </div>

        {/* Stats strip at the bottom of the hero */}
        <div className="np-hero-stats">
          {[
            ["180+", "Businesses partnered"],
            ["94%", "Clients renew or extend"],
            ["1 day", "Average response time"],
            ["20+ yrs", "Senior HR per brief"],
          ].map(([n, l], i) => (
            <div className="np-stat" key={i}>
              <div className="np-stat-num">{n}</div>
              <div className="np-stat-label">{l}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ========================== TRUST STRIP ========================== */}
      <section className="np-trust">
        <span className="np-eyebrow">Trusted by Australian teams at</span>
        <div className="np-logos">
          {["ATLAS", "MERIDIAN", "Northwind&Co.", "HALCYON", "VESTA", "OAKBROOK"].map((n, i) => (
            <span key={i} className={"np-logo " + (i % 2 ? "is-serif" : "is-display")}>{n}</span>
          ))}
        </div>
      </section>

      {/* ============================ ABOUT ============================ */}
      <section id="about" className="np-section np-about">
        <div className="np-container np-about-grid">
          <div className="np-about-left">
            <div className="np-eyebrow">01 — Our compass</div>
            <h2 className="np-h2">
              People work,<br/>
              done well.
            </h2>
            <figure className="np-portrait">
              <img
                src="assets/founder-lisa.webp"
                alt="Lisa Taylor-Mesiti, Founder of North People Co"
                loading="lazy"
              />
              <figcaption>Lisa Taylor-Mesiti · Founder &amp; Managing Director</figcaption>
            </figure>
          </div>

          <div className="np-about-right">
            <p className="np-lead">
              North People Co was founded on a simple belief: good HR
              isn't a department. It's the steady, human work of helping
              a business and its people get better together.
            </p>
            <p className="np-body">
              We're a tight team of senior HR practitioners — generalists,
              employee relations specialists, and capability &amp; culture
              leads. Every engagement is led personally by a partner who's
              run the function before. We know the Fair Work Act, the
              Modern Awards, and the way good managers actually behave.
            </p>
            <p className="np-body">
              We work with growing Australian businesses — from ten-person
              founder teams without an HR function, to ASX-listed groups
              who need an extra pair of expert hands. Embedded, project,
              or on call. However it fits.
            </p>

            <div className="np-about-credentials">
              {[
                ["AHRI", "Member firm · methodology aligned"],
                ["Fair Work", "Literacy on every brief"],
                ["WHS", "Psychosocial safety embedded"],
                ["Privacy Act", "Compliant data handling"],
              ].map(([k, v], i) => (
                <div className="np-credential" key={i}>
                  <StarMark size={11} color="var(--ink)" stroke={2.5} />
                  <div>
                    <div className="np-credential-k">{k}</div>
                    <div className="np-credential-v">{v}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =========================== SERVICES =========================== */}
      <section id="services" className="np-section np-services">
        <div className="np-container">
          <div className="np-section-head">
            <div>
              <div className="np-eyebrow">02 — What we do</div>
              <h2 className="np-h2">
                How we<br/>
                partner with you.
              </h2>
            </div>
            <p className="np-section-head-lede">
              From an outsourced HR function to a Fair Work matter that lands
              on Friday afternoon — every engagement is tailored to the
              moment your business is in.
            </p>
          </div>

          <div className="np-services-grid">
            {[
              {
                no: "01",
                tag: "Outsourced · Fractional · Project",
                title: "HR Advisory",
                body: "Your on-tap people team. Strategic advice when you need a sounding board, hands-on support when the work has to get done. Like having a Chief People Officer without the headcount.",
                items: [
                  "Outsourced HR partnership",
                  "Policies, handbooks & contracts",
                  "Onboarding & employee lifecycle",
                  "HRIS implementation & uplift",
                ],
              },
              {
                no: "02",
                tag: "Fair Work · Investigations · ER",
                title: "Employee Relations",
                body: "The harder end of HR. Modern Award and EBA interpretation, performance and conduct matters, workplace investigations, restructures and redundancies — handled with care, rigour and discretion.",
                items: [
                  "Fair Work, NES & Award compliance",
                  "Workplace investigations",
                  "Restructure & redundancy support",
                  "Performance & disciplinary matters",
                ],
              },
              {
                no: "03",
                tag: "Coaching · L&D · DEI · WHS",
                title: "Capability & Culture",
                body: "Leadership coaching, manager training, engagement diagnostics and the culture work that turns a workplace into one people choose to stay at. Practical programs — not theatre.",
                items: [
                  "Manager & leadership coaching",
                  "Engagement & culture programs",
                  "DEI & psychosocial safety",
                  "Wellbeing & WHS programs",
                ],
              },
            ].map((s, i) => (
              <article className="np-service" key={i}>
                <div className="np-service-watermark" aria-hidden="true">
                  <NorthStar size={160} color="var(--ink)" stroke={3.5} />
                </div>
                <div className="np-service-head">
                  <span className="np-service-num">{s.no}</span>
                  <span className="np-service-tag">{s.tag}</span>
                </div>
                <h3 className="np-service-title">{s.title}</h3>
                <p className="np-service-body">{s.body}</p>
                <ul className="np-service-list">
                  {s.items.map((it, j) => (
                    <li key={j}>
                      <StarMark size={10} color="var(--ink)" stroke={2.6} />
                      {it}
                    </li>
                  ))}
                </ul>
                <a href="#contact" className="np-service-cta">
                  Enquire about this service <span aria-hidden>→</span>
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* =========================== APPROACH =========================== */}
      <section id="approach" className="np-section np-approach">
        <div className="np-container">
          <div className="np-section-head">
            <div>
              <div className="np-eyebrow">03 — How we work</div>
              <h2 className="np-h2">
                Our approach,<br/>
                end to end.
              </h2>
            </div>
            <p className="np-section-head-lede">
              Four phases. One named partner accountable from the first call
              through to the day your managers don't need us in the room
              anymore.
            </p>
          </div>

          <ol className="np-approach-list">
            {[
              ["01", "Listen", "What's working, what isn't, what's keeping you up at night. We listen before we plan."],
              ["02", "Diagnose", "Review documents, audit awards, interview leaders, surface the real issue beneath the symptom."],
              ["03", "Design", "A practical plan: what to do, who does it, what good looks like. Tailored to your team, your sector, your stage."],
              ["04", "Embed", "We don't hand over a PDF. We stay in the work — coaching managers, running sessions, holding the line until it sticks."],
            ].map(([n, t, b]) => (
              <li className="np-phase" key={n}>
                <div className="np-phase-num">
                  <StarMark size={14} color="var(--ink)" stroke={2.6} />
                  Phase {n}
                </div>
                <h3 className="np-phase-title">{t}</h3>
                <p className="np-phase-body">{b}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ========================= VOICES (DARK) ========================= */}
      <section id="voices" className="np-voices">
        <DynamicSky theme="dark" density={skyVoices.density} minInterval={skyVoices.minInterval} maxInterval={skyVoices.maxInterval} />
        <div className="np-container np-voices-inner">
          <div className="np-eyebrow np-eyebrow-tan">04 — Voices</div>
          <div className="np-voices-grid">
            {[
              {
                quote: "North handled a complex restructure for us with more care than I thought possible. Eighty-two people transitioned across two sites. Not a single complaint to Fair Work. They were in the work with us, end to end.",
                who: "Maya Chen",
                role: "COO, Halcyon Bio",
              },
              {
                quote: "We've used three HR consultancies in the last decade. North is the only one our leaders ask for by name. They make every manager around them better at the people side of the job.",
                who: "James Okafor",
                role: "Managing Director, Atlas Mobility",
              },
            ].map((t, i) => (
              <figure className="np-quote" key={i}>
                <StarMark size={22} color="var(--tan-soft)" stroke={2.2} />
                <blockquote>“{t.quote}”</blockquote>
                <figcaption>
                  <div className="np-quote-avatar" aria-hidden="true" />
                  <div>
                    <div className="np-quote-who">{t.who}</div>
                    <div className="np-quote-role">{t.role}</div>
                  </div>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* =========================== CONTACT =========================== */}
      <section id="contact" className="np-section np-contact">
        <div className="np-container np-contact-grid">
          <div className="np-contact-left">
            <div className="np-eyebrow">05 — Get in touch</div>
            <h2 className="np-h2">
              Start a<br/>
              conversation.
            </h2>
            <p className="np-lead">
              Tell us what's on your desk — a single matter, a project, or
              the start of a longer partnership. A senior partner will be in
              touch within one business day.
            </p>

            <div className="np-contact-lines">
              <a className="np-contact-line" href="mailto:hello@northpeople.co">
                <span className="np-contact-k">Email</span>
                <span className="np-contact-v">hello@northpeople.co</span>
              </a>
              <a className="np-contact-line" href="tel:1300667847">
                <span className="np-contact-k">Call</span>
                <span className="np-contact-v">1300 NORTH P  ·  1300 667 847</span>
              </a>
              <div className="np-contact-line">
                <span className="np-contact-k">Hours</span>
                <span className="np-contact-v">Mon–Fri, 8.30am – 6pm AEDT</span>
              </div>
            </div>

            <div className="np-offices">
              {[
                ["Sydney", "Level 4, 12 Bridge St", "NSW 2000"],
                ["Melbourne", "8 Exhibition St", "VIC 3000"],
                ["Brisbane", "Level 12, 145 Eagle St", "QLD 4000"],
              ].map(([city, l1, l2]) => (
                <div className="np-office" key={city}>
                  <div className="np-office-city">{city}</div>
                  <div className="np-office-addr">{l1}<br/>{l2}</div>
                </div>
              ))}
            </div>
          </div>

          <ContactForm />
        </div>
      </section>

      {/* =========================== FOOTER =========================== */}
      <footer className="np-footer">
        <DynamicSky theme="dark" density={skyFooter.density} minInterval={skyFooter.minInterval} maxInterval={skyFooter.maxInterval} />
        <div className="np-container np-footer-inner">
          <div className="np-footer-grid">
            <div className="np-footer-brand">
              <NorthWordmark size={0.95} layout="stacked" color="var(--cream)" />
              <p>
                A boutique Australian HR advisory for the businesses that
                care how their people are treated.
              </p>
            </div>
            <div className="np-footer-col">
              <div className="np-eyebrow np-eyebrow-tan">Firm</div>
              <a href="#about">About</a>
              <a href="#">Team</a>
              <a href="#">Careers at North</a>
              <a href="#">Insights</a>
            </div>
            <div className="np-footer-col">
              <div className="np-eyebrow np-eyebrow-tan">Services</div>
              <a href="#services">HR Advisory</a>
              <a href="#services">Employee Relations</a>
              <a href="#services">Capability &amp; Culture</a>
            </div>
            <div className="np-footer-col">
              <div className="np-eyebrow np-eyebrow-tan">Connect</div>
              <a href="mailto:hello@northpeople.co">hello@northpeople.co</a>
              <a href="tel:1300667847">1300 667 847</a>
              <a href="#">LinkedIn</a>
              <a href="#">AHRI</a>
            </div>
          </div>
          <div className="np-footer-fine">
            <span>© 2026 North People Co Pty Ltd · ABN 00 000 000 000 · AHRI member</span>
            <span>Privacy · Terms · Modern Slavery Statement</span>
          </div>
        </div>
      </footer>
      {/* =========================== TWEAKS =========================== */}
      <TweaksPanel title="Tweaks">
        <TweakSection label="Mood" />
        <TweakRadio
          label="Palette"
          value={t.mood}
          options={["boutique", "coastal", "sunrise"]}
          onChange={(v) => setTweak("mood", v)}
        />

        <TweakSection label="Headline voice" />
        <TweakRadio
          label="Display"
          value={t.headlineVoice}
          options={["display", "refined"]}
          onChange={(v) => setTweak("headlineVoice", v)}
        />

        <TweakSection label="Night sky" />
        <TweakRadio
          label="Activity"
          value={t.skyActivity}
          options={["calm", "lively", "vivid"]}
          onChange={(v) => setTweak("skyActivity", v)}
        />
      </TweaksPanel>
    </div>
  );
}

window.Landing = Landing;
