import React, { useState } from "react";
import { Box, Button, Stack, Typography, TextField } from "@mui/material";
import { TextareaAutosize } from "@mui/base/TextareaAutosize";
import CurrencyExchangeIcon from "@mui/icons-material/CurrencyExchange";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import CreditCardIcon from "@mui/icons-material/CreditCard";
const CheckoutInformationPage = () => {
  return (
    <div>
      <Box>
        <UserandRoomDetails />
      </Box>
      <Box>
        <PaymentDetails />
      </Box>
    </div>
  );
};

export default CheckoutInformationPage;
const UserandRoomDetails = () => {
  return (
    <Box>
      <Typography variant="subtitle2">Booking Details</Typography>
      <Stack direction="row" flexWrap="wrap">
        {[
          { lable: "Name", data: "Jhon" },
          { lable: "Surname", data: "Doe" },
          { lable: "Email", data: "Jhon@mail.com" },
          { lable: "Phone", data: "+9100000000000" },
          { lable: "Address", data: "Jhon" },
          { lable: "City", data: "Jhon" },
          { lable: "Country", data: "India" },
          { lable: "Pin", data: "733154" },
          { lable: "Room", data: "Single" },
          { lable: "CheckIn", data: "09/555" },
          { lable: "Check Out", data: "16/521/2" },
          { lable: "Guest", data: "3 Adults" },
          { lable: "Aditional Services ", data: "Airport Pickup" },

          { lable: "Total", data: "$30052" },
        ].map((item, i) => {
          return (
            <Typography
              variant="body1"
              key={i}
              sx={{ width: { xs: "50%", sm: "33.33%" }, border: "1px solid" }}
            >
              <span style={{ fontWeight: 700 }}>{item.lable}:</span> {item.data}{" "}
            </Typography>
          );
        })}
      </Stack>
    </Box>
  );
};

const PaymentDetails = () => {
  const [paymentState, setPaymentState] = useState(1);

  let PaymentComponet;
  switch (paymentState) {
    case 0:
      PaymentComponet = (
        <div style={{ height: "100%" }}>
          <PaypalComponetPayment />
        </div>
      );
      break;
    case 1:
      PaymentComponet = (
        <div style={{ height: "100%" }}>
          <CraditCardComponent />
        </div>
      );
      break;
    case 2:
      PaymentComponet = (
        <div style={{ height: "100%" }}>
          <BankTransferComponant />
        </div>
      );
      break;
    case 3:
      PaymentComponet = (
        <Box width="100%" sx={{ border: "1px solid", height: "100%" }}>
          <PayOnArivalComponent />
        </Box>
      );
      break;

    default:
      PaymentComponet = <div>defoult</div>;
  }

  function handelpaymentOption(key: number) {
    switch (key) {
      case 0:
        setPaymentState(0);
        break;
      case 1:
        setPaymentState(1);
        break;
      case 2:
        setPaymentState(2);
        break;
      case 3:
        setPaymentState(3);
        break;
      default:
        setPaymentState(0);
    }
  }
  return (
    <Box>
      <Typography variant="subtitle1">Payment Option</Typography>
      <Box
        sx={{
          margin: "20px 10% 0px 10%",
          border: "1px solid",
          textAlign: "center",
          background: "#ffff",
        }}
      >
        <Stack direction="row" gap={0.5}>
          {[
            { lable: "Paypal", icon: <CurrencyExchangeIcon />, key: 0 },
            { lable: "Cradit Card", icon: <CreditCardIcon />, key: 1 },
            { lable: "Bank Transfer", icon: <AccountBalanceIcon />, key: 2 },
            { lable: "Pay On Arival", icon: <AttachMoneyIcon />, key: 3 },
          ].map((item, i) => {
            return (
              <Box
                key={i}
                flex={1}
                sx={{
                  bgcolor: `${paymentState == item.key ? "#FFFF" : "#c7c2c2"}`,
                }}
              >
                <Button
                  onClick={() => {
                    handelpaymentOption(item.key);
                    console.log("workingggg", item.key);
                  }}
                  sx={{
                    cursor: "pointer",
                  }}
                >
                  {item.icon}
                  {item.lable}
                </Button>
              </Box>
            );
          })}
        </Stack>
        <Box sx={{ width: "100%", height: "250px" }}>{PaymentComponet}</Box>
      </Box>
    </Box>
  );
};

const PaypalComponetPayment = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-evenly",
        alignItems: "center",
        height: "100%",
      }}
    >
      <Typography
        variant="subtitle1"
        sx={{
          display: "flex",
          textAlign: "center",
          alignItems: "center",
        }}
      >
        Paypal id
      </Typography>
      <TextField label="paypal id" sx={{ width: "40%" }} />
      <Stack>
        <Button
          variant="contained"
          sx={{
            width: "100px",
            padding: "8px",
            borderRadius: 0,
            ".MuiButton-root": {},
          }}
        >
          pay
        </Button>
      </Stack>
    </Box>
  );
};

const CraditCardComponent = () => {
  return (
    <Stack
      sx={{ padding: "10%", border: "1px solid", height: "100%" }}
      direction="column"
      justifyContent="center"
      // alignContent=''
      gap={2}
    >
      <Box display="flex" sx={{ border: "1px solid", gap: 1 }}>
        <Typography
          sx={{
            display: "flex",
            textAlign: "center",
            alignItems: "center",
            width: "80px",
          }}
          variant="body1"
        >
          Card Number
        </Typography>
        <TextField sx={{ width: "50%" }} type="number" />
      </Box>
      <Stack direction="row" flexWrap="wrap" gap={2}>
        <Box display="flex" gap={1}>
          <Typography
            variant="body1"
            sx={{
              display: "flex",
              textAlign: "center",
              alignItems: "center",
              width: "80px",
            }}
          >
            Exp Date
          </Typography>
          <TextField type="date" />
        </Box>

        <Box display="flex" gap={1}>
          <Typography
            variant="body1"
            sx={{
              display: "flex",
              textAlign: "center",
              alignItems: "center",
            }}
          >
            CVV
          </Typography>
          <TextField />
        </Box>
      </Stack>
      <Stack direction="row" gap={1}>
        <Typography
          variant="body1"
          sx={{
            display: "flex",
            textAlign: "center",
            alignItems: "center",
            width: "80px",
          }}
        >
          Name
        </Typography>
        <TextField />
        <Stack sx={{ justifyContent: "center" }} pl={2}>
          <Button
            variant="contained"
            sx={{
              width: "100px",
              padding: "8px",
              borderRadius: 0,
              ".MuiButton-root": {},
            }}
          >
            pay
          </Button>
        </Stack>
      </Stack>
    </Stack>
  );
};

const BankTransferComponant = () => {
  return (
    <Stack
      sx={{ padding: "10%", border: "1px solid", height: "100%" }}
      direction="column"
      justifyContent="center"
      // alignContent=''
      gap={2}
    >
      <Box display="flex" sx={{ border: "1px solid", gap: 1 }}>
        <Typography
          sx={{
            display: "flex",
            textAlign: "center",
            alignItems: "center",
            width: "80px",
          }}
          variant="body1"
        >
          Banifisary Name
        </Typography>
        <TextField sx={{ width: "50%" }} />
      </Box>
      <Box display="flex" sx={{ border: "1px solid", gap: 1 }}>
        <Typography
          sx={{
            display: "flex",
            textAlign: "center",
            alignItems: "center",
            width: "80px",
          }}
          variant="body1"
        >
          Account No
        </Typography>
        <TextField sx={{ width: "50%" }} type="number" />
      </Box>

      <Stack direction="row" gap={1}>
        <Typography
          variant="body1"
          sx={{
            display: "flex",
            textAlign: "center",
            alignItems: "center",
            width: "80px",
          }}
        >
          IFSC CODE
        </Typography>
        <TextField />
        <Stack sx={{ justifyContent: "center" }} pl={2}>
          <Button
            variant="contained"
            sx={{
              width: "100px",
              padding: "8px",
              borderRadius: 0,
              ".MuiButton-root": {},
            }}
          >
            pay
          </Button>
        </Stack>
      </Stack>
    </Stack>
  );
};

const PayOnArivalComponent = () => {
  return (
    <Stack
      direction="column"
      justifyContent="center"
      // alignItems="center"
      sx={{ height: "100%" }}
    >
      <Typography variant="subtitle1" textAlign="start" pl={5}>
        Spicial request
      </Typography>
      <Stack height="50%" sx={{ padding: "10px 20%" }}>
        <TextareaAutosize maxRows={10} minRows={9} />
      </Stack>
      <Stack direction="row" justifyContent="center">
        <Button
          variant="contained"
          sx={{
            width: "100px",
            padding: "8px",
            borderRadius: 0,
            ".MuiButton-root": {},
          }}
        >
          Book
        </Button>
      </Stack>
    </Stack>
  );
};
