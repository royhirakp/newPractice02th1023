import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CartItem {
  id: number;
  name: string;
  price: number;
  stocks: number;
  rattings: number;
  image: string;
  info: string;
  numOfReview: string;
  //   qtyOfOrder: number;
}
interface AppState {
  totalPrice: number;
  cartItems: CartItem[];
}

const initialState: AppState = {
  totalPrice: 0,
  cartItems: [],
};

const bookingSlice = createSlice({
  name: "booking",
  initialState: initialState,
  reducers: {
    addBoking: (state, action) => {
      console.log("state==", state);
      console.log("action==", action);
    },
  },
});

export const { addBoking } = bookingSlice.actions;
export default bookingSlice.reducer;
