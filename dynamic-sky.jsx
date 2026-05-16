// dynamic-sky.jsx
// A starfield with twinkling dots, slow-rotating sparkles, and shooting stars
// spawned at random intervals — not a fixed loop. The shoots are JS-driven so
// they feel genuinely occasional. Light & dark themes.

function DynamicSky({ theme = "dark", density = "normal", minInterval = 1800, maxInterval = 6500 }) {
  const dark = theme === "dark";
  const starColor   = dark ? "rgba(245, 238, 221, 0.95)" : "rgba(20, 36, 90, 0.55)";
  const dimColor    = dark ? "rgba(245, 238, 221, 0.55)" : "rgba(20, 36, 90, 0.25)";
  const trailColor  = dark ? "rgba(255, 248, 230, 1)"   : "rgba(20, 36, 90, 0.85)";
  const trailFade   = dark ? "rgba(255, 248, 230, 0)"   : "rgba(20, 36, 90, 0)";
  const glow        = dark ? "rgba(255, 248, 230, 0.85)" : "rgba(20, 36, 90, 0.55)";

  // Deterministic seeded random so the field doesn't reshuffle every render.
  const config = React.useMemo(() => {
    const seed = (i, n) => {
      const x = Math.sin(i * (n + 0.137) + n * 9301 + 49297) * 233280;
      return x - Math.floor(x);
    };

    const dotCount = density === "dense" ? 90 : density === "sparse" ? 36 : 64;
    const dots = Array.from({ length: dotCount }, (_, i) => {
      const r = 0.5 + seed(i, 3) * 2.2;
      return {
        x: seed(i, 1) * 100,
        y: seed(i, 2) * 100,
        r,
        bright: r > 1.5,
        baseOpacity: 0.35 + seed(i, 4) * 0.6,
        twinkleDelay: seed(i, 5) * 8,
        twinkleDuration: 2.4 + seed(i, 6) * 4,
        twinkleDepth: 0.25 + seed(i, 7) * 0.45, // how far it dims
      };
    });

    const sparkleCount = density === "dense" ? 10 : 6;
    const sparkles = Array.from({ length: sparkleCount }, (_, i) => ({
      x: 6 + seed(i + 100, 1) * 88,
      y: 5 + seed(i + 100, 2) * 86,
      size: 11 + seed(i + 100, 3) * 17,
      delay: seed(i + 100, 4) * 5,
      duration: 3.5 + seed(i + 100, 5) * 3,
      rotate: seed(i + 100, 6) * 360,
    }));

    return { dots, sparkles };
  }, [density]);

  // Shooting stars spawn at random intervals
  const [streaks, setStreaks] = React.useState([]);
  const nextIdRef = React.useRef(0);

  React.useEffect(() => {
    let timerId;
    let cancelled = false;

    const spawn = () => {
      if (cancelled) return;
      const id = nextIdRef.current++;
      const angle = 12 + Math.random() * 24;        // 12–36° descending
      const length = 180 + Math.random() * 240;     // 180–420 px streak
      const top = Math.random() * 65;               // 0–65 % from top
      const startOffset = -8 - Math.random() * 12;  // start off-screen left
      const duration = 0.9 + Math.random() * 0.7;   // 0.9–1.6 s flight
      const distance = 130 + Math.random() * 40;    // 130–170 vw of travel
      const thickness = 1.4 + Math.random() * 0.8;

      const streak = { id, top, startOffset, angle, length, duration, distance, thickness };
      setStreaks((s) => [...s, streak]);

      // Cleanup after the streak has played
      window.setTimeout(() => {
        setStreaks((s) => s.filter((x) => x.id !== id));
      }, duration * 1000 + 400);

      // Schedule the next one with a random gap
      const nextGap = minInterval + Math.random() * (maxInterval - minInterval);
      timerId = window.setTimeout(spawn, nextGap);
    };

    // Kick off the first streak fairly soon so the hero feels alive on load.
    timerId = window.setTimeout(spawn, 600 + Math.random() * 800);

    return () => {
      cancelled = true;
      if (timerId) window.clearTimeout(timerId);
    };
  }, [minInterval, maxInterval]);

  return (
    <div aria-hidden="true" style={{ position: "absolute", inset: 0, overflow: "hidden", pointerEvents: "none" }}>
      <style>{`
        @keyframes ds-twinkle {
          0%, 100% { opacity: var(--o, 0.6); transform: scale(1); }
          50%      { opacity: calc(var(--o, 0.6) * var(--d, 0.35)); transform: scale(0.78); }
        }
        @keyframes ds-sparkle-pulse {
          0%, 100% { opacity: 0.45; transform: scale(0.9); }
          50%      { opacity: 1;    transform: scale(1.15); }
        }
        @keyframes ds-sparkle-spin {
          to { transform: rotate(360deg); }
        }
        @keyframes ds-streak-fly {
          0%   { transform: translate3d(0,0,0);                opacity: 0; }
          8%   { opacity: 1; }
          88%  { opacity: 1; }
          100% { transform: translate3d(var(--travel, 130vw), 0, 0); opacity: 0; }
        }
        .ds-streak-wrap { will-change: transform; }
        .ds-streak      { will-change: transform, opacity; }
        @media (prefers-reduced-motion: reduce) {
          .ds-streak-wrap { display: none; }
          .ds-twinkle, .ds-sparkle { animation: none !important; }
        }
      `}</style>

      {/* Twinkling dot field */}
      {config.dots.map((d, i) => (
        <span
          key={`dot-${i}`}
          className="ds-twinkle"
          style={{
            position: "absolute",
            left: `${d.x}%`,
            top: `${d.y}%`,
            width: d.r,
            height: d.r,
            borderRadius: "50%",
            background: d.bright ? starColor : dimColor,
            boxShadow: d.bright ? `0 0 ${d.r * 2}px ${glow}` : "none",
            opacity: d.baseOpacity,
            animation: `ds-twinkle ${d.twinkleDuration}s ease-in-out ${d.twinkleDelay}s infinite`,
            ['--o']: d.baseOpacity,
            ['--d']: d.twinkleDepth,
          }}
        />
      ))}

      {/* 4-point sparkles (the brand mark) */}
      {config.sparkles.map((s, i) => (
        <span
          key={`sp-${i}`}
          className="ds-sparkle"
          style={{
            position: "absolute",
            left: `${s.x}%`,
            top: `${s.y}%`,
            transform: `translate(-50%, -50%) rotate(${s.rotate}deg)`,
            animation: `ds-sparkle-pulse ${s.duration}s ease-in-out ${s.delay}s infinite`,
            transformOrigin: "center",
          }}
        >
          <StarMark size={s.size} color={starColor} stroke={1.4} />
        </span>
      ))}

      {/* Active shooting stars (state-driven, random intervals) */}
      {streaks.map((s) => (
        <span
          key={s.id}
          className="ds-streak-wrap"
          style={{
            position: "absolute",
            top: `${s.top}%`,
            left: `${s.startOffset}%`,
            transform: `rotate(${s.angle}deg)`,
            transformOrigin: "left center",
          }}
        >
          <span
            className="ds-streak"
            style={{
              display: "block",
              width: s.length,
              height: s.thickness,
              background: `linear-gradient(90deg, ${trailFade} 0%, ${trailFade} 30%, ${trailColor} 100%)`,
              borderRadius: 2,
              animation: `ds-streak-fly ${s.duration}s cubic-bezier(0.2, 0.45, 0.7, 1) forwards`,
              ['--travel']: `${s.distance}vw`,
            }}
          >
            <span
              style={{
                position: "absolute",
                right: -3,
                top: s.thickness / 2 - 3.5,
                width: 7,
                height: 7,
                borderRadius: "50%",
                background: trailColor,
                boxShadow: `0 0 14px ${glow}, 0 0 6px ${glow}`,
              }}
            />
          </span>
        </span>
      ))}
    </div>
  );
}

window.DynamicSky = DynamicSky;
