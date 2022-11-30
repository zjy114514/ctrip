import { configureStore, combineReducers } from '@reduxjs/toolkit'
import { productCollectionsSlice } from './productCollections/slice'
import { productDetailSlice } from './productDetail/slice'
import { actionLog } from './middlewares/actionLog'

const reducer = combineReducers({
  // 产品分类
  productCollections: productCollectionsSlice.reducer,
  // 旅游路线
  productDetail: productDetailSlice.reducer,
})
const store = configureStore({
  reducer,
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(actionLog),
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch

export default store
