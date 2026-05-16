// app.jsx — wires the three landing-page directions into the design canvas
// at desktop / tablet / mobile widths so the user can compare side-by-side.

const VIEWPORTS = {
  desktop: { w: 1440, label: "Desktop · 1440" },
  tablet:  { w: 820,  label: "Tablet · 820" },
  mobile:  { w: 390,  label: "Mobile · 390" },
};

// Heights are generous so nothing gets clipped — design_canvas crops overflow.
const HEIGHTS = {
  A: { desktop: 4100, tablet: 5000, mobile: 6400 },
  B: { desktop: 5100, tablet: 6200, mobile: 7700 },
  C: { desktop: 4900, tablet: 6000, mobile: 7300 },
};

function Frame({ direction, viewport }) {
  const Comp = { A: window.LandingA, B: window.LandingB, C: window.LandingC }[direction];
  return (
    <div style={{ width: "100%", height: "100%", overflow: "hidden" }}>
      <Comp viewport={viewport} />
    </div>
  );
}

function App() {
  const directions = [
    {
      id: "A",
      title: "Direction A · Editorial Warm",
      subtitle: "Cream + ink, hand-drawn frame, magazine rhythm — boutique Australian HR advisory feel",
    },
    {
      id: "B",
      title: "Direction B · Dark Enterprise",
      subtitle: "Deep-navy starfield hero, serif display, dense service rows — premium national HR consultancy",
    },
    {
      id: "C",
      title: "Direction C · Asymmetric Modern",
      subtitle: "Editorial split, script accents, rust highlight — modernist HR studio / founder-friendly",
    },
  ];

  return (
    <DesignCanvas>
      {directions.map((d) => (
        <DCSection key={d.id} id={`dir-${d.id}`} title={d.title} subtitle={d.subtitle}>
          {Object.entries(VIEWPORTS).map(([vp, meta]) => (
            <DCArtboard
              key={vp}
              id={`${d.id}-${vp}`}
              label={`${d.id} · ${meta.label}`}
              width={meta.w}
              height={HEIGHTS[d.id][vp]}
            >
              <Frame direction={d.id} viewport={vp} />
            </DCArtboard>
          ))}
        </DCSection>
      ))}
    </DesignCanvas>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
