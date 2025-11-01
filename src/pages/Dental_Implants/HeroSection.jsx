import React from "react";
import styled from "styled-components";

const HeroSection = () => {
  return (
    <HeroContainer>
      <MobileContent>
        <HeroHeading>Dental Implants</HeroHeading>
        <HeroSubheading>Permanent. Natural. Life-Changing.</HeroSubheading>
        <HeroButton>
          <ButtonText>Book Your Consultation Today</ButtonText>
        </HeroButton>
      </MobileContent>
      <HeroImage />
    </HeroContainer>
  );
};

const HeroContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  overflow: hidden;

  @media (max-width: 768px) {
    height: auto;
    display: flex;
    flex-direction: column;
    gap: 0;
    padding: 0;
    background: none;
  }
`;

const MobileContent = styled.div`
  position: absolute;
  top: 230px;
  left: 160px;

  @media (max-width: 768px) {
    position: static;
    width: 100vw;
    text-align: center;
    padding: 32px 16px 16px 16px;
    background: #fff;
    box-sizing: border-box;
    z-index: 2;
  }
`;

const HeroHeading = styled.h1`
  font-family: 'Poppins', sans-serif;
  font-weight: 700;
  font-size: 48px;
  line-height: 72px;
  color: #0267AC;
  margin: 0;

  @media (max-width: 768px) {
    font-size: 30px;
    line-height: 38px;
    margin-bottom: 10px;
  }
`;

const HeroSubheading = styled.h2`
  margin-top: 10px;
  font-family: 'Montserrat', sans-serif;
  font-weight: 500;
  font-size: 27.32px;
  line-height: 38px;
  color: #272727;

  @media (max-width: 768px) {
    font-size: 16px;
    line-height: 22px;
    padding: 0;
    margin-top: 0;
    margin-bottom: 14px;
  }
`;

const HeroButton = styled.button`
  margin-top: 22px;
  width: 425px;
  height: 52px;
  border-radius: 11.26px;
  background-color: #0267AC;
  border: none;
  display: flex;
  align-items: center;
  padding-left: 30px;
  cursor: pointer;

  @media (max-width: 768px) {
    width: 90vw;
    height: 44px;
    justify-content: center;
    padding-left: 0;
    margin: 0 auto;
  }
`;

const ButtonText = styled.span`
  font-family: 'Montserrat', sans-serif;
  font-weight: 500;
  font-size: 24px;
  color: #FFFFFF;

  @media (max-width: 768px) {
    font-size: 15px;
  }
`;

const HeroImage = styled.div`
  background-image: url("/BNR.svg");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: top center;
  width: 100%;
  height: 100vh;

  @media (max-width: 768px) {
    position: static;
    height: 280px;
    width: 100vw;
    border-radius: 0px;
    margin-top: 0;
    background-position: center;
  }
`;

export default HeroSection;
