const tagStyle = {
  padding: "16px",
  border: "2px solid #0044FA",
  borderRadius: "90px",
  backgroundColor: "#fff",
  fontSize: "18px",
  lineHeight: "27px",
  color: "#0A2D4C",
};

const Offers = () => {
  return (
    <section className="space-y-[18px]">
      <h2 className="leading-9 text-[24px]">I offer therapy for</h2>
      <div className="flex flex-wrap gap-[10px]">
        <span style={tagStyle}>Stress Management</span>
        <span style={tagStyle}>Relationship Skills</span>
        <span style={tagStyle}>Anxiety Reduction</span>
        <span style={tagStyle}>Depression Relief</span>
        <span style={tagStyle}>Behavioral</span>
        <span style={tagStyle}>Trauma Healing</span>
      </div>
    </section>
  );
};

export default Offers;
