import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface filterItm {
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
  date: string;
  priceRange: any[];
  services: any[];
}

const initialState: AppState = {
  date: "",
  priceRange: [],
  services: [],
};

const FilterSlice = createSlice({
  name: "filterSlice",
  initialState: initialState,
  reducers: {
    addFilterQuery: (state, action: PayloadAction<any>) => {
      if (action.payload.type == "date") {
        let arr = action.payload.value.split("Dividerr");
        state.priceRange = arr;
      } else if (action.payload.type == "priceRange") {
        // console.log(action.payload);
        state.priceRange = action.payload.value;
      } else if (action.payload.type == "services") {
        console.log(action.payload);
      }
    },
  },
});

export const { addFilterQuery } = FilterSlice.actions;
export default FilterSlice.reducer;
