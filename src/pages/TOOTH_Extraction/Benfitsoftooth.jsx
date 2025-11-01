import React from "react";
import styled from "styled-components";

const BenefitsOfExtractions = () => {
  const arrowIcon = "/arrow.svg";

  const benefits = [
    "Quick, clean removal of problematic teeth",
    "Prevents infection and overcrowding",
    "Promotes oral health and comfort",
    "Local anesthesia for a pain-free experience",
    "Safe recovery guidance and follow-up care",
  ];

  return (
    <Wrapper>
      <Heading>Benefits of Professional Extractions at Sasha Luxe</Heading>

      <BlueSection>
        <ContentBox>
          {benefits.map((item, index) => (
            <ListItem key={index}>
              <Icon src={arrowIcon} alt="arrow" />
              <Text>{item}</Text>
            </ListItem>
          ))}
        </ContentBox>
      </BlueSection>
    </Wrapper>
  );
};

export default BenefitsOfExtractions;

/* ✅ STYLES BELOW */

const Wrapper = styled.div`
  width: 100%;
  background: #fff;
`;

const Heading = styled.h2`
  text-align: center;
  color: #0267ac;
  font-family: Montserrat;
  font-weight: 700;
  font-size: 36px;
  margin: -100px 0 40px;

  @media (max-width: 768px) {
    font-size: 28px;
    margin-bottom: 25px;
  }

  @media (max-width: 480px) {
    font-size: 22px;
    margin-bottom: 18px;
  }
`;

const BlueSection = styled.div`
  width: 100vw;
  background: rgba(235, 250, 252, 1);
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 40px 20px;
  box-sizing: border-box;
`;

const ContentBox = styled.div`
  width: 536px;
  max-width: 95%;
`;

const ListItem = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 18px;

  @media (max-width: 480px) {
    margin-bottom: 14px;
  }
`;

const Icon = styled.img`
  width: 30px;
  height: 30px;
  margin-right: 20px;

  @media (max-width: 480px) {
    width: 20px;
    height: 20px;
    margin-right: 12px;
  }
`;

const Text = styled.span`
  font-family: Montserrat;
  font-weight: 500;
  font-size: 28px;
  line-height: 45px;
  color: #000;
  flex-wrap: wrap;
  white-space: normal;

  @media (max-width: 768px) {
    font-size: 20px;
    line-height: 32px;
  }

  @media (max-width: 480px) {
    font-size: 16px;
    line-height: 26px;
  }
`;
