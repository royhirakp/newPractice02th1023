"use client";
import React, { useEffect } from "react";
import { Box, Stack } from "@mui/material";
import MainContainer from "@/component/container/MainContainer";
import RoomComtaintHearderAndPrice from "@/component/RoomDynamicPage/RoomComtaintHearderAndPrice";
import ImageConatiner from "@/component/RoomDynamicPage/ImageConatiner";
// import RoomInfoBar from "@/component/RoomDynamicPage/Room";
import RoomInfoB from "@/component/RoomDynamicPage/RoomInfoB";
import TextInformationAboutRoom from "@/component/RoomDynamicPage/TextInformationAboutRoom";
import RoomService from "@/component/RoomDynamicPage/RoomService";
import AditionalRoomService from "@/component/RoomDynamicPage/AditionalRoomService";
import "@smastrom/react-rating/style.css";
import RoomReviews from "@/component/RoomDynamicPage/RoomReviews";
import RoomLocationInGoogleMap from "@/component/RoomDynamicPage/RoomLocationInGoogleMap";
import SimelarRoomsList from "@/component/RoomDynamicPage/SimelarRoomsList";
import CheckAbilibility from "@/component/RoomDynamicPage/CheckAbilibility";
import AddPhoto from "@/component/RoomDynamicPage/AddPhoto";
import { setRoomDataForSinglePage } from "@/redux/slices/MockData";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
const RoomDynamicPage = ({ id }: { id: any }) => {
  const dispatch = useAppDispatch();
  const itemData = useAppSelector((s) => s.roomArray.roomDataForRoomRoute);
  // console.log("item dataaaa", itemData);
  const { comments, images, pricePerNight, title } = itemData;

  useEffect(() => {
    dispatch(setRoomDataForSinglePage({ id }));
  }, [id, dispatch]);
  return (
    <Box>
      <RoomComtaintHearderAndPrice
        title={title}
        pricePerNight={pricePerNight}
      />
      <MainContainer style={{}}>
        <Stack direction="row" gap={1}>
          <Stack direction="column" flex={5} width="70%">
            <Box sx={{ display: "flex", justifyContent: "center" }}>
              <ImageConatiner images={images} />
            </Box>
            <Box sx={{ margin: "1.3%" }}>
              <RoomInfoB />
            </Box>
            <Box>
              <TextInformationAboutRoom />
            </Box>
            <Box sx={{ margin: "1% 0" }}>
              <RoomService />
            </Box>
            <Box mt={1}>
              <AditionalRoomService />
            </Box>
            <Box>
              <RoomReviews comments={comments} />
            </Box>
            <Box>
              <RoomLocationInGoogleMap />
            </Box>
            <Box>
              <SimelarRoomsList />
            </Box>
          </Stack>
          <Box
            flex={2}
            sx={{
              display: {
                xs: "none",
                sm: "none",
                md: "block",
              },
            }}
          >
            <Box
              sx={{
                position: "sticky",
                top: 100,
              }}
            >
              <CheckAbilibility />
              <AddPhoto />
            </Box>
          </Box>
        </Stack>
      </MainContainer>
    </Box>
  );
};

export default RoomDynamicPage;
