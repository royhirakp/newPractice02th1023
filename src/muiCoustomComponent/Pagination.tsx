"use client";

import * as React from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
// import { useAppDispatch, useAppSelector } from "@/redux/hooks";
// import { useDispatch } from "react-redux";
// import { pagination } from "@/redux/slices/MockData";
export default function PaginationRounded({
  noOfpage,
  setpageNo,
}: {
  noOfpage: any;
  setpageNo: any;
}) {
  // const data = useAppSelector((s) => s?.roomArray);
  // const { totalNoOfPage = 10 } = data || {};
  // const dispatch = useDispatch();
  // console.log(noOfpage, "no of pageeeee===");
  return (
    <Stack spacing={2}>
      <Pagination
        count={noOfpage}
        variant="outlined"
        shape="rounded"
        onChange={(e, pageNo) => {
          // dispatch(pagination({ pageNo }));
          setpageNo(pageNo);
        }}
      />
    </Stack>
  );
}
