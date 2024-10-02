"use client";
import React, { useState } from "react";

const Description = ({ aboutMeText,isLaptop=true }: { aboutMeText: string,isLaptop?:boolean }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const truncatedText =
    aboutMeText.length > 350
      ? aboutMeText.substring(0, 350) + "..."
      : aboutMeText;
  const shouldShowReadLess = aboutMeText.length > 350;

  const toggleReadMore = () => {
    setIsExpanded((prev) => !prev);
  };

  return isLaptop ? (
    <p className="text-[#4C5863] font-poppins text-[18px] font-medium leading-[28px] tracking[-0.36px]">
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
  ) : (
    <>
      <p className="text-[16px] leading-3 w-full h-[19px]">About Me</p>
      <p className="text-[#787B7E] text-[12px] leading-4 w-full">
        {isExpanded ? aboutMeText : truncatedText}
        {shouldShowReadLess && (
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="text-blue-500 ml-2"
          >
            {isExpanded ? "Read Less" : "Read More"}
          </button>
        )}
      </p>
    </>
  );
};

export default Description;
