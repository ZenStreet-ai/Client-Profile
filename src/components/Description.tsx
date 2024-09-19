"use client";
import React, { useState } from "react";

const Description = ({ aboutMeText }: { aboutMeText: string }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const truncatedText =
    aboutMeText.length > 350
      ? aboutMeText.substring(0, 350) + "..."
      : aboutMeText;
  const shouldShowReadLess = aboutMeText.length > 350;

  const toggleReadMore = () => {
    setIsExpanded((prev) => !prev);
  };

  return (
    <p className="text-[#4C5863]">
      {isExpanded ? aboutMeText : truncatedText}
      {shouldShowReadLess && (
        <button
          onClick={toggleReadMore}
          className="text-blue-500 ml-2"
          aria-expanded={isExpanded}
          aria-label={isExpanded ? "Show less text" : "Show more text"}
        >
          {isExpanded ? "Read Less" : "Read More"}
        </button>
      )}
    </p>
  );
};

export default Description;
