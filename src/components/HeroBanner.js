import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import HeroVideo from "../assets/videos/boxing.mp4";

const HeroBanner = () => (
  <Box width="100%"
  >
    <video
      src={HeroVideo}
      autoPlay
      loop
      muted
      style={{
        width: "100%",
        height: "100%",
        objectFit: "cover",
        position: "absolute",
        top: 0,
        left: 0,
        zIndex: -1,
      }}
    />
    <Box
      sx={{
        mt: { lg: "212px", xs: "70px" },
        ml: { sm: "50px" },
        position: "relative",
        p: "20px",
        overflow: "hidden",
      }}
    >

      <Typography color="#cc5803" fontWeight={600} fontSize="26px">
        Fitness Club
      </Typography>
      <Typography
        fontWeight={700}
        sx={{ fontSize: { lg: "44px", xs: "40px" } }}
        mb="23px"
        mt="30px"
        color="#FFFFFF"
      >
        Sweat, Smile <br />
        And Repeat
      </Typography>
      <Typography fontSize="22px" color="#fff" lineHeight="35px">
        Check out the most effective exercises personalized to you
      </Typography>
      <Stack>
        <a
          href="#exercises"
          style={{
            marginTop: "45px",
            textDecoration: "none",
            width: "200px",
            textAlign: "center",
            background: "#cc5803",
            padding: "14px",
            fontSize: "22px",
            textTransform: "none",
            color: "white",
            borderRadius: "4px",
          }}
        >
          Explore Exercises
        </a>
      </Stack>
      <Typography
        fontWeight={600}
        color="#c6ac8f"
        sx={{
          opacity: "0.1",
          display: { lg: "block", xs: "none" },
          fontSize: "200px",
        }}
      >
        FitQuest
      </Typography>
    </Box>
  </Box>

);

export default HeroBanner;
