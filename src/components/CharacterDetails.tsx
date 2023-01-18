import { Box, Container, Typography } from "@mui/material";
import { useStarWarsContext } from "./context/StarWarsProvider";
import { getIdFromUrl } from "../helpers/helpers";
import { IPeople } from "../interfaces/swApi-interfaces";
import DetailsCard from "../UI/DetailsCard";

interface CharacterDetailsInterface {
  character: IPeople | undefined;
  onClose: () => void;
}

const CharacterDetails: React.FC<CharacterDetailsInterface> = ({ character, onClose }) => {
  const { planets, species } = useStarWarsContext();
  const homeworld = planets!.find((planet) => {
    if (character!.homeworld) {
      const planetId = getIdFromUrl(planet.url);
      const specieWorld = getIdFromUrl(character!.homeworld.toString());
      return planetId === specieWorld;
    }
    return undefined;
  });

  const specie = species!.find((spec) => {
    if (character!.species) {
      const planetId = getIdFromUrl(spec.url);
      const specieWorld = getIdFromUrl(character!.species[0].toString());
      return planetId === specieWorld;
    }
    return undefined;
  });

  if (!character) {
    return <div></div>;
  }

  return (
    <DetailsCard name={character.name} component={"characters"} onClose={onClose}>
      <Typography variant="h1">{character.name}</Typography>
      <Box py={2}>
        <Container maxWidth="sm">
          <Typography variant="body2">Specie</Typography>
          <Typography variant="body2">{specie!.name}</Typography>
        </Container>

        <Container maxWidth="sm">
          <Typography variant="body2">Home World</Typography>
          <Typography variant="body2">{homeworld ? homeworld.name : "None"}</Typography>
        </Container>
        <Container maxWidth="sm">
          <Typography variant="body2">Gender</Typography>
          <Typography variant="body2">
            {character?.gender === "none" ? "Robot" : character?.gender}
          </Typography>
        </Container>

        <Container maxWidth="sm">
          <Typography variant="body2">Born In</Typography>
          <Typography variant="body2">{character?.birth_year}</Typography>
        </Container>

        <Container maxWidth="sm">
          <Typography variant="body2">Height</Typography>
          <Typography variant="body2">{character?.height} cm</Typography>
        </Container>

        <Container maxWidth="sm">
          <Typography variant="body2">Mass</Typography>
          <Typography variant="body2">{character?.mass} kg</Typography>
        </Container>

        <Container maxWidth="sm">
          <Typography variant="body2">Hair Colort</Typography>
          <Typography variant="body2">{character?.hair_color}</Typography>
        </Container>
        <Container maxWidth="sm">
          <Typography variant="body2">Eye Color</Typography>
          <Typography variant="body2">{character?.eye_color}</Typography>
        </Container>
        <Container maxWidth="sm">
          <Typography variant="body2">Skin Colort</Typography>
          <Typography variant="body2">{character?.skin_color}</Typography>
        </Container>
      </Box>
    </DetailsCard>
  );
};
export default CharacterDetails;
