import React from "react";
import { motion } from "framer-motion";
import styled from "styled-components";

const slides = [
  {
    image: "/IMPLANT 1.svg",
    heading: "Implant Crown with Osstem / Dentium",
    content:
      "Trusted Korean implant systems known for high success rates, fast healing, and affordability. Ideal for single tooth replacement or multi-unit implants.",
  },
  {
    image: "/IMPLANT 2.svg",
    heading: "Implant Crown with Zimmer",
    content:
      "An American-made, premium solution with exceptional tissue compatibility and precise fit. Great for full-mouth restorations and complex cases.",
  },
  {
    image: "/IMPLANT 3.svg",
    heading: "Implant Crown with Nobel Biocare",
    content:
      "Swiss-engineered and globally trusted, Nobel Biocare offers unparalleled performance and natural aesthetics.",
  },
  {
    image: "/IMPLANT 4.svg",
    heading: "Implant Crown with Nobel Active",
    content:
      "Engineered for challenging bone conditions and immediate function. Ideal for aesthetic zones and soft bone.",
  },
];

const CrownSystems = () => {
  return (
    <Wrapper
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6 }}
    >
      <Heading
        as={motion.h1}
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        Our Implant Crown Systems
      </Heading>

      {slides.map((slide, index) => (
        <Card
          key={index}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          whileHover={{ scale: 1.03 }}
        >
          <MobileSlideHeading>{slide.heading}</MobileSlideHeading>

          <CardImage src={slide.image} alt={slide.heading} />

          <TextBox>
            <CardTitle>{slide.heading}</CardTitle>
            <CardContent>{slide.content}</CardContent>
          </TextBox>
        </Card>
      ))}
    </Wrapper>
  );
};

export default CrownSystems;

/* ----------- STYLES ----------- */

const Wrapper = styled(motion.div)`
  width: 100%;
  min-height: 100vh;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 50px;
`;

const Heading = styled.h1`
  width: 531px;
  height: 60px;
  font-family: Montserrat, sans-serif;
  font-weight: 700;
  font-size: 48px;
  line-height: 100%;
  color: #0267ac;
  text-align: center;
  white-space: nowrap;
  margin-bottom: 40px;

  @media (max-width: 768px) {
    width: 100%;
    font-size: 26px;
    white-space: nowrap;
    text-align: center;
  }
`;

const Card = styled(motion.div)`
  width: 877px;
  min-height: 199px;
  border-radius: 23.47px;
  display: flex;
  overflow: hidden;
  background: linear-gradient(90deg, #ffffff 15.16%, #0267ac 350.64%);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin-bottom: 40px;

  @media (max-width: 768px) {
    width: 90%;
    flex-direction: column;
    padding: 20px;
  }
`;

const MobileSlideHeading = styled.h2`
  display: none;

  @media (max-width: 768px) {
    display: block;
    width: 100%;
    font-family: Montserrat, sans-serif;
    font-weight: 700;
    font-size: 20px;
    text-align: center;
    margin-bottom: 10px;
    color: #0267ac;
  }
`;

const CardImage = styled.img`
  width: 209px;
  height: 199px;
  object-fit: cover;

  @media (max-width: 768px) {
    width: 150px;
    height: auto;
    margin: 0 auto 12px auto;
  }
`;

const TextBox = styled.div`
  padding: 24px 24px 24px 38px;
  width: calc(877px - 209px);

  @media (max-width: 768px) {
    width: 100%;
    padding: 0;
  }
`;

const CardTitle = styled.h2`
  width: 523px;
  height: 42px;
  font-family: Montserrat, sans-serif;
  font-weight: 700;
  font-size: 25.69px;
  color: #0267ac;
  margin: 0;

  @media (max-width: 768px) {
    display: none;
  }
`;

const CardContent = styled.p`
  width: 522px;
  font-family: Montserrat, sans-serif;
  font-weight: 400;
  font-size: 18.35px;
  line-height: 34.87px;
  color: #392d44;
  margin-top: 4px;

  @media (max-width: 768px) {
    width: 100%;
    text-align: left;
    line-height: 28px;
    margin-top: 0;
  }
`;
