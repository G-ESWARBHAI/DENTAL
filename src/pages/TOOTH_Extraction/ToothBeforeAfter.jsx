import React from "react";
import { motion } from "framer-motion";

const WhatToExpect = () => {
  // Reusable Motion Card Component
  const InfoCard = ({ text }) => (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.05 }}
      style={{
        width: "100%",
        maxWidth: "471px",
        minHeight: "102px",
        borderRadius: "16.88px",
        backgroundColor: "#F1F9FD",
        display: "flex",
        alignItems: "center",
        padding: "0 24px",
        boxSizing: "border-box",
        marginBottom: "16px",
        transition: "transform 0.15s ease-out", // ✅ faster hover response
        cursor: "pointer", // optional to show hover feedback
      }}
    >
      {/* Image */}
      <img
        src="/arrow.svg"
        alt="Feature Icon"
        style={{
          width: "30px",
          height: "30px",
          marginRight: "24px",
          flexShrink: 0,
        }}
      />

      {/* Text */}
      <p
        style={{
          fontFamily: "Montserrat, sans-serif",
          fontWeight: 500,
          fontSize: "20px",
          lineHeight: "130%",
          color: "#000000",
          margin: 0,
          whiteSpace: "pre-line",
        }}
      >
        {text}
      </p>
    </motion.div>
  );

  return (
    <div
      style={{
        width: "90%",
        maxWidth: "962px",
        margin: "0px auto",
        borderRadius: "16.88px",
        backgroundColor: "#FFFFFF",
        padding: "24px",
        boxSizing: "border-box",
      }}
    >
      {/* Main Heading */}
      <motion.h1
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        viewport={{ once: true }}
        style={{
          fontFamily: "Montserrat, sans-serif",
          fontWeight: 700,
          fontSize: "clamp(24px, 4vw, 36px)",
          color: "#0267AC",
          textAlign: "center",
          margin: "0 auto 32px",
        }}
      >
        Before & After Care
      </motion.h1>

      {/* Two Columns Layout */}
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          alignItems: "flex-start",
          gap: "32px",
        }}
      >
        {/* BEFORE THE PROCEDURE */}
        <div style={{ flex: "1 1 300px", maxWidth: "471px" }}>
          <h2
            style={{
              fontFamily: "Montserrat, sans-serif",
              fontWeight: 700,
              fontSize: "clamp(18px, 2.5vw, 27px)",
              color: "#0267AC",
              textTransform: "uppercase",
              marginBottom: "24px",
            }}
          >
            Before Your Appointment
          </h2>

          <InfoCard text={`Avoid eating or drinking 6 hours   \nbefore surgical extractions`} />
          <InfoCard text={`  Inform us of any medications \nor medical conditions)`} />
          <InfoCard text={` Arrange for a ride home\n(especially after wisdom\ntooth removal)`} />
          <InfoCard text={`Follow your personalized\nrecovery plan`} />
        </div>

        {/* AFTER THE PROCEDURE */}
        <div style={{ flex: "1 1 300px", maxWidth: "471px" }}>
          <h2
            style={{
              fontFamily: "Montserrat, sans-serif",
              fontWeight: 700,
              fontSize: "clamp(18px, 2.5vw, 27px)",
              color: "#0267AC",
              textTransform: "uppercase",
              marginBottom: "24px",
              textAlign: "left",
              paddingLeft: "12px",
            }}
          >
            After care
          </h2>

          <InfoCard text={` Bite gently on gauze to stop\nbleeding`} />
          <InfoCard text={`Apply ice to reduce\nswelling`} />
          <InfoCard text={`Eat soft foods and avoid straws`} />
          <InfoCard text={` Use prescribed \nmouthwash or rinses`} />
        </div>
      </div>
    </div>
  );
};

export default WhatToExpect;
