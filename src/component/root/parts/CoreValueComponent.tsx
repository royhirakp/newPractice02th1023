import MainContainer from "@/component/container/MainContainer";
import { Stack, Box, Typography, Paper } from "@mui/material";
import React, { useState } from "react";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
  AccordionItemState,
} from "react-accessible-accordion";
import "react-accessible-accordion/dist/fancy-example.css";
const CoreValueComponent = () => {
  return (
    <div>
      <MainContainer style={{ marginTop: "30px" }}>
        <Stack
          sx={{
            flexDirection: {
              xs: "column",
              sm: "row",
              padding: "5px",
              boxSizing: "border-box",
            },
          }}
        >
          <Box
            sx={{
              width: { xs: "100%", sm: "50%" },
              display: "flex",

              justifyContent: { xs: "center", sm: "flex-start" },
              alignItems: { xs: "center" },
            }}
          >
            <ImagePart />
          </Box>
          <Box sx={{ width: { xs: "100%", sm: "50%" }, padding: "10px" }}>
            <Box pb={3}>
              <Typography variant="subtitle2" pb={1} fontWeight={800}>
                Our Value
              </Typography>
              <Typography
                variant="h6"
                color="primary"
                fontWeight={800}
                pb={0.5}
              >
                ValueWe Give To You
              </Typography>
              <Typography variant="body1">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Perspiciatis adipisci, doloremque aspernatur, deleniti
              </Typography>
            </Box>
            <AcordionComponent />
          </Box>
        </Stack>
      </MainContainer>
    </div>
  );
};

export default CoreValueComponent;
const ImagePart = () => {
  return (
    <Box
      sx={{
        width: {
          xs: "260px",
          sm: "280px",
          md: "300px",
        },
        height: {
          xs: "290px",
          sm: "310px",
          md: "330px",
        },
        boxSizing: "border-box",
      }}
    >
      <img
        src="/hotelsphoto/Screenshot 2023-10-03 220328.png"
        alt=""
        style={{
          width: "100%",
          height: "100%",
          borderTopLeftRadius: "50%",
          borderTopRightRadius: "50%",
          border: "8px solid",
        }}
      />
    </Box>
  );
};

const AcordionComponent = () => {
  return (
    <>
      <Accordion preExpanded={[0]} style={{ border: "none" }}>
        {[
          { id: 1, title: "Best intrest rate on the market " },
          { id: 2, title: "Best price on the market" },
          { id: 2, title: "Prevent Unstable Price" },
        ].map((item, i) => {
          const [boxShadow, setBoxShadow] = useState(false);
          return (
            <Paper sx={{ borderRadius: "8px" }} key={i}>
              <AccordionItem
                key={i}
                uuid={i}
                style={{
                  padding: 0,
                  marginBottom: "10px",
                  border: "0.8px sloid rgba(128 128 128 0.143)",
                  background: "white",
                  borderRadius: "5px",
                  overflow: "hidden",
                  boxShadow: boxShadow ? "4px 4px 4px" : "",
                }}
              >
                <AccordionItemHeading>
                  <AccordionItemButton
                    style={{
                      display: "flex",
                      width: "100%",
                      position: "relative",
                      // borderRadius: "8px",
                      paddingBottom: "0.7rem",
                      // marginBottom: "1rem",
                    }}
                  >
                    <AccordionItemState>
                      {({ expanded }) =>
                        expanded ? setBoxShadow(true) : setBoxShadow(false)
                      }
                    </AccordionItemState>
                    <Typography
                      variant="subtitle2"
                      sx={{
                        position: "relative",
                        bottom: "4px",
                        fontWeight: "800",
                      }}
                    >
                      {item.title}
                    </Typography>
                  </AccordionItemButton>
                </AccordionItemHeading>

                <AccordionItemPanel style={{ padding: "0" }}>
                  <Paper
                    sx={{
                      width: "100%",
                      padding: "10px",
                      borderRadius: "5px",
                    }}
                  >
                    <Typography variant="body1">
                      Exercitation in fugiat est ut ad ea cupidatat ut in
                      cupidatat occaecat ut occaecat consequat est minim minim
                      esse tempor laborum consequat esse adipisicing eu
                      reprehenderit enim.
                    </Typography>
                  </Paper>
                </AccordionItemPanel>
              </AccordionItem>
            </Paper>
          );
        })}
      </Accordion>
    </>
  );
};
