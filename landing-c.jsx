// landing-c.jsx — Direction C: "Asymmetric Modern" (HR advisory rewrite)
// Warm white, asymmetric magazine layout, script accents used decoratively.
// Modernist studio feel for an Australian HR advisory.

function LandingC({ viewport = "desktop" }) {
  const isM = viewport === "mobile";
  const isT = viewport === "tablet";
  const isD = viewport === "desktop";
  const pad = isM ? 22 : isT ? 44 : 72;
  const maxW = 1280;

  return (
    <div className="lp-c lp-root" style={{ background: "var(--cream-soft)", color: "var(--ink)", minHeight: "100%", overflow: "hidden", position: "relative" }}>
      <style>{`
        .lp-c a { color: inherit; text-decoration: none; }
        .lp-c .display { font-family: var(--f-display); letter-spacing: 0.02em; line-height: 0.92; }
        .lp-c .serif { font-family: var(--f-serif); font-weight: 300; line-height: 1.05; }
        .lp-c .serif em { font-style: italic; }
        .lp-c .script { font-family: var(--f-script); font-weight: 400; }
        .lp-c .eyebrow { font-family: var(--f-body); font-size: 11px; letter-spacing: 0.3em; text-transform: uppercase; font-weight: 600; }
        .lp-c .num-tag { font-family: var(--f-display); font-size: 14px; letter-spacing: 0.16em; color: var(--rust); }
        .lp-c .btn {
          display: inline-flex; align-items: center; gap: 10px;
          padding: 14px 22px; border-radius: 999px; font-weight: 600;
          font-size: 13px; letter-spacing: 0.12em; text-transform: uppercase;
          border: 1.5px solid var(--ink); transition: all .2s; cursor: pointer;
          background: var(--ink); color: var(--cream);
        }
        .lp-c .btn:hover { background: transparent; color: var(--ink); }
        .lp-c .btn-ghost { background: transparent; color: var(--ink); }
        .lp-c .btn-ghost:hover { background: var(--ink); color: var(--cream); }
        .lp-c .chip {
          display: inline-flex; align-items: center; gap: 8px;
          padding: 6px 12px; border-radius: 999px; border: 1px solid var(--hairline);
          font-size: 11px; letter-spacing: 0.16em; text-transform: uppercase; color: var(--ink-soft);
          background: rgba(255,255,255,0.4);
        }
      `}</style>

      {/* ===== Nav ===== */}
      <header style={{
        position: "sticky", top: 0, zIndex: 10,
        display: "flex", alignItems: "center", justifyContent: "space-between",
        padding: `${isM ? 16 : 22}px ${pad}px`,
        background: "rgba(250,246,236,0.85)",
        backdropFilter: "blur(8px)",
        borderBottom: "1px solid var(--hairline-light)",
      }}>
        <NorthWordmark size={isM ? 0.65 : 0.8} layout="horizontal" />
        {isD ? (
          <nav style={{ display: "flex", gap: 32, fontSize: 13, fontWeight: 500, letterSpacing: "0.08em", textTransform: "uppercase" }}>
            <a href="#about">Studio</a>
            <a href="#services">Services</a>
            <a href="#process">Approach</a>
            <a href="#voices">Voices</a>
            <a href="#contact">Contact</a>
          </nav>
        ) : (
          <button aria-label="Menu" style={{ background: "transparent", border: "none", padding: 8, cursor: "pointer" }}>
            <svg width="22" height="14" viewBox="0 0 22 14"><path d="M0 1h22M0 7h22M0 13h22" stroke="var(--ink)" strokeWidth="1.6"/></svg>
          </button>
        )}
        {isD && <a className="btn" style={{ padding: "10px 18px", fontSize: 11 }} href="#contact">Get advice</a>}
      </header>

      {/* ===== HERO — asymmetric, large script in background ===== */}
      <section style={{ position: "relative", padding: `${isM ? 56 : isT ? 80 : 96}px ${pad}px ${isM ? 64 : 96}px`, overflow: "hidden" }}>
        {!isM && (
          <div aria-hidden="true" style={{
            position: "absolute",
            top: isT ? 240 : 320,
            right: isT ? -60 : -100,
            fontFamily: "var(--f-script)",
            fontSize: isT ? 360 : 520,
            color: "var(--ink)",
            opacity: 0.06,
            lineHeight: 0.8,
            pointerEvents: "none",
            whiteSpace: "nowrap",
          }}>
            people
          </div>
        )}

        <ShootingStars theme="light" density={isM ? "sparse" : "normal"} />

        <div style={{ maxWidth: maxW, margin: "0 auto", position: "relative" }}>
          <div style={{ display: "grid", gridTemplateColumns: isD ? "1.1fr 0.9fr" : "1fr", gap: isM ? 32 : 48, alignItems: "start" }}>
            <div>
              <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: isM ? 24 : 36 }}>
                <span style={{ width: 32, height: 1, background: "var(--ink)" }} />
                <span className="eyebrow" style={{ color: "var(--ink)" }}>HR Advisory &amp; Support · Sydney · Melbourne · Brisbane</span>
              </div>

              <h1 className="display" style={{ fontSize: isM ? 64 : isT ? 100 : 148, margin: 0, color: "var(--ink)" }}>
                HR THAT<br/>
                FEELS<br/>
                <span className="script" style={{ fontSize: isM ? 88 : isT ? 152 : 220, lineHeight: 0.75, display: "inline-block", marginTop: isM ? 12 : 20, color: "var(--rust)" }}>
                  human.
                </span>
              </h1>

              <p className="serif" style={{ fontSize: isM ? 19 : isT ? 22 : 26, lineHeight: 1.4, margin: `${isM ? 28 : 44}px 0 36px`, color: "var(--ink)", maxWidth: 560 }}>
                An Australian HR advisory built for businesses that care
                how their people are treated. We sit alongside leaders,
                managers and HR teams — and we <em>don't go anywhere</em>
                when it gets hard.
              </p>

              <div style={{ display: "flex", flexWrap: "wrap", gap: 12 }}>
                <a className="btn" href="#contact">Start a conversation →</a>
                <a className="btn btn-ghost" href="#services">How we help</a>
              </div>
            </div>

            <div style={{ position: "relative", paddingTop: isD ? 60 : 0 }}>
              <div style={{
                background: "var(--ink)", color: "var(--cream)",
                borderRadius: 4, padding: isM ? 28 : 32,
                position: "relative", overflow: "hidden",
              }}>
                <ShootingStars theme="dark" density="dense" />
                <div style={{ position: "relative" }}>
                  <div className="eyebrow" style={{ color: "var(--tan-soft)", marginBottom: 16 }}>On the desk this quarter</div>
                  <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 14 }}>
                    {[
                      ["Restructure plan", "Manufacturing · 240 staff"],
                      ["Award reset", "Hospitality · multi-site"],
                      ["Investigation", "Tech firm · confidential"],
                      ["Capability program", "Industrials · PE-backed"],
                    ].map(([r, ctx], i) => (
                      <li key={i} style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", borderBottom: "1px dashed rgba(245,238,221,0.25)", paddingBottom: 12 }}>
                        <span className="display" style={{ fontSize: isM ? 18 : 22, color: "var(--cream)" }}>{r}</span>
                        <span style={{ fontSize: 12, letterSpacing: "0.08em", opacity: 0.7 }}>{ctx}</span>
                      </li>
                    ))}
                  </ul>
                  <div style={{ marginTop: 24, display: "flex", alignItems: "center", gap: 10, fontSize: 12, letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--tan-soft)" }}>
                    <span style={{ width: 8, height: 8, borderRadius: 999, background: "#7CC68B", boxShadow: "0 0 8px #7CC68B" }} />
                    4 active engagements this quarter
                  </div>
                </div>
              </div>

              <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginTop: 18 }}>
                <span className="chip">Outsourced HR</span>
                <span className="chip">Fair Work expertise</span>
                <span className="chip">Australia-wide</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== Trust strip ===== */}
      <section style={{ padding: `${isM ? 28 : 36}px ${pad}px`, borderTop: "1px solid var(--hairline-light)", borderBottom: "1px solid var(--hairline-light)" }}>
        <div style={{ maxWidth: maxW, margin: "0 auto", display: "flex", alignItems: "center", gap: isM ? 18 : 32, flexWrap: "wrap", justifyContent: "space-between" }}>
          <span className="eyebrow" style={{ color: "var(--muted)" }}>Trusted by Australian teams at</span>
          <div style={{ display: "flex", flexWrap: "wrap", gap: isM ? 16 : 40, alignItems: "center", opacity: 0.75 }}>
            {["ATLAS", "MERIDIAN", "Northwind&Co.", "HALCYON", "VESTA", "OAKBROOK"].map((n, i) => (
              <span key={i} style={{ fontFamily: i % 2 ? "var(--f-serif)" : "var(--f-display)", fontSize: isM ? 14 : 19, letterSpacing: i % 2 ? "0.02em" : "0.18em", color: "var(--ink)" }}>{n}</span>
            ))}
          </div>
        </div>
      </section>

      {/* ===== ABOUT — asymmetric editorial split ===== */}
      <section id="about" style={{ padding: `${isM ? 72 : 120}px ${pad}px`, position: "relative" }}>
        <div style={{ maxWidth: maxW, margin: "0 auto", display: "grid", gridTemplateColumns: isD ? "0.4fr 0.6fr" : "1fr", gap: isM ? 40 : 80, alignItems: "start" }}>
          <div style={{ position: isD ? "sticky" : "static", top: 100 }}>
            <span className="num-tag">01 / Studio</span>
            <h2 className="display" style={{ fontSize: isM ? 56 : isT ? 80 : 112, lineHeight: 0.9, margin: "20px 0 0", color: "var(--ink)" }}>
              Made by<br/>
              <span className="script" style={{ fontSize: isM ? 64 : isT ? 100 : 140, color: "var(--rust)", display: "inline-block", marginLeft: -6 }}>practitioners,</span><br/>
              not consultants.
            </h2>
          </div>

          <div style={{ paddingTop: isD ? 40 : 0 }}>
            <p className="serif" style={{ fontSize: isM ? 19 : 23, lineHeight: 1.5, color: "var(--ink)", margin: "0 0 28px" }}>
              We're a tight team of six. Every one of us has run an HR
              function before we started advising on one. We've sat in
              the meetings you're sitting in.
            </p>
            <p style={{ fontSize: isM ? 15 : 16, lineHeight: 1.75, color: "var(--ink-soft)", margin: "0 0 36px" }}>
              That's why our advice sounds different, our plans are
              actually doable, and our conversations with your managers
              feel like coaching, not a checklist. We're not a database.
              We're not a process. We're partners — for the duration of
              the engagement and the years that follow.
            </p>

            <div style={{ display: "grid", gridTemplateColumns: isM ? "1fr" : "200px 1fr", gap: 24, alignItems: "center", padding: 24, border: "1px solid var(--hairline)", borderRadius: 4, background: "rgba(255,255,255,0.5)" }}>
              <Placeholder label="founder portrait" aspect="1/1" tone="tan" />
              <div>
                <div className="eyebrow" style={{ color: "var(--ink-soft)", marginBottom: 10 }}>Founder &amp; managing partner</div>
                <div className="display" style={{ fontSize: 28, color: "var(--ink)" }}>Priya Anand</div>
                <p style={{ fontSize: 14, lineHeight: 1.6, color: "var(--ink-soft)", margin: "10px 0 0" }}>
                  Former Head of People at Atlas Mobility ('17–'21). Spent
                  a decade in HR for Australian businesses across tech,
                  retail and industrial. Started North to do people work
                  the way she'd always <em>wanted it done</em>.
                </p>
              </div>
            </div>

            <div style={{ marginTop: 36, display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24 }}>
              {[
                ["6yrs", "in business"],
                ["180+", "businesses supported"],
                ["94%", "client retention"],
              ].map(([n, l], i) => (
                <div key={i} style={{ borderTop: "2px solid var(--ink)", paddingTop: 14 }}>
                  <div className="display" style={{ fontSize: isM ? 32 : 40, color: "var(--ink)" }}>{n}</div>
                  <div style={{ fontSize: 11, letterSpacing: "0.16em", textTransform: "uppercase", color: "var(--muted)", marginTop: 4 }}>{l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===== SERVICES — 3-col, mixed cream/ink ===== */}
      <section id="services" style={{ padding: `${isM ? 72 : 120}px ${pad}px`, background: "var(--cream-warm)", borderTop: "1px solid var(--hairline-light)" }}>
        <div style={{ maxWidth: maxW, margin: "0 auto" }}>
          <div style={{ marginBottom: isM ? 36 : 72, maxWidth: 760 }}>
            <span className="num-tag">02 / Services</span>
            <h2 className="display" style={{ fontSize: isM ? 56 : isT ? 80 : 104, lineHeight: 0.92, margin: "20px 0 0", color: "var(--ink)" }}>
              THREE WAYS<br/>
              we partner<br/>
              with Australian teams.
            </h2>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: isM ? "1fr" : isT ? "1fr 1fr" : "repeat(3, 1fr)", gap: isM ? 16 : 20 }}>
            {[
              {
                no: "01",
                title: "HR Advisory",
                tag: "Outsourced · Fractional · Project",
                price: "Engagements · 1–12+ months",
                body: "Your on-tap people team. We're your HR function when you don't have one — and the extra pair of expert hands when yours is stretched thin.",
                items: ["Outsourced HR partnerships", "Policy, handbook & contract work", "Onboarding & lifecycle design"],
                bg: "var(--cream-soft)",
                accent: "var(--ink)",
              },
              {
                no: "02",
                title: "Employee Relations",
                tag: "Fair Work · Investigations · ER",
                price: "Matters · As needed",
                body: "Performance, conduct, restructures, investigations, Modern Awards and EBAs. The hard end of HR, handled with care, rigour and discretion.",
                items: ["Fair Work & Award advice", "Workplace investigations", "Restructure & redundancy"],
                bg: "var(--ink)",
                accent: "var(--cream)",
                dark: true,
              },
              {
                no: "03",
                title: "Capability & Culture",
                tag: "Coaching · L&D · DEI · WHS",
                price: "Programs · 3–12 months",
                body: "Leadership coaching, manager training, culture diagnostics, DEI and psychosocial safety. The work that turns a workplace into one people choose to stay at.",
                items: ["Manager &amp; leadership coaching", "Culture & engagement programs", "DEI, wellbeing & WHS"],
                bg: "var(--cream-soft)",
                accent: "var(--ink)",
              },
            ].map((s, i) => (
              <article key={i} style={{
                background: s.bg, color: s.dark ? "var(--cream)" : "var(--ink)",
                padding: isM ? 28 : 32,
                borderRadius: 4,
                display: "flex", flexDirection: "column", gap: 16,
                position: "relative", overflow: "hidden",
                border: s.dark ? "none" : "1px solid var(--hairline)",
                minHeight: isM ? "auto" : 460,
              }}>
                {s.dark && <ShootingStars theme="dark" density="sparse" />}
                <div style={{ position: "relative", display: "flex", flexDirection: "column", gap: 16, height: "100%" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <NorthStar size={28} color={s.accent} stroke={2.4} />
                    <span style={{ fontFamily: "var(--f-display)", fontSize: 16, opacity: 0.5 }}>{s.no}</span>
                  </div>

                  <div style={{ fontSize: 11, letterSpacing: "0.16em", textTransform: "uppercase", opacity: 0.7, marginTop: 12 }}>{s.tag}</div>
                  <h3 className="display" style={{ fontSize: isM ? 32 : 36, margin: 0, letterSpacing: "0.02em" }}>{s.title}</h3>

                  <p style={{ fontSize: 15, lineHeight: 1.6, margin: 0, opacity: s.dark ? 0.85 : 0.75 }}>{s.body}</p>

                  <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 10, flex: 1 }}>
                    {s.items.map((it, j) => (
                      <li key={j} style={{ fontSize: 13, display: "flex", gap: 10, alignItems: "center" }}>
                        <StarMark size={9} color={s.accent} stroke={2.8} />
                        <span dangerouslySetInnerHTML={{ __html: it }} />
                      </li>
                    ))}
                  </ul>

                  <div style={{ paddingTop: 16, borderTop: `1px solid ${s.dark ? "rgba(245,238,221,0.2)" : "var(--hairline)"}`, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <span style={{ fontSize: 11, letterSpacing: "0.14em", textTransform: "uppercase", opacity: 0.6 }}>{s.price}</span>
                    <a href="#contact" style={{ fontSize: 13, fontWeight: 600, letterSpacing: "0.06em", display: "inline-flex", alignItems: "center", gap: 6 }}>
                      Enquire →
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ===== PROCESS ===== */}
      <section id="process" style={{ padding: `${isM ? 72 : 120}px ${pad}px` }}>
        <div style={{ maxWidth: maxW, margin: "0 auto" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "end", flexWrap: "wrap", gap: 24, marginBottom: isM ? 36 : 56 }}>
            <div>
              <span className="num-tag">03 / Approach</span>
              <h2 className="display" style={{ fontSize: isM ? 48 : isT ? 64 : 80, lineHeight: 0.92, margin: "20px 0 0" }}>
                From first call<br/>to embedded.
              </h2>
            </div>
            <p className="serif" style={{ fontSize: isM ? 16 : 18, lineHeight: 1.55, color: "var(--ink-soft)", maxWidth: 400, margin: 0 }}>
              Four phases, one named partner accountable from the first
              call through to the day your managers don't need us in the
              room anymore.
            </p>
          </div>

          <ol style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: isM ? 0 : 0 }}>
            {[
              ["01", "Listen", "What's working, what isn't, what's keeping you up at night. We listen before we plan."],
              ["02", "Diagnose", "We dig in. Review documents, audit awards, interview managers, surface the real issue beneath the symptom."],
              ["03", "Design", "A practical plan that fits your team, your sector, your stage. Specific. Sequenced. Done."],
              ["04", "Embed", "We stay in the work. Coaching managers, running sessions, holding the line until it sticks."],
            ].map(([wk, t, b], i) => (
              <li key={i} style={{
                display: "grid",
                gridTemplateColumns: isM ? "1fr" : "100px 200px 1fr 60px",
                gap: isM ? 8 : 32, alignItems: "center",
                padding: `${isM ? 20 : 28}px 0`,
                borderTop: "1px solid var(--hairline)",
                position: "relative",
              }}>
                <div className="eyebrow" style={{ color: "var(--rust)" }}>Phase {wk}</div>
                <h3 className="display" style={{ fontSize: isM ? 28 : 36, margin: 0, letterSpacing: "0.02em" }}>{t}</h3>
                <p style={{ fontSize: isM ? 14 : 15, lineHeight: 1.65, color: "var(--ink-soft)", margin: 0 }}>{b}</p>
                {!isM && <div style={{ textAlign: "right", fontFamily: "var(--f-display)", fontSize: 14, opacity: 0.3 }}>0{i+1}</div>}
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ===== Voices / quote band ===== */}
      <section id="voices" style={{ padding: `${isM ? 72 : 120}px ${pad}px`, background: "var(--ink)", color: "var(--cream)", position: "relative", overflow: "hidden" }}>
        <ShootingStars theme="dark" density="normal" />
        <div style={{ maxWidth: 920, margin: "0 auto", position: "relative", textAlign: "center" }}>
          <span className="num-tag" style={{ color: "var(--tan-soft)" }}>04 / Voices</span>
          <blockquote className="serif" style={{ fontSize: isM ? 26 : isT ? 34 : 44, lineHeight: 1.3, margin: "28px 0 32px", color: "var(--cream)" }}>
            "We've worked with a few HR consultants. North is the only
            one our managers actually <em>want in the room</em>.
            <span className="script" style={{ fontSize: isM ? 40 : isT ? 56 : 72, color: "var(--tan-soft)", margin: "0 8px", display: "inline-block", verticalAlign: "baseline" }}>
              Genuinely
            </span>
            the bar we'll measure others by."
          </blockquote>
          <div style={{ display: "inline-flex", alignItems: "center", gap: 12, fontSize: 13, letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--tan-soft)" }}>
            <span style={{ width: 36, height: 1, background: "var(--tan-soft)", opacity: 0.5 }} />
            James Okafor · Managing Director, Atlas Mobility
            <span style={{ width: 36, height: 1, background: "var(--tan-soft)", opacity: 0.5 }} />
          </div>
        </div>
      </section>

      {/* ===== CONTACT ===== */}
      <section id="contact" style={{ padding: `${isM ? 72 : 120}px ${pad}px`, background: "var(--cream-soft)" }}>
        <div style={{ maxWidth: maxW, margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: isD ? "1fr 1fr" : "1fr", gap: isM ? 40 : 64, alignItems: "start" }}>
            <div>
              <span className="num-tag">05 / Contact</span>
              <h2 className="display" style={{ fontSize: isM ? 64 : isT ? 88 : 128, lineHeight: 0.9, margin: "20px 0 0" }}>
                LET'S<br/>
                <span className="script" style={{ fontSize: isM ? 76 : isT ? 104 : 152, color: "var(--rust)", lineHeight: 0.8, display: "inline-block", marginLeft: -6 }}>
                  talk.
                </span>
              </h2>
              <p className="serif" style={{ fontSize: isM ? 18 : 22, lineHeight: 1.5, color: "var(--ink)", margin: "28px 0 36px", maxWidth: 460 }}>
                We answer every enquiry personally, within one business day.
                Tell us what's on your desk and what your team looks like.
              </p>

              <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                <a href="mailto:hello@northpeople.co" style={{ display: "flex", justifyContent: "space-between", alignItems: "center", borderBottom: "1px solid var(--hairline)", padding: "16px 0", fontSize: 18 }}>
                  <span style={{ fontWeight: 600 }}>hello@northpeople.co</span>
                  <span style={{ fontSize: 12, opacity: 0.6, letterSpacing: "0.14em", textTransform: "uppercase" }}>Email →</span>
                </a>
                <a href="tel:1300667847" style={{ display: "flex", justifyContent: "space-between", alignItems: "center", borderBottom: "1px solid var(--hairline)", padding: "16px 0", fontSize: 18 }}>
                  <span style={{ fontWeight: 600 }}>1300 NORTH P  ·  1300 667 847</span>
                  <span style={{ fontSize: 12, opacity: 0.6, letterSpacing: "0.14em", textTransform: "uppercase" }}>Call →</span>
                </a>
                <a href="#" style={{ display: "flex", justifyContent: "space-between", alignItems: "center", borderBottom: "1px solid var(--hairline)", padding: "16px 0", fontSize: 18 }}>
                  <span style={{ fontWeight: 600 }}>Book a 20-min intro</span>
                  <span style={{ fontSize: 12, opacity: 0.6, letterSpacing: "0.14em", textTransform: "uppercase" }}>Cal.com →</span>
                </a>
              </div>
            </div>

            <form onSubmit={e => e.preventDefault()} style={{
              background: "var(--cream)", padding: isM ? 28 : 40,
              border: "1px solid var(--hairline)", borderRadius: 4,
              display: "flex", flexDirection: "column", gap: 18,
            }}>
              <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                <StarMark size={14} color="var(--rust)" stroke={2.4} />
                <span className="eyebrow" style={{ color: "var(--rust)" }}>Send an enquiry</span>
              </div>
              <div style={{ display: "grid", gridTemplateColumns: isM ? "1fr" : "1fr 1fr", gap: 16 }}>
                {[["Name", "Alex Mercer"], ["Company", "Halcyon Bio"]].map(([l, p]) => (
                  <label key={l} style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                    <span style={{ fontSize: 11, letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--muted)", fontWeight: 600 }}>{l}</span>
                    <input placeholder={p} style={{ background: "transparent", border: 0, borderBottom: "1px solid var(--hairline)", padding: "8px 0", fontSize: 15, fontFamily: "inherit", color: "var(--ink)", outline: "none" }} />
                  </label>
                ))}
              </div>
              {[["Work email", "alex@halcyon.bio"], ["What you need help with", "Restructure, ER matter, outsourced HR…"]].map(([l, p]) => (
                <label key={l} style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                  <span style={{ fontSize: 11, letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--muted)", fontWeight: 600 }}>{l}</span>
                  <input placeholder={p} style={{ background: "transparent", border: 0, borderBottom: "1px solid var(--hairline)", padding: "8px 0", fontSize: 15, fontFamily: "inherit", color: "var(--ink)", outline: "none" }} />
                </label>
              ))}
              <label style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                <span style={{ fontSize: 11, letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--muted)", fontWeight: 600 }}>Anything else?</span>
                <textarea rows={3} placeholder="240 staff across two sites, planning a restructure for end of Q3…" style={{ background: "transparent", border: 0, borderBottom: "1px solid var(--hairline)", padding: "8px 0", fontSize: 15, fontFamily: "inherit", color: "var(--ink)", outline: "none", resize: "vertical" }} />
              </label>
              <button className="btn" style={{ marginTop: 14, alignSelf: "flex-start" }}>
                Send enquiry <StarMark size={11} color="var(--cream)" stroke={2.8} />
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* ===== Footer ===== */}
      <footer style={{ padding: `${isM ? 36 : 56}px ${pad}px`, borderTop: "1px solid var(--hairline)" }}>
        <div style={{ maxWidth: maxW, margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: isM ? "1fr" : isT ? "1fr 1fr" : "2fr 1fr 1fr 1fr", gap: isM ? 24 : 48, paddingBottom: 32, borderBottom: "1px solid var(--hairline-light)" }}>
            <div>
              <NorthWordmark size={0.85} layout="stacked" />
              <p style={{ fontSize: 14, lineHeight: 1.65, color: "var(--ink-soft)", margin: "20px 0 0", maxWidth: 320 }}>
                A boutique HR advisory for the Australian businesses
                who care how their people are treated.
              </p>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 10, fontSize: 13 }}>
              <div className="eyebrow" style={{ marginBottom: 6, color: "var(--muted)" }}>Studio</div>
              <a href="#">About</a><a href="#">Team</a><a href="#">Careers</a><a href="#">Insights</a>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 10, fontSize: 13 }}>
              <div className="eyebrow" style={{ marginBottom: 6, color: "var(--muted)" }}>Services</div>
              <a href="#">HR Advisory</a><a href="#">Employee Relations</a><a href="#">Capability &amp; Culture</a>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 10, fontSize: 13 }}>
              <div className="eyebrow" style={{ marginBottom: 6, color: "var(--muted)" }}>Connect</div>
              <a href="#">LinkedIn</a><a href="#">AHRI</a><a href="#">Substack</a>
            </div>
          </div>
          <div style={{ paddingTop: 18, display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: 8, fontSize: 12, color: "var(--muted)", letterSpacing: "0.08em" }}>
            <span>© 2026 North People Co · Sydney · AHRI member</span>
            <span>Privacy · Terms</span>
          </div>
        </div>
      </footer>
    </div>
  );
}

window.LandingC = LandingC;
