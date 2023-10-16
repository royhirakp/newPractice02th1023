import React from "react";

import {
  Box,
  Typography,
  Stack,
  Paper,
  IconButton,
  Grid,
  Button,
} from "@mui/material";

const CheckAbilibility = () => {
  return (
    <>
      <Paper sx={{ padding: "1%", marginBottom: "1%", background: "#ffffff" }}>
        <Box sx={{ margin: "2% 10px" }}>
          <Typography variant="h6">Book Your Room</Typography>
          <Typography variant="subtitle1">Check In/ Out</Typography>
          <DateRangePickercpmponent />
          <Typography variant="subtitle1">Guests</Typography>
          <ControlledOpenSelect />
          <Stack direction="row" sx={{ justifyContent: "center" }}>
            <Button variant="contained">Check Abilibity</Button>
          </Stack>
        </Box>
      </Paper>
    </>
  );
};

export default CheckAbilibility;

import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import DateRangePickercpmponent from "@/muiCoustomComponent/DateRangePicker";
function ControlledOpenSelect() {
  const [age, setAge] = React.useState<string | number>("");
  const [open, setOpen] = React.useState(false);

  const handleChange = (event: SelectChangeEvent<typeof age>) => {
    setAge(event.target.value);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <div>
      <FormControl sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="demo-controlled-open-select-label">Age</InputLabel>
        <Select
          labelId="demo-controlled-open-select-label"
          id="demo-controlled-open-select"
          open={open}
          onClose={handleClose}
          onOpen={handleOpen}
          value={age}
          label="Age"
          onChange={handleChange}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}
