import { combineReducers, configureStore } from "@reduxjs/toolkit"
import filtersReducer from "./slices/filterTariffSlices"
import cartReducer from "./slices/chargingCartSlices"

export default configureStore({
  reducer: combineReducers({
    ourData: combineReducers({
      filters: filtersReducer,
      cart: cartReducer
    })
  })
})