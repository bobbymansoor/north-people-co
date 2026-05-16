// shared.jsx — Logo, star icons, shooting-stars background, hand-drawn frame.
// All components consumed by landing-a / -b / -c.

// --- Four-point star (NORTH logo motif) -------------------------------------
function NorthStar({ size = 48, color = "currentColor", stroke = 3, filled = false, style }) {
  // Concave 4-pointer like the logo: long vertical/horizontal axes,
  // pinched sides. Drawn as a single path so the stroke renders evenly.
  const s = size;
  const d = `M ${s/2} 0
             C ${s*0.55} ${s*0.38}, ${s*0.62} ${s*0.45}, ${s} ${s/2}
             C ${s*0.62} ${s*0.55}, ${s*0.55} ${s*0.62}, ${s/2} ${s}
             C ${s*0.45} ${s*0.62}, ${s*0.38} ${s*0.55}, 0 ${s/2}
             C ${s*0.38} ${s*0.45}, ${s*0.45} ${s*0.38}, ${s/2} 0 Z`;
  return (
    <svg width={s} height={s} viewBox={`0 0 ${s} ${s}`} style={style} aria-hidden="true">
      <path d={d}
        fill={filled ? color : "none"}
        stroke={color}
        strokeWidth={stroke}
        strokeLinejoin="round"/>
    </svg>
  );
}

// Tiny inline star, sized to current font (em units)
function StarMark({ size = "1em", color = "currentColor", filled = false, stroke = 2.4, style }) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" style={{ display: "inline-block", verticalAlign: "-0.12em", ...style }} aria-hidden="true">
      <path d="M 24 0 C 26.4 18.2, 29.8 21.6, 48 24 C 29.8 26.4, 26.4 29.8, 24 48 C 21.6 29.8, 18.2 26.4, 0 24 C 18.2 21.6, 21.6 18.2, 24 0 Z"
        fill={filled ? color : "none"}
        stroke={color}
        strokeWidth={stroke}
        strokeLinejoin="round"/>
    </svg>
  );
}

// --- North People Co wordmark (recreated to match logo) ---------------------
function NorthWordmark({ size = 1, color = "var(--ink)", layout = "stacked" }) {
  // size scales the whole thing. layout: 'stacked' (vert) | 'horizontal'
  const px = (n) => n * size + "px";
  if (layout === "horizontal") {
    return (
      <div style={{ display: "flex", alignItems: "center", gap: px(12), color }}>
        <NorthStar size={28 * size} color={color} stroke={2.6} />
        <div style={{ display: "flex", flexDirection: "column", lineHeight: 0.9 }}>
          <span style={{ fontFamily: "var(--f-display)", fontSize: px(26), letterSpacing: "0.06em", color }}>NORTH</span>
          <span style={{ fontFamily: "var(--f-script)", fontSize: px(18), color, marginTop: px(2) }}>People Co</span>
        </div>
      </div>
    );
  }
  return (
    <div style={{ display: "inline-flex", alignItems: "center", gap: px(14), color }}>
      <NorthStar size={36 * size} color={color} stroke={2.6} />
      <div style={{ display: "flex", flexDirection: "column", lineHeight: 0.95 }}>
        <span style={{ fontFamily: "var(--f-display)", fontSize: px(28), letterSpacing: "0.08em", color }}>NORTH</span>
        <span style={{ fontFamily: "var(--f-script)", fontSize: px(20), color, marginTop: px(2), letterSpacing: "0.01em" }}>People Co</span>
      </div>
    </div>
  );
}

// --- Hand-drawn rectangle (logo's frame) ------------------------------------
// Wobbly stroked rect built as a path so it feels inked, not vector-stiff.
function InkFrame({ color = "var(--ink)", stroke = 4, style, opacity = 1 }) {
  // Path with small perturbations on each side + corner gaps like the logo.
  const d = `
    M 24 8
    C 120 4, 280 6, 460 5
    C 640 4, 820 7, 974 6
    M 988 22
    C 992 140, 989 320, 990 500
    C 991 660, 988 820, 988 974
    M 974 988
    C 820 992, 640 990, 460 991
    C 280 992, 120 989, 26 990
    M 10 974
    C 6 820, 8 640, 7 460
    C 6 280, 9 120, 8 26
  `;
  return (
    <svg viewBox="0 0 1000 1000" preserveAspectRatio="none" style={{ width: "100%", height: "100%", display: "block", opacity, ...style }} aria-hidden="true">
      <path d={d} fill="none" stroke={color} strokeWidth={stroke} strokeLinecap="round" />
    </svg>
  );
}

// --- Shooting Stars background ---------------------------------------------
// Static dots (sparse field) + a handful of streaks that arc across.
// Streaks loop on staggered delays. Optionally darker palette via `theme="dark"`.
function ShootingStars({ theme = "light", density = "normal", className = "" }) {
  const dark = theme === "dark";
  const starColor = dark ? "rgba(245, 238, 221, 0.9)" : "rgba(20, 36, 90, 0.45)";
  const dimColor  = dark ? "rgba(245, 238, 221, 0.45)" : "rgba(20, 36, 90, 0.22)";
  const trailFrom = dark ? "rgba(245, 238, 221, 0)" : "rgba(20, 36, 90, 0)";
  const trailTo   = dark ? "rgba(245, 238, 221, 0.95)" : "rgba(20, 36, 90, 0.55)";

  // Random-ish but stable scatter (seeded by index).
  const seed = (i) => {
    const x = Math.sin(i * 9301 + 49297) * 233280;
    return x - Math.floor(x);
  };

  const dotCount = density === "dense" ? 60 : density === "sparse" ? 18 : 36;
  const dots = Array.from({ length: dotCount }, (_, i) => ({
    x: seed(i * 2 + 1) * 100,
    y: seed(i * 2 + 7) * 100,
    r: 0.6 + seed(i * 3 + 11) * 1.8,
    o: 0.3 + seed(i * 4 + 13) * 0.7,
    twinkle: seed(i * 5 + 17),
  }));

  // Four-point sparkles (bigger, branded)
  const sparkleCount = density === "dense" ? 8 : 5;
  const sparkles = Array.from({ length: sparkleCount }, (_, i) => ({
    x: 8 + seed(i * 7 + 3) * 84,
    y: 6 + seed(i * 11 + 5) * 88,
    s: 10 + seed(i * 13 + 1) * 14,
    d: seed(i * 17 + 9) * 4,
  }));

  // Streaks: each travels from top-left-ish to bottom-right-ish.
  const streaks = [
    { delay: 0,   dur: 7,  top: "12%", left: "-10%", angle: 18, length: 220 },
    { delay: 3.5, dur: 9,  top: "32%", left: "-15%", angle: 14, length: 280 },
    { delay: 6,   dur: 8,  top: "58%", left: "-12%", angle: 22, length: 200 },
    { delay: 1.2, dur: 11, top: "72%", left: "-20%", angle: 10, length: 320 },
  ];

  return (
    <div className={"ss-bg " + className} aria-hidden="true">
      <style>{`
        .ss-bg { position: absolute; inset: 0; overflow: hidden; pointer-events: none; }
        .ss-dot { position: absolute; border-radius: 50%; }
        @keyframes ss-twinkle { 0%,100% { opacity: var(--o, .6); } 50% { opacity: calc(var(--o, .6) * 0.35); } }
        .ss-sparkle { position: absolute; animation: ss-twinkle 4s ease-in-out infinite; }
        @keyframes ss-shoot {
          0%   { transform: translate3d(0,0,0); opacity: 0; }
          5%   { opacity: 1; }
          70%  { opacity: 1; }
          100% { transform: translate3d(130vw, 60vh, 0); opacity: 0; }
        }
        .ss-streak {
          position: absolute;
          height: 1.6px;
          background: linear-gradient(90deg, ${trailFrom}, ${trailTo});
          border-radius: 2px;
          animation: ss-shoot var(--dur,8s) linear infinite;
          animation-delay: var(--delay, 0s);
          will-change: transform, opacity;
        }
        .ss-streak::after {
          content: ''; position: absolute; right: -2px; top: -2px;
          width: 6px; height: 6px; border-radius: 50%;
          background: ${trailTo};
          box-shadow: 0 0 8px ${trailTo};
        }
      `}</style>

      {dots.map((d, i) => (
        <span key={"d"+i}
          className="ss-dot"
          style={{
            left: d.x + "%", top: d.y + "%",
            width: d.r + "px", height: d.r + "px",
            background: d.r > 1.4 ? starColor : dimColor,
            opacity: d.o,
            animation: `ss-twinkle ${3 + d.twinkle * 4}s ease-in-out ${d.twinkle * 2}s infinite`,
            ['--o']: d.o,
          }}
        />
      ))}

      {sparkles.map((s, i) => (
        <span key={"s"+i} className="ss-sparkle"
          style={{ left: s.x + "%", top: s.y + "%", animationDelay: s.d + "s", ['--o']: 0.7 }}>
          <StarMark size={s.s} color={starColor} stroke={1.5} />
        </span>
      ))}

      {streaks.map((s, i) => (
        <span key={"st"+i} className="ss-streak"
          style={{
            top: s.top, left: s.left,
            width: s.length + "px",
            transform: `rotate(${s.angle}deg)`,
            transformOrigin: "left center",
            ['--dur']: s.dur + "s",
            ['--delay']: s.delay + "s",
          }}
        />
      ))}
    </div>
  );
}

// --- Tiny utility: a hairline divider with optional star centerpiece --------
function HairlineStar({ color = "var(--ink)", width = "60%" }) {
  return (
    <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 14, width, margin: "0 auto", color }}>
      <span style={{ flex: 1, height: 1, background: "currentColor", opacity: 0.25 }} />
      <StarMark size={14} color={color} stroke={2.2} />
      <span style={{ flex: 1, height: 1, background: "currentColor", opacity: 0.25 }} />
    </div>
  );
}

// --- Image placeholder ------------------------------------------------------
function Placeholder({ label = "photo", aspect = "4/3", tone = "cream", style }) {
  const bg = tone === "dark" ? "#1a2c66" : tone === "tan" ? "#E5C9A4" : "#EEE3CB";
  const fg = tone === "dark" ? "rgba(245,238,221,0.7)" : "rgba(20,36,90,0.45)";
  return (
    <div style={{
      width: "100%", aspectRatio: aspect, background: bg,
      backgroundImage: `repeating-linear-gradient(135deg, ${fg} 0 1px, transparent 1px 18px)`,
      display: "flex", alignItems: "center", justifyContent: "center",
      fontFamily: "ui-monospace, SFMono-Regular, monospace",
      fontSize: 12, letterSpacing: "0.12em", textTransform: "uppercase",
      color: fg, ...style,
    }}>
      [ {label} ]
    </div>
  );
}

window.NorthStar = NorthStar;
window.StarMark = StarMark;
window.NorthWordmark = NorthWordmark;
window.InkFrame = InkFrame;
window.ShootingStars = ShootingStars;
window.HairlineStar = HairlineStar;
window.Placeholder = Placeholder;
