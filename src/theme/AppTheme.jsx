import { purpleTheme } from "./purpleTheme";
import { CssBaseline, ThemeProvider } from "@mui/material";

export const AppTheme = ({ children }) => {
  return (
    <ThemeProvider theme={purpleTheme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
};
