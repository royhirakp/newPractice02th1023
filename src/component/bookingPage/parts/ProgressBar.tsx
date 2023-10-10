import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import MuiLinearProgreson from "@/muiCoustomComponent/MuiLinearProgreson";
const ProgressBar = () => {
  return (
    <div>
      <Box sx={{ width: "100%", border: "1px solid" }}>
        <MuiLinearProgreson value={50} />
      </Box>
      <Box>
        <Stack justifyContent="space-between  " direction="row">
          <Box sx={{ width: "50px", height: "50px", border: "1px solid" }}>
            <Typography variant="body1">60%</Typography>
          </Box>
          <Box
            sx={{ width: "50px", height: "50px", border: "1px solid" }}
          ></Box>
          <Box
            sx={{ width: "50px", height: "50px", border: "1px solid" }}
          ></Box>
          <Box
            sx={{ width: "50px", height: "50px", border: "1px solid" }}
          ></Box>
          <Box
            sx={{ width: "50px", height: "50px", border: "1px solid" }}
          ></Box>
        </Stack>
      </Box>
    </div>
  );
};

export default ProgressBar;
