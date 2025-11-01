import React from "react";
import styled from "styled-components";

const GumCareServices = () => {
  const icon = "/ARROW LASER.svg";

  return (
    <MainContainer>
      <Heading>Our Laser &amp; Gum Care Services</Heading>

      {/* SLIDE 1 — Image Left / Content Right */}
      <Slide>
        <LeftImage src="/Gingival.svg" alt="Gingival Depigmentation" />
        <RightContent>
          <ServiceTitle>Gingival Depigmentation</ServiceTitle>
          <ServiceParagraph>
            Target dark or patchy gum pigmentation caused by excess melanin or lifestyle factors.
            This cosmetic procedure gently removes discolored tissue to reveal even toned, pink gums.
          </ServiceParagraph>
          <Points>
            <Point><PointIcon src={icon} alt="icon" /> Aesthetic gum lightening</Point>
            <Point><PointIcon src={icon} alt="icon" /> Ideal for darker-toned gums</Point>
            <Point><PointIcon src={icon} alt="icon" /> Lasting cosmetic improvement</Point>
          </Points>
        </RightContent>
      </Slide>

      {/* SLIDE 2 — Content Left / Image Right */}
      <Slide>
        <LeftContent>
          <ServiceTitle>Gingival Depigmentation with Laser</ServiceTitle>
          <ServiceParagraph>
            Using <strong>diode or soft-tissue lasers</strong>, we precisely remove pigmented gum tissue <br />
            with <strong>minimal bleeding, no sutures, and rapid healing</strong>.
          </ServiceParagraph>
          <Points>
            <Point><PointIcon src={icon} alt="icon" /> Non-surgical & virtually painless</Point>
            <Point><PointIcon src={icon} alt="icon" /> Uniform, natural-looking gum tone</Point>
            <Point><PointIcon src={icon} alt="icon" /> Quick recovery, long-lasting results</Point>
          </Points>
        </LeftContent>
        <RightImage src="/GingivaLaser.svg" alt="Laser Crown Lengthening" />
      </Slide>

      {/* SLIDE 3 */}
      <Slide>
        <LeftImage src="/GUM RESHAPING.svg" alt="Gum Reshaping / Contouring Per Tooth" />
        <RightContent>
          <ServiceTitle>Gum Reshaping / Contouring Per Tooth</ServiceTitle>
          <ServiceParagraph>
            Correct uneven gum lines, excess gum display, or overgrown soft tissue. This <br />
            procedure redefines your gingival architecture for a more symmetrical and <br />
            attractive smile.
          </ServiceParagraph>
          <Points>
            <Point><PointIcon src={icon} alt="icon" /> Ideal for gummy smiles</Point>
            <Point><PointIcon src={icon} alt="icon" /> Enhances tooth proportions</Point>
            <Point><PointIcon src={icon} alt="icon" /> Aesthetic smile design</Point>
          </Points>
        </RightContent>
      </Slide>

      {/* SLIDE 4 */}
      <Slide>
        <LeftContent>
          <ServiceTitle>Gum Reshaping / Contouring Per Tooth with Laser</ServiceTitle>
          <ServiceParagraph>
            Laser contouring offers a <strong>bloodless, stitch-free solution</strong> with precision control <br />
            and minimal trauma. Perfect for single-tooth adjustments or as part of a smile <br />
            makeover.
          </ServiceParagraph>
          <Points>
            <Point><PointIcon src={icon} alt="icon" /> Minimal post-op swelling</Point>
            <Point><PointIcon src={icon} alt="icon" /> Seamless gum margins</Point>
            <Point><PointIcon src={icon} alt="icon" /> Faster, cleaner healing</Point>
          </Points>
        </LeftContent>
        <RightImage src="/GUMreshape.svg" alt="Laser Crown Lengthening" />
      </Slide>

      {/* SLIDE 5 */}
      <Slide>
        <LeftImage src="/Full Mouth.svg" alt="Curettage – Full Mouth" />
        <RightContent>
          <ServiceTitle>Curettage – Full Mouth</ServiceTitle>
          <ServiceParagraph>
            A therapeutic procedure to remove <strong>infected gingival epithelium</strong> in periodontal <br />
            pockets. Promotes gum reattachment and reduces inflammation in moderate to <br />
            advanced gum disease.
          </ServiceParagraph>
          <Points>
            <Point><PointIcon src={icon} alt="icon" /> Treats chronic periodontitis</Point>
            <Point><PointIcon src={icon} alt="icon" /> Improves periodontal health</Point>
            <Point><PointIcon src={icon} alt="icon" /> Supports long-term gum stability</Point>
          </Points>
        </RightContent>
      </Slide>

      {/* SLIDE 6 */}
      <Slide>
        <LeftContent>
          <ServiceTitle>Curettage – Full Mouth with Laser</ServiceTitle>
          <ServiceParagraph>
            Laser-assisted full-mouth curettage targets diseased tissue and bacteria more <br />
            effectively, promoting faster healing and enhanced regeneration.
          </ServiceParagraph>
          <Points>
            <Point><PointIcon src={icon} alt="icon" /> Superior bacterial control</Point>
            <Point><PointIcon src={icon} alt="icon" /> Less invasive than traditional methods</Point>
            <Point><PointIcon src={icon} alt="icon" /> Reduced discomfort and bleeding</Point>
          </Points>
        </LeftContent>
        <RightImage src="/CurettageLaser-1.svg" alt="Laser Crown Lengthening" />
      </Slide>

      {/* SLIDE 7 */}
      <Slide>
        <LeftImage src="/Curettage – Per Tooth.svg" alt="Curettage – Per Tooth" />
        <RightContent>
          <ServiceTitle>Curettage – Per Tooth</ServiceTitle>
          <ServiceParagraph>
            Focused periodontal therapy to treat isolated areas of inflammation or infection. <br />
            Ideal for early-stage gum disease or site-specific deep pockets.
          </ServiceParagraph>
          <Points>
            <Point><PointIcon src={icon} alt="icon" /> Preserves healthy surrounding tissue</Point>
            <Point><PointIcon src={icon} alt="icon" /> Boosts local healing</Point>
            <Point><PointIcon src={icon} alt="icon" /> Quick, targeted intervention</Point>
          </Points>
        </RightContent>
      </Slide>

      {/* SLIDE 8 */}
      <Slide>
        <LeftContent>
          <ServiceTitle>Curettage – Per Tooth with Laser</ServiceTitle>
          <ServiceParagraph>
            Precision laser technology enhances per-tooth curettage by gently debriding the <br />
            soft tissue and eliminating harmful bacteria without harming surrounding <br />
            structures.
          </ServiceParagraph>
          <Points>
            <Point><PointIcon src={icon} alt="icon" /> Effective on localized pockets</Point>
            <Point><PointIcon src={icon} alt="icon" /> Pain-free, suture-free treatment</Point>
            <Point><PointIcon src={icon} alt="icon" /> Immediate return to daily activities</Point>
          </Points>
        </LeftContent>
        <RightImage src="/Curettage with Laser.svg" alt="Laser Crown Lengthening" />
      </Slide>
    </MainContainer>
  );
};

/* ---------------------- STYLED COMPONENTS ---------------------- */

const MainContainer = styled.div`
  width: 100%;
  max-width: 1100px;
  margin: 0 auto;
  padding: 50px 20px 100px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Heading = styled.h1`
  width: 100%;
  max-width: 583px;
  font-family: "Montserrat", sans-serif;
  font-weight: 700;
  font-size: 38px;
  color: #0267ac;
  text-align: center;
  margin: 70px 0 60px 0;

  @media (max-width: 768px) {
    font-size: 28px;
    margin: 40px 0 30px 0;
  }
`;

const Slide = styled.div`
  width: 100%;
  max-width: 1100px;
  min-height: 284px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 100px;
  gap: 40px;

  @media (max-width: 992px) {
    flex-direction: column;
    text-align: center;
    margin-bottom: 70px;
  }

  @media (max-width: 576px) {
    gap: 20px;
    margin-bottom: 50px;
  }
`;

const LeftImage = styled.img`
  width: 317px;
  height: 276px;
  border-radius: 25px;
  background-color: #eeebef;
  object-fit: cover;

  @media (max-width: 992px) {
    width: 80%;
    height: auto;
  }

  @media (max-width: 576px) {
    width: 100%;
  }
`;

const RightImage = styled(LeftImage)``;

const RightContent = styled.div`
  width: 755px;
  display: flex;
  flex-direction: column;

  @media (max-width: 992px) {
    width: 100%;
    align-items: center;
  }
`;

const LeftContent = styled(RightContent)``;

const ServiceTitle = styled.h2`
  font-family: "Montserrat", sans-serif;
  font-weight: 700;
  font-size: 28px;
  line-height: 41.29px;
  color: #0267ac;
  margin-bottom: 10px;
  text-align: left;

  @media (max-width: 992px) {
    text-align: center;
    font-size: 24px;
  }

  @media (max-width: 576px) {
    font-size: 20px;
  }
`;

const ServiceParagraph = styled.p`
  font-family: "Montserrat", sans-serif;
  font-weight: 400;
  font-size: 19px;
  line-height: 34.87px;
  color: #392d44;
  margin-bottom: 15px;
  text-align: left;

  @media (max-width: 992px) {
    text-align: center;
    font-size: 16px;
    line-height: 30px;
  }

  @media (max-width: 576px) {
    font-size: 15px;
  }
`;

const Points = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;

  @media (max-width: 992px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

const Point = styled.li`
  display: flex;
  align-items: center;
  gap: 10px;
  font-family: "Montserrat", sans-serif;
  font-weight: 400;
  font-size: 19px;
  line-height: 34.87px;
  color: #392d44;

  @media (max-width: 992px) {
    justify-content: center;
    font-size: 16px;
  }

  @media (max-width: 576px) {
    font-size: 15px;
  }
`;

const PointIcon = styled.img`
  width: 20px;
  height: 20px;
  opacity: 1;

  @media (max-width: 576px) {
    width: 16px;
    height: 16px;
  }
`;

export default GumCareServices;
