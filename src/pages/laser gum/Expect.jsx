import React from "react";
import { motion } from "framer-motion"; // ✅ Add this

const WhatToExpect = () => {
  // Animation Variants
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  // Reusable card component
  const InfoCard = ({ text }) => (
    <motion.div
      variants={fadeUp}
      whileHover={{ scale: 1.03 }} // ✅ Subtle hover scale (desktop only)
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
        transition: "0.3s ease",
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
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
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
      {/* Main Heading */}
      <motion.h1
        variants={fadeUp}
        style={{
          fontFamily: "Montserrat, sans-serif",
          fontWeight: 700,
          fontSize: "clamp(35px, 4vw, 36px)",
          color: "#0267AC",
          textAlign: "center",
          margin: "0 auto 32px",
        }}
      >
        What to Expect
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
        {/* BEFORE THE PROCEDURE SECTION */}
        <motion.div variants={fadeUp} style={{ flex: "1 1 300px", maxWidth: "471px" }}>
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
            Before the Procedure
          </h2>

          <InfoCard text={`Clinical evaluation & gum health\nassessment`} />
          <InfoCard text={`Digital smile design (for\ncosmetic reshaping)`} />
          <InfoCard text={`Medical history & risk review`} />
          <InfoCard text={`Pre-procedure care instructions`} />
        </motion.div>

        {/* AFTER THE PROCEDURE SECTION */}
        <motion.div variants={fadeUp} style={{ flex: "1 1 300px", maxWidth: "471px" }}>
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
            After the Procedure
          </h2>

          <InfoCard text={`Mild swelling or tenderness\nmay occur`} />
          <InfoCard text={`Avoid spicy or hard foods\nfor 2–3 days`} />
          <InfoCard text={`Maintain excellent oral hygiene`} />
          <InfoCard text={`Use prescribed\nmouthwash or rinses`} />
          <InfoCard text={`Attend follow-up to assess\nhealing`} />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default WhatToExpect;
