"use client";
import Singup from "@/pages/Singup/Singup";
import BookingPage from "@/component/bookingPage/BookingPage";
import React from "react";
import MainContainer from "@/component/container/MainContainer";
import { useAppSelector } from "@/redux/hooks";
const page = () => {
  return (
    <div>
      <MainContainer style={{}}>
        <BookingPage />
      </MainContainer>
    </div>
  );
};

export default page;
