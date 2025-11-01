import React from "react";
import styled from "styled-components";

const HeroTooth = () => {
  return (
    <HeroContainer>
      <TextBlock>
        <HeroHeading>Tooth Extractions</HeroHeading>
        <HeroSubheading> Gentle. Safe. Professional Tooth</HeroSubheading>
                <HeroSubheading>Removal When You Need It Most.</HeroSubheading>
{/* <hi></hi> */}
      </TextBlock>
    
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
  background-image: url("/ToothBNR.svg");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;

/* ✅ Text container for exact measurements */
const TextBlock = styled.div`
  position: absolute;
  top: 208px;
  left: 168px;
  width: 618px;
  height: 169px;
`;

/* ✅ Heading inside text block */
const HeroHeading = styled.h1`
  font-family: "Poppins", sans-serif;
  font-weight: 750;
  font-size: 55px;
  color: #0267ac;
  margin: 0;
`;

/* ✅ Subheading inside text block */
const HeroSubheading = styled.h2`
  font-family: "Montserrat", sans-serif;
  font-size: 28px;
  font-weight: 550;
  color: #272727;
  margin-top: 12px;
  margin-bottom: 0;
`;

/* ✅ Button with exact measurements */
const HeroButton = styled.div`
  position: absolute;
  top: 422px;
  left: 168px;
  width: 427px;
  height: 71px;
  border-radius: 11.26px;
  background-color: #0267ac;
  display: flex;
  align-items: center;
  padding-left: 45px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #025892;
  }
`;

/* ✅ Button Text Measurements */
const ButtonText = styled.span`
  font-family: "Montserrat", sans-serif;
  font-weight: 500;
  font-size: 24px;
  line-height: 100%;
  color: #ffffff;
`;

export default HeroTooth;
