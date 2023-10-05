"use client";
import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import MainContainer from "@/component/container/MainContainer";
import Button from "@mui/material/Button";
import RoomIcon from "@mui/icons-material/Room";

const Hero = () => {
  return (
    <div>
      <MainContainer style={{}}>
        <Stack
          sx={{
            width: {
              sm: "550px",
              md: "730px",
              lg: "730px",
              xl: "900px",
            },
            height: {
              xs: "750px",
              sm: "400px",
              md: "400px",
              xl: "500px",
            },

            margin: "0 auto",

            flexDirection: {
              xs: "column",
              sm: "row",
            },
          }}
        >
          <Stack
            flex={1}
            padding={1}
            sx={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <TEXTDataCard />
          </Stack>
          <Box
            flex={1}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <ImageCard />
          </Box>
        </Stack>
      </MainContainer>
    </div>
  );
};

export default Hero;

const TEXTDataCard = () => {
  return (
    <>
      <Box justifyContent="center" alignItems="center">
        <Typography
          variant="h2"
          component="h1"
          sx={{
            maxWidth: {
              xs: "145px",
            },
            margin: {
              xs: "0 auto",
              sm: "0",
            },
          }}
        >
          Discover Most Sutable Property
        </Typography>
        <Typography
          variant="body2"
          sx={{
            maxWidth: {
              xs: "220px",
              sm: "320px",
              md: "350px",
              lg: "400px",
            },
            // minWidth: {
            //   xs: "225px",
            //   sm: "225px",
            //   md: "225px",
            //   lg: "320px",
            // },
            margin: {
              xs: "20px auto",
              sm: "20px 0",
            },
          }}
        >
          <span>Find a variety properties that suit you very</span>
          <br />
          <span>all dificult in finding a residence for you easilty</span>
        </Typography>
      </Box>
      <Box
        sx={{
          backgroundColor: "#ffff",
          display: "flex",
          borderRadius: "5px",
          border: "3px solid rgba(120 , 120 , 120 ,0.374)",
          padding: "0.4rem 1rem",
          justifyContent: "space-between",
          alignItems: "center",
          width: {
            xs: "200px",
            sm: "200px",
            md: "250px",
          },
          margin: {
            xs: "0 auto",
            sm: "0 0 0 3px",
          },
        }}
      >
        <RoomIcon color="error" />
        <input
          type="text"
          style={{ width: "80%", height: "90%", border: "none" }}
        />
        <Button variant="contained">Search</Button>
      </Box>

      <Stack
        direction="row"
        justifyContent="space-between"
        pt={4}
        sx={{
          maxWidth: "400px",
          minWidth: "250px",
          margin: {
            xs: "0 auto",
            sm: "0",
          },
        }}
      >
        {[
          { value: "9,000", Text: "primium Products" },
          { value: "2,000", Text: "Haapy Coustomers" },
          { value: "28", Text: "Award Winning" },
        ].map((item, i) => {
          return (
            <Box key={i}>
              <Typography variant="h5">
                {item.value}
                <span style={{ color: "#e29e9e" }}>+</span>
              </Typography>
              <Typography
                variant="body1"
                sx={{ fontSize: { xs: "9px", sm: "10px" } }}
              >
                {item.Text}
              </Typography>
            </Box>
          );
        })}
      </Stack>
    </>
  );
};

const ImageCard = () => {
  return (
    <Box
      sx={{
        width: {
          xs: "260px",
          sm: "260px",
          md: "260px",
        },
        height: {
          xs: "290px",
          // md: "100%",
        },
        boxSizing: "border-box",
      }}
    >
      <img
        src="/Screenshot 2023-10-02 152439.png"
        alt=""
        style={{
          width: "100%",
          height: "100%",
          borderTopLeftRadius: "50%",
          borderTopRightRadius: "50%",
          border: "5px solid",
        }}
      />
    </Box>
  );
};
