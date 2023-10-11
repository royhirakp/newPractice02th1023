import * as React from "react";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";

interface componentProps {}
const IncludeServicesCheckBox = () => {
  const [checkedItems, setCheckedItems] = React.useState({
    smartPhone: false,
    miniBar: false,
    Sauna: false,
    Breakfast: false,
    Hairdryer: false,
    Coffeemaker: false,
    WidesreenTv: false,
  });

  const handleCheckboxChange = (event: any, label: string) => {
    const { name, checked } = event.target;
    // console.log(checkedItems);
    setCheckedItems({
      ...checkedItems,
      [label]: checked,
    });
  };

  return (
    <div>
      <FormGroup
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <FormControlLabel
          control={
            <Checkbox onChange={(e) => handleCheckboxChange(e, "smartPhone")} />
          }
          label="Free-to use SmartPhone"
        />

        <FormControlLabel
          control={
            <Checkbox onChange={(e) => handleCheckboxChange(e, "miniBar")} />
          }
          label="Mini Bar"
        />
        <FormControlLabel
          control={
            <Checkbox onChange={(e) => handleCheckboxChange(e, "Sauna")} />
          }
          label="Sauna"
        />
        <FormControlLabel
          control={
            <Checkbox onChange={(e) => handleCheckboxChange(e, "Breakfast")} />
          }
          label="Breakfast"
        />
        <FormControlLabel
          control={
            <Checkbox onChange={(e) => handleCheckboxChange(e, "Hairdryer")} />
          }
          label="Hair Dryer"
        />
        <FormControlLabel
          control={
            <Checkbox
              onChange={(e) => handleCheckboxChange(e, "Coffeemaker")}
            />
          }
          label="Coffee Maker"
        />

        <FormControlLabel
          control={
            <Checkbox
              onChange={(e) => handleCheckboxChange(e, "WidesreenTv")}
            />
          }
          label="Widesreen tv"
        />
      </FormGroup>
    </div>
  );
};

export default IncludeServicesCheckBox;
