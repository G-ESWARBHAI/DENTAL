import React from "react";
import { motion } from "framer-motion";

const WhatToExpect = () => {
  // Reusable card component with hover + fade-in animation
  const InfoCard = ({ text }) => (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.03 }}
      transition={{ type: "spring", stiffness: 280, damping: 18 }}
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
        cursor: "pointer",
      }}
    >
      {/* Icon */}
      <img
        src="/arrow.svg"
        alt="Feature Icon"
        style={{
          width: "30px",
          height: "30px",
          marginRight: "24px",
          flexShrink: 0,
          transition: "transform 0.3s ease",
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
          whiteSpace: "normal", // ✅ Stops forced line breaks on all screens
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
        margin: "80px auto",
        borderRadius: "16.88px",
        backgroundColor: "#FFFFFF",
        padding: "24px",
        boxSizing: "border-box",
      }}
    >
      {/* Heading */}
      <motion.h1
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4 }}
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
        What to Expect
      </motion.h1>

      {/* FLEX WRAP LAYOUT */}
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          alignItems: "flex-start",
          gap: "32px",
        }}
      >
        {/* BEFORE SURGERY */}
        <div style={{ flex: "1 1 300px", maxWidth: "471px" }}>
          <motion.h2
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            style={{
              fontFamily: "Montserrat, sans-serif",
              fontWeight: 700,
              fontSize: "clamp(18px, 2.5vw, 27px)",
              color: "#0267AC",
              textTransform: "uppercase",
              marginBottom: "24px",
            }}
          >
            Before Surgery
          </motion.h2>

          <InfoCard text="Full-mouth periodontal charting & 3D imaging" />
          <InfoCard text="Medical history and risk assessment" />
          <InfoCard text="Custom treatment plan with grafting options" />
          <InfoCard text="Pre-op antibiotics or antiseptic rinse (if required)" />
        </div>

        {/* AFTER SURGERY */}
        <div style={{ flex: "1 1 300px", maxWidth: "471px" }}>
          <motion.h2
            initial={{ opacity: 0, x: 10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
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
            After Surgery
          </motion.h2>

          <InfoCard text="Mild swelling or sensitivity may occur" />
          <InfoCard text="Use cold compresses & take prescribed medications" />
          <InfoCard text="Soft food diet for 3–5 days" />
          <InfoCard text="Avoid smoking or brushing aggressively near gum area" />
          <InfoCard text="Follow-up visits for healing evaluation" />
        </div>
      </div>
    </div>
  );
};

export default WhatToExpect;
