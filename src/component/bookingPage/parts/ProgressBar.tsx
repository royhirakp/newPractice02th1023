import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import MuiLinearProgreson from "@/muiCoustomComponent/MuiLinearProgreson";
const ProgressBar = ({ state }: { state: number }) => {
  return (
    <div>
      <Box>
        <Stack
          // justifyContent="space-between  "
          direction="row"
          textAlign="center"
        >
          {[
            // { item: "" },
            { item: "Search" },
            { item: "Booking" },
            { item: "Checkout" },
            { item: "Confermation" },
            // { item: "" },
          ].map((item, i) => {
            return (
              <Box sx={{ border: "1px solid" }} key={i} flex={1}>
                <Typography variant="body1">{item.item}</Typography>
              </Box>
            );
          })}
        </Stack>
      </Box>
      <Box sx={{ width: "100%", border: "1px solid" }}>
        <MuiLinearProgreson value={25 * state} />
      </Box>
      <Box
        sx={{
          display: {
            xs: "none",
            md: "block",
          },
        }}
      >
        <Stack
          justifyContent="space-between"
          direction="row"
          textAlign="center"
        >
          {[
            // { item: "" },
            { item: "Chouse your fabaret room" },
            { item: "Enter Your booking details" },
            { item: "Chouse your fabaret room" },
            { item: "Chouse your fabaret room" },
            // { item: "" },
          ].map((item, i) => {
            return (
              <Box sx={{ border: "1px solid" }} flex={1} key={i}>
                <Typography variant="body2">{item.item}</Typography>
              </Box>
            );
          })}
        </Stack>
      </Box>
    </div>
  );
};

export default ProgressBar;
