import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";
import { ThemeProvider } from "./context/ThemeContext.jsx";
import { SidebarProvider } from "./context/SidebarContext.jsx";
import { Provider as ReduxProvider } from "react-redux";
import store from "./store/store.js";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <ThemeProvider>
      <SidebarProvider>
        <ReduxProvider store={store}>
          <App />
        </ReduxProvider>
      </SidebarProvider>
    </ThemeProvider>
  </React.StrictMode>
);
