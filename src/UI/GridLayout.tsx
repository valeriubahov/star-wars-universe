import { Paper, ThemeProvider, Grid } from "@mui/material";
import { StarWarsProviderProps } from "../interfaces/swApi-interfaces";
import { baseTheme } from "../theme";

const GridLayout: React.FC<StarWarsProviderProps> = ({ children }) => {
  return (
    <ThemeProvider theme={baseTheme}>
      <Paper variant="outlined">
        <Grid container spacing={2}>
          {children}
        </Grid>
      </Paper>
    </ThemeProvider>
  );
};

export default GridLayout;