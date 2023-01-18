import { Paper, Typography, Container } from "@mui/material";
import { useStarWarsContext } from "./context/StarWarsProvider";

const AboutFilm: React.FC = () => {
  const { selectedFilm } = useStarWarsContext();
  return (
    <Paper variant="outlined">
      {selectedFilm?.episode_id.toString() === "1" && (
        <Typography variant="h1" color={"rgb(75, 213, 238)"}>
          A long time ago, in a galaxy far, far away....
        </Typography>
      )}
      <Typography variant="h1" color={"rgb(75, 213, 238)"}>
        Episode {selectedFilm?.episode_id}
      </Typography>
      <Typography variant="h1">{selectedFilm?.title}</Typography>

      <Typography variant="body1" sx={{ whiteSpace: "pre-line", textAlign: "center" }}>
        {selectedFilm!.opening_crawl}
      </Typography>

      <Container
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          py: "1rem",
        }}
      >
        <Typography variant="body2" color={"rgb(75, 213, 238)"}>
          Release Date
        </Typography>
        <Typography variant="body2">{selectedFilm!.release_date.toString()}</Typography>
      </Container>

      <Container
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Container
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Typography variant="body2" color={"rgb(75, 213, 238)"}>
            Directed By
          </Typography>
          <Typography variant="body2">{selectedFilm!.director}</Typography>
        </Container>
        <Container
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            padding: 0,
          }}
        >
          <Typography variant="body2" color={"rgb(75, 213, 238)"}>
            Produced By
          </Typography>
          <Typography variant="body2" sx={{ whiteSpace: "pre-wrap" }}>
            {selectedFilm!.producer}
          </Typography>
        </Container>
      </Container>
    </Paper>
  );
};

export default AboutFilm;
