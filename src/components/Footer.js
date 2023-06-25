import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import Logo from "../assets/icons/logo.svg";
import footer from "../assets/images/footer.jpg";

const Footer = () => (
  <Box
    sx={{
      backgroundImage: `url(${footer})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      height: "800px",
    }}
  >
    <Box></Box>
    <Box
      sx={{ backgroundImage: "linear-gradient(to top, transparent, #000000)" }}
    >
      <Stack
        gap="40px"
        sx={{ alignItems: "center" }}
        flexWrap="wrap"
        px="40px"
        pt="24px"
      >
        <img src={Logo} alt="logo" style={{ width: "200px", height: "41px" }} />
      </Stack>
      <Typography
        variant="h5"
        sx={{ fontSize: { lg: "28px", xs: "20px" } }}
        mt="41px"
        textAlign="center"
        pb="40px"
        color="#fff"
      >
        Made with ❤️
      </Typography>
    </Box>
  </Box>
);

export default Footer;
