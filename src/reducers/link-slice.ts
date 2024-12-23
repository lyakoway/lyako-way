import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type IState = {
  routeLink: string;
};

const initialState: IState = {
  routeLink: "",
};

const link = createSlice({
  name: "link",
  initialState,
  reducers: {
    setRouteLink: (state, action: PayloadAction<string>) => {
      state.routeLink = action.payload;
    },
  },
});

export const { setRouteLink } = link.actions;

export const linkReducer = link.reducer;
