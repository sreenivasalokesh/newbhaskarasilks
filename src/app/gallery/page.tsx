const galleryItems = [
  { title: "City Lights", description: "Warm evening glow in the skyline." },
  { title: "Forest Trail", description: "A calm path through tall pines." },
  { title: "Ocean Breeze", description: "Soft waves and clear horizons." },
  { title: "Golden Fields", description: "Rolling hills under the sun." },
  { title: "Mountain Peaks", description: "Crisp air above the clouds." },
  { title: "Desert Bloom", description: "Colorful life in the dunes." },
];

export default function GalleryPage() {
  return (
    <section className="stack">
      <div>
        <p className="eyebrow">Gallery</p>
        <h1>Curated highlights.</h1>
        <p className="lead">
          A simple grid layout that can be replaced with real images or media.
        </p>
      </div>
      <div className="grid three">
        {galleryItems.map((item) => (
          <div className="card" key={item.title}>
            <div className="media" aria-hidden="true" />
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
