import { Card, CardActionArea, CardContent, CardHeader, Box } from "@mui/material";
import { IFilm } from "../interfaces/swApi-interfaces";

interface Film {
  film: IFilm;
}

const FilmCard: React.FC<Film> = ({ film }) => {
  return (
    <Card>
      <CardActionArea sx={{ backgroundColor: "#000000" }}>
        <CardHeader sx={{ p: 0 }} />
        <CardContent
          sx={{
            display: "flex",
            justifyContent: "center",
            p: 0,
          }}
        >
          <Box
            component="img"
            alt={`Episode ${film.episode_id} - ${film.title}`}
            src={film.image}
            sx={{
              pointerEvents: "none",
              height: "280px",
            }}
          />
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default FilmCard;
