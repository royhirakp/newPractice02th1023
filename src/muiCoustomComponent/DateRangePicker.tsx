import * as React from "react";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { LocalizationProvider } from "@mui/x-date-pickers-pro";
import { AdapterDayjs } from "@mui/x-date-pickers-pro/AdapterDayjs";
import { DateRangePicker } from "@mui/x-date-pickers-pro/DateRangePicker";
import { Box, Stack, Typography } from "@mui/material";
const DateRangePickercpmponent = () => {
  return (
    <div style={{ padding: "3%" }}>
      <Stack direction="row" textAlign="center" gap={6}>
        <Typography flex={1}>Check-in</Typography>
        <Typography flex={1}>Check-out</Typography>
      </Stack>
      <Box>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DemoContainer components={["DateRangePicker"]}>
            <DateRangePicker
              localeText={{ start: "", end: "" }}
              sx={{
                ".MuiInputBase-input": {
                  // width: "5px",
                  padding: "5%",
                },
              }}
            />
          </DemoContainer>
        </LocalizationProvider>
      </Box>
    </div>
  );
};

export default DateRangePickercpmponent;
