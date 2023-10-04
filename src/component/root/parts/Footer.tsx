import MainContainer from "@/component/container/MainContainer";
import { Box, Stack, Typography } from "@mui/material";
import React from "react";

const Footer = () => {
  return (
    <Box
      sx={{ backgroundColor: "#83839c", marginTop: "10px", padding: "20px" }}
    >
      <MainContainer style={{}}>
        <Stack direction="row" justifyContent="space-between">
          <Box>
            <Typography variant="h5">Comapny</Typography>
            <Typography variant="body1">
              Our visoion is to to live for them
            </Typography>
          </Box>
          <Box>
            <Typography variant="h5">Information</Typography>

            <Typography variant="subtitle2">
              145 New york, FL 4571, USA
            </Typography>
            <Typography variant="body1">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed nisi
            </Typography>
          </Box>
        </Stack>
      </MainContainer>
    </Box>
  );
};

export default Footer;
