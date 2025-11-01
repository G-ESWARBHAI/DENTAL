import React from "react";

const OurClientsLove = () => {
  return (
    <div style={{ backgroundColor: "#FFFFFF" }}>
      <div
        className="clients-container"
        style={{
          width: "100%",
          minHeight: "552px",
          background: "linear-gradient(90deg, #F1F9FD 0%, #FFFFFF 550%)",
          borderRadius: "7.48px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
          alignItems: "center",
          position: "relative",
          padding: "60px 0",
          boxSizing: "border-box",
          overflow: "hidden",
        }}
      >
        {/* Heading */}
        <h2
          className="clients-heading"
          style={{
            fontFamily: "Montserrat, sans-serif",
            fontWeight: 700,
            fontSize: "32.93px",
            lineHeight: "49.4px",
            color: "#0267AC",
            margin: "0 0 8px 0",
            width: "1108px",
            textAlign: "left",
          }}
        >
          Our Clients Love
        </h2>

        {/* Paragraph */}
        <p
          className="clients-para"
          style={{
            width: "1107.69px",
            fontFamily: "Montserrat, sans-serif",
            fontWeight: 400,
            fontSize: "17.96px",
            lineHeight: "29.94px",
            color: "#392D44",
            margin: "0 0 32px 0",
            textAlign: "left",
          }}
        >
          Some best words from our beloved clients. It’s always encouraging to know
          that our clients loved our services as it keeps us going even more
          enthusiastically.
        </p>

        {/* Main Section */}
        <div
          className="clients-row"
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
            width: "1108.12px",
            height: "auto",
            position: "relative",
          }}
        >
          {/* Left: Testimonials + ✅ Desktop Button Now Here */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "20px",
              width: "605px",
            }}
          >
            <div
              className="clients-cards-group"
              style={{
                display: "flex",
                gap: "16px",
                width: "100%",
              }}
            >
              {/* Testimonial 1 */}
              <div
                className="client-card"
                style={{
                  width: "294px",
                  height: "270px",
                  backgroundColor: "#FFFFFF",
                  borderRadius: "12px",
                  boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
                  padding: "20px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  boxSizing: "border-box",
                  position: "relative",
                }}
              >
                <img
                  src="/firstquote.svg"
                  alt="opening quote"
                  style={{
                    position: "absolute",
                    width: "65.52px",
                    height: "49.35px",
                    top: "-25px",
                    left: "12px",
                    opacity: 1,
                  }}
                />

                <img
                  src="/stars.svg"
                  alt="stars"
                  style={{
                    width: "80px",
                    height: "16px",
                    marginTop: "30px",
                    marginBottom: "8px",
                    alignSelf: "flex-start",
                  }}
                />

                <p
                  style={{
                    fontFamily: "Montserrat, sans-serif",
                    fontSize: "10px",
                    lineHeight: "18.4px",
                    color: "#392D44",
                    margin: "0 0 12px 0",
                    textAlign: "justify",
                  }}
                >
                  I had lost a front tooth in an accident, and it really affected my
                  confidence. The team at Sasha Luxe recommended a Nobel Active
                  implant. From day one, they made me feel comfortable and informed.
                  The final crown looks exactly like my natural tooth. I can smile
                  without thinking twice now.
                </p>

                <strong
                  style={{
                    fontFamily: "Montserrat, sans-serif",
                    fontWeight: 700,
                    fontSize: "17px",
                    color: "#392D44",
                    alignSelf: "flex-start",
                  }}
                >
                  Karan S.
                </strong>
              </div>

              {/* Testimonial 2 */}
              <div
                className="client-card"
                style={{
                  width: "294px",
                  height: "270px",
                  backgroundColor: "#FFFFFF",
                  borderRadius: "12px",
                  boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
                  padding: "20px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  boxSizing: "border-box",
                  position: "relative",
                }}
              >
                <img
                  src="/stars.svg"
                  alt="stars"
                  style={{
                    width: "80px",
                    height: "16px",
                    marginTop: "30px",
                    marginBottom: "10px",
                    alignSelf: "flex-start",
                  }}
                />

                <p
                  style={{
                    fontFamily: "Montserrat, sans-serif",
                    fontSize: "10px",
                    lineHeight: "18.4px",
                    color: "#392D44",
                    margin: "0 0 55px 0",
                    textAlign: "justify",
                  }}
                >
                  I got two Osstem implants at Sasha Luxe, and I honestly forgot
                  they aren’t my real teeth. No pain, no hassle just great service
                  and even better results. Highly recommended!
                </p>

                <strong
                  style={{
                    fontFamily: "Montserrat, sans-serif",
                    fontWeight: 700,
                    fontSize: "17px",
                    color: "#392D44",
                    alignSelf: "flex-start",
                    opacity: 2,
                  }}
                >
                  Priya T.
                </strong>
              </div>
            </div>

            {/* ✅ NEW: Desktop-Only Button aligned under testimonials */}
            <button className="desktop-click-more-btn">
              Click More
            </button>
          </div>

          {/* Right Side Video */}
          <div
            className="client-video-box"
            style={{
              width: "446.08px",
              height: "270px",
              borderRadius: "12px",
              overflow: "visible",
              position: "relative",
              boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
            }}
          >
            <img
              src="/ourclient.svg"
              alt="Client Video"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                borderRadius: "12px",
              }}
            />

            <div
              style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                width: "50px",
                height: "50px",
                backgroundColor: "#F3B81F",
                borderRadius: "50%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                cursor: "pointer",
              }}
            >
              <div
                style={{
                  width: "0",
                  height: "0",
                  borderLeft: "12px solid white",
                  borderTop: "7px solid transparent",
                  borderBottom: "7px solid transparent",
                  marginLeft: "4px",
                }}
              ></div>
            </div>

            <img
              src="/quotes.svg"
              alt="closing quote"
              style={{
                position: "absolute",
                width: "63.33px",
                height: "47.7px",
                bottom: "-20px",
                right: "10px",
                opacity: 1,
              }}
            />
          </div>
        </div>

        {/* ✅ Mobile button unchanged */}
        <div className="mobile-click-more-wrap">
          <button
            style={{
              width: "136.19px",
              height: "45.39px",
              backgroundColor: "#0267AC",
              color: "#FFFFFF",
              border: "none",
              borderRadius: "7.48px",
              fontFamily: "Roboto, sans-serif",
              fontWeight: 500,
              fontSize: "22.94px",
              lineHeight: "30.59px",
              cursor: "pointer",
              marginTop: "24px",
            }}
          >
            Click More
          </button>
        </div>
      </div>

      <style>{`
        /* ✅ Desktop Only Button Styling */
        @media (min-width: 769px) {
          .desktop-click-more-btn {
            width: 136.19px;
            height: 45.39px;
            background-color: #0267AC;
            color: white;
            border: none;
            border-radius: 7.48px;
            font-family: Roboto, sans-serif;
            font-weight: 500;
            font-size: 22.94px;
            line-height: 30.59px;
            cursor: pointer;
            margin-top: 16px;
            text-align: left;
          }

          /* hide mobile button on desktop */
          .mobile-click-more-wrap {
            display: none !important;
          }
        }

        @media (max-width: 768px) {
          /* ✅ Mobile stays same */
          .desktop-click-more-btn {
            display: none !important;
          }
          .mobile-click-more-wrap button {
            display: block !important;
            width: 96vw !important;
            margin: 24px auto 0 auto !important;
            text-align: center !important;
          }
          .clients-container {
            width: 100% !important;
            padding: 40px 0 !important;
            align-items: center !important;
          }
          .clients-heading,
          .clients-para {
            width: 96vw !important;
            text-align: center !important;
          }
          .clients-row {
            flex-direction: column !important;
            gap: 24px !important;
            width: 100% !important;
            align-items: center !important;
          }
          .clients-cards-group {
            flex-direction: column !important;
            gap: 18px !important;
            width: 100% !important;
            align-items: center !important;
          }
          .client-card {
            width: 98vw !important;
            height: auto !important;
            padding: 16px !important;
          }
          .client-video-box {
            width: 98vw !important;
            height: 210px !important;
          }
        }
      `}</style>
    </div>
  );
};

export default OurClientsLove;
