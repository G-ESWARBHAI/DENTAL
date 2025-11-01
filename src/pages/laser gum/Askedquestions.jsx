import React from "react";

const faqData = [
  {
    question: " Is laser gum treatment painful?",
    answerLine1:
      " Not at all. Laser procedures are virtually pain-free. Most patients report only mild sensitivity",
    answerLine2: "during and after treatment.",
  },
  {
    question: " How long does healing take?",
    answerLine1:
      " Laser procedures heal significantly faster than traditional methods—usually within a few days.",
  },
  {
    question: " Are the results permanent?",
    answerLine1:
      " Yes, especially for depigmentation and contouring. Proper oral care ensures long-lasting results.",
  },
  {
    question: "Can I combine treatments?",
    answerLine1:
      " Absolutely. Many patients combine laser depigmentation and reshaping for a total smile enhancement.",
  },
];

const FrequentlyAskedQuestions = () => {
  return (
    <div
      style={{
        width: "100%",
        maxWidth: "1133.09px",
        margin: "0 auto",
        backgroundColor: "#FFFFFF",
        padding: "10px 24px 25px 24px",
        boxSizing: "border-box",
      }}
    >
      {/* ✅ MOBILE RESPONSIVE HEADING FIX */}
      <style>
        {`
          @media (max-width: 600px) {
            .faq-heading {
              font-size: 24px !important; 
              line-height: 1.2 !important;
              white-space: normal !important;
              text-align: center !important;
            }
          }
        `}
      </style>

      {/* Heading */}
      <h1
        className="faq-heading"
        style={{
          maxWidth: "100%",
          fontFamily: "Montserrat, sans-serif",
          fontWeight: 700,
          fontSize: "36px", // desktop untouched
          lineHeight: "1.3",
          color: "#0267AC",
          textAlign: "center",
          margin: "0 auto 20px auto",
          whiteSpace: "normal", // ✅ allow wrapping
        }}
      >
        Frequently Asked Questions
      </h1>

      {/* Main content */}
      <div
        style={{
          display: "flex",
          alignItems: "flex-start",
          justifyContent: "center",
          gap: "32px",
          flexWrap: "wrap",
        }}
      >
        {/* Left Image */}
        <img
          src="/Frequently Asked.svg"
          alt="FAQ Illustration"
          style={{
            width: "100%",
            maxWidth: "300px",
            height: "auto",
            objectFit: "cover",
            marginTop: "20px",
          }}
        />

        {/* Right FAQ Cards */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "10px",
            flex: 1,
            minWidth: "300px",
          }}
        >
          {faqData.map((item, index) => (
            <div
              key={index}
              style={{
                borderRadius: "16.88px",
                color: "#392D44",
                display: "flex",
                flexDirection: "column",
                padding: "18px 24px",
                background: "linear-gradient(90deg, #F0F4FF 0%, #FFFFFF 350%)",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  marginBottom: "6px",
                }}
              >
                <div
                  style={{
                    width: "14px",
                    height: "14px",
                    marginRight: "10px",
                    fontSize: "16px",
                    fontWeight: 600,
                  }}
                >
                  +
                </div>

                <h3
                  style={{
                    fontFamily: "Montserrat, sans-serif",
                    fontWeight: 600,
                    fontSize: "16.04px",
                    margin: 0,
                  }}
                >
                  {item.question}
                </h3>
              </div>

              <p
                style={{
                  fontFamily: "Montserrat, sans-serif",
                  fontWeight: 400,
                  fontSize: "12.03px",
                  lineHeight: "18.05px",
                  margin: 0,
                  paddingLeft: "28px",
                }}
              >
                {item.answerLine1}
                <br />
                {item.answerLine2}
              </p>
            </div>
          ))}

          <div
            style={{
              display: "flex",
              alignItems: "center",
              marginTop: "12px",
              paddingLeft: "5px",
            }}
          >
            <span
              style={{
                fontFamily: "Roboto, sans-serif",
                fontWeight: 500,
                fontSize: "22.94px",
                color: "#0267AC",
              }}
            >
              Read More →
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrequentlyAskedQuestions;
