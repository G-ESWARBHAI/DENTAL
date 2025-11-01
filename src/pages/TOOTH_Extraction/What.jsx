import React from "react";
import styled from "styled-components";

const What = () => {
  return (
    <SectionWrapper>
      <Heading>What Is a Tooth Extraction?</Heading>

      <Paragraph>
        Tooth extraction is a routine dental procedure used to remove teeth that are damaged, decayed,
        <br />
        infected, or causing crowding. <strong>At Sasha Luxe,</strong> we ensure every extraction—whether simple or
        <br />
        surgical—is performed with expert care and your comfort in mind.
      </Paragraph>

      <Paragraph>
        Our experienced team uses advanced techniques and pain management to ensure a smooth,
        <br />
        stress-free experience from start to finish.
      </Paragraph>
    </SectionWrapper>
  );
};

const SectionWrapper = styled.div`
  width: 1105px;
  margin: 0 auto;
  margin-top: 80px;
  margin-bottom: 100px;

  @media (max-width: 1200px) {
    width: 90%;
  }

  @media (max-width: 768px) {
    width: 92%;
    margin-top: 50px;
    margin-bottom: 60px;
  }
`;

const Heading = styled.h2`
  text-align: center;
  font-family: "Montserrat", sans-serif;
  font-weight: 700;
  font-size: 39px;
  line-height: 100%;
  color: #0267ac;
  margin-bottom: 35px;

  @media (max-width: 768px) {
    font-size: 28px;
    line-height: 120%;
    margin-bottom: 25px;
  }
`;

const Paragraph = styled.p`
  width: 100%;
  max-width: 1105px;
  font-family: "Montserrat", sans-serif;
  font-size: 26px;
  line-height: 45px;
  color: #392d44;
  text-align: left;
  margin-bottom: 25px;

  strong {
    font-weight: 700;
  }

  /* ✅ Hide <br> for mobile to avoid weird line breaks */
  br {
    @media (max-width: 768px) {
      display: none;
    }
  }

  @media (max-width: 768px) {
    font-size: 18px;
    line-height: 32px;
    margin-bottom: 18px;
  }
`;

export default What;
