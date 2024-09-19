const tagStyle = {
  padding: "10px",
  border: "1px solid #0044FA",
  borderRadius: "45px",
  backgroundColor: "#fff",
  fontSize: "12px",
  lineHeight: "27px",
  color: "#0A2D4C",
};

const OffersMobile = () => {
  return (
    <section className="space-y-[14px] py-5">
      <h2 className="leading-5 text-[16px]">I offer therapy for</h2>
      <div className="flex flex-wrap gap-[5px]">
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

export default OffersMobile;
