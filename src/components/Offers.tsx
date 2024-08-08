import React from "react";

type Props = {};

const tagStyle = {
  padding: "0.5rem 1rem",
  border: "1px solid #007BFF",
  borderRadius: "9999px",
  backgroundColor: "#f0f4ff",
  fontSize: "1rem",
};

const Offers = (props: Props) => {
  return (
    <div className="flex flex-wrap gap-1">
      <span style={tagStyle}>Stress Management</span>
      <span style={tagStyle}>Relationship Skills</span>
      <span style={tagStyle}>Anxiety Reduction</span>
      <span style={tagStyle}>Depression Relief</span>
      <span style={tagStyle}>Behavioral</span>
      <span style={tagStyle}>Trauma Healing</span>
    </div>
  );
};

export default Offers;
