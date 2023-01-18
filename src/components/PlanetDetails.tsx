import { Box, Container, Typography } from "@mui/material";
import { IPlanet } from "../interfaces/swApi-interfaces";
import DetailsCard from "../UI/DetailsCard";

interface PlanetDetailsInterface {
  planet: IPlanet | undefined;
  onClose: () => void;
}

const PlanetDetails: React.FC<PlanetDetailsInterface> = ({ planet, onClose }) => {
  if (!planet) {
    return <div></div>;
  }

  return (
    <DetailsCard name={planet.name} component={"planets"} onClose={onClose}>
      <Typography variant="h1">{planet.name}</Typography>

      <Box py={2}>
        <Container maxWidth="sm">
          <Typography variant="body2">Diameter</Typography>
          <Typography variant="body2">{planet.diameter}</Typography>
        </Container>
        <Container maxWidth="sm">
          <Typography variant="body2">Gravity</Typography>
          <Typography variant="body2">{planet.gravity}</Typography>
        </Container>

        <Container maxWidth="sm">
          <Typography variant="body2">Rotation Period</Typography>
          <Typography variant="body2">
            {planet.rotation_period} {planet.rotation_period === "unknown" ? "" : "hours"}
          </Typography>
        </Container>

        <Container maxWidth="sm">
          <Typography variant="body2">Orbital Period</Typography>
          <Typography variant="body2">
            {planet.orbital_period} {planet.orbital_period === "unknown" ? "" : "days"}
          </Typography>
        </Container>

        <Container maxWidth="sm">
          <Typography variant="body2">Population</Typography>
          <Typography variant="body2">{planet.population}</Typography>
        </Container>

        <Container maxWidth="sm">
          <Typography variant="body2">Surface Water</Typography>
          <Typography variant="body2">
            {planet.surface_water}
            {planet.surface_water === "unknown" ? "" : "%"}
          </Typography>
        </Container>

        <Container maxWidth="sm">
          <Typography variant="body2">Terrain Type</Typography>
          <Typography variant="body2">{planet.terrain}</Typography>
        </Container>
      </Box>
    </DetailsCard>
  );
};
export default PlanetDetails;
