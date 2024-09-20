import React from "react";

const Page = () => {
  return (
    <div className="flex flex-col lg:flex-row h-screen">
      {/* Left Section */}
      <div
        className="w-full lg:w-1/2 flex flex-col justify-center items-center p-6 lg:p-8 relative"
        style={{ backgroundColor: "#0093D2" }}
      >
        {/* Logo */}
        <div className="mb-6 lg:mb-8">
          <img
            src="logo.png"
            alt="ZenStreet Logo"
            className="w-[120px] h-auto lg:w-[177.12px] lg:h-[77.09px] object-contain"
          />
        </div>
        {/* Heading */}
        <h1 className="text-white text-2xl lg:text-4xl font-semibold text-center mb-4">
          Build a thriving practice with ZenStreet and rediscover the joy of
          therapy.
        </h1>
        {/* Images in Same Line */}
        <div className="flex items-center justify-center space-x-4 mt-4 lg:mt-8">
          {/* Group Image */}
          <img
            src="/grp.png"
            alt="Group Image"
            className="object-contain"
            style={{
              width: "150px",
              height: "100px",
            }}
          />
          {/* Therapist Image */}
          <img
            src="/therapist.png"
            alt="Therapist Image"
            className="object-contain"
            style={{
              width: "150px",
              height: "150px",
            }}
          />
        </div>
      </div>

      {/* Right Section */}
      <div className="w-full lg:w-1/2 bg-white flex flex-col justify-center items-center p-6 lg:p-8">
        <h2 className="text-2xl lg:text-3xl font-bold mb-6">
          Login to ZenStreet.ai
        </h2>
        {/* Google Login Button */}
        <button className="bg-white border border-gray-300 rounded-full flex items-center justify-center px-4 lg:px-6 py-2 shadow-md mb-6">
          <img
            src="google.png"
            alt="Google Icon"
            className="mr-2"
            style={{
              width: "30px",
              height: "30px",
            }}
          />
          <span className="text-gray-700">Continue with Google</span>
        </button>
        {/* Signup Section */}
        <p className="text-gray-500 mb-4">Don't have a ZenStreet.ai account?</p>
        <button className="text-blue-500 border border-blue-500 rounded-full px-6 lg:px-8 py-2 hover:bg-blue-500 hover:text-white transition-all">
          Sign Up
        </button>
      </div>
    </div>
  );
};

export default Page;
