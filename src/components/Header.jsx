import { AppBar, Box, IconButton, Toolbar, Typography } from "@mui/material";
import { useApp } from "../ThemedApp";
import {
  Menu as MenuIcon,
  Add as AddIcon,
  LightMode as LightModeIcon,
  DarkMode as DarkModeIcon,
} from "@mui/icons-material";

export default function Header() {
  const {
    showForm,
    setShowForm,
    mode,
    setMode,
    showDrawer,
    setShowDrawer,
    globalMsg,
    setGlobalMsg,
    auth,
    setAuth,
  } = useApp();
  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton color="inherit" edge="start" onClick={() => setShowDrawer(true)}>
          <MenuIcon />
        </IconButton>
        <Typography sx={{ flexGrow: 1, ml: 2 }}>Yaycha</Typography>
        <Box>
          <IconButton color="inherit" onClick={() => setShowForm(!showForm)}>
            <AddIcon />
          </IconButton>
          {mode === "dark" ? (
            <IconButton
              color="inherit"
              edge="end"
              onClick={() => setMode("light")}
            >
              <LightModeIcon />
            </IconButton>
          ) : (
            <IconButton
              color="inherit"
              edge="end"
              onClick={() => setMode("dark")}
            >
              <DarkModeIcon />
            </IconButton>
          )}
        </Box>
      </Toolbar>
    </AppBar>
  );
}
