import React from "react";
import MainContainer from "@/component/container/MainContainer";
import { Button, CssBaseline, Stack, Box } from "@mui/material";

import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GetAppIcon from "@mui/icons-material/GetApp";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";

import IconButton from "@mui/material/IconButton";
import ListIcon from "@mui/icons-material/List";

const NavBar = () => {
  return (
    <div>
      <MainContainer style={{}}>
        <CssBaseline />

        <Box
          sx={{
            display: "flex",

            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Stack direction="row" alignItems="center" spacing={1}>
            <Stack
              direction="row"
              sx={{
                display: {
                  xs: "none",
                  sm: "flex",
                },
              }}
            >
              <IconButton size="medium">
                <FacebookIcon fontSize="inherit" />
              </IconButton>
              <IconButton size="medium">
                <InstagramIcon fontSize="small" />
              </IconButton>

              <IconButton size="medium">
                <LinkedInIcon fontSize="inherit" />
              </IconButton>
            </Stack>
            <Button variant="outlined">
              <>Get app</>
              <GetAppIcon
                sx={{
                  fontSize: {
                    xs: "small",
                    sm: "large",
                  },
                  marginLeft: "3px",
                }}
              />
            </Button>
          </Stack>

          <Stack direction="row" spacing={1} padding={1}>
            <Stack
              direction="row"
              sx={{
                display: {
                  xs: "none",
                  sm: "flex",
                },
              }}
            >
              <Button variant="text" color="primary">
                button3
              </Button>{" "}
              <Button variant="text" color="primary">
                button4
              </Button>{" "}
              <Button variant="text">button5</Button>
            </Stack>
            <Button variant="contained" color="primary">
              contacts
            </Button>
            <Stack height="100%">
              <IconButton
                // aria-label="delete"
                // size="small"
                sx={{ display: { xs: "block", sm: "none" }, padding: "0" }}
              >
                <ListIcon fontSize="small" />
              </IconButton>
            </Stack>
          </Stack>
        </Box>
      </MainContainer>
    </div>
  );
};

export default NavBar;
