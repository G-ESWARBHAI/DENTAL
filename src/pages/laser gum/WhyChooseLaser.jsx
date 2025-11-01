import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const cardVariants = {
  hidden: { opacity: 0, y: 32 },
  visible: i => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.38, ease: "easeOut", delay: i * 0.08 }
  })
};

const WhyChooseLaser = () => (
  <MainContainer
    as={motion.div}
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, ease: "easeOut" }}
    viewport={{ once: true }}
  >
    <Heading>Why Choose Laser Dentistry at Sasha Luxe?</Heading>
    <CardsWrapper>
      {cardsData.map((card, index) => (
        <Card
          as={motion.div}
          key={index}
          custom={index}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={cardVariants}
          whileHover={{
            y: -5,
            boxShadow: "0 8px 20px rgba(2,103,172,0.13)",
            backgroundColor: "#e2eff9"
          }}
          transition={{ duration: 0.24, ease: "easeOut" }}
        >
          <CardIcon src={card.icon} alt={card.title} />
          <CardContent>
            <CardTitle>{card.title}</CardTitle>
            <CardText>{card.text}</CardText>
          </CardContent>
        </Card>
      ))}
    </CardsWrapper>
  </MainContainer>
);

/* ---------- Card Data ---------- */
const cardsData = [
  {
    icon: "/PRECISION.svg",
    title: "Precision Focused:",
    text: "Preserves healthy tissue",
  },
  {
    icon: "/MINIMALLY.svg",
    title: "Minimally Invasive:",
    text: "No cutting, no stitches",
  },
  {
    icon: "/FASTER.svg",
    title: "Faster Healing:",
    text: "Reduced swelling and no sutures",
  },
  {
    icon: "/AESTHETIC.svg",
    title: "Aesthetic Results:",
    text: "Clean contours, natural color",
  },
  {
    icon: "/SAFE.svg",
    title: "Safe & Sterile:",
    text: "Minimizes infection risk effectively",
  },
];

/* ---------------- Styled Components ---------------- */

const MainContainer = styled.div`
  width: 962px;
  margin: -40px auto 0 auto; /* ↓ Less negative spacing (Reduced Gap) */
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 0;

  @media (max-width: 1000px) {
    width: 90%;
    margin-top: -20px;
  }
`;

const Heading = styled.h1`
  text-align: center;
  font-family: "Montserrat", sans-serif;
  font-weight: 700;
  font-size: 36px;
  color: #0267ac;
  margin-bottom: 25px;

  @media (max-width: 1000px) {
    width: 100%;
    font-size: 26px;
    margin-bottom: 18px;
  }
`;

const CardsWrapper = styled.div`
  width: 962px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 14px;

  @media (max-width: 1000px) {
    width: 100%;
    flex-direction: column;
    gap: 12px;
  }
`;

const Card = styled.div`
  width: 471px;
  height: 105px;
  background-color: #ebf4fa;
  border-radius: 16.88px;
  display: flex;
  align-items: center;
  gap: 22px;
  padding: 0 14px;
  cursor: pointer;
  box-shadow: 0 4px 14px rgba(2, 103, 172, 0.07);
  transition: background 0.22s;

  @media (max-width: 1000px) {
    width: 100%;
    height: auto;
    padding: 14px;
  }
`;

const CardIcon = styled.img`
  width: 50px;
  height: 50px;
  margin-left: 14px;
`;

const CardContent = styled.div`
  display: flex;
  flex-direction: column;
`;

const CardTitle = styled.h3`
  font-family: "Montserrat", sans-serif;
  font-weight: 700;
  font-size: 18px;
  color: #11161a;
  margin: 0;
`;

const CardText = styled.p`
  font-family: "Montserrat", sans-serif;
  font-weight: 400;
  font-size: 18px;
  color: #392d44;
  margin: 4px 0 0 0;
`;

export default WhyChooseLaser;
