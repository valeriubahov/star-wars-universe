import { Box, Container, Typography } from "@mui/material";
import { useStarWarsContext } from "./context/StarWarsProvider";
import { getIdFromUrl } from "../helpers/helpers";
import { ISpecie } from "../interfaces/swApi-interfaces";
import DetailsCard from "../UI/DetailsCard";

interface SpecieDetailsInterface {
  specie: ISpecie | undefined;
  onClose: () => void;
}

const SpecieDetails: React.FC<SpecieDetailsInterface> = ({ specie, onClose }) => {
  const { planets } = useStarWarsContext();
  const homeworld = planets!.find((planet) => {
    if (specie!.homeworld) {
      const planetId = getIdFromUrl(planet.url);
      const specieWorld = getIdFromUrl(specie!.homeworld.toString());
      return planetId === specieWorld;
    }
    return undefined;
  });

  if (!specie) {
    return <div></div>;
  }

  return (
    <DetailsCard name={specie.name} onClose={onClose}>
      <Box py={2}>
        <Container maxWidth="sm">
          <Typography variant="body2">Homeworld</Typography>
          <Typography variant="body2">{homeworld ? homeworld.name : "None"}</Typography>
        </Container>

        <Container maxWidth="sm">
          <Typography variant="body2">Designation</Typography>
          <Typography variant="body2">{specie.designation}</Typography>
        </Container>

        <Container maxWidth="sm">
          <Typography variant="body2">Classification</Typography>
          <Typography variant="body2">{specie.classification}</Typography>
        </Container>

        <Container maxWidth="sm">
          <Typography variant="body2">Language</Typography>
          <Typography variant="body2">{specie.language}</Typography>
        </Container>

        <Container maxWidth="sm">
          <Typography variant="body2">Average Height</Typography>
          <Typography variant="body2">{specie.average_height}cm</Typography>
        </Container>

        <Container maxWidth="sm">
          <Typography variant="body2">Average Lifespan</Typography>
          <Typography variant="body2">{specie.average_lifespan} years</Typography>
        </Container>

        <Container maxWidth="sm">
          <Typography variant="body2">Eye Color</Typography>
          <Typography variant="body2">{specie.eye_colors}</Typography>
        </Container>

        <Container maxWidth="sm">
          <Typography variant="body2">Hair Color</Typography>
          <Typography variant="body2">{specie.hair_colors}</Typography>
        </Container>

        <Container maxWidth="sm">
          <Typography variant="body2">Skin Color</Typography>
          <Typography variant="body2">{specie.skin_colors}</Typography>
        </Container>
      </Box>
    </DetailsCard>
  );
};
export default SpecieDetails;
