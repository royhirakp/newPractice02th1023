"use client";
import { Box, Button, Stack } from "@mui/material";
import React, { useState } from "react";
import ProgressBar from "./parts/ProgressBar";
import BookingPageSearch from "./parts/FourStepsOfBooking/BookingPageSearch";
import BookingInformationPage from "./parts/FourStepsOfBooking/BookingInformationPage";
import CheckoutInformationPage from "./parts/FourStepsOfBooking/CheckoutInformationPage";
import ConfermationPage from "./parts/FourStepsOfBooking/ConfermationPage";

const BookingPage = () => {
  const [state, setState] = useState(0);

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
        <Box p={1} sx={{ padding: "2% 0" }}>
          <ProgressBar state={state} />
        </Box>
        <>
          <Button
            onClick={() => {
              console.log("bdhdhdb");
              setState(state + 1);
            }}
          >
            +++++++
          </Button>
          {state}
          <Button onClick={() => setState(state - 1)}>-----------</Button>
          <MultiStepForm state={state} setState={setState} />
        </>
      </Stack>
    </div>
  );
};

export default BookingPage;

const MultiStepForm = ({
  state,
  setState,
}: {
  state: number;
  setState: any;
}) => {
  let element;

  switch (state) {
    case 0:
      element = (
        <>
          <BookingPageSearch setState={setState} />
        </>
      );
      break;
    case 1:
      element = (
        <>
          <BookingInformationPage />
        </>
      );
      break;
    case 2:
      element = (
        <>
          <CheckoutInformationPage />
        </>
      );
      break;

    case 3:
      element = (
        <>
          <ConfermationPage />
        </>
      );
      break;

    default:
      element = "Hello!";
  }
  return <>{element}</>;
};
