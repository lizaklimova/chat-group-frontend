import { createRoot } from "react-dom/client"
import { Provider as ReduxProvider } from "react-redux"
import { StrictMode } from "react"
import { RouterProvider } from "react-router-dom"
import { PersistGate } from "redux-persist/integration/react"
import { appStore, persistedStore } from "./appStore"
import { appRouter } from "./appRouter"
import { MantineProvider } from "@mantine/core"
import "./styles/index.css"
import { theme } from "./theme"

const root = document.getElementById("root")

createRoot(root!).render(
  <StrictMode>
    <MantineProvider theme={theme}>
      <ReduxProvider store={appStore}>
        <PersistGate loading={null} persistor={persistedStore}>
          <RouterProvider router={appRouter()} />
        </PersistGate>
      </ReduxProvider>
    </MantineProvider>
  </StrictMode>
)
