import React from "react";

const TrustYourSmile = () => {
  return (
    <div className="w-full flex justify-center px-4">
      <div
        className="relative w-[1088px] h-[392px] rounded-[40px] overflow-hidden flex items-center"
        style={{ backgroundColor: "#0267AC" }}
      >
        {/* LEFT CONTENT */}
        <div className="absolute left-10 top-1/2 -translate-y-1/2 text-white max-w-[500px]">
          {/* BUTTON */}
          <button
            className="bg-white text-[#0267AC] font-bold text-[24px] py-3 px-10 rounded-[10px] mt-4 hover:scale-[1.05] transition duration-300"
          >
            Book Your Consultation
          </button>
        </div>

        {/* IMAGE RIGHT */}
        <img
          src="/Frame.svg" 
          alt="Banner"
          className="absolute right-0 bottom-0 w-[816px] h-[466px] object-contain pointer-events-none"
        />
      </div>
    </div>
  );
};

export default TrustYourSmile;
