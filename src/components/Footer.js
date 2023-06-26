import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import footer from "../assets/images/footer.jpg";

const Footer = () => (
  <Box
    sx={{
      backgroundImage: `url(${footer})`,
      backgroundSize: "cover",
      height: { sm: "800px", xs: "350px" },
      backgroundPosition: { sm: "auto", xs: "center" },
    }}
  >
    <Box width="50%"></Box>
    <Box
      sx={{
        backgroundImage: "linear-gradient(to top, transparent, #000000)",
        paddingRight: { sm: "200px", xs: "0px" },
        textAlign: "end",
      }}
    >
      <Typography
        fontWeight={600}
        color="#c6ac8f"
        textAlign="end"
        sx={{
          opacity: "0.1",
          fontSize: { lg: "200px", xs: "60px" },
          fontFamily: "Faster One",
        }}
      >
        FitQuest
      </Typography>
      <Typography
        variant="h5"
        sx={{
          fontSize: { lg: "30px", xs: "20px" },
          textAlign: { lg: "end", xs: "end" },
          mr: { xs: "20px" },
        }}
        mt="41px"
        fontWeight={"bold"}
        color="#fff"
      >
        With 🤍 <br /> by @atzinescandia
      </Typography>
    </Box>
  </Box>
);

export default Footer;
