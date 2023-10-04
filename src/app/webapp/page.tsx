"use client";
import CompanyList from "@/component/root/parts/CompanyList";
import ContactPage from "@/component/root/parts/ContactPage";
import CoreValueComponent from "@/component/root/parts/CoreValueComponent";
import Hero from "@/component/root/parts/Hero";
import HotelsList from "@/component/root/parts/HotelsList";
import { Divider } from "@mui/material";
import React from "react";

const page = () => {
  return (
    <>
      {/* <Hero /> */}
      <Divider sx={{ margin: "20px 0" }} />
      <CompanyList />
      <Divider />
      <HotelsList />
      <Divider />
      <CoreValueComponent />
      <Divider sx={{ margin: "10px 0 20px 0" }} />
      <ContactPage />
    </>
  );
};

export default page;
