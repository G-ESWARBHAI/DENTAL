import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const WhyChooseFlap = () => {
  return (
    <MainContainer
      as={motion.div}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      <Heading>Why Choose Sasha Luxe?</Heading>

      <CardsBox>
        <CardsWrapper>
          {cardsData.map((item, index) => (
            <MotionCard
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeOut", delay: index * 0.12 }}
              viewport={{ once: true }}
            >
              <CardIcon src={item.icon} alt={item.alt} />
              <CardContent>
                <CardText>{item.text}</CardText>
              </CardContent>
            </MotionCard>
          ))}
        </CardsWrapper>
      </CardsBox>
    </MainContainer>
  );
};

/* ---------------- Card Data ---------------- */
const cardsData = [
  { icon: "/PRECISION.svg", alt: "Precision Focused", text: "Experienced dental surgeons" },
  { icon: "/MINIMALLY.svg", alt: "Minimally Invasive", text: "Personalized treatment plans" },
  { icon: "/FASTER.svg", alt: "Faster Healing", text: "Minimal pain, fast healing techniques" },
  { icon: "/AESTHETIC.svg", alt: "Aesthetic Results", text: <>Trusted by patients for complex and <br /> simple extractions alike</> },
  { icon: "/Comfort-focused.svg", alt: "Comfort-focused", text: <>Relaxing, modern clinical <br /> environment</> },
];

/* ---------------- Styled Components ---------------- */

const MainContainer = styled.div`
  width: 962px;
  height: 432px;
  border-radius: 16.88px;
  margin: 10px auto 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media(max-width: 600px) {
    width: 100%;
    height: auto;
    padding: 0 12px;
  }
`;

const Heading = styled.h1`
  width: 480px;
  text-align: center;
  font-family: "Montserrat", sans-serif;
  font-weight: 700;
  font-size: 36px;
  color: #0267ac;
  margin-bottom: 20px;

  @media(max-width: 600px) {
    width: 100%;
    font-size: 26px;
  }
`;

const CardsBox = styled.div`
  width: 962px;
  background: #fdfdfdff;
  border-radius: 16.88px;
  display: flex;
  justify-content: center;
  align-items: center;

  @media(max-width: 600px) {
    width: 100%;
    height: auto;
    padding: 20px 0;
  }
`;

const CardsWrapper = styled.div`
  width: 962px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 20px;

  @media(max-width: 600px) {
    width: 100%;
    flex-direction: column;
    align-items: center;
    gap: 14px;
  }
`;

/* ✅ Hover speed increased (duration: 0.15) */
const MotionCard = styled(motion.div).attrs(() => ({
  whileHover: { scale: 1.05 },
  transition: { duration: 0.15, ease: "easeOut" }
}))`
  width: 471px;
  height: 105px;
  border-radius: 16.88px;
  display: flex;
  align-items: center;
  gap: 22px;
  padding-left: 28px;
  background: linear-gradient(90deg, #F1F9FD 0%, #FFFFFF 1500%);
  cursor: pointer;

  @media(max-width: 600px) {
    width: 100%;
    height: auto;
    padding: 14px 18px;
    gap: 16px;
  }
`;

const CardIcon = styled.img`
  width: 50px;
  height: 50px;

  @media(max-width: 600px) {
    width: 40px;
    height: 40px;
  }
`;

const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const CardText = styled.p`
  font-family: "Montserrat", sans-serif;
  font-weight: 400;
  font-size: 18px;
  color: #392d44;
  margin: 0;

  @media(max-width: 600px) {
    font-size: 16px;
    line-height: 1.3;
  }
`;

export default WhyChooseFlap;
