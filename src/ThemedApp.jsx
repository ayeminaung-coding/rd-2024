import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import { createContext, useContext, useState } from "react";
import App from "./App";

 const AppContext = createContext();
const theme = createTheme({
  palette: {
    mode: "dark",
  },
});


export default function ThemedApp() {
  const [showForm, setShowForm] = useState(false);

  return (
    <ThemeProvider theme={theme}>
      <AppContext.Provider value={{ showForm, setShowForm }}>
        <App />
        <CssBaseline />
      </AppContext.Provider>
    </ThemeProvider>
  );
}

export function useApp () {
	return useContext(AppContext);
   }
