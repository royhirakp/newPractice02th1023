"use client";
import ThemeProvidor from "@/component/ThemeProvidor/ThemeProvidor";
import Header from "@/component/root/parts/Header";
import Hero from "@/component/root/parts/Hero";
import NavBar from "@/component/root/parts/NavBar";
import { Box, Divider, Paper, Stack } from "@mui/material";
const colorBagroundEffectStyle: any = {
  position: "absolute",
  width: "20rem",
  height: "20rem",
  background: "rgba(25,205,255,0.522)",
  filter: "blur(100px)",
  borderRadius: "15px",
  top: "160px",
};
export default function DashboardLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return (
    <section>
      <ThemeProvidor>
        <div
          style={{
            position: "relative",
            overflowX: "clip",
            // height: "1000px",
          }}
        >
          <div style={{ background: "var(--blue)", position: "relative" }}>
            {/* baground effect / color effect  */}
            <div style={colorBagroundEffectStyle} />
            <div
              className="container"
              style={{
                height: "auto",
                display: "flex",
                flexDirection: "column",
                // minHeight: "100vh",
                justifyContent: "space-between",
              }}
            >
              {/* header */}
              <div style={{}}>
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
                <Box
                  sx={{
                    marginTop: {
                      xs: "0",
                      lg: "5px",
                    },
                  }}
                >
                  <Hero />
                </Box>
              </div>
              {/* main part / medile part */}
              <Box
                sx={{
                  flexGrow: 1,
                  marginTop: {
                    xs: "0px",
                    sm: "0px",
                    md: "20px",
                  },
                }}
              >
                {children}
              </Box>
              <Box sx={{}}>
                footer
                {/* footer */}
              </Box>
            </div>
          </div>
        </div>
      </ThemeProvidor>
    </section>
  );
}
