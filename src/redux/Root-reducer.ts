import { combineReducers } from "redux";
import { userSlice } from "./user/User-Slice";
import { cartReducer } from "./cart/Cart-reducer";

export const rootReducer = combineReducers({
  userReducer: userSlice.reducer,
  cartReducer,
});

//croando tipagem
export type RootReducer = ReturnType<typeof rootReducer>;
