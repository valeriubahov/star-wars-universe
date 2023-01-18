import { useStarWarsContext } from "./context/StarWarsProvider";
import FilmCard from "./FilmCard";

import { IFilm } from "../interfaces/swApi-interfaces";
import { Box } from "@mui/material";
import CenterCarousel from "../UI/CenterCarousel";

const FilmList: React.FC = () => {
  const { films, handleSelectedFilm } = useStarWarsContext();

  const handleNext = (next: number | undefined) => {
    if (next !== undefined) {
      handleSelectedFilm(films[next] as IFilm);
    }
  };

  const handlePrev = (next: number | undefined) => {
    if (next !== undefined) {
      handleSelectedFilm(films[next]);
    }
  };

  return (
    <Box
      component="div"
      sx={{
        display: "flex",
        justifyContent: "center",
      }}
    >
      <CenterCarousel nextItem={handleNext} prevItem={handlePrev}>
        {films.map((film) => (
          <FilmCard key={film.episode_id} film={film} />
        ))}
      </CenterCarousel>
    </Box>
  );
};

export default FilmList;
