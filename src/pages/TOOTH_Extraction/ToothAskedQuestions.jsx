import React from "react";

const faqData = [
  {
    question: "   Is tooth extraction painful ?",
    answerLine1:
      " No. We use local anesthesia and offer gentle techniques to keep you comfortable throughout.",
   },
  {
    question: "How long does it take to recover?",
    answerLine1:
      "  Most patients recover within a few days, depending on the type of extraction.",
   },
  {
    question: "  Are the results permanent?",
    answerLine1:
      "   Not always—but if they’re impacted, infected, or crowding your other teeth, surgical removal ",
    answerLine2: "is often recommended.",
  },
 
];

const FrequentlyAskedQuestions = () => {
  return (
    <div
      style={{
        width: "100%",
        maxWidth: "1133.09px",
        margin: "20px auto 0",
        backgroundColor: "#FFFFFF",
        opacity: 1,
        padding: "25px 24px",
        boxSizing: "border-box",
      }}
    >
      <h1
        style={{
          width: "100%",
          maxWidth: "535px",
          fontFamily: "Montserrat, sans-serif",
          fontWeight: 700,
          fontSize: "clamp(24px, 3vw, 36px)", // ✅ Responsive text
          lineHeight: "1.3",
          color: "#0267AC",
          textAlign: "center",
          margin: "0 auto 25px auto",
        }}
      >
        Frequently Asked Questions
      </h1>

      <div
        style={{
          display: "flex",
          alignItems: "flex-start",
          justifyContent: "center",
          gap: "40px",
          flexWrap: "wrap", // ✅ Allows stacking on smaller screens
        }}
      >
        <img
          src="/Frequently Asked.svg"
          alt="FAQ Illustration"
          style={{
            width: "100%",
            maxWidth: "310.72px",
            height: "auto",
            objectFit: "cover",
            marginTop: "10px",
          }}
        />

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "10px",
            flex: 1,
            minWidth: "280px", // ✅ Prevents shrinking too small
          }}
        >
          {faqData.map((item, index) => (
            <div
              key={index}
              style={{
                width: "100%",
                borderRadius: "16.88px",
                color: "#392D44",
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-start",
                padding: "20px 30px",
                boxSizing: "border-box",
                background: "linear-gradient(90deg, #F0F4FF 0%, #FFFFFF 550%)",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  marginBottom: "8px",
                }}
              >
                <div
                  style={{
                    width: "14px",
                    height: "14px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginRight: "10px",
                    color: "#392D44",
                    fontSize: "16px",
                    fontWeight: 600,
                    fontFamily: "Montserrat, sans-serif",
                  }}
                >
                  +
                </div>

                <h3
                  style={{
                    fontFamily: "Montserrat, sans-serif",
                    fontWeight: 600,
                    fontSize: "clamp(14px, 2vw, 16px)", // ✅ Scales nicely
                    lineHeight: "24.07px",
                    color: "#392D44",
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
                  fontSize: "clamp(11px, 2vw, 12.03px)", // ✅ Responsive text
                  lineHeight: "18.05px",
                  color: "#392D44",
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
              justifyContent: "flex-start",
              gap: "10px",
              marginTop: "15px",
              paddingLeft: "5px",
            }}
          >
            <span
              style={{
                fontFamily: "Roboto, sans-serif",
                fontWeight: 500,
                fontSize: "clamp(18px, 2vw, 22.94px)", // ✅ Responsive
                lineHeight: "30.59px",
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
