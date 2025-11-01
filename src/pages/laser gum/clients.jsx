import React from "react";
import { motion } from "framer-motion";

const cardHover = {
  rest: { scale: 1, boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.08)" },
  hover: { scale: 1.02, boxShadow: "0px 8px 24px rgba(2, 103, 172, 0.14)" }
};
const buttonHover = {
  rest: { scale: 1 },
  hover: { scale: 1.035 }
};

const Clients = () => {
  return (
    <div style={{ backgroundColor: "#FFFFFF" }}>
      <style>
        {`
          @media (max-width: 600px) {
            .desktop-button { display: none !important; }
            .mobile-button {
              display: block !important;
              margin-top: 14px;
              width: 136.19px;
              height: 45.39px;
              background-color: #0267AC;
              color: #FFFFFF;
              border: none;
              border-radius: 7.48px;
              font-family: Roboto, sans-serif;
              font-weight: 500;
              font-size: 22.94px;
              line-height: 30.59px;
              cursor: pointer;
              margin-left: auto;
              margin-right: auto;
              transition: box-shadow 0.15s, transform 0.15s;
            }
          }
          @media (min-width: 601px) {
            .mobile-button { display: none !important; }
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
          overflow: "hidden"
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
            textAlign: "left"
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
            textAlign: "left"
          }}
        >
          Some best words from our beloved clients. It’s always encouraging to
          know that our clients loved our services as it keeps us going even
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
            gap: "24px"
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
              flex: "1 1 100%"
            }}
          >
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "16px",
                width: "100%",
                justifyContent: "center"
              }}
            >
              {/* Testimonial 1 */}
              <motion.div
                initial="rest"
                whileHover="hover"
                animate="rest"
                variants={cardHover}
                transition={{ type: "spring", stiffness: 200, damping: 22 }}
                style={{
                  width: "100%",
                  maxWidth: "320px",
                  height: "250px",
                  backgroundColor: "#FFFFFF",
                  borderRadius: "12px",
                  padding: "20px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  boxSizing: "border-box",
                  position: "relative",
                  flex: "1 1 280px",
                  boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)"
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
                    opacity: 1
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
                    alignSelf: "flex-start"
                  }}
                />
                <p
                  style={{
                    fontFamily: "Montserrat, sans-serif",
                    fontSize: "10px",
                    lineHeight: "19px",
                    color: "#392D44",
                    margin: "0 0 27px 0",
                    textAlign: "justify"
                  }}
                >
                  “I had dark patches on my gums that made me self-conscious.
                  After laser depigmentation at Sasha Luxe, my gums are pink and
                  healthy looking. It was quick and completely painless!”
                </p>
                <strong
                  style={{
                    fontFamily: "Montserrat, sans-serif",
                    fontWeight: 700,
                    fontSize: "11px",
                    color: "#392D44",
                    alignSelf: "flex-start"
                  }}
                >
                  Sneha R.
                </strong>
              </motion.div>
              {/* Testimonial 2 */}
              <motion.div
                initial="rest"
                whileHover="hover"
                animate="rest"
                variants={cardHover}
                transition={{ type: "spring", stiffness: 200, damping: 22 }}
                style={{
                  width: "100%",
                  maxWidth: "320px",
                  height: "250px",
                  backgroundColor: "#FFFFFF",
                  borderRadius: "12px",
                  padding: "20px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  boxSizing: "border-box",
                  position: "relative",
                  flex: "1 1 280px",
                  boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)"
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
                    alignSelf: "flex-start"
                  }}
                />
                <p
                  style={{
                    fontFamily: "Montserrat, sans-serif",
                    fontSize: "10px",
                    lineHeight: "18.4px",
                    color: "#392D44",
                    margin: "0 0 55px 0",
                    textAlign: "justify"
                  }}
                >
                  My gum line was uneven, and it really threw off my smile. The
                  laser reshaping was fast, precise, and the healing was a
                  breeze. I love how natural my smile looks now.
                </p>
                <strong
                  style={{
                    fontFamily: "Montserrat, sans-serif",
                    fontWeight: 700,
                    fontSize: "11px",
                    color: "#392D44",
                    alignSelf: "flex-start"
                  }}
                >
                  Ravi K.
                </strong>
              </motion.div>
            </div>
            {/* ✅ Desktop Button (Framer Motion Hover) */}
            <motion.button
              className="desktop-button"
              initial="rest"
              whileHover="hover"
              animate="rest"
              variants={buttonHover}
              transition={{ type: "spring", stiffness: 220, damping: 20 }}
              style={{
                marginTop: "10px",
                alignSelf: "flex-start",
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
                cursor: "pointer"
              }}
            >
              Click More
            </motion.button>
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
              margin: "0 auto"
            }}
          >
            <img
              src="/ourclient.svg"
              alt="Client Video"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                borderRadius: "12px"
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
                cursor: "pointer"
              }}
            >
              <div
                style={{
                  width: "0",
                  height: "0",
                  borderLeft: "12px solid white",
                  borderTop: "7px solid transparent",
                  borderBottom: "7px solid transparent",
                  marginLeft: "4px"
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
                opacity: 1
              }}
            />
          </div>
        </div>
        {/* ✅ NEW MOBILE BUTTON BELOW IMAGE */}
        <motion.button
          className="mobile-button"
          initial="rest"
          whileHover="hover"
          animate="rest"
          variants={buttonHover}
          transition={{ type: "spring", stiffness: 220, damping: 20 }}
        >
          Click More
        </motion.button>
      </div>
      <div
        style={{
          height: "80px",
          backgroundColor: "#FFFFFF",
          width: "100%"
        }}
      ></div>
    </div>
  );
};

export default Clients;
