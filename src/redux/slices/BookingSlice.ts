import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface AppState {
  bookingStage: number;
  totalPrice: number;
  room: any;
  additionalservices: any[];
  userInfo: any;
  checkIn_checkOut: [];
  spicalRequest: string;
  paymentMethod: string;
}

const initialState: AppState = {
  bookingStage: 0,
  totalPrice: 0,
  room: {},
  additionalservices: [],
  userInfo: {},
  checkIn_checkOut: [],
  spicalRequest: "",
  paymentMethod: "",
};

const bookingSlice = createSlice({
  name: "booking",
  initialState: initialState,
  reducers: {
    addBoking: (state, action) => {
      console.log("state==", state);
      console.log("action==", action);
    },

    handelPreviousFromState: (state, action) => {
      if (state.bookingStage <= 0) return;
      state.bookingStage = state.bookingStage - 1;
    },
    handelNextsFromState: (state, action) => {
      if (state.bookingStage > 2) return;
      state.bookingStage = state.bookingStage + 1;
    },
    refreshPageOrMakeStageZero: (state) => {
      state.bookingStage = 0;
      state.totalPrice = 0;
      state.room = {};
      state.additionalservices = [];
      state.userInfo = {};
      state.checkIn_checkOut = [];
      state.spicalRequest = "";
      state.paymentMethod = "";

      // refresh all the data
    },
  },
});

export const {
  addBoking,
  handelPreviousFromState,
  handelNextsFromState,
  refreshPageOrMakeStageZero,
} = bookingSlice.actions;
export default bookingSlice.reducer;
