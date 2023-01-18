import { Card, Grid } from "@mui/material";
import { StarWarsProviderProps } from "../interfaces/swApi-interfaces";

const GridCell: React.FC<StarWarsProviderProps> = ({ children }) => {
  return (
    <Grid item xs={12} sm={6} md={3}>
      <Card sx={{ backgroundColor: "transparent", border: "1px solid rgb(75, 213, 238)" }}>
        {children}
      </Card>
    </Grid>
  );
};

export default GridCell;
