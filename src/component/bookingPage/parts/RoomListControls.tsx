import DateRangePickercpmponent from "@/muiCoustomComponent/DateRangePicker";
import RangeSlider from "@/muiCoustomComponent/RangeSlider";
import { Box, Paper, Typography, Stack, Button } from "@mui/material";
import IncludeServicesCheckBox from "./IncludeServicesCheckBox";
import Image from "next/image";
const RoomListControls = () => {
  return (
    <Box
      sx={{
        position: "sticky",
        top: "15px",
        display: "flex",
        flexDirection: "column",
        maxHeight: "930px",
        height: "100%",
        justifyContent: "space-around",
        margin: 1,
      }}
    >
      <Paper
        sx={{
          padding: "0 6%",
          height: "70%",
          marginBottom: "1%",
        }}
      >
        <Stack
          direction="column"
          justifyContent="space-evenly"
          sx={{ height: "100%" }}
        >
          <Typography color="primary" variant="subtitle1">
            Booking Details
          </Typography>
          <Box pt={0}>
            <label htmlFor="dates">
              <Typography variant="body1" fontWeight={700}>
                Date
              </Typography>
            </label>
            <DateRangePickercpmponent />
          </Box>
          <Box pt={2}>
            <RangeSlider maxV={30} minV={10} />
          </Box>
          <Box>
            <IncludeServicesCheckBox />
          </Box>{" "}
          <Stack direction="column" p={2}>
            <Button variant="contained">Apply</Button>
          </Stack>
        </Stack>
      </Paper>
      <Box>
        <Image
          src="/addImage2.png"
          alt=""
          width={700}
          height={700}
          style={{ width: "100%", height: "100%" }}
        />
      </Box>
    </Box>
  );
};

export default RoomListControls;

const AddImge = () => {
  return <></>;
};
