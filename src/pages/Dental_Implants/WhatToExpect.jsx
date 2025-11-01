import React from "react";
import { motion } from "framer-motion";
import styled from "styled-components";

const WhatToExpect = () => {
  const InfoCard = ({ text }) => (
    <Card
      as={motion.div}
      initial={{ opacity: 0, scale: 0.98 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.03 }}
      transition={{ duration: 0.25 }}
    >
      <CardIcon src="/arrow.svg" alt="icon" />
      <CardText>{text}</CardText>
    </Card>
  );

  return (
    <Wrapper>
      <Heading>What to Expect</Heading>

      <ContentRow>
        <Column>
          <SubHeading>Before the Procedure</SubHeading>
          <InfoCard text={`Detailed consultation & 3D\nCBCT scan`} />
          <InfoCard text={`Customized digital treatment\nplan`} />
          <InfoCard text={`Health clearance (medical\nhistory review)`} />
          <InfoCard text={`Pre-op instructions\n(e.g., fasting, medications)`} />
        </Column>

        <Column>
          <SubHeading>After the Procedure</SubHeading>
          <InfoCard text={` Apply cold packs to reduce\nswelling`} />
          <InfoCard text={` Take prescribed\nantibiotics & pain relief`} />
          <InfoCard text={` Stick to soft foods for 3–5 days`} />
          <InfoCard text={` Avoid smoking, alcohol &\nstrenuous activity`} />
          <InfoCard text={` Maintain oral hygiene without \ndisturbing the surgical area`} />
          <InfoCard text={` Follow up for suture removal \nand healing assessment`} />
        </Column>
      </ContentRow>
    </Wrapper>
  );
};

export default WhatToExpect;

/* -------------------------------- STYLES -------------------------------- */

const Wrapper = styled.div`
  width: 962px;
  margin: 80px auto;
  background-color: #ffffff;
  padding: 24px;
  border-radius: 16.88px;
  box-sizing: border-box;

  @media (max-width: 1024px) {
    width: 90%;
  }

  @media (max-width: 768px) {
    width: 95%;
    padding: 20px;
  }
`;

const Heading = styled.h1`
  font-family: Montserrat, sans-serif;
  font-weight: 700;
  font-size: 44px;
  color: #0267ac;
  text-align: center;
  margin-bottom: 32px;

  @media (max-width: 768px) {
    font-size: 34px;
  }
`;

const ContentRow = styled.div`
  display: flex;
  justify-content: center;
  gap: 48px;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 32px;
  }
`;

const Column = styled.div`
  width: 471px;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const SubHeading = styled.h2`
  font-family: Montserrat, sans-serif;
  font-weight: 700;
  font-size: 27px;
  color: #0267ac;
  text-transform: uppercase;
  margin-bottom: 24px;

  @media (max-width: 768px) {
    text-align: center;
  }
`;

const Card = styled.div`
  width: 471px;
  min-height: 110px;
  border-radius: 16.88px;
  background-color: #f1f9fd;
  display: flex;
  align-items: center;
  padding: 16px 24px;
  box-sizing: border-box;
  margin-bottom: 16px;
  transition: transform 0.25s ease;

  @media (max-width: 1024px) {
    width: 100%;
    min-height: 120px;
  }

  @media (max-width: 768px) {
    width: 100%;
    min-height: 130px;
    padding: 14px 18px;
  }
`;

const CardIcon = styled.img`
  width: 30px;
  height: 30px;
  margin-right: 32px;

  @media (max-width: 768px) {
    margin-right: 16px;
  }
`;

const CardText = styled.p`
  font-family: Montserrat, sans-serif;
  font-weight: 500;
  font-size: 20px;
  line-height: 130%;
  color: #000000;
  white-space: pre-line;
  margin: 0;
  flex: 1;

  @media (max-width: 768px) {
    font-size: 17px;
    text-align: left;
  }
`;
