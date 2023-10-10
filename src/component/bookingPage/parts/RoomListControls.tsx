import DatePickerFromYoutube from "@/muiCoustomComponent/DatePickerFromYoutube";
import DateRangePickercpmponent from "@/muiCoustomComponent/DateRangePicker";
import { Box, Paper, Typography, Stack } from "@mui/material";

const RoomListControls = () => {
  return (
    <Paper style={{ position: "sticky", top: "50px" }}>
      <DateRangePickercpmponent />
      {/* <DatePickerFromYoutube /> */}
    </Paper>
  );
};

export default RoomListControls;
