import React from "react";
import { Box, Stack, Typography } from "@mui/material";
const importAll = (r) =>
  r.keys().reduce((acc, item) => {
    acc[item.replace("./", "")] = r(item);
    return acc;
  }, {});

export const heroTextureImports = importAll(
  require.context("../assets/images/cards", false, /\.(png|jpe?g|svg|jpg)$/)
  // require.context("../../../assets/videos", false, /\.(mp4|mov)$/)
);


const BodyPart = ({ item, setBodyPart, bodyPart, index }) => (
  <Box
    sx={{
      backgroundImage: `url(${Object.values(heroTextureImports)[index]})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      height: "280px",
      borderRadius: "20px",
    }}
  >
    <Stack
      type="button"
      justifyContent="end"
      className="bodyPart-card"
      padding="30px"
      sx={
        bodyPart === item
          ? {
            width: "270px",
            height: "282px",
            cursor: "pointer",
            gap: "47px",
            backgroundImage: "linear-gradient(to bottom, transparent, #000)",
          }
          : {
            width: "270px",
            height: "282px",
            cursor: "pointer",
            gap: "47px",
            backgroundImage: "linear-gradient(to bottom, transparent, #000)",
          }
      }
      onClick={() => {
        setBodyPart(item);
        window.scrollTo({ top: 1800, left: 100, behavior: "smooth" });
      }}
    >
      <Box>
        <Typography
          fontSize="24px"
          fontWeight="bold"
          color="#fff"
          textTransform="capitalize"
        >
          {item}
        </Typography>
      </Box>

    </Stack>
  </Box >

);

export default BodyPart;
