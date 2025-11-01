import React from "react";
import styled from "styled-components";

const FlapHero = () => {
  return (
    <HeroContainer>
      <HeroHeading>Flap Surgery</HeroHeading>
      <HeroSubheading>Advanced. Regenerative. Restorative.</HeroSubheading>
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
  background-image: url("/flapBNR.svg"); /* ✅ Updated Image */
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  display: flex;
  overflow: hidden;

  @media (max-width: 768px) {
    height: 600px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

const HeroHeading = styled.h1`
  position: absolute;
  top: 208px;
  left: 168px;
  width: 321px;
  font-family: "Poppins", sans-serif;
  font-weight: 750;
  font-size: 50px;
  color: #0267ac;
  margin: 0;

  @media (max-width: 768px) {
    position: static;
    width: 100%;
    text-align: center;
    font-size: 38px;
    margin-top: 120px;
  }
`;

const HeroSubheading = styled.h2`
  position: absolute;
  top: 286px;
  left: 168px;
  width: 512px;
  font-family: "Montserrat", sans-serif;
  font-size: 28px;
  font-weight: 550;
  color: #272727;
  white-space: nowrap;
  margin: 0;

  @media (max-width: 768px) {
    position: static;
    width: 90%;
    text-align: center;
    font-size: 20px;
    white-space: normal;
    margin-top: 10px;
  }
`;

const HeroButton = styled.div`
  position: absolute;
  top: 380px;
  left: 168px;
  width: 427px;
  height: 71px;
  border-radius: 11.26px;
  background-color: #0267ac;
  display: flex;
  align-items: center;
  padding-left: 30px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #025892;
  }

  @media (max-width: 768px) {
    position: static;
    margin-top: 30px;
    width: 85%;
    padding-left: 0;
    justify-content: center;
  }
`;

const ButtonText = styled.span`
  font-family: "Montserrat", sans-serif;
  font-size: 26px;
  color: #ffffff;

  @media (max-width: 768px) {
    font-size: 20px;
  }
`;

export default FlapHero;
