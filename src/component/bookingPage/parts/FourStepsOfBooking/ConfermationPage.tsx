import React, { useState } from "react";
import {
  Box,
  Button,
  Stack,
  Typography,
  TextField,
  Paper,
  Divider,
} from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import DownloadIcon from "@mui/icons-material/Download";

const ConfermationPage = () => {
  return (
    <div>
      <Box>
        <Paper>
          <Typography
            variant="h6"
            sx={{
              textAlign: "center",
              justifyContent: "center",
              display: "flex",
              // height: "100px",
              padding: "20px",
            }}
          >
            Your Booking is confirm{" "}
            <CheckCircleIcon
              color="primary"
              fontSize="large"
              sx={{ paddingLeft: "5px" }}
            />
          </Typography>
        </Paper>

        <Stack direction="row" justifyContent="space-between">
          <Box>
            <Typography pt={2} variant="subtitle1" color="secondary">
              Booking Details
            </Typography>

            <Typography variant="subtitle2">Booking ID: 55522522</Typography>
          </Box>
          <Stack
            direction="column"
            sx={{
              justifyContent: "center",
              marginLeft: "5%",
            }}
          >
            <Button>
              Download receipt
              <Box
                component="span"
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  paddingLeft: 1,
                }}
              >
                <DownloadIcon />
              </Box>
            </Button>
          </Stack>
        </Stack>
        <Divider />
        <Stack direction="row" flexWrap="wrap" pt={2}>
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
                sx={{ width: { xs: "50%", sm: "33.33%" }, padding: "0.5% 0" }}
              >
                <span style={{ fontWeight: 700 }}>{item.lable}:</span>{" "}
                {item.data}{" "}
              </Typography>
            );
          })}
        </Stack>
        <Stack pt={2} pb={2} direction="row">
          <Button variant="outlined" sx={{ borderRadius: 0 }}>
            Return to Home
          </Button>
        </Stack>
      </Box>
    </div>
  );
};

export default ConfermationPage;
