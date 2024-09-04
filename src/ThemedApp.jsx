import { CssBaseline, Snackbar, ThemeProvider, createTheme } from "@mui/material";
import { createContext, useContext, useMemo, useState } from "react";
import App from "./App";
import { deepPurple, grey } from "@mui/material/colors";
import AppDrawer from "./components/AppDrawer";
import Template from "./Template";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Comments from "./pages/Comments";
import Profile from "./pages/Profile";
import Likes from "./pages/Likes";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const AppContext = createContext();


const router = createBrowserRouter([
  {
    path: "/",
    element: <Template />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/comments/:id",
        element: <Comments />,
      },
      {
        path: "/profile/:id",
        element: <Profile />,
      },
      {
        path: "/likes/:id",
        element: <Likes />,
      },
    ],
  },
])
export default function ThemedApp() {
  const [showForm, setShowForm] = useState(false);
  const [mode, setMode] = useState("dark");
  const [globalMsg, setGlobalMsg] = useState(null);
  const [auth, setAuth] = useState(null);
  const [showDrawer, setShowDrawer] = useState(false);


  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode,
          primary: deepPurple,
          banner: mode === "dark" ? grey[800] : grey[200],
          text: {
            fade: grey[500],
          },
        },
      }),
    [mode]
  );

  return (
    <ThemeProvider theme={theme}>
      <AppContext.Provider
        value={{
          showForm,
          setShowForm,
          mode,
          setMode,
          globalMsg,
          setGlobalMsg,
          auth,
          setAuth,
		  showDrawer,
		  setShowDrawer,
        }}
      >
        <App />
        <AppDrawer />
        <Snackbar
          anchorOrigin={{
            horizontal: "center",
            vertical: "bottom",
          }}
          open={Boolean(globalMsg)}
          autoHideDuration={6000}
          onClose={() => setGlobalMsg(null)}
          message={globalMsg}
        />
        <RouterProvider router={router} />
        <CssBaseline />
      </AppContext.Provider>
    </ThemeProvider>
  );
}

export function useApp() {
  return useContext(AppContext);
}
