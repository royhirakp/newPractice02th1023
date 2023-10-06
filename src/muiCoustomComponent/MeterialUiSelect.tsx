import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";

interface MeterialUiSelectProps {
  selectedValue: string;
  options: string[];
}
export default function MeterialUiSelect(props: MeterialUiSelectProps) {
  const { selectedValue, options } = props;
  const [age, setAge] = React.useState("");

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value as string);
  };

  return (
    <Box sx={{ minWidth: 120, maxWidth: 150 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">{selectedValue}</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          label="Age"
          onChange={handleChange}
        >
          {options.map((item, i) => {
            return (
              <MenuItem key={i} value={item}>
                {item}
              </MenuItem>
            );
          })}
        </Select>
      </FormControl>
    </Box>
  );
}
