import React from "react";
import { Link } from "react-router-dom";
import { Box, Button, Stack, Typography } from "@mui/material";

const ExerciseCard = ({ exercise }) => (
  <Link className="exercise-card" to={`/exercise/${exercise.id}`} >
    <img src={exercise.gifUrl} alt={exercise.name} loading="lazy" />
    <Box sx={{
      backgroundImage: "linear-gradient(to top,transparent, #fff )",
    }}>
      <Stack direction="row"
      >
        <Button
          sx={{
            ml: "21px",
            color: "#fff",
            background: "#E0AAFF",
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
            background: "#C77DFF",
            fontSize: "14px",
            borderRadius: "20px",
            textTransform: "capitalize",
          }}
        >
          {exercise.target}
        </Button>
      </Stack>
      <Typography
        ml="21px"
        color="#000000"
        fontWeight="bold"
        sx={{ fontSize: { lg: "24px", xs: "20px" } }}
        mt="11px"
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
    </Box>
  </Link>
);

export default ExerciseCard;
