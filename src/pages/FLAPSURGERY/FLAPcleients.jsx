import React from "react";

const Clients = () => {
  return (
    <div style={{ backgroundColor: "#FFFFFF" }}>
      {/* Media query for desktop-only left alignment */}
      <style>
        {`
          @media (min-width: 601px) {
            .desktop-testimonials-btn {
              align-self: flex-start !important;
              margin-left: 0 !important;
              margin-top: 28px !important;
              margin-right: auto !important;
              display: block;
            }
            .mobile-main-btn {
              display: none !important;
            }
          }
          @media (max-width: 600px) {
            .desktop-testimonials-btn {
              display: none !important;
            }
            .mobile-main-btn {
              display: block !important;
              align-self: center;
              margin: 32px auto 0 auto !important;
            }
          }
        `}
      </style>
      <div
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
          padding: "60px 16px",
          boxSizing: "border-box",
          overflow: "hidden",
        }}
      >
        {/* Heading */}
        <h2
          style={{
            fontFamily: "Montserrat, sans-serif",
            fontWeight: 700,
            fontSize: "32.93px",
            lineHeight: "49.4px",
            color: "#0267AC",
            margin: "0 0 8px 0",
            width: "100%",
            maxWidth: "1108px",
            textAlign: "left",
          }}
        >
          Our Clients Love
        </h2>

        {/* Paragraph */}
        <p
          style={{
            width: "100%",
            maxWidth: "1107.69px",
            fontFamily: "Montserrat, sans-serif",
            fontWeight: 400,
            fontSize: "17.96px",
            lineHeight: "29.94px",
            color: "#392D44",
            margin: "0 0 32px 0",
            textAlign: "left",
          }}
        >
          Some best words from our beloved clients. It’s always encouraging to
          know that our clients loved our services as it keeps us <br /> going even
          more enthusiastically.
        </p>

        {/* Main Section */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
            alignItems: "flex-start",
            width: "100%",
            maxWidth: "1108.12px",
            gap: "24px",
          }}
        >
          {/* Left: Testimonials */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "20px",
              width: "100%",
              maxWidth: "605px",
              flex: "1 1 100%",
            }}
          >
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "16px",
                width: "100%",
                justifyContent: "center",
              }}
            >
              {/* Testimonial 1 */}
              <div
                style={{
                  width: "100%",
                  maxWidth: "294px",
                  height: "200px",
                  backgroundColor: "#FFFFFF",
                  borderRadius: "12px",
                  boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
                  padding: "20px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  boxSizing: "border-box",
                  position: "relative",
                  flex: "1 1 280px",
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
                    lineHeight: "19px",
                    color: "#392D44",
                    margin: "0 0 27px 0",
                    textAlign: "justify",
                  }}
                >
                  I was diagnosed with severe gum disease, and 
                  Sasha Luxe recommended flap surgery with bone 
                  grafting. The entire process was smooth, and I feel 
                  like my mouth has been completely restored.
                </p>
                <strong
                  style={{
                    fontFamily: "Montserrat, sans-serif",
                    fontWeight: 700,
                    fontSize: "11px",
                    color: "#392D44",
                    alignSelf: "flex-start",
                  }}
                >
                  Karan S.
                </strong>
              </div>
              {/* Testimonial 2 */}
              <div
                style={{
                  width: "100%",
                  maxWidth: "294px",
                  height: "200px",
                  backgroundColor: "#FFFFFF",
                  borderRadius: "12px",
                  boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
                  padding: "20px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  boxSizing: "border-box",
                  position: "relative",
                  flex: "1 1 280px",
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
                  I was nervous about gum surgery, but the laser 
                  procedure made a huge difference—less bleeding, 
                  less pain, and I was back to work in two days.
                </p>
                <strong
                  style={{
                    fontFamily: "Montserrat, sans-serif",
                    fontWeight: 700,
                    fontSize: "11px",
                    color: "#392D44",
                    alignSelf: "flex-start",
                  }}
                >
                  Priya T.
                </strong>
              </div>
            </div>
            {/* Desktop-aligned button, directly under testimonials */}
            <button
              className="desktop-testimonials-btn"
              style={{
                marginTop: "28px",
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
                alignSelf: "flex-start",
                display: "block"
              }}
            >
              Click More
            </button>
          </div>
          {/* Right: Video/Image Section */}
          <div
            style={{
              width: "100%",
              maxWidth: "446.08px",
              height: "270px",
              borderRadius: "12px",
              overflow: "visible",
              position: "relative",
              boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
              flex: "1 1 400px",
              margin: "0 auto",
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
                transform: "rotate(0deg)",
                opacity: 1,
              }}
            />
          </div>
        </div>
        {/* Mobile: button at bottom, centered */}
        <button
          className="mobile-main-btn"
          style={{
            marginTop: "32px",
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
            alignSelf: "center",
            display: "block"
          }}
        >
          Click More
        </button>
      </div>
      <div
        style={{
          height: "80px",
          backgroundColor: "#FFFFFF",
          width: "100%",
        }}
      ></div>
    </div>
  );
};

export default Clients;
