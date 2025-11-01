import React from "react";
import { motion } from "framer-motion";
import styled from "styled-components";

const faqData = [
  {
    question: "How long do dental implants last?",
    answerLine1:
      "With proper care, dental implants can last 15 – 25 years or more, making them one of the",
    answerLine2: "longest-lasting dental restorations.",
  },
  {
    question: "Is the implant surgery painful?",
    answerLine1:
      "Not at all. We use local anesthesia or sedation for a completely pain-free experience. Most",
    answerLine2: "patients report only mild discomfort post-surgery.",
  },
  {
    question: "How soon can I get my crown after implant placement?",
    answerLine1:
      "In most cases, we wait 3 – 6 months for the implant to fully integrate with the jawbone.",
    answerLine2:
      "However, immediate loading options are available with Nobel Active implants.",
  },
  {
    question: "Am I a candidate for implants?",
    answerLine1:
      "If you're healthy and have adequate bone support, you're likely a great candidate. If bone loss",
    answerLine2: "has occurred, bone grafting may be recommended.",
  },
];

const FrequentlyAskedQuestions = () => {
  return (
    <Wrapper
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <Heading>Frequently Asked Questions</Heading>

      <ContentWrapper>
        <ImageWrapper>
          <img
            src="/Frequently Asked.svg"
            alt="FAQ Illustration"
            style={{
              width: "310px",
              height: "310px",
              objectFit: "cover",
            }}
          />
        </ImageWrapper>

        <CardsContainer>
          {faqData.map((item, index) => (
            <Card
              as={motion.div}
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
            >
              <QuestionRow>
                <Plus>+</Plus>
                <QuestionText>{item.question}</QuestionText>
              </QuestionRow>

              <Answer>
                {item.answerLine1}
                <br />
                {item.answerLine2}
              </Answer>
            </Card>
          ))}

          <ReadMore>Read More →</ReadMore>
        </CardsContainer>
      </ContentWrapper>
    </Wrapper>
  );
};

export default FrequentlyAskedQuestions;

/* ------------------- STYLED COMPONENTS ------------------- */

const Wrapper = styled(motion.div)`
  width: 1133px;
  margin: 20px auto; /* Reduced gap */
  padding: 25px 24px;
  background: #ffffff;
  box-sizing: border-box;

  @media (max-width: 1024px) {
    width: 90%;
  }

  @media (max-width: 768px) {
    width: 95%;
    padding: 15px;
    margin-top: 10px;
    margin-bottom: 10px;
  }
`;

const Heading = styled.h1`
  font-family: Montserrat, sans-serif;
  font-weight: 700;
  font-size: 36px;
  color: #0267ac;
  text-align: center;
  margin-bottom: 20px;
  white-space: nowrap; /* Mobile single line */

  @media (max-width: 768px) {
    font-size: 24px;
    white-space: nowrap;
  }
`;

const ContentWrapper = styled.div`
  display: flex;
  gap: 60px;
  align-items: flex-start;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 25px;
  }
`;

const ImageWrapper = styled.div`
  display: flex;
  justify-content: center;

  /* Desktop spacing fix */

  @media (min-width: 1025px) {
    margin-top: 80px; /* ✅ moves image slightly down on desktop */
  }

  @media (max-width: 768px) {
    width: 100%;
    margin-top: 0; /* ✅ mobile stays same */
  }
`;


const CardsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  flex: 1;
`;

const Card = styled.div`
  background: linear-gradient(90deg, #f0f4ff 0%, #ffffff 350%);
  border-radius: 16px;
  padding: 20px 40px;
  transition: 0.3s;

  @media (max-width: 768px) {
    padding: 18px 15px;
  }
`;

const QuestionRow = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 8px;
`;

const Plus = styled.div`
  margin-right: 10px;
  font-weight: 600;
  font-size: 16px;
  color: #392d44;
`;

const QuestionText = styled.h3`
  margin: 0;
  font-family: Montserrat, sans-serif;
  font-size: 16px;
  color: #392d44;
`;

const Answer = styled.p`
  margin: 0;
  font-family: Montserrat, sans-serif;
  font-size: 12px;
  line-height: 18px;
  color: #392d44;
  padding-left: 28px;
`;

const ReadMore = styled.div`
  margin-top: 10px;
  font-family: Roboto, sans-serif;
  font-size: 22px;
  font-weight: 500;
  color: #0267ac;
`;

