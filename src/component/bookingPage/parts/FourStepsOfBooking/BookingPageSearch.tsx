"use client";
import { Box, Button, Stack } from "@mui/material";
import React, { useState } from "react";
import PaginationRounded from "@/muiCoustomComponent/Pagination";
import FilterDataDisplayForMobileMODAL from "../FilterDataDisplayForMobileMODAL";
import RoomListControls from "../RoomListControls";
import RoomList from "../RoomList";

const BookingPageSearch = ({ setState }: { setState: any }) => {
  return (
    <div>
      <Box>
        <FilterDataDisplayForMobileMODAL />
      </Box>

      <Stack direction="row" position="relative">
        <Box
          flex={1.5}
          sx={{
            display: {
              xs: "none",
              md: "block",
            },
            // top: "50px",
            maxWidth: "500px",
            minWidth: "240px",
          }}
        >
          <RoomListControls />
        </Box>
        <Box flex={5} mt={2}>
          <RoomList setState={setState} />
        </Box>
      </Stack>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          padding: "1% 0",
        }}
      >
        <PaginationRounded />
      </Box>
    </div>
  );
};

export default BookingPageSearch;
