import React from "react";
import RoomCard from "./RoomCard";
import { Stack } from "@mui/material";

const RoomList = () => {
  return (
    <div>
      <Stack gap={1}>
        <RoomCard />
        <RoomCard />
        <RoomCard />
        <RoomCard />
        <RoomCard />
        <RoomCard />
        <RoomCard />
        <RoomCard />
      </Stack>
    </div>
  );
};

export default RoomList;
