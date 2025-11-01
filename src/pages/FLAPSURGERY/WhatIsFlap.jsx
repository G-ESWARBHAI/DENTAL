import React from "react";
import styled from "styled-components";

const WhatIsFlap = () => {
  return (
    <MainContainer>
      <ContentWrapper>
        <Heading>What Is Flap Surgery?</Heading>

        <Paragraph1>
          <strong>Flap surgery</strong> (also known as <strong>periodontal flap surgery</strong>) is a specialized
          dental procedure used to <strong>treat advanced gum disease</strong> (periodontitis) by
          <strong> cleaning the roots of teeth and the surrounding bone beneath the gums.</strong> It's
          performed when deep periodontal pockets, bone loss, or persistent gum inflammation
          cannot be managed with non-surgical methods like scaling and root planing.
        </Paragraph1>

        <Paragraph2>
          At <strong>Sasha Luxe,</strong> we specialize in Full Mouth Flap Surgery to treat moderate to
          severe periodontal disease by removing deep-seated infection, regenerating lost
          structures, and restoring gum health. For optimal results and enhanced comfort, we also
          offer laser-assisted flap procedures and bone grafting options to rebuild lost jawbone
          and support long-term oral stability.
        </Paragraph2>
      </ContentWrapper>
    </MainContainer>
  );
};

/* ✅ Main Container */
const MainContainer = styled.div`
  width: 100%;
  max-width: 1105px;
  margin: 50px auto 0 auto;
  padding: 0 20px;
  display: flex;
  justify-content: center;
`;

/* ✅ Content Wrapper */
const ContentWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

/* ✅ Heading */
const Heading = styled.h1`
  font-family: "Montserrat", sans-serif;
  font-weight: 700;
  font-size: clamp(28px, 4vw, 39px);
  color: #0267ac;
  margin-bottom: 25px;
  text-align: center;
`;

/* ✅ Paragraph 1 */
const Paragraph1 = styled.p`
  width: 100%;
  max-width: 1300px;
  font-family: "Montserrat", sans-serif;
  font-weight: 500;
  font-size: clamp(16px, 2.4vw, 24px);
  line-height: clamp(28px, 5vw, 46px);
  color: #392d44;
  text-align: left;

  /* ✅ Remove manual line breaks on mobile */
  @media (max-width: 768px) {
    white-space: normal;
  }
`;

/* ✅ Paragraph 2 */
const Paragraph2 = styled.p`
  width: 100%;
  max-width: 1105px;
  font-family: "Montserrat", sans-serif;
  font-weight: 500;
  font-size: clamp(16px, 2.4vw, 24px);
  line-height: clamp(28px, 5vw, 46px);
  color: #392d44;
  margin-top: 25px;
  text-align: left;

  /* ✅ Remove manual line breaks on mobile */
  @media (max-width: 768px) {
    white-space: normal;
  }
`;

export default WhatIsFlap;
