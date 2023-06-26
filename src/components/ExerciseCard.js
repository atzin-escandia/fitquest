import React from "react";
import { Link } from "react-router-dom";
import { Box, Button, Stack, Typography } from "@mui/material";

const ExerciseCard = ({ exercise }) => (
  <Link className="exercise-card" to={`/exercise/${exercise.id}`} >
    <Box
      sx={{
        backgroundImage: `url(${exercise.gifUrl})`,
        backgroundSize: "cover",
        height: "400px",
        borderRadius: "20px",
      }}
    >
      <Box sx={{
        backgroundImage: "linear-gradient(to top,transparent, #000 )",
        height: '100%',
      }}>

        <Typography
          ml="21px"
          color="#cc5803"
          fontWeight="bold"
          sx={{ fontSize: { lg: "24px", xs: "20px" } }}
          pt="50px"
          textTransform="capitalize"
        >
          {exercise.name}
        </Typography>
        <Typography
          ml="21px"
          color="#FFF"
          sx={{ fontSize: { lg: "18px", xs: "15px" } }}
          mt="8px"
          pb="20px"
          textTransform="capitalize"
        >
          {exercise.equipment}
        </Typography>
        <Stack direction="row"
        >
          <Button
            sx={{
              ml: "21px",
              color: "#fff",
              background: "#cc5803",
              fontSize: "14px",
              borderRadius: "20px",
              textTransform: "capitalize",
            }}
          >
            {exercise.bodyPart}
          </Button>
          <Button
            sx={{
              ml: "21px",
              color: "#fff",
              background: "#cc5803",
              fontSize: "14px",
              borderRadius: "20px",
              textTransform: "capitalize",
            }}
          >
            {exercise.target}
          </Button>
        </Stack>
      </Box>
    </Box>
  </Link >
);

export default ExerciseCard;
