import { configureStore } from "@reduxjs/toolkit"
import { setupListeners } from "@reduxjs/toolkit/query"
import {
  FLUSH,
  PAUSE,
  PERSIST,
  persistReducer,
  persistStore,
  PURGE,
  REGISTER,
  REHYDRATE
} from "redux-persist"
import storage from "redux-persist/lib/storage"
import { rootReducer } from "./rootReducer"

const persistConfig = {
  key: "root",
  storage,
  whitelist: []
}

export const makeStore = () => {
  const store = configureStore({
    // 👇 ATTENTION: persistReducer broke infering RootState
    reducer: persistReducer(persistConfig, rootReducer) as unknown as typeof rootReducer,
    middleware: getDefaultMiddleware =>
      getDefaultMiddleware({
        serializableCheck: {
          ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
        }
      }).concat()
  })

  setupListeners(store.dispatch)

  return store
}

export const appStore = makeStore()
export const persistedStore = persistStore(appStore)

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof appStore.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof appStore.dispatch
