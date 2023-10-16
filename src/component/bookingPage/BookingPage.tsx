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
  function handelPrevious() {
    if (state > 0) setState(state - 1);
  }
  function handelNext() {
    if (state < 3) setState(state + 1);
  }

  return (
    <div>
      <Stack
        sx={{
          padding: {
            xs: "0",
            sm: "0 2% ",
          },
        }}
      >
        <Box p={1} sx={{ padding: "1% 0" }}>
          <ProgressBar state={state} />
        </Box>
        <>
          {/* <Button onClick={handelPrevious}>+++++++</Button>
          {state}
          <Button onClick={handelNext}>-----------</Button> */}
          <MultiStepForm
            state={state}
            setState={setState}
            handelNext={handelNext}
            handelPrevious={handelPrevious}
          />
        </>
      </Stack>
    </div>
  );
};

export default BookingPage;

const MultiStepForm = ({
  state,
  setState,
  handelNext,
  handelPrevious,
}: {
  state: number;
  setState: any;
  handelNext: any;
  handelPrevious: any;
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
          <BookingInformationPage
            handelNext={handelNext}
            handelPrevious={handelPrevious}
          />
        </>
      );
      break;
    case 2:
      element = (
        <>
          <CheckoutInformationPage handelNext={handelNext} />
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
