import React from "react";
import RoomCard from "./RoomCard";
import { Stack } from "@mui/material";
import { useAppSelector } from "@/redux/hooks";
const RoomList = ({ setState }: { setState: any }) => {
  const roomsData = useAppSelector((s) => s.roomArray.paginationData);
  // console.log("hshshhshs", roomsData.roomArray);
  return (
    <div>
      <Stack gap={1}>
        {roomsData?.map((item, i) => {
          return <RoomCard setState={setState} key={i} item={item} />;
        })}
      </Stack>
    </div>
  );
};

export default RoomList;
