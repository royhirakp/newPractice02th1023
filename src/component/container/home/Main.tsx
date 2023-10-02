"use client";
import React, { useEffect } from "react";
import Header from "./parts/Header";
import { Divider } from "@mui/material";
import NavBar from "./parts/NavBar";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Hero from "./parts/Hero";
import ThemeProvidor from "@/component/ThemeProvidor";
const Main = () => {
  return (
    <ThemeProvidor>
      <div
        style={{
          position: "relative",
          overflowX: "clip",
          height: "1000px",
        }}
      >
        <div style={{ background: "var(--blue)", position: "relative" }}>
          <div
            style={{
              position: "absolute",
              width: "20rem",
              height: "20rem",
              // background: "rgba(25,205,255,0.522)",
              filter: "blur(100px)",
              borderRadius: "15px",
              top: "160px",
            }}
          />
          <div className="container" style={{ height: "auto" }}>
            <header
              style={{
                position: "sticky",
                zIndex: "99",
                top: "0",
              }}
            >
              <Paper elevation={0}>
                <Box
                  color="primary.main"
                  bgcolor="primary.light"
                  sx={{ padding: "15px 0 0 0" }}
                >
                  <Header />
                  <Divider />
                  <NavBar />
                </Box>
              </Paper>
            </header>

            <main>
              <Box
                sx={{
                  marginTop: {
                    xs: "0px",
                    sm: "0px",
                    md: "20px",
                  },
                }}
              >
                <Hero />
              </Box>
            </main>
          </div>
          <Divider sx={{ margin: "20px 0" }} />
          <div style={{ height: "2000px" }}>//products list</div>
        </div>
      </div>
    </ThemeProvidor>
  );
};

export default Main;
