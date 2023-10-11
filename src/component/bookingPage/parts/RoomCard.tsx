"use client";
import React from "react";
import Image from "next/image";
import { Box, Typography, Stack, Button, Paper, Divider } from "@mui/material";
import TvIcon from "@mui/icons-material/Tv";
import PoolIcon from "@mui/icons-material/Pool";
import LocalBarIcon from "@mui/icons-material/LocalBar";
import RestaurantIcon from "@mui/icons-material/Restaurant";
import BathtubIcon from "@mui/icons-material/Bathtub";
import WifiIcon from "@mui/icons-material/Wifi";

const responsiveIconSize = {
  fontSize: {
    xs: "small",
    sm: "medium",
    md: "large",
  },
};
const RoomCard = ({ setState }: { setState: any }) => {
  return (
    <Paper>
      <Stack direction="row">
        <Box
          sx={{
            flex: 4,
            justifyContent: "center",
            alignItems: "center",
            display: { xs: "none", sm: "flex" },
          }}
          minWidth={19}
          maxWidth={320}
        >
          <ImageContainer />
        </Box>

        <Box
          sx={{
            flex: 5,
            display: "flex",
            alignItems: "center",
          }}
        >
          <RoomdetailsContainer />
        </Box>
        <Divider orientation="vertical" flexItem />
        <Box
          sx={{
            flex: 2.5,
          }}
        >
          <BookingAction setState={setState} />
        </Box>
      </Stack>
    </Paper>
  );
};

export default RoomCard;

const ImageContainer = () => {
  return (
    <Box display="flex">
      <Image
        alt="xsgjhsa"
        src="/RoomBookingpage/room1.jpg"
        width={500}
        height={500}
        style={{
          width: "100%",
          height: "100%",
          borderTopLeftRadius: "4px",
          borderBottomLeftRadius: "4px",
        }}
      />
    </Box>
  );
};

const RoomdetailsContainer = () => {
  return (
    <Box
      sx={{
        paddingLeft: "4%",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Stack>
        <Typography variant="subtitle1" color="primary">
          Singel room
        </Typography>
        <Typography variant="body1">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur
          quibusdam ipsa voluptatibus? Ver
        </Typography>
      </Stack>
      <Box sx={{ paddingTop: "3%" }}>
        <Typography
          variant="subtitle2"
          color="secondary"
          sx={{ paddingBottom: "2%" }}
        >
          Services
        </Typography>
        <Stack direction="row" gap={1}>
          {[
            {
              id: 1,
              icon: <TvIcon sx={{ ...responsiveIconSize, color: "#e425d5" }} />,
            },
            {
              id: 1,
              icon: (
                <PoolIcon sx={{ ...responsiveIconSize, color: "#1b6eb6" }} />
              ),
            },
            {
              id: 1,
              icon: (
                <LocalBarIcon
                  sx={{ ...responsiveIconSize, color: "#3545d5" }}
                />
              ),
            },
            {
              id: 1,
              icon: (
                <RestaurantIcon
                  sx={{ ...responsiveIconSize, color: "#195e34" }}
                />
              ),
            },
            // { id: 1, icon: <BathtubIcon sx={responsiveIconSize} /> },
            // { id: 1, icon: <WifiIcon sx={responsiveIconSize} /> },
          ].map((item, i) => {
            return <Box key={i * 0.25}>{item.icon}</Box>;
          })}
        </Stack>
      </Box>
    </Box>
  );
};

const BookingAction = ({ setState }: { setState: any }) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        height: "100%",
        alignItems: "center",
      }}
    >
      <Typography
        variant="subtitle2"
        sx={{ paddingBottom: "2%" }}
        color="error"
      >
        $30
      </Typography>
      <Typography variant="body2">Per night</Typography>
      <Stack sx={{ paddingTop: "8%" }}>
        <Button
          variant="contained"
          sx={{
            "&.MuiButtonBase-root": {
              // padding: "11%",
              fontSize: { xs: "7px", sm: "9px", md: "9px" },
            },
          }}
          onClick={() => {
            setState(1);
          }}
        >
          select booking
        </Button>
      </Stack>
    </Box>
  );
};
