import React from "react";
import styled from "styled-components";

const HeroLaser = () => {
  return (
    <HeroContainer>
      <HeroHeading>Laser Gum Treatments</HeroHeading>
      <HeroSubheading>Precision. Comfort. Aesthetics.</HeroSubheading>
      <HeroButton>
        <ButtonText>Book Your Consultation Today</ButtonText>
      </HeroButton>
    </HeroContainer>
  );
};

const HeroContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  background-color: #e1edf3;
  background-image: url("/laserbnr.svg"); /* ✅ from public folder */
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

/* ✅ Hero Heading */
const HeroHeading = styled.h1`
  position: absolute;
  top: 285px;
  left: 168px;
  max-width: 562px;
  font-family: "Poppins", sans-serif;
  font-weight: 700;
  font-size: 46px;
  line-height: 100%;
  color: #0267ac;
  margin: 0;
  white-space: nowrap;

  @media (max-width: 1024px) {
    top: 220px;
    left: 80px;
    font-size: 38px;
  }

  @media (max-width: 768px) {
    top: 180px;
    left: 40px;
    font-size: 32px;
    white-space: normal;
  }

  @media (max-width: 480px) {
    top: 140px;
    left: 24px;
    font-size: 26px;
    line-height: 110%;
  }
`;

/* ✅ Hero Subheading */
const HeroSubheading = styled.h2`
  position: absolute;
  top: 351px;
  left: 168px;
  max-width: 421px;
  font-family: "Montserrat", sans-serif;
  font-weight: 540;
  font-size: 29px;
  line-height: 48.34px;
  color: #272727;
  margin: 0;

  @media (max-width: 1024px) {
    top: 290px;
    left: 80px;
    font-size: 25px;
    line-height: 40px;
  }

  @media (max-width: 768px) {
    top: 250px;
    left: 40px;
    font-size: 22px;
    line-height: 34px;
  }

  @media (max-width: 480px) {
    top: 210px;
    left: 24px;
    font-size: 18px;
    line-height: 28px;
  }
`;

/* ✅ Hero Button */
const HeroButton = styled.div`
  position: absolute;
  top: 430px;
  left: 168px;
  width: 427px;
  height: 71px;
  border-radius: 11.26px;
  background-color: #0267ac;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #025892;
  }

  @media (max-width: 1024px) {
    top: 370px;
    left: 80px;
    width: 360px;
    height: 64px;
  }

  @media (max-width: 768px) {
    top: 320px;
    left: 40px;
    width: 300px;
    height: 58px;
  }

  @media (max-width: 480px) {
    top: 270px;
    left: 24px;
    width: 260px;
    height: 52px;
  }
`;

/* ✅ Button Text */
const ButtonText = styled.span`
  font-family: "Montserrat", sans-serif;
  font-weight: 300;
  font-size: 28px;
  color: #ffffff;

  @media (max-width: 1024px) {
    font-size: 24px;
  }

  @media (max-width: 768px) {
    font-size: 20px;
  }

  @media (max-width: 480px) {
    font-size: 18px;
  }
`;

export default HeroLaser;
