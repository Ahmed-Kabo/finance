import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import TicketsServices from "./TicketsServices";

interface ITickets {
  tickets: any;
  singleTicket: any;
  singleTicketSunlight: any;
  isError: boolean;
  isSuccess: boolean;
  isLodaing: boolean;
  message: string;
}

const initialState: ITickets = {
  tickets: null,
  singleTicket: null,
  singleTicketSunlight: null,
  isError: false,
  isSuccess: false,
  isLodaing: false,
  message: "",
};

export const getTickets = createAsyncThunk(
  "tickets/get",
  async (_, thunkAPI: any) => {
    try {
      const token = thunkAPI.getState().auth.mainUser.data.token;
      return await TicketsServices.getTickets(token);
    } catch (error: any) {
      const message = error.response.data.message;
      return thunkAPI.rejectWithValue(message);
    }
  }
);
export const getTicketsDetails = createAsyncThunk(
  "tickets/getDetails",
  async (id: string, thunkAPI: any) => {
    try {
      const token = thunkAPI.getState().auth.mainUser.data.token;
      return await TicketsServices.getTicketsDetails(token, id);
    } catch (error: any) {
      const message = error.response.data.message;
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const getTicketsDetailsSunlight = createAsyncThunk(
  "tickets/getDetailsSunlight",
  async (id: string, thunkAPI: any) => {
    try {
      const token = thunkAPI.getState().auth.mainUser.data.token;
      return await TicketsServices.getTicketsDetailsSunlight(token, id);
    } catch (error: any) {
      const message = error.response.data.message;
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const TicketSlice = createSlice({
  name: "tickets",
  initialState,
  reducers: {
    reset: (state) => {
      state.isError = false;
      state.isSuccess = false;
      state.isLodaing = false;
      state.message = "";
    },
  },
  extraReducers: (builder) => {
    //gettickets Actions
    builder.addCase(getTickets.pending, (state: ITickets) => {
      state.isLodaing = true;
    });
    builder.addCase(
      getTickets.fulfilled,
      (state: ITickets, action: PayloadAction<any>) => {
        state.isLodaing = false;
        state.tickets = action.payload;
        state.isSuccess = true;
      }
    );
    builder.addCase(
      getTickets.rejected,
      (state: ITickets, action: PayloadAction<any>) => {
        state.isLodaing = false;
        state.isError = true;
        state.message = action.payload;
      }
    );

    //getTicketsDetails Actions
    builder.addCase(getTicketsDetails.pending, (state: ITickets) => {
      state.isLodaing = true;
    });
    builder.addCase(
      getTicketsDetails.fulfilled,
      (state: ITickets, action: PayloadAction<any>) => {
        state.isLodaing = false;
        state.singleTicket = action.payload;
        state.isSuccess = true;
      }
    );
    builder.addCase(
      getTicketsDetails.rejected,
      (state: ITickets, action: PayloadAction<any>) => {
        state.isLodaing = false;
        state.isError = true;
        state.message = action.payload;
      }
    );

    //getTicketsDetailsSunlight Actions
    builder.addCase(getTicketsDetailsSunlight.pending, (state: ITickets) => {
      state.isLodaing = true;
    });
    builder.addCase(
      getTicketsDetailsSunlight.fulfilled,
      (state: ITickets, action: PayloadAction<any>) => {
        state.isLodaing = false;
        state.singleTicketSunlight = action.payload;
        state.isSuccess = true;
      }
    );
    builder.addCase(
      getTicketsDetailsSunlight.rejected,
      (state: ITickets, action: PayloadAction<any>) => {
        state.isLodaing = false;
        state.isError = true;
        state.message = action.payload;
      }
    );
  },
});

//export the reset action from reducer
export const { reset } = TicketSlice.actions;
//export the reducer to addd in store
export default TicketSlice.reducer;
