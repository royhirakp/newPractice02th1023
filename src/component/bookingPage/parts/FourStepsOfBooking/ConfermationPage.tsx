import React, { useState } from "react";
import { Box, Button, Stack, Typography, TextField } from "@mui/material";

const ConfermationPage = () => {
  return (
    <div>
      <Box>
        <Typography
          variant="h6"
          sx={{ border: "1px solid", textAlign: "center" }}
        >
          Your Booking is confirm
        </Typography>

        <Typography variant="subtitle2">Booking Details</Typography>

        <Typography variant="subtitle2">Booking ID: 55522522</Typography>

        <Stack direction="row" flexWrap="wrap">
          {[
            { lable: "Name", data: "Jhon" },
            { lable: "Surname", data: "Doe" },
            { lable: "Email", data: "Jhon@mail.com" },
            { lable: "Phone", data: "+9100000000000" },
            { lable: "Room", data: "Single" },
            { lable: "CheckIn", data: "09/555" },
            { lable: "Check Out", data: "16/521/2" },
            { lable: "Guest", data: "3 Adults" },
            { lable: "Aditional Services ", data: "Airport Pickup" },

            { lable: "Total", data: "$30052" },
            { lable: "Paymant Mode", data: "Online" },
          ].map((item, i) => {
            return (
              <Typography
                variant="body1"
                key={i}
                sx={{ width: { xs: "50%", sm: "33.33%" }, border: "1px solid" }}
              >
                <span style={{ fontWeight: 700 }}>{item.lable}:</span>{" "}
                {item.data}{" "}
              </Typography>
            );
          })}
        </Stack>
        <Stack>
          <Button>Return to Home</Button>
        </Stack>
      </Box>
    </div>
  );
};

export default ConfermationPage;
