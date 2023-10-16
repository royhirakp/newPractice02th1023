import React from "react";
import RoomCard from "./RoomCard";
import { Stack } from "@mui/material";

const RoomList = ({ setState }: { setState: any }) => {
  return (
    <div>
      <Stack gap={1}>
        <RoomCard setState={setState} id="1" />
        <RoomCard setState={setState} id="1" />
        <RoomCard setState={setState} id="1" />
        <RoomCard setState={setState} id="1" />
        <RoomCard setState={setState} id="1" />
        <RoomCard setState={setState} id="1" />
        <RoomCard setState={setState} id="1" />
        <RoomCard setState={setState} id="1" />
        <RoomCard setState={setState} id="1" />
        <RoomCard setState={setState} id="1" />
        <RoomCard setState={setState} id="1" />
      </Stack>
    </div>
  );
};

export default RoomList;
