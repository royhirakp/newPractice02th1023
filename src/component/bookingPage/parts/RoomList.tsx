"use client";
import React from "react";
import RoomCard from "./RoomCard";
import { Stack } from "@mui/material";
// import { useAppSelector, useAppDispatch } from "@/redux/hooks";
// import { setDpageData } from "@/redux/slices/MockData";
// import data from "@/data/Data";
const RoomList = ({
  setState,
  paginationSetData,
}: {
  setState: any;
  paginationSetData: any;
}) => {
  // const dispatch = useAppDispatch();
  // const roomsData = useAppSelector((s) => s?.roomArray?.paginationData);
  // React.useEffect(() => {
  //   dispatch(setDpageData({ data }));
  // }, []);
  // console.log("shhdbjhjhdfbbsd=====", roomsData);
  // useSta
  return (
    <div>
      <Stack gap={1}>
        {paginationSetData?.map((item: any, i: any) => {
          return <RoomCard setState={setState} key={i} item={item} />;
        })}
      </Stack>
    </div>
  );
};

export default RoomList;
