"use client";
import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import RoomList from "./parts/RoomList";
import RoomListControls from "./parts/RoomListControls";
import ProgressBar from "./parts/ProgressBar";

const BookingPage = () => {
  return (
    <div>
      <Stack
        border="1px solid"
        sx={{
          padding: {
            xs: "0",
            sm: "0 2% ",
          },
        }}
      >
        <Box>
          <ProgressBar />
        </Box>
        <Typography variant="subtitle1">Booking Details</Typography>
        <Stack direction="row" position="relative">
          <Box
            flex={1.5}
            sx={{
              display: {
                xs: "none",
                md: "block",
              },
              position: "sticky",
              top: "50px",
            }}
          >
            <RoomListControls />
          </Box>
          <Box flex={5}>
            <RoomList />
          </Box>
        </Stack>
      </Stack>
    </div>
  );
};

export default BookingPage;
