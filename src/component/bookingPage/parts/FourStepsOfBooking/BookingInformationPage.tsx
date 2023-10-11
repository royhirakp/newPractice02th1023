import React from "react";
import ProsidToCheckout from "./bookiingIndormationPageParts/ProsidToCheckout";
import { Button, Box, Stack, Typography, Paper } from "@mui/material";
const BookingInformationPage = () => {
  return (
    <div>
      <Stack direction="row">
        <Box flex={3}>
          <Stack gap={1}>
            <Typography>Aditional services</Typography>
            <Paper>Messege spa</Paper>
            <Paper>Airport pickup</Paper>
            <Paper>tour</Paper>
          </Stack>
          <Stack>
            <Typography>Booking Details</Typography>
            <Box>
              <Typography>userid user email user name for billing</Typography>
            </Box>
          </Stack>
          <Stack>spical request</Stack>
          <Box>checkbox for trams and condition</Box>
        </Box>
        <Box flex={1}>
          <ProsidToCheckout />
        </Box>
      </Stack>
    </div>
  );
};

export default BookingInformationPage;
