import { combineReducers } from "redux";
import { userReducer } from "./user/Reducer";
import { cartReducer } from "./cart/Cart-reducer";

export const rootReducer = combineReducers({
  userReducer,
  cartReducer,
});

//croando tipagem
export type RootReducer = ReturnType<typeof rootReducer>;
