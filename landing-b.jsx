// landing-b.jsx — Direction B: "Dark Enterprise" (HR advisory rewrite)
// Deep navy hero with full starfield + cream lower sections.
// Premium / national HR consultancy posture.

function LandingB({ viewport = "desktop" }) {
  const isM = viewport === "mobile";
  const isT = viewport === "tablet";
  const isD = viewport === "desktop";
  const pad = isM ? 22 : isT ? 44 : 80;
  const maxW = 1280;

  return (
    <div className="lp-b lp-root" style={{ background: "var(--cream-soft)", color: "var(--ink)", minHeight: "100%", overflow: "hidden", position: "relative" }}>
      <style>{`
        .lp-b a { color: inherit; text-decoration: none; }
        .lp-b .display {
          font-family: var(--f-serif);
          font-weight: 300;
          letter-spacing: -0.01em;
          line-height: 1.02;
        }
        .lp-b .display em { font-style: italic; font-weight: 300; }
        .lp-b .script { font-family: var(--f-script); font-weight: 400; }
        .lp-b .eyebrow {
          font-family: var(--f-body); font-size: 11px; letter-spacing: 0.32em;
          text-transform: uppercase; font-weight: 600;
        }
        .lp-b .num { font-family: var(--f-display); letter-spacing: 0.04em; }
        .lp-b .btn {
          display: inline-flex; align-items: center; gap: 10px;
          padding: 16px 24px; border-radius: 0; font-weight: 600;
          font-size: 13px; letter-spacing: 0.14em; text-transform: uppercase;
          border: 1px solid currentColor; cursor: pointer; transition: all .2s;
          background: transparent;
        }
        .lp-b .btn-primary { background: var(--cream); color: var(--ink-deep); border-color: var(--cream); }
        .lp-b .btn-primary:hover { background: transparent; color: var(--cream); }
        .lp-b .btn-ghost { color: var(--cream); }
        .lp-b .btn-ghost:hover { background: var(--cream); color: var(--ink-deep); }
        .lp-b .btn-dark { background: var(--ink-deep); color: var(--cream); border-color: var(--ink-deep); }
        .lp-b .btn-dark:hover { background: transparent; color: var(--ink-deep); }
      `}</style>

      {/* ============================================================ */}
      {/* DARK HERO SECTION                                              */}
      {/* ============================================================ */}
      <div style={{ background: "var(--ink-deep)", color: "var(--cream)", position: "relative", overflow: "hidden" }}>
        <ShootingStars theme="dark" density="dense" />
        <div style={{
          position: "absolute", inset: 0, pointerEvents: "none",
          background: "radial-gradient(circle at 78% 18%, rgba(200, 155, 111, 0.18), transparent 45%)",
        }} />

        {/* Nav */}
        <header style={{
          position: "relative", zIndex: 5,
          display: "flex", alignItems: "center", justifyContent: "space-between",
          padding: `${isM ? 20 : 32}px ${pad}px`,
        }}>
          <NorthWordmark size={isM ? 0.7 : 0.85} layout="horizontal" color="var(--cream)" />
          {isD ? (
            <nav style={{ display: "flex", gap: 40, fontSize: 13, fontWeight: 500, letterSpacing: "0.12em", textTransform: "uppercase" }}>
              <a href="#about">Firm</a>
              <a href="#services">Services</a>
              <a href="#process">Approach</a>
              <a href="#insights">Insights</a>
              <a href="#contact">Contact</a>
            </nav>
          ) : (
            <button aria-label="Menu" style={{ background: "transparent", border: "none", padding: 8, cursor: "pointer" }}>
              <svg width="22" height="14" viewBox="0 0 22 14"><path d="M0 1h22M0 7h22M0 13h22" stroke="var(--cream)" strokeWidth="1.6"/></svg>
            </button>
          )}
          {isD && <a className="btn btn-ghost" style={{ padding: "10px 18px", fontSize: 11 }} href="#contact">Engage us</a>}
        </header>

        {/* Hero body */}
        <section style={{ position: "relative", zIndex: 2, padding: `${isM ? 56 : isT ? 80 : 96}px ${pad}px ${isM ? 96 : 140}px` }}>
          <div style={{ maxWidth: maxW, margin: "0 auto" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: isM ? 32 : 48, opacity: 0.85 }}>
              <StarMark size={12} color="var(--tan-soft)" stroke={2.4} />
              <span className="eyebrow" style={{ color: "var(--tan-soft)" }}>HR Advisory · Employee Relations · Capability &amp; Culture</span>
            </div>

            <h1 className="display" style={{
              fontSize: isM ? 46 : isT ? 76 : 112,
              margin: "0 0 32px",
              color: "var(--cream)",
              maxWidth: 1100,
            }}>
              The hardest<br/>
              people decisions<br/>
              shape the next <em>five<br/>years.</em>
              <span className="script" style={{ fontSize: isM ? 38 : isT ? 62 : 88, marginLeft: isM ? 8 : 18, color: "var(--tan-soft)", verticalAlign: "baseline" }}>
                We help you make them.
              </span>
            </h1>

            <div style={{ display: "grid", gridTemplateColumns: isD ? "1fr 1fr 1fr" : "1fr", gap: isM ? 36 : 48, marginTop: isM ? 48 : 72, alignItems: "start" }}>
              <p style={{ fontSize: isM ? 16 : 18, lineHeight: 1.55, opacity: 0.85, maxWidth: 380, margin: 0, gridColumn: isD ? "1 / 2" : "auto" }}>
                North People Co is an Australian HR advisory partnering with
                growth-stage and enterprise clients on the work that matters
                most — practically, confidentially, and with the rigour of
                Fair Work.
              </p>
              {isD && <div />}
              <div style={{ display: "flex", gap: 14, flexWrap: "wrap", alignSelf: isD ? "end" : "start" }}>
                <a href="#contact" className="btn btn-primary">Start a conversation</a>
                <a href="#process" className="btn btn-ghost">How we work</a>
              </div>
            </div>
          </div>
        </section>

        {/* Hero stats / proof bar */}
        <div style={{
          position: "relative", zIndex: 2,
          padding: `${isM ? 32 : 40}px ${pad}px`,
          borderTop: "1px solid rgba(245,238,221,0.15)",
        }}>
          <div style={{
            maxWidth: maxW, margin: "0 auto",
            display: "grid", gridTemplateColumns: isM ? "1fr 1fr" : "repeat(4, 1fr)",
            gap: isM ? 28 : 16,
          }}>
            {[
              ["180+", "Businesses partnered"],
              ["94%",  "Client return rate"],
              ["18", "Sectors served"],
              ["3", "Offices · SYD · MEL · BNE"],
            ].map(([n, l], i) => (
              <div key={i} style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                <div className="num" style={{ fontSize: isM ? 36 : 48, color: "var(--cream)" }}>{n}</div>
                <div style={{ fontSize: 11, letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--tan-soft)", opacity: 0.85 }}>{l}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ============================================================ */}
      {/* LOGO MARQUEE                                                   */}
      {/* ============================================================ */}
      <section style={{ padding: `${isM ? 28 : 40}px ${pad}px`, background: "var(--cream)", borderBottom: "1px solid var(--hairline-light)" }}>
        <div style={{ maxWidth: maxW, margin: "0 auto", display: "flex", alignItems: "center", gap: isM ? 20 : 40, flexWrap: "wrap", justifyContent: "space-between" }}>
          <span style={{ fontSize: 11, letterSpacing: "0.22em", textTransform: "uppercase", color: "var(--muted)", fontWeight: 600 }}>Trusted partners</span>
          <div style={{ display: "flex", flexWrap: "wrap", gap: isM ? 20 : 48, alignItems: "center", opacity: 0.7 }}>
            {["ATLAS", "MERIDIAN", "Northwind&Co.", "HALCYON", "VESTA", "OAKBROOK"].map((n, i) => (
              <span key={i} style={{ fontFamily: i % 2 ? "var(--f-serif)" : "var(--f-display)", fontSize: isM ? 15 : 20, letterSpacing: i % 2 ? "0.02em" : "0.18em", color: "var(--ink)" }}>{n}</span>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* ABOUT / INTRO                                                 */}
      {/* ============================================================ */}
      <section id="about" style={{ padding: `${isM ? 80 : 140}px ${pad}px`, background: "var(--cream-soft)" }}>
        <div style={{ maxWidth: maxW, margin: "0 auto", display: "grid", gridTemplateColumns: isD ? "0.8fr 1.2fr" : "1fr", gap: isM ? 40 : 80 }}>
          <div>
            <div className="eyebrow" style={{ marginBottom: 18, color: "var(--ink-soft)" }}>The firm</div>
            <h2 className="display" style={{ fontSize: isM ? 40 : isT ? 52 : 64, margin: 0, color: "var(--ink)" }}>
              An HR consultancy built by <em>people leaders</em>, for the moments that matter.
            </h2>
          </div>
          <div>
            <p style={{ fontSize: isM ? 17 : 19, lineHeight: 1.65, color: "var(--ink)", margin: "0 0 24px" }}>
              We founded North People Co in 2019 to do HR advisory the
              way we'd always wanted it done — present, practical, and
              grounded in what it actually takes to run an Australian
              business.
            </p>
            <p style={{ fontSize: isM ? 15 : 16, lineHeight: 1.75, color: "var(--ink-soft)", margin: "0 0 36px" }}>
              Every partner has led the function they advise on. We've sat
              across the table in restructures, taken Fair Work matters
              through to their conclusion, and rebuilt cultures after the
              worst of it. That experience — not the slide deck — is what
              you actually pay us for.
            </p>

            <div style={{ display: "grid", gridTemplateColumns: isM ? "1fr" : "1fr 1fr", gap: 0, borderTop: "1px solid var(--hairline)" }}>
              {[
                ["Sectors", "Tech, professional services, healthcare, retail, hospitality, manufacturing, NFP and the public sector."],
                ["Engagement types", "Outsourced HR partnerships, fractional CPO, project advisory, employee relations matters, and capability programs."],
                ["Geographic reach", "Headquartered in Sydney, with active engagements across NSW, VIC, QLD, WA and SA."],
                ["Standards", "AHRI-aligned methodology. Fair Work, NES and Modern Award literacy on every brief. WHS embedded throughout."],
              ].map(([k, v], i) => (
                <div key={i} style={{
                  padding: "24px 0", borderBottom: "1px solid var(--hairline)",
                  paddingRight: i % 2 === 0 && !isM ? 32 : 0,
                  paddingLeft: i % 2 === 1 && !isM ? 32 : 0,
                  borderRight: i % 2 === 0 && !isM ? "1px solid var(--hairline)" : "none",
                }}>
                  <div style={{ fontSize: 11, letterSpacing: "0.16em", textTransform: "uppercase", color: "var(--muted)", marginBottom: 8, fontWeight: 600 }}>{k}</div>
                  <div style={{ fontSize: 15, lineHeight: 1.55, color: "var(--ink)" }}>{v}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* SERVICES — three service areas, dense enterprise layout       */}
      {/* ============================================================ */}
      <section id="services" style={{ padding: `${isM ? 80 : 120}px ${pad}px`, background: "var(--cream)" }}>
        <div style={{ maxWidth: maxW, margin: "0 auto" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "end", flexWrap: "wrap", gap: 24, marginBottom: isM ? 36 : 64, borderBottom: "1px solid var(--hairline)", paddingBottom: 28 }}>
            <div>
              <div className="eyebrow" style={{ marginBottom: 18, color: "var(--ink-soft)" }}>Services</div>
              <h2 className="display" style={{ fontSize: isM ? 40 : isT ? 56 : 72, margin: 0, color: "var(--ink)" }}>
                Three practice areas. <em>One standard.</em>
              </h2>
            </div>
            <a href="#contact" className="btn btn-dark" style={{ padding: "14px 22px", fontSize: 12 }}>Engage a partner →</a>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: isM ? "1fr" : "1fr", gap: 0 }}>
            {[
              {
                no: "01",
                tag: "HR Advisory & Outsourced Partner",
                title: "Your on-tap people team — strategic and hands-on.",
                body: "Fractional Chief People Officer support, project advisory, and the steady counsel of a partner who knows your business by name. From a few hours a month to a fully embedded HR function. Scaled up or down as you need it.",
                items: ["Outsourced HR partnerships", "Policies, handbooks & contracts", "Onboarding & lifecycle design", "HRIS implementation & uplift"],
              },
              {
                no: "02",
                tag: "Employee Relations & Compliance",
                title: "Fair Work, investigations, and the conversations no one wants to have.",
                body: "Modern Award and Enterprise Agreement interpretation, performance and conduct matters, workplace investigations, restructures and redundancies, Fair Work Commission representation, and Right to Disconnect / positive duty advice — all handled with care, rigour and discretion.",
                items: ["Fair Work, NES & Award compliance", "Workplace investigations", "Restructure & redundancy support", "Disciplinary & performance matters"],
              },
              {
                no: "03",
                tag: "Capability & Culture",
                title: "Leadership, learning, and the culture work that holds.",
                body: "Manager coaching, leadership development, engagement and culture diagnostics, DEI strategy, psychosocial safety, and wellbeing programs that move the dial rather than tick a box. Designed with you. Delivered with you.",
                items: ["Manager & leadership coaching", "Engagement & culture diagnostics", "DEI & psychosocial safety", "Wellbeing & WHS programs"],
              },
            ].map((s, i) => (
              <article key={i} style={{
                display: "grid", gridTemplateColumns: isD ? "120px 1fr 1.4fr 220px" : isT ? "80px 1fr 1.2fr" : "1fr",
                gap: isM ? 16 : 32,
                padding: `${isM ? 32 : 40}px 0`,
                borderTop: i === 0 ? "none" : "1px solid var(--hairline)",
                alignItems: "start",
              }}>
                <div className="num" style={{ fontSize: isM ? 44 : 56, color: "var(--ink)", opacity: 0.25 }}>{s.no}</div>
                <div>
                  <div className="eyebrow" style={{ marginBottom: 12, color: "var(--ink-soft)" }}>{s.tag}</div>
                  <h3 className="display" style={{ fontSize: isM ? 26 : isT ? 28 : 32, margin: 0, color: "var(--ink)", maxWidth: 360 }}>{s.title}</h3>
                </div>
                <p style={{ fontSize: isM ? 15 : 16, lineHeight: 1.7, margin: 0, color: "var(--ink-soft)" }}>
                  {s.body}
                </p>
                <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 8, gridColumn: isT ? "1 / -1" : "auto" }}>
                  {s.items.map((it, j) => (
                    <li key={j} style={{ fontSize: 13, color: "var(--ink)", display: "flex", gap: 10, alignItems: "center" }}>
                      <StarMark size={9} color="var(--ink)" stroke={2.8} />
                      {it}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* PROCESS / APPROACH                                            */}
      {/* ============================================================ */}
      <section id="process" style={{ padding: `${isM ? 80 : 120}px ${pad}px`, background: "var(--cream-soft)", borderTop: "1px solid var(--hairline-light)" }}>
        <div style={{ maxWidth: maxW, margin: "0 auto" }}>
          <div style={{ marginBottom: isM ? 40 : 72, maxWidth: 720 }}>
            <div className="eyebrow" style={{ marginBottom: 18, color: "var(--ink-soft)" }}>Approach</div>
            <h2 className="display" style={{ fontSize: isM ? 40 : isT ? 56 : 72, margin: 0, color: "var(--ink)" }}>
              A clear path, <em>start to embed.</em>
            </h2>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: isM ? "1fr" : isT ? "1fr 1fr" : "repeat(4, 1fr)", gap: isM ? 24 : 0, borderTop: isM ? "none" : "1px solid var(--hairline)" }}>
            {[
              ["Step 01", "Listen", "What's working, what isn't, what's keeping you up at night. We listen before we plan."],
              ["Step 02", "Diagnose", "Review documents, audit awards, interview leaders, surface the real issue beneath the symptom."],
              ["Step 03", "Design", "A practical plan: what to do, who does it, what good looks like. Tailored to your team, your sector, your stage."],
              ["Step 04", "Embed", "We don't hand over a PDF. We stay in the work — coaching managers, running sessions, holding the line until it sticks."],
            ].map(([when, title, body], i) => (
              <div key={i} style={{
                padding: isM ? 0 : 28,
                paddingTop: 28,
                borderRight: !isM && (isT ? i % 2 === 0 : i < 3) ? "1px solid var(--hairline)" : "none",
                borderBottom: isM ? "1px solid var(--hairline)" : "none",
                paddingBottom: isM ? 24 : 28,
                position: "relative",
              }}>
                <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 14 }}>
                  <StarMark size={11} color="var(--ink)" stroke={2.6} />
                  <span style={{ fontSize: 11, letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--muted)", fontWeight: 600 }}>{when}</span>
                </div>
                <h3 className="display" style={{ fontSize: 26, margin: "0 0 12px", color: "var(--ink)" }}>{title}</h3>
                <p style={{ fontSize: 14, lineHeight: 1.65, color: "var(--ink-soft)", margin: 0 }}>{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* TESTIMONIALS                                                  */}
      {/* ============================================================ */}
      <section style={{ padding: `${isM ? 64 : 100}px ${pad}px`, background: "var(--ink)", color: "var(--cream)" }}>
        <div style={{ maxWidth: maxW, margin: "0 auto", display: "grid", gridTemplateColumns: isD ? "1fr 1fr" : "1fr", gap: isM ? 36 : 64 }}>
          {[
            {
              quote: "North handled a complex restructure for us with more care than I thought possible. Eighty-two people transitioned across two sites. Not a single complaint to Fair Work. They were in the work with us, end to end.",
              who: "Maya Chen", role: "COO, Halcyon Bio",
            },
            {
              quote: "We've used three HR consultancies in the last decade. North is the only one our leaders ask for by name. They make every manager around them better at the people side of the job.",
              who: "James Okafor", role: "Managing Director, Atlas Mobility",
            },
          ].map((t, i) => (
            <figure key={i} style={{ margin: 0 }}>
              <StarMark size={20} color="var(--tan-soft)" stroke={2.4} style={{ marginBottom: 18 }} />
              <blockquote className="display" style={{ fontSize: isM ? 22 : 26, lineHeight: 1.35, margin: "0 0 24px", color: "var(--cream)" }}>
                "{t.quote}"
              </blockquote>
              <figcaption style={{ display: "flex", gap: 12, alignItems: "center", borderTop: "1px solid rgba(245,238,221,0.2)", paddingTop: 18 }}>
                <div style={{ width: 44, height: 44, borderRadius: 999, background: "var(--tan-soft)", opacity: 0.85 }} />
                <div>
                  <div style={{ fontSize: 14, fontWeight: 600 }}>{t.who}</div>
                  <div style={{ fontSize: 12, opacity: 0.7, letterSpacing: "0.08em" }}>{t.role}</div>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      {/* ============================================================ */}
      {/* CONTACT                                                       */}
      {/* ============================================================ */}
      <section id="contact" style={{ padding: `${isM ? 80 : 120}px ${pad}px`, background: "var(--cream)" }}>
        <div style={{ maxWidth: maxW, margin: "0 auto", display: "grid", gridTemplateColumns: isD ? "1fr 1fr" : "1fr", gap: isM ? 40 : 80 }}>
          <div>
            <div className="eyebrow" style={{ marginBottom: 18, color: "var(--ink-soft)" }}>Engage us</div>
            <h2 className="display" style={{ fontSize: isM ? 40 : isT ? 56 : 80, margin: "0 0 24px", color: "var(--ink)" }}>
              Good HR <em>starts</em> with a good conversation.
            </h2>
            <p style={{ fontSize: isM ? 16 : 18, lineHeight: 1.65, color: "var(--ink-soft)", margin: "0 0 36px", maxWidth: 480 }}>
              Tell us where you need help, what's pressing, and what your
              team looks like. A senior partner will be in touch within one
              business day.
            </p>

            <div style={{ display: "flex", flexDirection: "column", gap: 18, borderTop: "1px solid var(--hairline)", paddingTop: 24 }}>
              {[
                ["General", "hello@northpeople.co", "mailto:hello@northpeople.co"],
                ["Advisory", "advisory@northpeople.co", "mailto:advisory@northpeople.co"],
                ["Careers", "join@northpeople.co", "mailto:join@northpeople.co"],
              ].map(([k, v, href]) => (
                <div key={k} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", borderBottom: "1px solid var(--hairline-light)", paddingBottom: 14 }}>
                  <span style={{ fontSize: 12, letterSpacing: "0.16em", textTransform: "uppercase", color: "var(--muted)", fontWeight: 600 }}>{k}</span>
                  <a href={href} style={{ fontSize: 16, color: "var(--ink)", fontWeight: 500 }}>{v}</a>
                </div>
              ))}
            </div>

            <div style={{ marginTop: 36, display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16 }}>
              {[
                ["Sydney", "Level 4, 12 Bridge St", "NSW 2000"],
                ["Melbourne", "8 Exhibition St", "VIC 3000"],
                ["Brisbane", "Level 12, 145 Eagle St", "QLD 4000"],
              ].map(([city, l1, l2]) => (
                <div key={city}>
                  <div style={{ fontSize: 11, letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--muted)", marginBottom: 8, fontWeight: 600 }}>{city}</div>
                  <div style={{ fontSize: 13, color: "var(--ink)", lineHeight: 1.5 }}>{l1}<br/>{l2}</div>
                </div>
              ))}
            </div>
          </div>

          <form onSubmit={e => e.preventDefault()} style={{
            background: "var(--ink-deep)", color: "var(--cream)",
            padding: isM ? 28 : 44, display: "flex", flexDirection: "column", gap: 18,
          }}>
            <div className="eyebrow" style={{ color: "var(--tan-soft)", marginBottom: 8 }}>Send an enquiry</div>
            {[
              ["Your name", "name", "Alex Mercer"],
              ["Company", "company", "Halcyon Bio"],
              ["Work email", "email", "alex@halcyon.bio"],
              ["What you need help with", "topic", "Restructure / ER matter / Outsourced HR"],
            ].map(([label, name, ph]) => (
              <label key={name} style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                <span style={{ fontSize: 11, letterSpacing: "0.16em", textTransform: "uppercase", opacity: 0.65, fontWeight: 600 }}>{label}</span>
                <input type="text" name={name} placeholder={ph}
                  style={{
                    background: "transparent", border: 0, borderBottom: "1px solid rgba(245,238,221,0.3)",
                    padding: "8px 0", color: "var(--cream)", fontSize: 15, fontFamily: "inherit", outline: "none",
                  }}
                />
              </label>
            ))}
            <label style={{ display: "flex", flexDirection: "column", gap: 8 }}>
              <span style={{ fontSize: 11, letterSpacing: "0.16em", textTransform: "uppercase", opacity: 0.65, fontWeight: 600 }}>Anything else?</span>
              <textarea rows={3} placeholder="240 staff across two sites, planning a restructure for end of Q3…"
                style={{
                  background: "transparent", border: 0, borderBottom: "1px solid rgba(245,238,221,0.3)",
                  padding: "8px 0", color: "var(--cream)", fontSize: 15, fontFamily: "inherit", outline: "none", resize: "vertical",
                }}
              />
            </label>
            <button className="btn btn-primary" style={{ marginTop: 16, alignSelf: "flex-start" }}>
              Send enquiry <StarMark size={11} color="var(--ink-deep)" stroke={2.8} />
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ padding: `${isM ? 32 : 48}px ${pad}px ${isM ? 24 : 32}px`, background: "var(--ink-deep)", color: "var(--cream)" }}>
        <div style={{ maxWidth: maxW, margin: "0 auto" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "start", flexWrap: "wrap", gap: 24, paddingBottom: 28, borderBottom: "1px solid rgba(245,238,221,0.15)" }}>
            <NorthWordmark size={0.8} layout="horizontal" color="var(--cream)" />
            <div style={{ display: "flex", flexWrap: "wrap", gap: isM ? 24 : 56, fontSize: 12, letterSpacing: "0.12em", textTransform: "uppercase", opacity: 0.85 }}>
              <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                <span style={{ opacity: 0.5 }}>Firm</span>
                <a href="#">About</a><a href="#">Team</a><a href="#">Careers</a>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                <span style={{ opacity: 0.5 }}>Services</span>
                <a href="#">HR Advisory</a><a href="#">Employee Relations</a><a href="#">Capability &amp; Culture</a>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                <span style={{ opacity: 0.5 }}>Connect</span>
                <a href="#">LinkedIn</a><a href="#">Insights</a><a href="#">AHRI</a>
              </div>
            </div>
          </div>
          <div style={{ paddingTop: 20, display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: 12, fontSize: 12, opacity: 0.65, letterSpacing: "0.08em" }}>
            <span>© 2026 North People Co Pty Ltd · ABN 00 000 000 000 · AHRI member</span>
            <span>Privacy · Terms · Modern Slavery Statement</span>
          </div>
        </div>
      </footer>
    </div>
  );
}

window.LandingB = LandingB;
