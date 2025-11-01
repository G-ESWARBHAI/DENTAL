import React from "react";
import styled from "styled-components";

const ToothServices = () => {
  return (
    <MainContainer>
      <Heading>Our Extraction Services</Heading>

      {/* SLIDE 1 */}
      <Slide>
        <LeftImage1 src="/Extraction Per Tooth.svg" alt="Extraction Per Tooth" />
        <RightContent>
          <ServiceTitle_Exact>Extraction Per Tooth</ServiceTitle_Exact>
          <LeftImage1Mobile src="/Extraction Per Tooth.svg" alt="Extraction Per Tooth" />
          <ServiceParagraph_Exact>
            This is a standard, non-surgical procedure to remove a visible tooth that’s damaged, decayed,
            or beyond saving. Whether it’s due to trauma, infection, or overcrowding, our gentle approach
            ensures a quick and comfortable recovery.
          </ServiceParagraph_Exact>
          <IdealHeading>Ideal For:</IdealHeading>
          <Points_Exact>
            <Point_Exact>
              <PointIcon src="/arrow.svg" alt="" />
              Severely decayed teeth
            </Point_Exact>
            <Point_Exact>
              <PointIcon src="/arrow.svg" alt="" />
              Teeth affected by gum disease
            </Point_Exact>
            <Point_Exact>
              <PointIcon src="/arrow.svg" alt="" />
              Preparation for orthodontic treatment
            </Point_Exact>
          </Points_Exact>
        </RightContent>
      </Slide>

      {/* SLIDE 2 */}
      <Slide>
        <RightContent>
          <ServiceTitle_Exact>Extraction of Molar</ServiceTitle_Exact>
          <SlideLargeImageMobile src="/molar.svg" alt="Extraction of Molar" />
          <ServiceParagraph_Exact>
            Molars, located at the back of your mouth, can be challenging to remove due to their size and
            location. We perform careful molar extractions with precision to reduce discomfort and prevent
            complications.
          </ServiceParagraph_Exact>
          <IdealHeading>Why Clients Trust Us for Molar Extractions:</IdealHeading>
          <Points_Exact>
            <Point_Exact>
              <PointIcon src="/arrow.svg" alt="" />
              Pain-controlled and efficient procedure
            </Point_Exact>
            <Point_Exact>
              <PointIcon src="/arrow.svg" alt="" />
              Minimal swelling or downtime
            </Point_Exact>
            <Point_Exact>
              <PointIcon src="/arrow.svg" alt="" />
              Expert post-extraction care
            </Point_Exact>
          </Points_Exact>
        </RightContent>
        <SlideLargeImage src="/molar.svg" alt="Extraction of Molar" />
      </Slide>

      {/* SLIDE 3 - Desktop: image left, content right */}
      <SlideReverse>
        <SlideLargeImage src="/Extraction Surgical.svg" alt="Post Extraction Care" />
        <RightContentThird>
          <ServiceTitle_Exact>Extraction Surgical (Wisdom Tooth)</ServiceTitle_Exact>
          <SlideLargeImageMobile src="/Extraction Surgical.svg" alt="Post Extraction Care" />
          <ServiceParagraph_Exact>
            Impacted or partially erupted wisdom teeth often require <strong>surgical extraction </strong>to
            Prevent infection, crowding, or discomfort. We specialize in <strong>Extraction Surgical</strong>
            <strong> (Wisdom Tooth)</strong> procedures that are safe, effective, and minimally invasive.
          </ServiceParagraph_Exact>
          <IdealHeading>Why It’s Often Needed:</IdealHeading>
          <Points_Exact>
            <Point_Exact>
              <PointIcon src="/arrow.svg" alt="" />
              Wisdom teeth growing sideways or impacted
            </Point_Exact>
            <Point_Exact>
              <PointIcon src="/arrow.svg" alt="" />
              Pain, swelling, or gum inflammation
            </Point_Exact>
            <Point_Exact>
              <PointIcon src="/arrow.svg" alt="" />
              Preventive removal to avoid future complications
            </Point_Exact>
          </Points_Exact>
        </RightContentThird>
      </SlideReverse>
    </MainContainer>
  );
};

export default ToothServices;

/* ---------------------- STYLED COMPONENTS ---------------------- */

const MainContainer = styled.div`
  width: 100%;
  max-width: 1100px;
  margin: 0 auto;
  padding: 0px 20px 100px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Heading = styled.h1`
  font-family: "Montserrat", sans-serif;
  font-weight: 800;
  font-size: 40px;
  color: #0267ac;
  text-align: center;
  margin-bottom: 60px;
  align-self: center;

  @media (max-width: 768px) {
    text-align: center;
    margin-bottom: 38px;
    font-size: 30px;
  }
`;

const Slide = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 80px;
  gap: 40px;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 18px;
    margin-bottom: 42px;
    align-items: stretch;
  }
`;

/* For Slide 3 on desktop, reverse image/content (image left, content right) */
const SlideReverse = styled(Slide)`
  flex-direction: row;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const LeftImage1 = styled.img`
  width: 317px;
  height: 284px;
  border-radius: 20px;
  object-fit: cover;

  @media (max-width: 768px) {
    display: none;
  }
`;

const LeftImage1Mobile = styled.img`
  display: none;

  @media (max-width: 768px) {
    display: block;
    width: 100%;
    max-width: 100%;
    height: auto;
    border-radius: 18px;
    object-fit: cover;
    margin: 12px 0 14px 0;
  }
`;

const SlideLargeImage = styled.img`
  width: 360px;
  height: 320px;
  border-radius: 20px;
  object-fit: cover;

  @media (max-width: 768px) {
    display: none;
  }
`;

const SlideLargeImageMobile = styled.img`
  display: none;

  @media (max-width: 768px) {
    display: block;
    width: 100%;
    height: auto;
    border-radius: 18px;
    object-fit: cover;
    margin: 12px 0 14px 0;
  }
`;

const RightContent = styled.div`
  width: 755px;
  display: flex;
  flex-direction: column;
  gap: 14px;

  @media (max-width: 768px) {
    width: 100%;
    align-items: flex-start;
    padding: 0;
    margin: 0;
    gap: 11px;
  }
`;

const RightContentThird = styled(RightContent)`
  padding-top: 8px;
`;

const ServiceTitle_Exact = styled.h2`
  font-family: "Montserrat", sans-serif;
  font-weight: 700;
  font-size: 25.69px;
  color: #0267ac;
  margin: 0;

  @media (max-width: 768px) {
    text-align: center;
    width: 100%;
    font-size: 21px;
    margin-bottom: 5px;
  }
`;

const ServiceParagraph_Exact = styled.p`
  font-family: "Montserrat", sans-serif;
  font-size: 18px;
  line-height: 34px;
  color: #392d44;
  margin: 0;

  @media (max-width: 768px) {
    width: 100%;
    text-align: left;
    margin-bottom: 10px;
    line-height: 24px;
  }
`;

const IdealHeading = styled.h3`
  font-family: "Montserrat", sans-serif;
  font-weight: 800;
  font-size: 20px;
  color: #0267ac;
  margin: 5px 0 4px 0;

  @media (max-width: 768px) {
    text-align: left;
    margin-bottom: 3px;
    width: 100%;
    font-size: 18px;
  }
`;

const Points_Exact = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  width: 100%;

  @media (max-width: 768px) {
    text-align: left;
    margin-top: 0;
    padding-left: 0;
  }
`;

const Point_Exact = styled.li`
  display: flex;
  align-items: center;
  gap: 14px;
  font-family: "Montserrat", sans-serif;
  font-size: 19px;
  color: #392d44;

  @media (max-width: 768px) {
    justify-content: flex-start;
    text-align: left;
    font-size: 16px;
    margin-bottom: 5px;
  }
`;

const PointIcon = styled.img`
  width: 20px;
  height: 20px;
  flex-shrink: 0;
`;

