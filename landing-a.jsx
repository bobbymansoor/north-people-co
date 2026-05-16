// landing-a.jsx — Direction A: "Editorial Warm" (HR advisory rewrite)
// Cream, ink, hand-drawn rectangular frame motif. Magazine rhythm.
// Boutique Australian HR advisory feel.

function LandingA({ viewport = "desktop" }) {
  const isM = viewport === "mobile";
  const isT = viewport === "tablet";
  const isD = viewport === "desktop";
  const pad = isM ? 24 : isT ? 48 : 80;
  const maxW = 1280;

  return (
    <div className="lp-a lp-root" style={{ background: "var(--cream)", color: "var(--ink)", minHeight: "100%", overflow: "hidden", position: "relative" }}>
      <style>{`
        .lp-a a { color: inherit; text-decoration: none; }
        .lp-a .eyebrow {
          font-family: var(--f-body); font-size: 12px; letter-spacing: 0.28em;
          text-transform: uppercase; font-weight: 500; opacity: 0.72;
        }
        .lp-a .display { font-family: var(--f-display); letter-spacing: 0.01em; line-height: 0.92; font-weight: 400; }
        .lp-a .script { font-family: var(--f-script); font-weight: 400; }
        .lp-a .lead { font-family: var(--f-serif); font-weight: 300; }
        .lp-a .btn {
          display: inline-flex; align-items: center; gap: 10px;
          padding: 14px 22px; border-radius: 999px; font-weight: 500;
          font-size: 14px; letter-spacing: 0.06em; text-transform: uppercase;
          border: 1.5px solid var(--ink); cursor: pointer; transition: all .2s;
          background: var(--ink); color: var(--cream);
        }
        .lp-a .btn:hover { background: var(--ink-deep); }
        .lp-a .btn-ghost { background: transparent; color: var(--ink); }
        .lp-a .btn-ghost:hover { background: var(--ink); color: var(--cream); }
        .lp-a .card { background: var(--cream-soft); border: 1px solid var(--hairline); border-radius: 4px; }
      `}</style>

      {/* ===== Nav ===== */}
      <header style={{
        position: "relative", zIndex: 5,
        display: "flex", alignItems: "center", justifyContent: "space-between",
        padding: `${isM ? 18 : 28}px ${pad}px`,
        borderBottom: "1px solid var(--hairline-light)",
      }}>
        <NorthWordmark size={isM ? 0.7 : 0.85} layout="horizontal" />
        {isD ? (
          <nav style={{ display: "flex", gap: 36, fontSize: 14, fontWeight: 500, letterSpacing: "0.04em" }}>
            <a href="#about">About</a>
            <a href="#services">Services</a>
            <a href="#approach">Approach</a>
            <a href="#contact">Contact</a>
          </nav>
        ) : (
          <button aria-label="Menu" style={{ background: "transparent", border: "none", padding: 8, cursor: "pointer" }}>
            <svg width="22" height="14" viewBox="0 0 22 14"><path d="M0 1h22M0 7h22M0 13h22" stroke="var(--ink)" strokeWidth="1.6"/></svg>
          </button>
        )}
        {isD && <a className="btn" style={{ padding: "10px 18px", fontSize: 12 }} href="#contact">Get advice</a>}
      </header>

      {/* ===== Hero ===== */}
      <section style={{ position: "relative", padding: `${isM ? 64 : isT ? 96 : 120}px ${pad}px ${isM ? 80 : 120}px`, textAlign: "center" }}>
        <ShootingStars theme="light" density={isM ? "sparse" : "normal"} />

        {!isM && (
          <div style={{
            position: "absolute",
            top: isT ? 40 : 60,
            left: pad - 20,
            right: pad - 20,
            bottom: isT ? 40 : 60,
            pointerEvents: "none", opacity: 0.85,
          }}>
            <InkFrame color="var(--ink)" stroke={2.4} opacity={0.65} />
          </div>
        )}

        <div style={{ position: "relative", maxWidth: 980, margin: "0 auto" }}>
          <div className="eyebrow" style={{ marginBottom: isM ? 22 : 32, display: "inline-flex", alignItems: "center", gap: 10 }}>
            <StarMark size={11} color="var(--ink)" stroke={2.5} />
            HR advisory &amp; people partner · Australian-owned, est. 2019
          </div>

          <h1 className="display" style={{
            fontSize: isM ? 60 : isT ? 100 : 140,
            margin: "0 0 24px",
            color: "var(--ink)",
          }}>
            YOUR&nbsp;PEOPLE<br/>
            <span className="script" style={{ fontSize: isM ? 92 : isT ? 156 : 220, lineHeight: 0.7, display: "inline-block", verticalAlign: "middle", marginRight: 16, marginLeft: 16 }}>
              north
            </span><br/>
            STAR.
          </h1>

          <p className="lead" style={{ fontSize: isM ? 17 : isT ? 20 : 22, lineHeight: 1.55, maxWidth: 660, margin: "0 auto 36px", color: "var(--ink-soft)" }}>
            An Australian HR advisory built to walk alongside your business
            through every people decision — from the first hire to the
            hardest conversation. Practical advice. Steady hands.
            The partner you keep on speed-dial.
          </p>

          <div style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap" }}>
            <a className="btn" href="#contact">Talk to us</a>
            <a className="btn btn-ghost" href="#services">How we help</a>
          </div>

          <div style={{
            marginTop: isM ? 56 : 88,
            display: "flex", flexWrap: "wrap",
            justifyContent: "center", gap: isM ? 24 : 56,
            fontSize: 13, letterSpacing: "0.08em", textTransform: "uppercase",
            color: "var(--muted)", fontWeight: 500,
          }}>
            <span>Sydney · Melbourne · Brisbane</span>
            <span style={{ opacity: 0.5 }}>—</span>
            <span>Partnering with 180+ Australian employers</span>
          </div>
        </div>
      </section>

      {/* ===== Logo strip ===== */}
      <section style={{ padding: `${isM ? 24 : 36}px ${pad}px`, borderTop: "1px solid var(--hairline-light)", borderBottom: "1px solid var(--hairline-light)" }}>
        <div style={{ maxWidth: maxW, margin: "0 auto", display: "flex", flexWrap: "wrap", gap: isM ? 18 : 40, justifyContent: "space-between", alignItems: "center", opacity: 0.6 }}>
          {["ATLAS", "MERIDIAN", "Northwind&Co.", "HALCYON", "VESTA", "OAKBROOK"].map((n, i) => (
            <span key={i} style={{ fontFamily: i % 2 ? "var(--f-serif)" : "var(--f-display)", fontSize: isM ? 16 : 22, letterSpacing: i % 2 ? "0.02em" : "0.16em", color: "var(--ink)" }}>{n}</span>
          ))}
        </div>
      </section>

      {/* ===== Intro / about ===== */}
      <section id="about" style={{ padding: `${isM ? 80 : 140}px ${pad}px` }}>
        <div style={{ maxWidth: maxW, margin: "0 auto", display: "grid", gridTemplateColumns: isD ? "1fr 1.2fr" : "1fr", gap: isM ? 40 : 80, alignItems: "start" }}>
          <div>
            <div className="eyebrow" style={{ marginBottom: 18 }}>01 — Our compass</div>
            <h2 className="display" style={{ fontSize: isM ? 48 : isT ? 64 : 80, lineHeight: 0.95, margin: "0 0 28px", color: "var(--ink)" }}>
              People work,<br/>done well.
            </h2>
            {!isD && <div style={{ height: 24 }} />}
            <Placeholder label="team portrait" aspect="4/5" tone="tan" />
          </div>
          <div style={{ paddingTop: isD ? 80 : 0 }}>
            <p className="lead" style={{ fontSize: isM ? 19 : 24, lineHeight: 1.5, margin: "0 0 28px", color: "var(--ink)" }}>
              North People Co was founded on a simple belief: good HR
              isn't a department — it's the steady, human work of helping
              a business and its people get better together.
            </p>
            <p style={{ fontSize: isM ? 15 : 16, lineHeight: 1.75, margin: "0 0 24px", color: "var(--ink-soft)" }}>
              We're a tight team of senior HR practitioners — generalists,
              employee relations specialists, and culture &amp; capability
              leads. Every engagement is led personally by a partner who's
              run the function before. We know the Fair Work Act, the
              Modern Awards, and the way good managers actually behave.
            </p>
            <p style={{ fontSize: isM ? 15 : 16, lineHeight: 1.75, margin: "0 0 36px", color: "var(--ink-soft)" }}>
              We work with growing Australian businesses — from ten-person
              founder teams without an HR function, to ASX-listed groups
              who need an extra pair of expert hands. Embedded, project,
              or on call. However it fits.
            </p>

            <div style={{ display: "grid", gridTemplateColumns: isM ? "1fr 1fr" : "repeat(4, 1fr)", gap: isM ? 20 : 32, paddingTop: 32, borderTop: "1px solid var(--hairline)" }}>
              {[
                ["180+", "businesses partnered"],
                ["94%",  "clients renew or extend"],
                ["1 day", "average response time"],
                ["20+ yrs", "senior HR experience on every brief"],
              ].map(([n, l], i) => (
                <div key={i}>
                  <div className="display" style={{ fontSize: isM ? 30 : 36, color: "var(--ink)" }}>{n}</div>
                  <div style={{ fontSize: 12, letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--muted)", marginTop: 6 }}>{l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===== Services ===== */}
      <section id="services" style={{ padding: `${isM ? 80 : 120}px ${pad}px`, background: "var(--cream-soft)", borderTop: "1px solid var(--hairline-light)", borderBottom: "1px solid var(--hairline-light)" }}>
        <div style={{ maxWidth: maxW, margin: "0 auto" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "end", flexWrap: "wrap", gap: 24, marginBottom: isM ? 40 : 72 }}>
            <div>
              <div className="eyebrow" style={{ marginBottom: 18 }}>02 — What we do</div>
              <h2 className="display" style={{ fontSize: isM ? 48 : isT ? 64 : 80, lineHeight: 0.95, margin: 0, color: "var(--ink)" }}>
                Three ways<br/>we partner.
              </h2>
            </div>
            <p style={{ maxWidth: 380, fontSize: 15, lineHeight: 1.65, color: "var(--ink-soft)", margin: 0 }}>
              From an outsourced HR function to a Fair Work matter
              that lands on Friday afternoon — every engagement is
              tailored to the moment your business is in.
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: isM ? "1fr" : isT ? "1fr 1fr" : "repeat(3, 1fr)", gap: isM ? 16 : 24 }}>
            {[
              {
                no: "01",
                title: "HR Advisory",
                tag: "Outsourced · Fractional",
                body: "Your on-tap people team. Strategic advice when you need a sounding board, hands-on support when the work has to get done. Like having a Chief People Officer without the headcount.",
                items: ["Outsourced HR partnership", "Policies, handbooks & contracts", "Onboarding & lifecycle design"],
              },
              {
                no: "02",
                title: "Employee Relations",
                tag: "Fair Work · Investigations",
                body: "The harder end of HR. Modern Award and EBA interpretation, performance and conduct matters, workplace investigations, restructures and redundancies — handled with care, rigour and discretion.",
                items: ["Fair Work & NES compliance", "Workplace investigations", "Restructure & redundancy support"],
              },
              {
                no: "03",
                title: "Culture & Capability",
                tag: "Coaching · L&D · DEI",
                body: "Leadership coaching, manager training, engagement surveys and the culture work that turns a workplace into one people choose to stay at. Practical programs, not theatre.",
                items: ["Manager & leadership coaching", "Engagement & culture programs", "DEI, wellbeing & WHS"],
              },
            ].map((s, i) => (
              <article key={i} className="card" style={{ padding: isM ? 28 : 36, position: "relative", overflow: "hidden", display: "flex", flexDirection: "column", gap: 18 }}>
                <div style={{ position: "absolute", right: -8, top: -8, opacity: 0.06 }}>
                  <NorthStar size={140} color="var(--ink)" stroke={4} />
                </div>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "start" }}>
                  <div className="display" style={{ fontSize: 28, color: "var(--ink)", opacity: 0.4 }}>{s.no}</div>
                  <div style={{ fontSize: 11, letterSpacing: "0.18em", textTransform: "uppercase", padding: "5px 10px", border: "1px solid var(--hairline)", borderRadius: 999, color: "var(--ink-soft)" }}>{s.tag}</div>
                </div>
                <h3 className="display" style={{ fontSize: isM ? 30 : 34, margin: 0, color: "var(--ink)", letterSpacing: "0.02em" }}>{s.title}</h3>
                <p style={{ fontSize: 15, lineHeight: 1.65, margin: 0, color: "var(--ink-soft)" }}>{s.body}</p>
                <ul style={{ listStyle: "none", padding: 0, margin: "8px 0 0", display: "flex", flexDirection: "column", gap: 10, borderTop: "1px solid var(--hairline)", paddingTop: 20 }}>
                  {s.items.map((it, j) => (
                    <li key={j} style={{ fontSize: 14, color: "var(--ink)", display: "flex", gap: 12, alignItems: "center" }}>
                      <StarMark size={11} color="var(--ink)" stroke={2.6} />
                      {it}
                    </li>
                  ))}
                </ul>
                <a href="#contact" style={{ marginTop: 14, fontSize: 13, letterSpacing: "0.14em", textTransform: "uppercase", fontWeight: 600, color: "var(--ink)", display: "inline-flex", alignItems: "center", gap: 8 }}>
                  Learn more <span aria-hidden>→</span>
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ===== Approach / pull-quote ===== */}
      <section id="approach" style={{ padding: `${isM ? 80 : 140}px ${pad}px`, textAlign: "center", position: "relative" }}>
        <div style={{ maxWidth: 920, margin: "0 auto" }}>
          <StarMark size={isM ? 24 : 32} color="var(--ink)" stroke={2.2} style={{ marginBottom: 24 }} />
          <p className="lead" style={{ fontSize: isM ? 24 : isT ? 32 : 40, lineHeight: 1.3, color: "var(--ink)", margin: "0 0 32px" }}>
            "They don't hand us a deck and disappear. They sit
            <span className="script" style={{ fontSize: isM ? 36 : isT ? 52 : 64, color: "var(--ink)", margin: "0 8px" }}>with</span>
            us until the work is actually done."
          </p>
          <div style={{ fontSize: 13, letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--muted)" }}>
            Maya Chen · COO, Halcyon Bio
          </div>
        </div>
      </section>

      {/* ===== Contact ===== */}
      <section id="contact" style={{ padding: `${isM ? 80 : 120}px ${pad}px`, background: "var(--ink)", color: "var(--cream)", position: "relative", overflow: "hidden" }}>
        <ShootingStars theme="dark" density="sparse" />
        <div style={{ maxWidth: maxW, margin: "0 auto", position: "relative", display: "grid", gridTemplateColumns: isD ? "1fr 1fr" : "1fr", gap: isM ? 48 : 80 }}>
          <div>
            <div className="eyebrow" style={{ marginBottom: 18, color: "var(--tan-soft)" }}>03 — Get in touch</div>
            <h2 className="display" style={{ fontSize: isM ? 48 : isT ? 64 : 84, lineHeight: 0.95, margin: "0 0 28px" }}>
              Let's sort it<br/>
              <span className="script" style={{ fontSize: isM ? 72 : isT ? 100 : 130, lineHeight: 0.8 }}>out</span> together.
            </h2>
            <p style={{ fontSize: isM ? 16 : 18, lineHeight: 1.65, opacity: 0.85, maxWidth: 480, margin: "0 0 36px" }}>
              Tell us what's on your desk — a single matter, a project, or
              the start of a longer partnership. A senior partner will be in
              touch within one business day.
            </p>

            <div style={{ display: "flex", flexDirection: "column", gap: 14, fontSize: 15 }}>
              <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
                <StarMark size={12} color="var(--tan-soft)" stroke={2.6} />
                <span style={{ opacity: 0.7, width: 80, fontSize: 12, letterSpacing: "0.14em", textTransform: "uppercase" }}>Email</span>
                <a href="mailto:hello@northpeople.co" style={{ color: "var(--cream)" }}>hello@northpeople.co</a>
              </div>
              <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
                <StarMark size={12} color="var(--tan-soft)" stroke={2.6} />
                <span style={{ opacity: 0.7, width: 80, fontSize: 12, letterSpacing: "0.14em", textTransform: "uppercase" }}>Sydney</span>
                <span>Level 4, 12 Bridge St, NSW 2000</span>
              </div>
              <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
                <StarMark size={12} color="var(--tan-soft)" stroke={2.6} />
                <span style={{ opacity: 0.7, width: 80, fontSize: 12, letterSpacing: "0.14em", textTransform: "uppercase" }}>Call</span>
                <a href="tel:+61290000000" style={{ color: "var(--cream)" }}>1300 NORTH P (1300 667 847)</a>
              </div>
            </div>
          </div>

          <form style={{ display: "flex", flexDirection: "column", gap: 18, paddingTop: isD ? 12 : 0 }} onSubmit={e => e.preventDefault()}>
            {[
              ["Your name", "name", "Alex Mercer"],
              ["Company", "company", "Halcyon Bio"],
              ["Work email", "email", "alex@halcyon.bio"],
            ].map(([label, name, ph]) => (
              <label key={name} style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                <span style={{ fontSize: 12, letterSpacing: "0.16em", textTransform: "uppercase", opacity: 0.7 }}>{label}</span>
                <input type="text" name={name} placeholder={ph}
                  style={{
                    background: "transparent", border: 0, borderBottom: "1px solid rgba(245,238,221,0.3)",
                    padding: "10px 0", color: "var(--cream)", fontSize: 16, fontFamily: "inherit", outline: "none",
                  }}
                />
              </label>
            ))}
            <label style={{ display: "flex", flexDirection: "column", gap: 8 }}>
              <span style={{ fontSize: 12, letterSpacing: "0.16em", textTransform: "uppercase", opacity: 0.7 }}>What can we help with?</span>
              <textarea rows={3} placeholder="We're navigating a restructure across two sites and want a partner to help us do it right…"
                style={{
                  background: "transparent", border: 0, borderBottom: "1px solid rgba(245,238,221,0.3)",
                  padding: "10px 0", color: "var(--cream)", fontSize: 16, fontFamily: "inherit", outline: "none", resize: "vertical",
                }}
              />
            </label>
            <button className="btn" style={{ alignSelf: "flex-start", marginTop: 12, background: "var(--cream)", color: "var(--ink)", border: "1.5px solid var(--cream)" }}>
              Send enquiry <StarMark size={12} color="var(--ink)" stroke={2.6} />
            </button>
          </form>
        </div>
      </section>

      {/* ===== Footer ===== */}
      <footer style={{ padding: `${isM ? 40 : 56}px ${pad}px`, background: "var(--ink-deep)", color: "var(--cream)" }}>
        <div style={{ maxWidth: maxW, margin: "0 auto", display: "flex", flexWrap: "wrap", gap: 24, justifyContent: "space-between", alignItems: "center", opacity: 0.85 }}>
          <NorthWordmark size={0.7} layout="horizontal" color="var(--cream)" />
          <div style={{ fontSize: 12, letterSpacing: "0.16em", textTransform: "uppercase", opacity: 0.7 }}>© 2026 North People Co Pty Ltd · AHRI member</div>
        </div>
      </footer>
    </div>
  );
}

window.LandingA = LandingA;
