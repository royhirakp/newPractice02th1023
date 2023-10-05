import React from "react";
import MainContainer from "@/component/container/MainContainer";
import { Box, Stack, Typography } from "@mui/material";
const CompanyList = () => {
  return (
    <Box
      sx={{
        bgcolor: "secondary.light",
        paddingBottom: "30px",
        paddingTop: "20px",
      }}
    >
      <MainContainer style={{}}>
        <Box sx={{ paddingBottom: "20px" }}>
          <Typography variant="h5" fontWeight={800}>
            Our Hotels
          </Typography>
        </Box>
        <Stack direction="row" sx={{}}>
          {[
            { id: 1, url: "/company2.png" },
            { id: 1, url: "/company3.png" },
            { id: 1, url: "/company6.webp" },
            { id: 1, url: "/company7.jpg" },
          ].map((item, i) => {
            return (
              <Box
                key={i}
                flex="1 0 10px"
                sx={{
                  padding: "0 auto",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <div
                  style={{
                    width: "40%",
                    height: "100%",
                    display: "flex",
                  }}
                >
                  <img
                    src={item.url}
                    style={{
                      width: "100%",
                      margin: "auto 0 auto 0",
                      display: "block",
                    }}
                    alt=""
                  />
                </div>
              </Box>
            );
          })}
        </Stack>
      </MainContainer>
    </Box>
  );
};

export default CompanyList;
