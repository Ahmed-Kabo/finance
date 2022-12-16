import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import { chatSlice } from "./RTK/ChatsSlice";
import authReducer from "./Slice/auth/AuthSlice";
import ContractReducer from "./Slice/Contarct/ContractSlice";
import PmReducer from "./Slice/PM/PmSlice";
import siteSurvayReducer from "./Slice/siteSurvay/SiteSurvaySlice";
import SolutionsReducer from "./Slice/Solutions/SolutionsSlice";
import StatusReducer from "./Slice/Status/StatusSlice";
import TicketReducer from "./Slice/Tickets/TicketsSlics";
import utilityBillReducer from "./Slice/UtitityBill/UtilityBillSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    siteSUrvay: siteSurvayReducer,
    utilityBill: utilityBillReducer,
    solution: SolutionsReducer,
    contract: ContractReducer,
    pm: PmReducer,
    statusFinance: StatusReducer,
    tickets: TicketReducer,
    [chatSlice.reducerPath]: chatSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(chatSlice.middleware),
});
setupListeners(store.dispatch);
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
