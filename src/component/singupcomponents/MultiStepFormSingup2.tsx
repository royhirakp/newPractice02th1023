"use client";
import React, { useState } from "react";
import MainContainer from "@/component/container/MainContainer";
import { Box, Stack, Typography, Button, Paper } from "@mui/material";
import TextField from "@mui/material/TextField";
import { useForm, SubmitHandler } from "react-hook-form";
import { FormControl } from "@mui/material";
import MeterialUiSelect from "@/muiCoustomComponent/MeterialUiSelect";

const MultiStepFormSingup2: React.FC<FormFirstPartProps> = ({
  register,
  handleSubmit,
  errors,
  fromState,
}) => {
  return (
    <>
      <Stack
        sx={{
          width: "100%",
          justifyContent: "center",
          alignItems: "center",
          height: "100%",
        }}
      >
        <Box
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
            border: "1px solid",
            flexDirection: {
              xs: "column",
              sm: "row",
            },
            height: "50%",
          }}
        >
          <MeterialUiSelect
            selectedValue="Age Range"
            options={["18-24", "25-35", "36-46", "47 and more"]}
          />

          <MeterialUiSelect
            selectedValue="Country"
            options={["India", "others"]}
          />
          {/* {errors.email && <span>email letters</span>} */}
        </Box>
        <Box
          sx={{
            width: "100%",
            alignItems: "center",
            height: "50%",

            display: "flex",
            justifyContent: "space-around",
            flexDirection: {
              xs: "column",
              sm: "row",
            },
          }}
        >
          <MeterialUiSelect
            selectedValue="Gender"
            options={["Male", "Female", "Others"]}
          />
          <MeterialUiSelect
            selectedValue="Gender"
            options={["Male", "Female", "Others"]}
          />
          {/* {errors.email && <span>email letters</span>} */}
        </Box>
      </Stack>
    </>
  );
};

export default MultiStepFormSingup2;
