"use client";
import React from "react";

import CompanyList from "@/component/root/parts/CompanyList";
import ContactPage from "@/component/root/parts/ContactPage";
import CoreValueComponent from "@/component/root/parts/CoreValueComponent";
import Hero from "@/component/root/parts/Hero";
import HotelsList from "@/component/root/parts/HotelsList";
import StartyourJourneycomponent from "@/component/root/parts/StartyourJourneycomponent";
import { Divider } from "@mui/material";

const HomePageMain = () => {
  return (
    <div>
      {/* <Hero /> */}
      <CompanyList />
      <HotelsList />
      <Divider />
      <CoreValueComponent />
      <Divider />
      <ContactPage />

      <StartyourJourneycomponent />
    </div>
  );
};

export default HomePageMain;
