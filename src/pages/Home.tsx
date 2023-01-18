import { useStarWarsContext } from "../components/context/StarWarsProvider";
import FilmList from "../components/FilmList";
import { Container, Typography } from "@mui/material";
import TabsList from "../components/TabsList";

const Home: React.FC = () => {
  const { films, isLoading, selectedFilm } = useStarWarsContext();

  if (isLoading)
    return (
      <Container
        sx={{ height: "100vh", display: "flex", justifyContent: "center", alignItems: "center" }}
        maxWidth="lg"
      >
        <Typography variant="h1">Loading Star Wars Universe...</Typography>
      </Container>
    );

  return (
    <Container maxWidth="lg">
      {!isLoading && films.length > 0 && <FilmList />}

      {selectedFilm && (
        <Container maxWidth="lg">
          <TabsList />
        </Container>
      )}
    </Container>
  );
};

export default Home;
