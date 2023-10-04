import MainContainer from "@/component/container/MainContainer";
import { Box, Button, Paper, Stack, Typography } from "@mui/material";
import React from "react";

const ContactPage = () => {
  return (
    <div>
      <MainContainer style={{}}>
        <Stack
          sx={{
            flexDirection: {
              xs: "column",
              sm: "row",
            },
            // height: { xs: "400px", sm: "200px" },
          }}
        >
          <Box sx={{}} flex={1}>
            <LeftsideButtonContainer />
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: { xs: "center", sm: "end" },
              alignItems: { xs: "center", sm: "end" },
              marginTop: { xs: "20px", sm: "0" },
            }}
            flex={1}
          >
            <RightSideImageContainer />
          </Box>
        </Stack>
      </MainContainer>
    </div>
  );
};

export default ContactPage;
import EmailIcon from "@mui/icons-material/Email";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import ChatIcon from "@mui/icons-material/Chat";
import CallIcon from "@mui/icons-material/Call";
const LeftsideButtonContainer = () => {
  return (
    <>
      <Stack direction="column" sx={{ mt: 1 }}>
        {/* text */}
        <Box sx={{ marginLeft: "20px", marginBottom: "20px" }}>
          <Typography variant="h6" color="primary.light">
            Our Contact Us
          </Typography>
          <Typography variant="subtitle1" color="primary">
            Easy to contact us
          </Typography>
          <Typography variant="body1">
            we alwes ready to help you by providing <br />
            the best service ypou. we bwlivw a good{" "}
          </Typography>
        </Box>
        {/* contact cards */}
        <Stack direction="column" justifyContent="space-between">
          <ContacControlsCardList />
        </Stack>
      </Stack>
    </>
  );
};

const RightSideImageContainer = () => {
  return (
    <>
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
          border: "8px solid #d7d7d7",
          borderRadius: "7px",
        }}
      >
        <img
          src="/hotelsphoto/Screenshot 2023-10-03 220328.png"
          alt=""
          style={{
            width: "100%",
            height: "100%",
            // borderTopLeftRadius: "50%",
            // borderTopRightRadius: "50%",
            scale: "1.01",
            borderRadius: "7px",
          }}
        />
      </Box>
    </>
  );
};

const ContacControlsCardList = () => {
  return (
    <>
      {[
        [
          {
            title: "Call",
            no: "0123456789",
            icon: <CallIcon sx={{ color: "#df5d5d" }} />,
          },
          {
            title: "Chat",
            no: "0123456789",
            icon: <ChatIcon sx={{ color: "#643d8c" }} />,
          },
        ],

        [
          {
            title: "whatsdj",
            no: "0123456789",
            icon: <WhatsAppIcon sx={{ color: "#3b7d0a" }} />,
          },
          {
            title: "Message",
            no: "0123456789",
            icon: <EmailIcon sx={{ color: "#d21818" }} />,
          },
        ],
      ].map((arr, i) => {
        return (
          <>
            <Stack direction="row" justifyContent="space-around">
              {arr.map((item, i) => {
                return (
                  <Paper
                    sx={{
                      flexGrow: 1,
                      // height: "100px",
                      marginTop: "1rem",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "space-evenly",
                      // width: "16rem",
                      maxWidth: "400px",
                      padding: "1rem",
                      transition: "all 300ms ease-in",
                      margin: {
                        xs: "2px",
                        sm: 1,
                      },
                      "&:hover": {
                        scale: "1.02",
                        boxShadow: "1px 2px 5px",
                      },
                    }}
                    key={i}
                  >
                    <ContactCardContains
                      icon={item.icon}
                      no={item.no}
                      title={item.title}
                    />
                  </Paper>
                );
              })}
            </Stack>
          </>
        );
      })}
    </>
  );
};

const ContactCardContains: React.FC<{
  icon: React.ReactNode;
  title: string;
  no: string;
}> = ({ icon, title, no }) => {
  return (
    <>
      <Stack direction="row" justifyContent="space-between">
        <Box pr={3} flex={1} sx={{}}>
          <div
            style={{
              display: "inline-block",
              borderRadius: "50%",
              padding: "10px 5px 5px 5px",
              marginBottom: "9px",
              background: "#e2dfdf",
            }}
          >
            {icon}
          </div>
        </Box>
        <Box flex={2}>
          <Typography variant="subtitle2">{title}</Typography>

          <Typography variant="body1">{no}</Typography>
        </Box>
      </Stack>
      <Stack>
        <Button
          sx={{
            // color: "red",
            margin: "0 3px",
            transition: "all 300ms ease-in",
            "&:hover": {
              scale: "0.9",
            },
          }}
          variant="contained"
        >
          {title} now
        </Button>
      </Stack>
    </>
  );
};
