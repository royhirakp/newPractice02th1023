import DateRangePickercpmponent from "@/muiCoustomComponent/DateRangePicker";
import RangeSlider from "@/muiCoustomComponent/RangeSlider";
import { Box, Typography, Stack, Button, IconButton } from "@mui/material";
import IncludeServicesCheckBox from "./IncludeServicesCheckBox";
import CloseIcon from "@mui/icons-material/Close";
interface propsType {
  open: boolean;
  handleClose: any;
}
const RoomListControlsFormobile = ({ handleClose }: propsType) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        // margin: 1,
        // width: "100%",
      }}
    >
      <Stack
        direction="column"
        justifyContent="space-evenly"
        sx={{ width: "112%" }}
      >
        <Stack
          direction="row"
          sx={{ display: "flex", justifyContent: "space-between" }}
        >
          <Typography color="primary" variant="subtitle1" pl={2} pt={1}>
            Booking Details
          </Typography>
          <IconButton onClick={handleClose} color="error">
            <CloseIcon color="error" />
          </IconButton>
        </Stack>
        <Stack pt={0}>
          <label htmlFor="dates">
            <Typography variant="body1" fontWeight={700} pl={2}>
              Date
            </Typography>
          </label>
          <DateRangePickercpmponent />
        </Stack>
        <Stack pt={2}>
          <RangeSlider maxV={30} minV={10} />
        </Stack>
        <Stack>
          <Typography variant="body1" fontWeight={700} pl={2}>
            Services
          </Typography>
          <Stack sx={{ padding: "0 10%", paddingTop: "5px" }}>
            <IncludeServicesCheckBox />
          </Stack>
        </Stack>{" "}
        <Stack direction="column" p={2}>
          <Button variant="contained">Apply</Button>
        </Stack>
        {/* <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography color="primary" variant="subtitle1">
            Booking Details
          </Typography>
          <IconButton onClick={handleClose} color="error">
            <CloseIcon color="error" />
          </IconButton>
        </Box>
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
          <Typography variant="body1" fontWeight={700}>
            Services
          </Typography>
          <IncludeServicesCheckBox />
        </Box>{" "}
        <Stack direction="column" p={2}>
          <Button variant="contained">Apply</Button>
        </Stack> */}
      </Stack>
    </Box>
  );
};

export default RoomListControlsFormobile;
