import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Divider } from "@mui/material";

export default function ProsidToCheckout() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image="/RoomBookingpage/room1.jpg"
        title="green iguana"
      />
      <CardContent>
        <Typography
          gutterBottom
          variant="body1"
          sx={{ display: "flex", justifyContent: "space-between" }}
        >
          <span>Check In</span>
          <span>05/01/10</span>
        </Typography>
        <Divider />
        <Typography
          gutterBottom
          variant="body1"
          sx={{ display: "flex", justifyContent: "space-between" }}
        >
          <span>Check out</span>
          <span>05/01/10</span>
        </Typography>
        <Divider />

        <Typography
          gutterBottom
          variant="body1"
          sx={{ display: "flex", justifyContent: "space-between" }}
        >
          <span>Night</span>
          <span>10</span>
        </Typography>
        <Divider />

        <Typography
          gutterBottom
          variant="body1"
          sx={{ display: "flex", justifyContent: "space-between" }}
        >
          <span>Guest</span>
          <span>9</span>
        </Typography>
        <Divider />
        <Typography
          gutterBottom
          variant="body1"
          sx={{ display: "flex", justifyContent: "space-between" }}
        >
          <span>Total</span>
          <span>$989</span>
        </Typography>
      </CardContent>
      <CardActions>
        <Button variant="contained">Process to checkout</Button>
      </CardActions>
    </Card>
  );
}