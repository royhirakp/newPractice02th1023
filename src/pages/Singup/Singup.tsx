"use client";
import React, { useState } from "react";
import MainContainer from "@/component/container/MainContainer";
import { Box, Stack, Typography, Button, Paper } from "@mui/material";
import TextField from "@mui/material/TextField";
import { useForm, SubmitHandler } from "react-hook-form";
import { FormControl } from "@mui/material";
import MeterialUiSelect from "@/muiCoustomComponent/MeterialUiSelect";
// import { LoginButton } from "@/muiCoustomComponent/MuiButtons";
type Inputs = {
  firstname: string;
  lastName: string;
  email: string;
  mobile: string;
  age: string;
  country: string;
  gender: string;
};

interface FormFirstPartProps {
  register: any;
  errors: any;
  handleSubmit: (
    onSubmit: SubmitHandler<Inputs>
  ) => (e: React.FormEvent) => void;
  // Add more props as needed
  fromState: number;
  emalValidatinS: boolean;
  setemalValidatinS: React.Dispatch<React.SetStateAction<boolean>>;
  mobileValidation: boolean;
  setMobileValidation: React.Dispatch<React.SetStateAction<boolean>>;
}

const Singup = () => {
  const [fromState, setFromStae] = useState(1);
  const [emalValidatinS, setemalValidatinS] = useState(true);
  const [mobileValidation, setMobileValidation] = useState(true);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log(data);
  };

  function handelMultiStepForm(state: any) {
    if (!emalValidatinS || !mobileValidation) {
      alert("fix the error");
      return;
    }
    if (state == "next") {
      if (fromState == 2) return;

      setFromStae(fromState + 1);
    } else {
      if (fromState == 1) return;

      setFromStae(fromState - 1);
    }
  }

  return (
    <div style={{ height: "100%" }}>
      <MainContainer
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Paper
          sx={{
            width: { xs: "100%", sm: "80%", md: "75%" },
            maxWidth: "600px",
            marginTop: "25px",
          }}
        >
          <Box
            sx={{
              width: "100%",
              border: "11px solid",
              // width: { xs: "95%", sm: "550px", md: "700px", lg: "900px" },
            }}
            className="fromcomtainer"
          >
            <form action="" onSubmit={handleSubmit(onSubmit)}>
              <Stack>
                <Box
                  sx={{
                    border: "1px solid red",
                    textAlign: "center",
                    margin: "15px 0",
                  }}
                >
                  <Typography variant="h5">Sing Up Form </Typography>
                </Box>

                <FormControl
                  sx={{
                    width: "100%",
                    height: {
                      xs: "350px",
                      sm: "250px",
                    },
                    display: "flex",
                    gap: 3,
                    paddingBottom: "8px",
                    alignItems: "center",
                  }}
                >
                  <MultiStepForm
                    setMobileValidation={setMobileValidation}
                    mobileValidation={mobileValidation}
                    setemalValidatinS={setemalValidatinS}
                    emalValidatinS={emalValidatinS}
                    handleSubmit={handleSubmit}
                    register={register}
                    errors={errors}
                    fromState={fromState}
                  />

                  {/* {errors.password && <span>Password wilbe 8 letters</span>} */}
                </FormControl>

                <Stack direction="row" justifyContent="space-between">
                  <Button
                    disabled={fromState == 1}
                    onClick={() => handelMultiStepForm("prev")}
                  >
                    prev
                  </Button>
                  <Button
                    sx={{ display: `${fromState == 2 ? "block" : "none"}` }}
                    variant="contained"
                    onClick={handleSubmit(onSubmit)}
                  >
                    register
                  </Button>
                  <Button
                    disabled={fromState == 2}
                    onClick={() => handelMultiStepForm("next")}
                  >
                    next
                  </Button>
                </Stack>

                <Box sx={{ width: "80%" }}>
                  <input type="submit" style={{ display: "none" }} />
                </Box>
              </Stack>
            </form>
          </Box>
        </Paper>
      </MainContainer>
    </div>
  );
};

export default Singup;

const MultiStepForm: React.FC<FormFirstPartProps> = ({
  register,
  handleSubmit,
  errors,
  fromState,
  emalValidatinS,
  mobileValidation,
  setMobileValidation,
  setemalValidatinS,
}) => {
  let message;

  switch (fromState) {
    case 1:
      message = (
        <>
          <MultistepSingUpForm1
            emalValidatinS={emalValidatinS}
            setMobileValidation={setMobileValidation}
            mobileValidation={mobileValidation}
            setemalValidatinS={setemalValidatinS}
            fromState={fromState}
            errors={errors}
            register={register}
            handleSubmit={handleSubmit}
          />
        </>
      );
      break;
    case 2:
      message = (
        <>
          <MultiStepFormSingup2
            fromState={fromState}
            errors={errors}
            register={register}
            handleSubmit={handleSubmit}
            emalValidatinS={emalValidatinS}
            setMobileValidation={setMobileValidation}
            mobileValidation={mobileValidation}
            setemalValidatinS={setemalValidatinS}
          />
        </>
      );
      break;

    default:
      message = "Hello!";
  }
  return <>{message}</>;
};

const MultistepSingUpForm1: React.FC<FormFirstPartProps> = ({
  register,
  handleSubmit,
  errors,
  fromState,
  emalValidatinS,
  mobileValidation,
  setMobileValidation,
  setemalValidatinS,
}) => {
  return (
    <>
      <Stack
        sx={{
          width: "100%",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "10px",
          border: "1px solid",
          height: "100%",
        }}
      >
        <Box
          sx={{
            width: "100%",
            height: "50%",
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
            flexDirection: {
              xs: "column",
              sm: "row",
            },
          }}
        >
          <TextField
            id="outlined-basic"
            label="FirstName"
            variant="outlined"
            sx={{
              width: { xs: "90%", sm: "45%" },
              height: "75px",
            }}
            {...register("firstname", {
              required: true,
            })}
          />
          {/* {errors.email && <span>email letters</span>} */}
          <TextField
            id="outlined-basic"
            label="LastName"
            sx={{
              width: { xs: "90%", sm: "45%" },
              height: "75px",
            }}
            {...register("lastName", {
              required: true,
            })}
          />
        </Box>
        <Box
          sx={{
            width: "100%",
            alignItems: "center",

            display: "flex",
            justifyContent: "space-around",
            flexDirection: {
              xs: "column",
              sm: "row",
            },
          }}
        >
          {/* mobile */}
          <TextField
            id="outlined-basic"
            type="number"
            label="Mobile"
            variant="outlined"
            sx={{ width: { xs: "90%", sm: "45%" }, height: "75px" }}
            {...register("mobile")}
            error={!mobileValidation}
            helperText={
              !mobileValidation ? "Please enter a valid email address" : ""
            }
            onChange={(e) => {
              if (e.target.value.length < 6) return;

              console.log(e.target.value);
              const pattern = /^\d{10}$/;

              if (pattern.test(e.target.value)) {
                console.log("String matches the pattern");
                setMobileValidation(pattern.test(e.target.value));
              } else {
                console.log("String does not match the pattern");
                setMobileValidation(pattern.test(e.target.value));
              }
            }}
          />
          {/* email */}
          <TextField
            id="outlined-basic"
            label="Email"
            variant="outlined"
            sx={{ width: { xs: "90%", sm: "45%" }, height: "75px" }}
            {...register("email", {})}
            error={!emalValidatinS}
            helperText={
              !emalValidatinS ? "Please enter a valid email address" : ""
            }
            onChange={(e) => {
              if (e.target.value.length < 6) return;

              const pattern =
                /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/i;

              if (pattern.test(e.target.value)) {
                console.log("String matches the pattern");
                setemalValidatinS(pattern.test(e.target.value));
              } else {
                console.log("String does not match the pattern");
                setemalValidatinS(pattern.test(e.target.value));
              }
            }}
          />
          {/* {errors.email && <span>email letters</span>} */}
        </Box>
      </Stack>
    </>
  );
};

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

function handelerrors() {}
